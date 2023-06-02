module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "plugin:import/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        extensions: [".js", ".ts"]
      }
    }
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",

    // General
    "max-len": ["error", { "ignoreTemplateLiterals": true, ignoreStrings: true, "code": 80 }],
    "brace-style": ["error"],
    "semi": [1],
    "no-nested-ternary": ["error"],
    "no-await-in-loop": ["error"],
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    "no-trailing-spaces": ["error"],
    "curly": ["error"],
    "no-mixed-operators": ["error"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-unreachable": ["error"],
    "prefer-const": 2,
    "quotes": [1, "double", { "avoidEscape": true }],
    "eol-last": ["error", "always"],

    // Indent
    "no-tabs": "error",
    "indent": ["error", 2, { "ignoredNodes": ["PropertyDefinition"] }],

    // Variables
    "@typescript-eslint/no-unused-vars": ["error", {
      "argsIgnorePattern": "^_",
      "ignoreRestSiblings": false,
      "varsIgnorePattern": "^_",
      "destructuredArrayIgnorePattern": "^_",
    }],
    "no-var": "error",

    // Function
    "function-paren-newline": ["error", "multiline-arguments"],
    "arrow-spacing": ["error", { "before": true, "after": true }],
    "space-in-parens": ["error", "never"],

    // Object
    "object-property-newline": [1, { allowAllPropertiesOnSameLine: true }],
    "object-curly-spacing": ["error", "always"],
    "object-curly-newline": [1, { minProperties: 4, consistent: true, multiline: true }],

    // Arrays
    "array-bracket-newline": [1, { minItems: 4, "multiline": true }],
    "array-bracket-spacing": [0],
    "array-element-newline": ["error", {
      ArrayExpression: "consistent",
    }],

    // Comma
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-dangle": ["error", "always-multiline"]
  }
};
