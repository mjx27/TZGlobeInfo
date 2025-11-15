'use client';

import { useState, useEffect } from 'react';

import type { ICountryBuilder } from '@/entities/Country';
import { useCountries } from '@/entities/Country';
import { CountryCard } from '@/entities/Country/ui/CountryCard';
import { Container, CONTAINER_STYLE_NAMES } from '@/shared/ui/Container';
import { Error } from '@/shared/ui/Error';
import { Loader } from '@/shared/ui/Loader';

import { CARDS_PER_PAGE } from '../lib/constants';

export const CountriesWithLanguages: React.FC = () => {
  const [activePage, setActivePage] = useState(0);

  const {
    data: countries,
    loading,
    error,
  } = useCountries({
    code: true,
    name: true,
    capital: true,
    languages: (lang) => lang.withCode().withName(),
  });

  // Всегда вызываем хук, чтобы порядок не менялся
  const totalPages = countries
    ? Math.max(1, Math.ceil(countries.length / CARDS_PER_PAGE))
    : 0;

  // Следим, чтобы не выйти за границы при изменении данных
  useEffect(() => {
    if (!countries) {
      return;
    }
    const lastPage = Math.max(0, totalPages - 1);
    if (activePage > lastPage) {
      setActivePage(lastPage);
    }
  }, [countries, totalPages, activePage]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error errorMsg={error} />;
  }

  const start = activePage * CARDS_PER_PAGE;
  const end = start + CARDS_PER_PAGE;
  const pageItems = countries?.slice(start, end) ?? [];

  return (
    <Container
      as="section"
      gap="20px"
      justifyContent="space-between"
      styleType={CONTAINER_STYLE_NAMES.FLEX_ROW}
      width="90%"
    >
      {pageItems.map((country: ICountryBuilder) => (
        <CountryCard {...country} key={country.code ?? country.name} />
      ))}

      <div
        style={{
          display: 'flex',
          gap: '10px',
          marginTop: '20px',
          width: '100%',
        }}
      >
        <button
          disabled={activePage === 0}
          type="button"
          onClick={() => setActivePage((p) => Math.max(0, p - 1))}
        >
          Prev
        </button>

        <span>
          Page {activePage + 1} of {totalPages}
        </span>

        <button
          disabled={activePage + 1 >= totalPages}
          type="button"
          onClick={() => setActivePage((p) => Math.min(totalPages - 1, p + 1))}
        >
          Next
        </button>
      </div>
    </Container>
  );
};
