module.exports = {
  root: true,
  extends: [
    'plugin:react-native/all',
    'plugin:react/recommended',
    'eslint:recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-native'],
  env: {
    'react-native/react-native': true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
