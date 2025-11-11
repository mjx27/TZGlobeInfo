export type GraphQLError = {
  message: string;
  locations?: { line: number; column: number }[];
  path?: Array<string | number>;
  extensions?: Record<string, unknown>;
};

export type GraphQLResponseEnvelope<TData> = {
  data?: TData;
  errors?: GraphQLError[];
};

export class GraphQLClient {
  private url: string;
  private headers: HeadersInit = { 'Content-Type': 'application/json' };
  private queryString: string | null = null;
  private operationName: string | null = null;
  private variables: Record<string, unknown> | null = null;
  private fetchOptions: Omit<RequestInit, 'body' | 'method' | 'headers'> = {};

  constructor(url: string = 'https://countries.trevorblades.com/') {
    this.url = url;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  setHeader(key: string, value: string): this {
    if (this.headers instanceof Headers) {
      this.headers.set(key, value);
    } else if (Array.isArray(this.headers)) {
      const obj = Object.fromEntries(this.headers);
      obj[key] = value;
      this.headers = obj;
    } else {
      this.headers = {
        ...(this.headers),
        [key]: value,
      };
    }
    return this;
  }

  setHeaders(headers: HeadersInit): this {
    if (this.headers instanceof Headers) {
      const merged = new Headers(this.headers);
      const incoming = new Headers(headers);
      incoming.forEach((v, k) => merged.set(k, v));
      this.headers = merged;
    } else {
      const base = (this.headers as Record<string, string>) ?? {};
      const incomingObj =
        headers instanceof Headers
          ? Object.fromEntries(headers.entries())
          : Array.isArray(headers)
            ? Object.fromEntries(headers)
            : (headers);
      this.headers = { ...base, ...incomingObj };
    }
    return this;
  }

  setQuery(query: string): this {
    this.queryString = query;
    return this;
  }

  setOperationName(name: string | null): this {
    this.operationName = name;
    return this;
  }

  setVariables<T extends Record<string, unknown> | null>(vars: T): this {
    this.variables = vars;
    return this;
  }

  setFetchOptions(
    opts: Omit<RequestInit, 'body' | 'method' | 'headers'>
  ): this {
    this.fetchOptions = { ...this.fetchOptions, ...opts };
    return this;
  }

  async execute<
    TData,
    TVars extends Record<string, unknown> | null = null,
  >(): Promise<TData> {
    if (!this.queryString) {
      throw new Error(
        'GraphQL query is not set. Call setQuery(...) before execute().'
      );
    }

    const body: Record<string, unknown> = { query: this.queryString };
    if (this.variables) {body['variables'] = this.variables as TVars;}
    if (this.operationName) {body['operationName'] = this.operationName;}

    const res = await fetch(this.url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body),
      ...this.fetchOptions,
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(
        `Network error: ${res.status} ${res.statusText}. ${text}`
      );
    }

    const parsed: unknown = await res.json().catch((err) => {
      throw new Error(`Failed to parse JSON response: ${String(err)}`);
    });

    if (typeof parsed !== 'object' || parsed === null) {
      throw new Error('Invalid GraphQL response shape (not an object).');
    }

    const envelope = parsed as GraphQLResponseEnvelope<TData>;

    if (envelope.errors && envelope.errors.length > 0) {
      const joined = envelope.errors.map((e) => e.message).join('; ');
      const err = new Error(`GraphQL errors: ${joined}`);
      (err as { raw?: GraphQLError[] }).raw = envelope.errors;
      throw err;
    }

    if (envelope.data === undefined) {
      throw new Error('GraphQL response contains neither data nor errors.');
    }

    return envelope.data;
  }
}
