/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/identity-obj-proxy"
  }
};