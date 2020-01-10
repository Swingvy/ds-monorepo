module.exports = {
    roots: ['<rootDir>/packages'],
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    cacheDirectory: '.jest-cache',
    coverageDirectory: '.jest-coverage',
    coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
    coverageReporters: ['html', 'text'],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
};
