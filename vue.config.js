const BASE_PATH = "http://localhost:3000";
const UMS_PATH = "/users";

const BASE_API_PATH = "http://[::1]:8000";
const TVSHOWKIDS_PATH = "/api/movies/onlykids";

// /api/movies/onlykids
const TVSHOWADULT_PATH = "/api/movies/onlyadult";

//add the API endpoints
//const API_URL = "http://localhost:8888/Roku_Flashback/api/index.php"
//const API_URL = "http://localhost:8000/api/tvshow/onlykids"
//const API_URL_2 = "http://[::1]:8000/api/tvshow/onlykids"

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
        target: `${BASE_API_PATH + TVSHOWADULT_PATH}`, 
        changeOrigin: true,
        pathRewrite: { '^/movies' : '' }
        },

        "/tvshows": {
          target: `${BASE_API_PATH + TVSHOWKIDS_PATH}`,
          changeOrigin: true,
          secure:false,
          logLevel: 'debug',
          pathRewrite: { '^/tvshows' : '' },
          }

      }
    }
};