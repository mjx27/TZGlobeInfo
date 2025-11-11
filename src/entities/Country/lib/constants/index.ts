import { createIdentityObject } from '@/shared/lib/utils/createIdentityObject';

export const COUNTRY_BUILDER_FIELDS = createIdentityObject({
  CODE: 'code',
  NAME: 'name',
  CAPITAL: 'capital',
  LANGUAGES: 'languages',
} as const);

export const LANGUAGES_BUILDER_FIELDS = createIdentityObject({
  CODE: 'code',
  NAME: 'name',
  COUNTRIES: 'countries',
} as const);
