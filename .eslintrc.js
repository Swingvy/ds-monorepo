const path = require('path');
const glob = require('glob');

const rootAbsPath = path.resolve(__dirname);
//const packageAbsPaths = [rootAbsPath].concat(glob.sync(rootAbsPath+"/packages/*"));
const packageAbsPaths = glob.sync(rootAbsPath + '/packages/*');
console.log('packageAbsPaths', packageAbsPaths);

module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: [
        'airbnb-base',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {},
    settings: {
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
