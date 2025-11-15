import { useState, useEffect, useMemo } from 'react';

import type { ICountryBuilder } from '@/entities/Country/model/interfaces';

import type { TCountryBuilderFields } from '../../model/types';
import type { CountryLanguageQueryBuilder } from '../services/CountryQueryBuilder';
import { CountryQueryBuilder } from '../services/CountryQueryBuilder';

export type UseCountriesOptions = {
  [K in TCountryBuilderFields]?: K extends 'languages'
    ? (lang: CountryLanguageQueryBuilder) => void
    : boolean;
};

export const useCountries = (options: UseCountriesOptions = {}) => {
  const [data, setData] = useState<ICountryBuilder[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const memoOptions = useMemo(() => options, [JSON.stringify(options)]);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      setError(null);

      try {
        const builder = new CountryQueryBuilder();

        // -----------------------------
        // 🔥 Корректная обработка опций
        // -----------------------------
        (
          Object.entries(memoOptions) as [
            keyof UseCountriesOptions,
            boolean | ((lang: CountryLanguageQueryBuilder) => void),
          ][]
        ).forEach(([key, value]) => {
          if (value === undefined) {
            return;
          }

          switch (key) {
            case 'code':
              if (value === true) {
                builder.withCode();
              }
              break;

            case 'name':
              if (value === true) {
                builder.withName();
              }
              break;

            case 'capital':
              if (value === true) {
                builder.withCapital();
              }
              break;

            case 'languages':
              builder.withLanguages(
                value as (lang: CountryLanguageQueryBuilder) => void
              );
              break;
          }
        });

        const query = builder.build();

        const response = await fetch('/api/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query }),
        });

        const json = await response.json();

        if (!json.data?.countries) {
          throw new Error(json.error ?? 'No data received');
        }

        setData(json.data.countries);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    void fetchCountries();
  }, [memoOptions, JSON.stringify(options)]);

  return { data, loading, error };
};
