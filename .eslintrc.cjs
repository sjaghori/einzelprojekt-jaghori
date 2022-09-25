module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: 'standard-with-typescript',
  overrides: [],
  parserOptions: {
    project: ['./tsconfig.json'],
    sourceType: 'module',
    ecmaVersion: 2020
  },
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: ['src'],
        patterns: ['src/*']
      }
    ],
    'no-var': 1,
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true
      }
    ],
    'padding-line-between-statements': [
      'error',
      { prev: 'import', next: '*', blankLine: 'always' },
      { prev: 'import', next: 'import', blankLine: 'never' },
      { prev: 'export', next: '*', blankLine: 'always' },
      { prev: 'export', next: 'export', blankLine: 'any' },
      { prev: 'let', next: 'export', blankLine: 'any' },
      { prev: 'multiline-block-like', next: '*', blankLine: 'always' },
      { prev: 'multiline-expression', next: '*', blankLine: 'always' },
      { prev: '*', next: 'return', blankLine: 'always' }
    ]
  }
}
