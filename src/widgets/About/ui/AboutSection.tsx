import bgImg from '@/../public/images/pages/about/background.jpg';
import { Container } from '@/shared/ui/Container';
import { Logo, LOGO_NAME } from '@/shared/ui/Logo';
import { Shadow } from '@/widgets/Shadow';

export const AboutSection = () => {
  return (
    <Container alignItems="center" as="section" height="500px">
      <Shadow
        imgData={{
          src: bgImg,
          alt: 'Section About Picture',
        }}
      >
        <Logo />
        <p>
          {LOGO_NAME} — техническое задание для одной из компаний. При выборе
          темы для проекта я вспомнил, что не так давно видел этот проект в
          качестве примера технического задания, однако источник оказался
          утерян. Основная цель задания заключалась в разработке веб-приложения
          с использованием современных технологий, включая GraphQL для
          эффективного взаимодействия с сервером и динамической обработки данных
        </p>
      </Shadow>
    </Container>
  );
};
