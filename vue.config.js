module.exports = {
  transpileDependencies: true,
  devServer: {
    port: 8080, // Port to run FE
    allowedHosts: "all", // Accepts any host (equivalent to disableHostCheck)
    proxy: {
      '/api': {
        target: 'https://bsr-api.onrender.com', // URL backend
        changeOrigin: true, // Change the request origin to match BE
        pathRewrite: { '^/api': '' } // Remove the '/api' prefix from the URL before sending it to the BE

      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/main.scss";`
      }
    }
  }
};
