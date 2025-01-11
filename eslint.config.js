import globals from "globals";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
      },

      ecmaVersion: "latest",
      sourceType: "module",
    },

    rules: {
      "indent": ["error", 2, {
        SwitchCase: 1,
        offsetTernaryExpressions: true,
      }],

      "linebreak-style": ["error", "unix"],

      "quotes": ["error", "single", {
        allowTemplateLiterals: true,
      }],

      "semi": ["error", "always"],

      "keyword-spacing": ["error", {
        before: true,
        after: true,
      }],

      "space-before-function-paren": ["error", {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      }],

      "arrow-spacing": ["error", {
        before: true,
        after: true,
      }],

      "comma-dangle": ["error", "always-multiline"],

      "no-unused-vars": ["error", {
        destructuredArrayIgnorePattern: "^_",
        argsIgnorePattern: "^_",
      }],

      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "curly": ["error", "all"],
      "brace-style": ["error", "1tbs"],
      "no-loss-of-precision": "off",
    },
  }
];