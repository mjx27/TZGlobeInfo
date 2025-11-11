export class GraphQLQueryBuilder<TFields extends string> {
  private root: string;
  private fields: string[] = [];
  private subfields: Record<string, GraphQLQueryBuilder<TFields>> = {};

  constructor(root: string) {
    this.root = root;
  }

  withField(field: TFields): this {
    this.fields.push(field);
    return this;
  }

  withSubfield(
    name: TFields,
    builderFn: (b: GraphQLQueryBuilder<TFields>) => void
  ): this {
    const sub = new GraphQLQueryBuilder(name);
    builderFn(sub);
    this.subfields[name] = sub;
    return this;
  }

  build(): string {
    const fields = [
      ...this.fields,
      ...Object.entries(this.subfields).map(
        ([name, sub]) => `${name} ${sub.build()}`
      ),
    ].join(' ');
    return `{ ${this.root} { ${fields} } }`;
  }
}
