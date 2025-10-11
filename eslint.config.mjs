import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default [
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
    },

    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    prettier,
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        ignores: ["node_modules/*", "*.config.*", "dist/*"],
        rules: {
            semi: ["error", "always"],
            "no-unused-vars": "off",
            camelcase: ["error", { properties: "always" }],
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    args: "all",
                    caughtErrors: "all",
                    varsIgnorePattern: "^_",
                    argsIgnorePattern: "^_",
                    ignoreRestSiblings: true,
                    caughtErrorsIgnorePattern: "^_",
                    destructuredArrayIgnorePattern: "^_",
                },
            ],

            "sort-imports": "off",
            "@typescript-eslint/no-namespace": "off",
            "@typescript-eslint/no-empty-object-type": "off",
            "@typescript-eslint/no-unused-expressions": "off",
            "@typescript-eslint/no-require-imports": "error",
            "@typescript-eslint/no-empty-interface": ["error", { allowSingleExtends: true }],
        },
    },
];
