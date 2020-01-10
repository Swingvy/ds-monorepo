const path = require('path');

module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/@typescript-eslint', 'prettier/react'],
    plugins: ['react', '@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        'react/prop-types': 'off',
        'default-case': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: ['**/*.story.(js|jsx|ts|tsx)', '**/*.spec.*'] },
        ],
    },
    settings: {
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            'eslint-import-resolver-lerna': {
                packages: path.resolve(__dirname, 'packages'),
            },
        },
        react: {
            version: '16.12.0',
        },
    },
};
