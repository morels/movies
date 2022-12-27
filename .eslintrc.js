/* eslint-env node */
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.eslint.json",
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
  ],
  plugins: [
    "@typescript-eslint",
  ],
  root: true,
  rules: {
    // https://stackoverflow.com/questions/57802057/eslint-configuring-no-unused-vars-for-typescript
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
    ],
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    quotes: "off",
    "@typescript-eslint/quotes": ["error", "double"],
    "react/function-component-definition": ["error", {
      namedComponents: ["arrow-function", "function-declaration"],
      unnamedComponents: "arrow-function",
    }],
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react/jsx-props-no-spreading": ["warn"],
    "react/require-default-props": "off",
    "react/prop-types": "off",
    "import/prefer-default-export": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
    react: {
      version: "detect",
    },
  },
};
