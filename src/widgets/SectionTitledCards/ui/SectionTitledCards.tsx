'use client';
import { CONTAINER_STYLE_NAMES } from '@/shared/ui/Container';
import { type ITechCardProps, TechCard } from '@/shared/ui/TechCard';

import { StyledSectionTitledCards } from './StyledSectionTitledCards';

interface IProps {
  title: string;
  cards: ITechCardProps[];
}

export const SectionTitledCards = ({ title, cards }: IProps) => {
  return (
    <StyledSectionTitledCards
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
    </StyledSectionTitledCards>
  );
};
