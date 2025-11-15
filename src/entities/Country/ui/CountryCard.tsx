import { Link, LINK_STYLE_NAMES } from '@/shared/ui/Link';

import type { ICountryBuilder } from '../model/interfaces';

import { StyledCountryCard } from './StyledCountryCard';

export const CountryCard = ({
  name,
  code,
  languages,
  capital,
}: ICountryBuilder) => {
  return (
    <StyledCountryCard>
      <img />
      <div>
        <h4>
          {name} <br /> <span>({capital ?? 'No capital'})</span>
        </h4>
        <cite>{code}</cite>
      </div>
      <p>
        <span>Lang: </span>
        {languages?.[0]?.name ?? 'No languages'}
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
