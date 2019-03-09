module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    expect: true,
    chai: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      modules: true,
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    curly: 'error',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'import/newline-after-import': 'error',
    'import/no-unresolved': 'warn',
    'no-underscore-dangle': 'off',
    'import/imports-first': ['error', 'absolute-first'],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn'
  }
};
