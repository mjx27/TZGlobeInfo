import type { ITechCardProps } from '@/shared/ui/TechCard';

export const STACK_SECTION_CARDS: ITechCardProps[] = [
  {
    name: 'Emotion',
    desc: `
        Emotion - это библиотека для CSS-in-JS, 
        которая позволяет писать стили для приложений на JavaScript непосредственно в коде компонентов.
        В отличии от Styled-components легковесная. Поддерживает серверный редеринг, для серверного рендеринга. 
        Тут лучше почитать документацию, она небольшая.
        `,
    courseLink: `
        https://emotion.sh/docs/introduction
        `,
  },
  {
    name: 'TypeScript',
    desc: `
        TypeScript - это строго типизированный надмножество JavaScript, которое добавляет статическую проверку типов на этапе разработки.
        Теперь без TS найти что-то максимально тяжело, без него никуда, вот курс. Предоставленных данных в курсе хватает для трудоустройства.
        `,
    courseLink: `
        https://www.youtube.com/watch?v=rPaRVcH9big&pp=ygULdHMg0LrRg9GA0YE%3D
        `,
  },
  {
    name: 'REACT',
    desc: `
        React - это JavaScript-библиотека для создания пользовательских интерфейсов.
        Курс в ссылке ниже старый, но затрагивает основные темы необходимые для старта, 
        простое видео почти на 4 часа. После него надо будет уже искать специфичные видео на каждую тему или читать документациюю.
        `,
    courseLink: `
        https://www.youtube.com/watch?v=GNrdg3PzpJQ&pp=ygUOcmVhY3Qg0LrRg9GA0YE%3D
        `,
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
  },
  {
    name: 'Линтеры',
    desc: `
        Линтеры - это статические анализаторы кода, 
        которые проверяют исходный код на соответствие заданным правилам и стандартам качества.
        Я задействовал некоторые из них: Eslint, Prettier, Stylelint. 
        Про каждый можно почитать доки отдельно, осталю ссылку на общий ресурс.
        `,
    courseLink: `
        https://www.youtube.com/watch?v=jwTwnI3hwig
        `,
  },
  {
    name: 'Husky',
    desc: `
        Husky — это инструмент, который позволяет легко работать с Git-хуками в JavaScript-проектах.
        Он позволяет запускать определенные скрипты (например, линтинг, тесты, проверки) автоматически при выполнении Git-операций. 
        Хоть и можно навесить скрипты на сами хуки, его продолжают использовать. Ссылка на видео небольшое.
        `,
    courseLink: `
        https://www.youtube.com/watch?v=ClbYNe3xKNM
        `,
  },
  {
    name: 'Plop',
    desc: `
        Plop — это генератор кода-«маленький помощник», который автоматизирует создание шаблонных файлов и структур в проекте.
        Сниппеты хорошо, но еще лучше, когда можно сгенерировать структуру папок и файлов внутри одной командой, для этого есть Plop, почитайте доку.
        `,
    courseLink: `
        https://plopjs.com/documentation/
        `,
  },
];
