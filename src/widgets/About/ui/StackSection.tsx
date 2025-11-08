'use client';
import type { ITechCardProps} from '@/shared/ui/TechCard';
import { TechCard } from '@/shared/ui/TechCard';

import { StyledStackSection } from './StyledStackSection';

interface IProps {
  title: string;
  cards: ITechCardProps[];
}

export const StackSection = ({ title, cards }: IProps) => {
  return (
    <StyledStackSection as="section" flexDirection="column" gap="40px">
      <h2>{title}</h2>
      <div>
        {cards.map((card) => (
          <TechCard key={card.name} {...card} />
        ))}
      </div>
    </StyledStackSection>
  );
};
