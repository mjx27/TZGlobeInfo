'use client';
import { CONTAINER_STYLE_NAMES } from '@/shared/ui/Container/lib/constants/names';
import type { ITechCardProps } from '@/shared/ui/TechCard';
import { TechCard } from '@/shared/ui/TechCard';

import { StyledStackSection } from './StyledStackSection';

interface IProps {
  title: string;
  cards: ITechCardProps[];
}

export const StackSection = ({ title, cards }: IProps) => {
  return (
    <StyledStackSection
      as="section"
      gap="40px"
      styleType={CONTAINER_STYLE_NAMES.FLEX_COLUMN}
    >
      <h2>{title}</h2>
      <div>
        {cards.map((card) => (
          <TechCard key={card.name} {...card} />
        ))}
      </div>
    </StyledStackSection>
  );
};
