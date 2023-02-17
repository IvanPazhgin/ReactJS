module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4], // Отступ количество пробелов, https://eslint.org/docs/latest/rules/indent
        semi: [2, "always"], // Точка с запятой в конце строки, https://eslint.org/docs/latest/rules/semi#require-or-disallow-semicolons-instead-of-asi-semi

        // Ошибка при наличии пробела при обозночении функции, уберём её
        // https://eslint.org/docs/latest/rules/space-before-function-paren
        "space-before-function-paren": ["error", "never"],

        // Использование двойных кавычек
        // https://eslint.org/docs/latest/rules/quotes
        quotes: ["error", "double", { allowTemplateLiterals: true }]
    }
};
