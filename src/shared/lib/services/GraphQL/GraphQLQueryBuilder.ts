type FieldArgs<T = Record<string, unknown>> = T;

export class GraphQLQueryBuilder<
  TFields extends string,
  TArgs extends Record<string, unknown> = Record<string, unknown>,
> {
  protected root: string;
  protected fields: TFields[] = [];
  protected subfields: Record<string, GraphQLQueryBuilder<TFields, TArgs>> = {};
  protected fieldArgs: Record<string, FieldArgs> = {};

  constructor(root: string) {
    this.root = root;
  }

  withField(field: TFields, args?: FieldArgs): this {
    if (args) {
      this.fieldArgs[field] = args;
    }
    this.fields.push(field);
    return this;
  }

  withSubfield<B extends GraphQLQueryBuilder<string, Record<string, unknown>>>(
    name: TFields,
    builder: B,
    args?: FieldArgs
  ): this {
    this.subfields[name] = builder as unknown as GraphQLQueryBuilder<
      TFields,
      TArgs
    >;
    if (args) {
      this.fieldArgs[name] = args;
    }
    return this;
  }

  protected formatRoot(): string {
    const args = this.fieldArgs[this.root];
    if (!args) {
      return this.root;
    }

    const formattedArgs = Object.entries(args)
      .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
      .join(', ');

    return `${this.root}(${formattedArgs})`;
  }

  build(isSubfield: boolean = false): string {
    const fields = [
      ...this.fields.map((f) => this.formatField(f)),
      ...Object.entries(this.subfields).map(
        ([name, sub]) => `${this.formatField(name)} ${sub.build(true)}`
      ),
    ].join(' ');

    if (isSubfield) {
      return `{ ${fields} }`;
    } else {
      return `{ ${this.formatRoot()} { ${fields} } }`;
    }
  }

  protected formatField(field: string): string {
    const args = this.fieldArgs[field];
    if (!args) {
      return field;
    }

    const formattedArgs = Object.entries(args)
      .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
      .join(', ');

    return `${field}(${formattedArgs})`;
  }
}
