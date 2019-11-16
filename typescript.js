const eslintConfig = require('./.eslintrc.js');
module.exports = {
    extends: ['./'],
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
