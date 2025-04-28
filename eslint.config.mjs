import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginPrettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      "jsx-a11y": eslintPluginJsxA11y,
      prettier: eslintPluginPrettier,
    },
    rules: {
      // Import Sorting
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",

      // JSX A11y Rules
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/label-has-associated-control": [
        "error",
        {
          assert: "either",
          depth: 3,
        },
      ],

      // ESLint + React Rules
      "no-underscore-dangle": "off",
      "import/extensions": "off",
      "import/prefer-default-export": "off",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      // "no-unused-vars": [
      //   "error",
      //   { vars: "all", args: "after-used", ignoreRestSiblings: true },
      // ],

      // React-Specific Rules
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "off",
      "react/jsx-filename-extension": [
        1,
        { extensions: [".jsx", ".js", ".tsx"] },
      ],
      "react/forbid-prop-types": "off",
      "react/require-default-props": [
        "error",
        {
          ignoreFunctionalComponents: true,
        },
      ],

      // Prettier Integration
      "prettier/prettier": "error",
    },
  },
];

export default eslintConfig;
