module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/htwg-app-front/" : "/",
  pwa: {
    name: "HTWG App",
    themeColor: "#D9E5EC",
    msTileColor: "#D9E5EC",
  },
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.module
      .rule("raw")
      .test(/\.txt$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
  },
};
