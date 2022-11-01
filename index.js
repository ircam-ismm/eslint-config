module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single",
      { "allowTemplateLiterals": true }
    ],
    "semi": [
      "error",
      "always"
    ],
    "space-before-function-paren": [
      "error",
      { "anonymous": "never", "named": "never", "asyncArrow": "always" }
    ],
    "arrow-spacing": [
      "error",
      { "before": true, "after": true }
    ],
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "no-unused-vars": [
      "error",
      { "destructuredArrayIgnorePattern": "^_", "argsIgnorePattern": "^_" }
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "array-bracket-spacing": [
      "error",
      "never"
    ]
  }
}
