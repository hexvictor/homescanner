const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

// Add any additional jest configuration parameters you need from the default
const customJestConfig = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@pages/(.*)$': '<rootDir>/pages/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is configured this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
