module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'never'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'no-console': 0,
    'no-debugger': 0,
    'import/no-cycle': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
    'linebreak-style': 0,
    // 'param-reassign': 'off',
    'callback-return': 0,
  },
  // rules: {
  //   semi: ['error', 'never'],
  //   'no-console': 0,
  //   'react/jsx-uses-react': 0,
  //   'react/react-in-jsx-scope': 0,
  //   'react/jsx-props-no-spreading': 0,
  //   'react/prop-types': 0,
  //   'import/no-cycle': 0,
  //   'import/prefer-default-export': 0,
  //   'linebreak-style': 0,
  //   'react/jsx-filename-extension': 0,
  //   'import/no-extraneous-dependencies': 0,
  // },
}
