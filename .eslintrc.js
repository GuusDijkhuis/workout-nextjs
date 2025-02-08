export default {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    projectService: {
      allowDefaultProject: ['*.js'],
    },
    tsconfigRootDir: __dirname,
  },
  root: true,
  plugins: [
    'import',
    'prefer-arrow-functions',
    'typescript-sort-keys',
    'jest',
    'sonarjs',
    'jsx-a11y',
  ],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended', 'plugin:react/jsx-runtime', 'plugin:@typescript-eslint/recommended-type-checked', 'plugin:@typescript-eslint/recommended-requiring-type-checking', 'plugin:typescript-sort-keys/recommended', 'plugin:storybook/recommended'],
  ignorePatterns: [
    '.eslintrc.js',
    '!.*',
    'node_modules',
    'android',
    'ios',
    'patches',
    'pipelines',
    'scripts',
    'packages',
  ],
  rules: {
    '@typescript-eslint/no-misused-promises': [2, { checksVoidReturn: { attributes: false, }, },],
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    'import/no-cycle': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'type',
        ],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'import/prefer-default-export': 'off',
    'no-console': 'warn',
    'no-nested-ternary': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['.*'],
            message:
              "Please use a clean path like: '@/components/something' instead of '../components/something'.",
          },
        ],
        paths: [
          {
            name: 'clsx',
            importNames: [
              'clsx',
            ],
            message:
              'Import cn from @/utils/cn ',
          },
        ],
      },
    ],
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-void': ['error', { allowAsStatement: true }],
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: '*',
        next: ['block', 'block-like', 'return'],
      },
      {
        blankLine: 'always',
        prev: ['block', 'block-like'],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    'prefer-arrow-functions/prefer-arrow-functions': [
      'error',
      {
        returnStyle: 'implicit',
      },
    ],
    'prettier/prettier': 'warn',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
      },
    ],
    'react/no-array-index-key': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'sonarjs/prefer-single-boolean-return': 'off',
  },
  overrides: [
    // Jest
    {
      files: ['*.test.ts', '*.test.tsx'],
      rules: {
        'no-restricted-imports': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'sonarjs/no-duplicate-string': 'off',
      },
    },
  ],
};
