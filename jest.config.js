module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["**/*.{js,vue}"],
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".*\\.js$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["**/*.spec.[jt]s?(x)"],
  roots: ["<rootDir>/src/"],
  moduleFileExtensions: ["js", "ts", "json", "vue"],
  verbose: true,
};
