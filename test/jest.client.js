module.exports = {
  ...require('./jest-common'),
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  coverageThreshold: {
    global: {
      statements: 31,
      branches: 19,
      functions: 29,
      lines: 35,
    },
  },
}
