module.exports = {
  "globals": {
      "__TS_CONFIG__": "tsconfig.json"
    },
     "transform": {
      ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js"
    ],
    "testEnvironment": "node"
};