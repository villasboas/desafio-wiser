const { resolve } = require("path");

module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  coverageReporters: ["lcov", "text"],
  moduleNameMapper: {
    "^app/(.*)$": resolve(__dirname, "./app/$1"),
    "^pages/(.*)$": resolve(__dirname, "./pages/$1"),
  },
};
