module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "quotes": 0,
    "comma-dangle": 0,
    "arrow-parens": 0,
    "react/jsx-filename-extension": 0,
    "no-useless-constructor": 0,
    "react/jsx-one-expression-per-line": 0,
    "no-console": 0,
    "react/prefer-stateless-function": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "object-curly-newline": 0,
    "react/destructuring-assignment": 0,
    "react/prop-types": 0
  },
};
