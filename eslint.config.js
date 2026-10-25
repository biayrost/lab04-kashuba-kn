import js from '@eslint/js';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default [
    {
        ignores: ['node_modules/**', 'legacy/**', 'reports/**'],
    },
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.node,
            },
        },
        rules: {
            'no-else-return': 'error',
            'default-param-last': 'warn',
            'operator-assignment': ['warn', 'always'],
            'no-unused-expressions': 'error',
            'no-undef-init': 'error',
            'no-use-before-define': ['warn', {functions: false}],
        },
    },
    eslintConfigPrettier,
];
