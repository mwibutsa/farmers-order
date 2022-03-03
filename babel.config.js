module.exports = {
  presets: [
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          helpers: "./src/helpers",
          utils: "./src/utils",
          testUtils: "./src/testUtils",
          middleware: "./src/middleware",
          models: "./src/database/models",
          controllers: "./src/controllers",
          routes: "./src/routes",
          types: "./src/types",
          dbConfig: "./src/database/dbConfig",
        },
      },
    ],
  ],
};
