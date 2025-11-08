import { Link, LINK_STYLE_NAMES } from '../../Link';
import type { ITechCardProps } from '../model/interfaces';

import { StyledTechCard } from './StyledTechCard';

export const TechCard = ({ name, desc, courseLink }: ITechCardProps) => {
  return (
    <StyledTechCard as="article" flexDirection="column" padding="20px">
      <h4>{name}</h4>
      <p>{desc}</p>
      <Link
        href={courseLink}
        isActive={false}
        styleType={LINK_STYLE_NAMES.LINED}
      >
        Курс
      </Link>
    </StyledTechCard>
  );
};
