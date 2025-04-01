const config = {
  rootDir: './',
  testPathIgnorePatterns: ['.*e2e.test.js'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.js']

  // collectCoverage: true,
  // collectCoverageFrom: ['src/**/*'],
  // coverageReporters: ['text', 'lcov', 'cobertura'],
  // setupFilesAfterEnv: ['jest-puppeteer-istanbul/lib/setup'],
  // reporters: ['default', 'jest-puppeteer-istanbul/lib/reporter'],
  // coverageDirectory: 'coverage'
}
module.exports = config
