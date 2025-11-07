'use client';
import { TechCard } from '@/shared/ui/TechCard';

import { STACK_SECTION_CARDS } from '../lib/constants/StackSection';

import { StyledStackSection } from './StyledStackSection';

export const StackSection = () => {
  return (
    <StyledStackSection as="section" flexDirection="column" gap="40px">
      <h2>Tech Stack</h2>
      <div>
        {STACK_SECTION_CARDS.map((card) => (
          <TechCard {...card} />
        ))}
      </div>
    </StyledStackSection>
  );
};
