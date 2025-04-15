module.exports = {
  transpileDependencies: true,
  devServer: {
    port: 8080
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/main.scss";`
      }
    }
  }
}