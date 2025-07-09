import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'eslint:recommended',
      'prettier',
    ],
    ignorePatterns: [
      'node_modules/',
      'dist/',
      'build/',
      'coverage/',
      '.next/',
      'public/static/',
      'public/assets/',
      'src/assets/',
    ],
  }),
];

export default eslintConfig;
