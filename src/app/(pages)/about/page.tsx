import {
  AboutSection,
  STACK_SECTION_CARDS_UNUSED,
  STACK_SECTION_CARDS_USED,
} from '@/widgets/About';
import { SectionTitledCards } from '@/widgets/SectionTitledCards';

export default function About() {
  return (
    <main>
      <AboutSection />
      <SectionTitledCards cards={STACK_SECTION_CARDS_USED} title="Tech Stack" />
      <SectionTitledCards
        cards={STACK_SECTION_CARDS_UNUSED}
        title="Unused Stack"
      />
    </main>
  );
}
