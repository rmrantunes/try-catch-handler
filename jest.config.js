const { resolve } = require("path");
const root = resolve(__dirname);

module.exports = {
  rootDir: root,
  testMatch: ["<rootDir>/test/**/*.test.ts"],
  testEnvironment: "node",
  clearMocks: true,
  preset: "ts-jest",
  moduleNameMapper: {
    "test/(.*)": "<rootDir>/test/$1",
  },
};
