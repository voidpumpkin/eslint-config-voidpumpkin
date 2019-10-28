let prettierRules = require('./prettier.config.js');
module.exports = {
    extends: ['eslint:recommended', 'prettier'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': ['error', prettierRules]
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'prettier',
                'prettier/@typescript-eslint'
            ],
            parserOptions: {
                project: './tsconfig.json'
            },
            plugins: ['@typescript-eslint']
        }
    ]
};
