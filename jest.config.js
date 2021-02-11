const { resolve } = require("path");

module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["components/**/*.js", "pages/**/*.js"],
  coverageReporters: ["lcov", "text"],
  moduleNameMapper: {
    "^app/(.*)$": resolve(__dirname, "./app/$1"),
  },
};
