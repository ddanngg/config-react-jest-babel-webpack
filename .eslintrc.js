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
}
