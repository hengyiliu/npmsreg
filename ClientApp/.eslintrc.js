module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  extends: [
    'airbnb-typescript',
    'plugin:jest-dom/recommended',
    'plugin:react-hooks/recommended',
    'plugin:testing-library/react',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: ['./tsconfig.json'],
  },
  plugins: ['jest', 'jest-dom', 'jsx-a11y', 'testing-library'],
  ignorePatterns: ['build', 'coverage', 'node_modules', 'public'],
  rules: {
    // '@typescript-eslint/no-explicit-any': 'error',
    'comma-dangle': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-extraneous-dependencies': ['error'],
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-console': 'error',
    'no-param-reassign': ['error', { props: false }],
    'react/jsx-uses-react': 'off',
    'react/jsx-wrap-multilines': [
      'error',
      { arrow: true, return: true, declaration: true },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': [
      'error',
      { ignoreFunctionalComponents: true },
    ],
    'testing-library/prefer-user-event': 'error',
  },
};
