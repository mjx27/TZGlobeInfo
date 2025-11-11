import type { TCountryBuilderFields, TLanguagesBuilderFields } from './types';
export type ICountryBuilder = {
  [K in TCountryBuilderFields]: K extends 'languages'
    ? ILanguageBuilder
    : string;
};

export type ILanguageBuilder = {
  [K in TLanguagesBuilderFields]: K extends 'countries'
    ? ICountryBuilder
    : string;
};
