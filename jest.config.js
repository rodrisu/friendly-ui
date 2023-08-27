module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  modulePaths: ['<rootDir>/src/'],
  collectCoverageFrom: ['src/**/index.{ts,tsx}'],
  testRegex: '(src/.*.unit.(ts|tsx)$)',
  moduleFileExtensions: ['ts', 'tsx', 'json', 'js'],
  setupFilesAfterEnv: ['./bin/jestScript'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
}
