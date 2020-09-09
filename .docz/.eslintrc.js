module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb-base",
  "env": {
    "browser": true,
    "node": true,
  },
  "globals":{
    "document": true,
    "localStorage": true,
    "window": true,
    "Record": true,
  },
  "plugins": ["import"],
  "rules": {
    // turn on errors for missing imports
    "import/prefer-default-export": [0],
    "import/no-unresolved": "error",
    "import/extensions": ["error", "always", {
      "ts": "never",
      "tsx": "never"
    }],
  },
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      // use <root>/tsconfig.json
      "typescript": {
        "alwaysTryTypes": true // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },

      // use <root>/path/to/folder/tsconfig.json
      "typescript": {
        "project": "path/to/folder"
      },

      // Multiple tsconfigs (Useful for monorepos)

      // use a glob pattern
      "typescript": {
        "project": "packages/*/tsconfig.json"
      },

      // use an array
      "typescript": {
        "project": [
          "packages/module-a/tsconfig.json",
          "packages/module-b/tsconfig.json"
        ]
      },

      // use an array of glob patterns
      "typescript": {
        "project": [
          "packages/*/tsconfig.json",
          "other-packages/*/tsconfig.json"
        ]
      }
    }
  }
}