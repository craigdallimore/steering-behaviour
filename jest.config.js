/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
/* eslint @typescript-eslint/no-var-requires: "off" */
const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
};
