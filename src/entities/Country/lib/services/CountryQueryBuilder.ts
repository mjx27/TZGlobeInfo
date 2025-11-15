import { GraphQLQueryBuilder } from '@/shared/lib/services/GraphQL/GraphQLQueryBuilder';

import type {
  TCountryBuilderFields,
  TLanguagesBuilderFields,
} from '../../model/types';
import { COUNTRY_BUILDER_FIELDS, LANGUAGES_BUILDER_FIELDS } from '../constants';

export class CountryQueryBuilder extends GraphQLQueryBuilder<TCountryBuilderFields> {
  constructor() {
    super('countries');
  }

  withCode(): this {
    return this.withField(COUNTRY_BUILDER_FIELDS.CODE);
  }

  withName(): this {
    return this.withField(COUNTRY_BUILDER_FIELDS.NAME);
  }

  withCapital(): this {
    return this.withField(COUNTRY_BUILDER_FIELDS.CAPITAL);
  }

  withLanguages(fn: (b: CountryLanguageQueryBuilder) => void): this {
    const sub = new CountryLanguageQueryBuilder();
    fn(sub);
    this.withSubfield(COUNTRY_BUILDER_FIELDS.LANGUAGES, sub);
    return this;
  }
}

export class CountryLanguageQueryBuilder extends GraphQLQueryBuilder<TLanguagesBuilderFields> {
  constructor(root = COUNTRY_BUILDER_FIELDS.LANGUAGES) {
    super(root);
  }

  withCode(): this {
    return this.withField(LANGUAGES_BUILDER_FIELDS.CODE);
  }

  withName(): this {
    return this.withField(LANGUAGES_BUILDER_FIELDS.NAME);
  }

  withCountries(fn: (b: CountryQueryBuilder) => void): this {
    const sub = new CountryQueryBuilder();
    fn(sub);
    this.withSubfield(LANGUAGES_BUILDER_FIELDS.COUNTRIES, sub);
    return this;
  }
}
