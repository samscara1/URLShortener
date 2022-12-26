module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        printWidth: 80,
        semi: true,
        bracketSameLine: true,
        trailingComma: 'es5',
        jsxSingleQuote: false,
        tabWidth: 2,
        singleQuote: true,
        arrowParens: 'always',
        parser: 'typescript',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'newline-before-return': 'error',
  },
};
