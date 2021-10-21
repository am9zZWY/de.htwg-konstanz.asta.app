module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["**/*.{js,vue}"],
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".*\\.(js)$": "babel-jest",
  },
  testMatch: ["**/*.spec.[jt]s?(x)"],
  roots: ["<rootDir>/src/"],
  moduleFileExtensions: ["js", "json", "vue"],
  verbose: true,
};
