module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(ts|js)', '**/?(*.)+(spec|test).+(ts|js)'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },

  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/build/', '<rootDir>/dist/', '<rootDir>/coverage/'],
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/build/', '<rootDir>/dist/', '<rootDir>/coverage/'],
  setupFiles: ['<rootDir>/setupTests.js'],
  moduleFileExtensions: ['ts', 'js'],
  moduleNameMapper: {
    '@routes(.*)': '<rootDir>/src/routes/$1',
    '@constants(.*)': '<rootDir>/src/constants/$1',
    '@models(.*)': '<rootDir>/src/database/models/$1',
    '@controllers(.*)': '<rootDir>/src/controllers/$1',
    '@middleware(.*)': '<rootDir>/src/middleware/$1',
    '@helpers(.*)': '<rootDir>/src/helpers/$1',
    '@dbConfig(.*)': '<rootDir>/src/database/dbConfig/$1',
  },
  modulePaths: ['<rootDir>/src', '<rootDir>/src/database'],
  coverageThreshold: {
    global: {
      branches: 22,
      functions: 30,
      lines: 77,
      statements: -120,
    },
  },
  globals: {
    'ts-jest': {
      diagnostics: {
        warnOnly: true,
      },
    },
  },
};
