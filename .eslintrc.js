module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  root: true,
  env: { node: true, jest: true },
  ignorePatterns: ['.eslintrc.js', 'web', 'public'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '_',
        destructuredArrayIgnorePattern: '_',
        varsIgnorePattern: '_',
        ignoreRestSiblings: true,
      },
    ], // variable or function aren't used
    '@typescript-eslint/no-explicit-any': 'off', // type variable isn't used any
    'space-in-parens': ['error', 'never'], // e.g. "if (foo)" instead of "if ( foo )"
    'object-curly-spacing': ['error', 'always'], // e.g. { foo: bar} instead of {foo: bar}
    'array-bracket-spacing': ['error', 'never'], // e.g. [1] instead of [ 1 ]
    'comma-spacing': ['error', { before: false, after: true }], // e.g. [1, 2] instead of [1 , 2]
    'arrow-spacing': ['error', { before: true, after: true }], // e.g. () => {} instead of ()=>{}
    'arrow-parens': ['error', 'always'], // e.g. "(foo) => {}" instead of "foo => {}"
    'space-before-blocks': ['error', 'always'], // e.g. "if () {}" instead of "if (){}"
    'spaced-comment': ['error', 'always', { markers: ['/'] }], // e.g. "// foo" instead of "//foo"
    'block-spacing': ['error', 'always'], // e.g. "function foo() { return true; }" instead of "function foo() {return true;}"
    // "space-before-function-paren": ["error", "never"], // e.g. "function foo() {}" instead of "function foo () {}"
    'no-trailing-spaces': ['error', { ignoreComments: true }], // disallow char at end line except comment
    'eol-last': ['error', 'always'], // newline end of line
    'no-var': ['error'], // disallow variable var
    'prefer-const': 'off', // format variable prefer const instead of let for variable with value
    curly: 'off', // e.g. "if(a) return 0" instead of "if(a) { return 0 }"
    'brace-style': ['error', '1tbs', { allowSingleLine: true }], // first brace curl same with line func
    'no-mixed-spaces-and-tabs': 'error', // disallow space and tab in same line
    'sort-imports': ['error', { ignoreDeclarationSort: true }], // sorting import component
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }], // disallow blank in first line
    'no-console': 'error', // error use console.log
    eqeqeq: 'off', // forces the use operator: === or !== instead of == or !=
    'keyword-spacing': 'error', // space between syntax with name, e.g. "if (foo)" instead of "if(foo)"
    'no-case-declarations': 'off', // allow switch without declare input type
    'no-constant-condition': 'off', // allow constant condition e.g. "if (true)"
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'never',
        functions: 'never',
      },
    ], // format comma in latest value for array and object
    semi: ['error', 'never'], // disable use dot comma in end lines
    'no-extra-semi': 'off', // allow semicolon anywhere
    'no-tabs': 'off', // disallow format \t for indent
    quotes: ['error', 'single', { avoidEscape: true }], // force single quote instead of double quote
    'max-len': ['error', { code: 120 }], // width colomn 120 char
  },
}
