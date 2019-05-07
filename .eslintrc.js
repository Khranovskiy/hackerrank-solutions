module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true
  },
  globals: {
    exampleGlobalVariable: false
  },
  extends: [
    '@logux/eslint-config/node',
    'prettier'
    // 'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
    // 'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    // 'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    // 'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: [
    // "@typescript-eslint",
    // 'babel',
    'prettier'
    // 'react',
    // 'standard',
    // 'unicorn',
    // 'vue'
  ],
  parser: 'babel-eslint',
  // "parser":  '@typescript-eslint/parser',  // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true
    }
  },
  // settings:  {
  //   react:  {
  //     version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
  //   },
  // },
  rules: {
    'no-undef': ['off'],
    'template-curly-spacing': ['off'],
    'prefer-let/prefer-let': ['off'],
    'security/detect-non-literal-regexp': 'off',
    'security/detect-unsafe-regex': 'off',
    'node/no-missing-require': 'off',
    'no-unused-expressions': 'off',
    'valid-jsdoc': 'off',
    'standard/array-bracket-even-spacing': 'off',
    'standard/computed-property-even-spacing': 'off',
    'standard/object-curly-even-spacing': 'off',
    'node/no-unsupported-features/es-syntax': [
      'error',
      {
        ignores: ['modules'] //https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md
      }
    ],
    'prettier/prettier': 'error'
  },
  overrides: [
    {
      files: ['gulpfile.js', 'index.js'],
      rules: {
        'node/no-unpublished-require': 'off',
        'global-require': 'off'
      }
    }
  ]
}
