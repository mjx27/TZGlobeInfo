import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import type { Dispatch } from 'react';

import { Container, CONTAINER_STYLE_NAMES } from '../../Container';
import { Icon } from '../../Icon';
import { ICON_STYLE_NAMES } from '../../Icon/lib/constants/names';

interface IProps {
  activePage: number;
  setActivePage: Dispatch<(p: number) => number>;
  totalPages: number;
}

export const Pagination = ({
  activePage,
  setActivePage,
  totalPages,
}: IProps) => {
  const handlePrev = () => {
    setActivePage((p) => Math.max(0, p - 1));
  };

  const handleNext = () => {
    setActivePage((p) => Math.min(totalPages - 1, p + 1));
  };
  return (
    <Container
      alignItems="center"
      gap="10px"
      justifyContent="center"
      styleType={CONTAINER_STYLE_NAMES.FLEX_ROW}
    >
      <Icon
        icon={faArrowLeft}
        iconSize="25px"
        styleType={ICON_STYLE_NAMES.COLORED}
        onClick={handlePrev}
      />

      <span>
        Page {activePage + 1} of {totalPages}
      </span>
      <Icon
        icon={faArrowRight}
        iconSize="25px"
        styleType={ICON_STYLE_NAMES.COLORED}
        onClick={handleNext}
      />
    </Container>
  );
};
