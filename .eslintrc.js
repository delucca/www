module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'import',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'migrations/*.ts'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'sort-imports': [
      'warn',
      {
        ignoreDeclarationSort: true,
        ignoreCase: true
      },
    ],
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [
          [
            'builtin',
            'external',
          ],
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'never',
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
};
