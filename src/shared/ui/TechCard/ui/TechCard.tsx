import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container, CONTAINER_STYLE_NAMES } from '@ui/Container';

import { Link, LINK_STYLE_NAMES } from '../../Link';
import type { ITechCardProps } from '../model/interfaces';

import { StyledTechCard } from './StyledTechCard';

export const TechCard = ({
  name,
  desc,
  courseLink,
  difficulty,
}: ITechCardProps) => {
  return (
    <StyledTechCard difficulty={difficulty}>
      <div>
        <FontAwesomeIcon icon={faBookOpen} size="9x" />
        <h1>{name}</h1>
      </div>
      <Container
        alignItems="flex-start"
        gap="10px"
        justifyContent="flex-start"
        styleType={CONTAINER_STYLE_NAMES.FLEX_COLUMN}
      >
        <Container
          justifyContent="space-between"
          styleType={CONTAINER_STYLE_NAMES.FLEX_ROW}
        >
          <h4>{name}</h4>
          <cite>{difficulty}</cite>
        </Container>
        <p>{desc}</p>
      </Container>
      <Link
        isActive
        href={courseLink}
        styleType={LINK_STYLE_NAMES.FILLED}
      >
        Подробнее
      </Link>
    </StyledTechCard>
  );
};
