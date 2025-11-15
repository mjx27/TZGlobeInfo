import { Container, CONTAINER_STYLE_NAMES } from '@/shared/ui/Container';
import { CountriesWithLanguages } from '@/widgets/Home/ui/CountriesWithLanguages';

export default function Home() {
  return (
    <Container
      as="main"
      gap="40px"
      styleType={CONTAINER_STYLE_NAMES.FLEX_COLUMN}
    >
      <CountriesWithLanguages />
    </Container>
  );
}
