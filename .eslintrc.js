const path = require('path')

module.exports = {
  extends: [
    'kentcdodds',
    'kentcdodds/import',
    'kentcdodds/webpack',
    'kentcdodds/jest',
    'kentcdodds/react',
  ],
  rules: {
    'prefer-exponentiation-operator': 'off',
    'no-dupe-else-if': 'off',
    'no-import-assign': 'off',
    'no-setter-return': 'off',
    'no-constructor-return': 'off',
  },
  overrides: [
    {
      files: ['**/src/**'],
      settings: {'import/resolver': 'webpack'},
    },
    {
      files: ['**/__tests__/**'],
      settings: {
        'import/resolver': {
          jest: {
            jestConfigFile: path.join(__dirname, './test/jest-common.js'),
          },
        },
      },
    },
  ],
}
