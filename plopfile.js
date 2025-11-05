export default function (plop) {
  plop.setGenerator('component', {
    description: 'Create a component at FSD level',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Название компонента (PascalCase):',
        validate: (value) => {
          if (!value) {
            return 'Name required';
          }
          if (!/^[A-Z][a-zA-Z0-9]*$/.test(value)) {
            return 'Name in PascalCase';
          }
          return true;
        },
      },
      {
        type: 'list',
        name: 'layer',
        message: 'Layer:',
        choices: ['features', 'entities', 'widgets', 'shared/ui'],
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{layer}}/{{name}}/index.ts',
        template: "export { {{name}} } from './ui/{{name}}';\n",
      },
      {
        type: 'add',
        path: 'src/{{layer}}/{{name}}/ui/{{name}}.tsx',
        templateFile: 'plop-templates/component.hbs',
      },
      {
        type: 'add',
        path: 'src/{{layer}}/{{name}}/lib/.gitkeep',
        template: '',
      },
      {
        type: 'add',
        path: 'src/{{layer}}/{{name}}/model/.gitkeep',
        template: '',
      },
    ],
  });

  plop.setGenerator('module', {
    description: 'Add a component at any nested level',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (PascalCase):',
        validate: (value) => {
          if (!value) {
            return 'Name is required';
          }
          if (!/^[A-Z][a-zA-Z0-9]*$/.test(value)) {
            return 'Use PascalCase (e.g., MyComponent)';
          }
          return true;
        },
      },
      {
        type: 'input',
        name: 'path',
        message: 'Path from src (e.g., features/SomeFeature/components):',
        validate: (value) => {
          if (!value) {
            return 'Path is required';
          }
          if (value.startsWith('src/')) {
            return 'Do not include "src/" in the path';
          }
          return true;
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{path}}/{{name}}.tsx',
        templateFile: 'plop-templates/component.hbs',
      },
    ],
  });
}
