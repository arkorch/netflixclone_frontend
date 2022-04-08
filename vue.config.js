const BASE_PATH = "http://localhost:3000";
const UMS_PATH = "/users";

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/assets/sass/vars.scss";
            @import "@/assets/sass/reset.scss";
            @import "@/assets/sass/main.scss";
          `
      }
    }
  },

  devServer: {
    proxy: {
      '/users': {
        target: `${BASE_PATH + UMS_PATH}`,
        changeOrigin: true,
        pathRewrite: {
          '^/users' : '' }
        }
      }
    }
};