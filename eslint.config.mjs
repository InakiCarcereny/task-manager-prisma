import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    plugins: ['unused-imports', 'react', 'react-hooks', 'jsx-a11y', 'import'],
    rules: {
      semi: 'error',
      quotes: ['error', 'single'],
      'prefer-arrow-callback': 'error',
      'unused-imports/no-unused-imports': 'error',

      '@next/next/no-img-element': 'error',
      '@next/next/no-sync-scripts': 'error',
      '@next/next/no-css-tags': 'error',
      '@next/next/no-title-in-document-head': 'error',
    },
  }),
];

export default eslintConfig;
