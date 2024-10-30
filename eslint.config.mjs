import globals from "globals";
import pluginJs from "@eslint/js";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptEslintParse from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import pluginReactNative from "eslint-plugin-react-native";
import prettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.jest, ...globals.node },
      parser: typescriptEslintParse,
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
      react: pluginReact,
      "react-native": pluginReactNative,
      prettier: pluginPrettier,
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": "warn",
      eqeqeq: "error",

      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",

      "react/jsx-uses-react": "warn",
      "react/jsx-uses-vars": "warn",
      "react/react-in-jsx-scope": "off",

      "react-native/no-unused-styles": "warn",
      "react-native/split-platform-components": "warn",
      "react-native/no-inline-styles": "warn",
      "react-native/no-color-literals": "warn",

      "prettier/prettier": "warn",

      "react/jsx-filename-extension": [
        1,
        { extensions: [".js", ".jsx", ".tsx"] },
      ],
    },
  },

  pluginJs.configs.recommended,
  prettier,
];
