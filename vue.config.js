const BASE_PATH = "http://localhost:3000";
const UMS_PATH = "/users";

//add the API endpoints
const API_URL = "http://localhost:8888/Roku_Flashback/api/index.php"
const API_URL_2 = "http://localhost:8000/api/tvshow/onlykids"

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
        pathRewrite: { '^/users' : '' }
        },

      '/movies': {
        target: `${API_URL}`,
        changeOrigin: true,
        pathRewrite: { '^/movies' : '' }
        },

        '/tvshows': {
          target: `${API_URL_2}`,
          changeOrigin: true,
          pathRewrite: { '^/tvshows' : '' }
          }

      }
    }
};