import type { ITechCardProps } from '@/shared/ui/TechCard';

export const STACK_SECTION_CARDS_USED: ITechCardProps[] = [
  {
    name: 'Emotion',
    desc: `
        Emotion - это библиотека для CSS-in-JS, 
        которая позволяет писать стили для приложений на JavaScript непосредственно в коде компонентов.
        `,
    courseLink: `
        https://emotion.sh/docs/introduction
        `,
    difficulty: 'easy',
  },
  {
    name: 'TypeScript',
    desc: `
        TypeScript - это строго типизированный надмножество JavaScript. Предоставленных данных в курсе хватает для трудоустройства.
        `,
    courseLink: `
        https://www.youtube.com/watch?v=rPaRVcH9big&pp=ygULdHMg0LrRg9GA0YE%3D
        `,
    difficulty: 'medium',
  },
  {
    name: 'REACT',
    desc: `
        Курс в ссылке ниже старый, но затрагивает основные темы необходимые для старта.
        После него надо будет уже искать специфичные видео на каждую тему или читать документациюю.
        `,
    courseLink: `
        https://www.youtube.com/watch?v=GNrdg3PzpJQ&pp=ygUOcmVhY3Qg0LrRg9GA0YE%3D
        `,
    difficulty: 'hard',
  },
  {
    name: 'Next.js',
    desc: `
        Webpack - это сборщик модулей для JavaScript-приложени.
        Курс на 3 часа объяснящий основные положения сборщика webpack.
        `,
    courseLink: `
        https://www.youtube.com/watch?v=acAH2_YT6bs
        `,
    difficulty: 'medium',
  },
  {
    name: 'GraphQL',
    desc: `
        GraphQL - это язык запросов и среда выполнения для API, 
        Курс на несколько видео, покажет все достоинства работы с graphQL.
        `,
    courseLink: `
        https://www.youtube.com/watch?v=H7Jeu_qyzTA&list=PL0lO_mIqDDFVi7vm9ph1u0JXkwh2MQAh9
        `,
    difficulty: 'medium',
  },
  {
    name: 'Линтеры',
    desc: `
        Линтеры проверяют исходный код на соответствие заданным правилам и стандартам качества.
        Снизу ссылка на 3 основных.
        `,
    courseLink: `
        https://www.youtube.com/watch?v=jwTwnI3hwig
        `,
    difficulty: 'easy',
  },
  {
    name: 'Husky',
    desc: `
        Husky  позволяет запускать определенные скрипты при выполнении Git-операций. 
        Хоть и можно навесить скрипты на сами хуки, его продолжают использовать.
        `,
    courseLink: `
        https://www.youtube.com/watch?v=ClbYNe3xKNM
        `,
    difficulty: 'easy',
  },
  {
    name: 'Plop',
    desc: `
        Plop — это генератор кода, который автоматизирует создание шаблонных файлов и структур в проекте.
        Также стоит составить себе сниппетов.
        `,
    courseLink: `
        https://plopjs.com/documentation/
        `,
    difficulty: 'easy',
  },
];
