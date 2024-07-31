module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['@typescript-eslint', 'simple-import-sort', 'postcss-modules'],
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:postcss-modules/recommended',
    ],
    rules: {
        '@typescript-eslint/no-unused-vars': 2,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        'react-hooks/exhaustive-deps': 0,
        'arrow-parens': 0,
        'class-methods-use-this': 0,
        'consistent-return': 0,
        'func-names': 0,
        'global-require': 0,
        'jsx-quotes': 0,
        'lines-between-class-members': 0,
        'no-case-declarations': 0,
        'no-console': 0,
        'no-else-return': [2, { allowElseIf: true }],
        'no-empty-function': 0,
        'no-multi-spaces': [2, { exceptions: { ImportDeclaration: true, VariableDeclarator: true } }],
        'no-param-reassign': [2, { props: false }],
        'no-use-before-define': 0,
        'no-useless-constructor': 0,
        'prefer-destructuring': ['error', { object: true, array: false }],
        quotes: ['error', 'single'],
        'react/destructuring-assignment': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-closing-tag-location': 0,
        'react/jsx-curly-spacing': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/jsx-no-target-blank': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-wrap-multilines': 0,
        'react/no-array-index-key': 0,
        'react/no-did-mount-set-state': 0,
        'react/no-unused-prop-types': 0,
        'react/prop-types': 0,
        'react/sort-comp': 0,
        'space-before-function-paren': 0,
        'react/react-in-jsx-scope': 0,
        'simple-import-sort/imports': [
            2,
            {
                groups: [
                    // Node.js builtins. You could also generate this regex if you use a `.js` config.
                    // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
                    [
                        '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
                    ],
                    // Packages. `react` related packages come first.
                    ['^react', '^@?\\w'],
                    // Internal packages.
                    ['^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)'],
                    // Side effect imports.
                    ['^\\u0000'],
                    // Parent imports. Put `..` last.
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    // Other relative imports. Put same-folder imports and `.` last.
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                    // Style imports.
                    ['^.+\\.s?css$'],
                ],
            },
        ],
        'simple-import-sort/exports': 2,
        'linebreak-style': 0,
        'postcss-modules/no-undef-class': 'error',
        'postcss-modules/no-unused-class': 'error',
    },
    env: {
        node: true,
    },
    overrides: [
        {
            files: ['webpack/*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 0,
            },
        },
    ],
    settings: {
        react: {
            version: 'detect',
        },
        'postcss-modules': {
            postcssConfigDir: 'cwd',
            baseDir: 'cwd',
            camelCase: false,
            defaultScope: 'local',
            include: '**/*.css',
            exclude: '**/node_modules/**/*',
        },
    },
};
