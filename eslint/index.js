import { defineConfig, globalIgnores } from 'eslint/config';

import baseConfig from './config/base.js';
import importsConfig from './config/imports.js';
import reactConfig from './config/react.js';
import typescriptConfig from './config/typescript.js';

export default defineConfig([
  baseConfig,
  typescriptConfig,
  importsConfig,
  reactConfig,
  globalIgnores([
    'eslint.config.js',
    '**/eslint/**/*',
    '**/config/**/*',
    '**/*.config.js',
    '**/*.config.ts',
    '**/*.js',
    '*.d.ts',
  ]),
  {
    rules: {
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      curly: ['error', 'all'],
    },
  },
]);
