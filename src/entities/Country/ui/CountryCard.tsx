import { useEffect, useRef, useState } from 'react';

import { Link, LINK_STYLE_NAMES } from '@/shared/ui/Link';

import { getFlag } from '../lib/utils/getFlag';
import type { ICountryBuilder } from '../model/interfaces';

import { StyledCountryCard } from './StyledCountryCard';

export const CountryCard = ({
  name,
  code,
  languages,
  capital,
}: ICountryBuilder) => {
  const flagSrc = getFlag(code);
  const primaryLanguage = languages?.[0]?.name ?? 'No languages';

  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <StyledCountryCard ref={cardRef}>
      <div>
        {isVisible ? (
          <img
            alt={`${name} flag`}
            decoding="async"
            loading="lazy"
            src={flagSrc}
          />
) : null}
        <h4>{name?.toUpperCase()}</h4>
      </div>

      <div>
        <h4>
          {name} <br /> <span>({capital ?? 'No capital'})</span>
        </h4>
        <cite>{code}</cite>
      </div>

      <p>
        <span>Lang: </span>
        {primaryLanguage}
      </p>

      <Link
        href={`/country/${name}`}
        isActive={false}
        styleType={LINK_STYLE_NAMES.FILLED}
      >
        Learn More
      </Link>
    </StyledCountryCard>
  );
};
