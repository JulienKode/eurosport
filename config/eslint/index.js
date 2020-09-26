module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint-config-airbnb',
    './rules/base',
    './rules/import',
    './rules/jsx-ally',
    './rules/react',
  ].map(require.resolve),
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    camelcase: 'off',
    'no-param-reassign': 1,
    'arrow-body-style': 0,
    'react/prefer-stateless-function': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'object-property-newline': 'error',
    'react/prop-types': 0,
    'react/button-has-type': 0,
    'react/no-multi-comp': 0,
  },
}
