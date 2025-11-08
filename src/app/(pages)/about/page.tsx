import {
  STACK_SECTION_CARDS_USED,
  STACK_SECTION_CARDS_UNUSED,
} from '@/widgets/About/lib/constants/StackSection';
import { AboutSection } from '@/widgets/About/ui/AboutSection';
import { StackSection } from '@/widgets/About/ui/StackSection';

export default function About() {
  return (
    <main>
      <AboutSection />
      <StackSection cards={STACK_SECTION_CARDS_USED} title="Tech Stack" />
      <StackSection cards={STACK_SECTION_CARDS_UNUSED} title="Unused Stack" />
    </main>
  );
}
