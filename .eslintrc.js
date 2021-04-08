module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": [
      "plugin:@typescript-eslint/recommended",
      "airbnb",
      "airbnb/hooks",
      "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 12,
      "sourceType": "module"
  },
  "plugins": [
      "@typescript-eslint"
  ],
  "rules": {
      "no-use-before-define": ["off"],
      "no-unused-vars": ["warn"],
      "no-alert": ["off"],
      "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
      "arrow-body-style": ["warn", "as-needed"],
      "jsx-a11y/click-events-have-key-events": "off",
      "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
      "import/no-unresolved": "off",
      "import/prefer-default-export": "off",
      "react/require-default-props": ["off"],
      "react/jsx-props-no-spreading": ["off"],
      "react/no-array-index-key": "warn",
      "@typescript-eslint/no-explicit-any": ["off"],
  },
};
