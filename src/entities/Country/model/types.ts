import type {
  COUNTRY_BUILDER_FIELDS,
  LANGUAGES_BUILDER_FIELDS,
} from '../lib/constants';

export type TCountryBuilderFields = Lowercase<
  keyof typeof COUNTRY_BUILDER_FIELDS
>;
export type TLanguagesBuilderFields = Lowercase<
  keyof typeof LANGUAGES_BUILDER_FIELDS
>;
