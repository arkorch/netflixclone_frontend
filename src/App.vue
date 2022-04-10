<template>
  <section>
    <header class="col-sm-12 roku-header app-wrapper">
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#"><img src="@/assets/images/netflix.svg" alt="Roku logo" width="90"></a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-right" v-if="authenticated">
                <!-- Music -->
              <li @click="toMusic" class="nav_ico"><i class="fas fa-music"></i></li>
                <!-- Movies -->
              <li @click="toMovies" class="nav_ico"><i class="fas fa-clapperboard"></i></li>
               <!-- TV -->
              <li @click="toTv" class="nav_ico"><i class="fas fa-tv"></i></li>
                 <!-- Switch User-->
              <li @click="switchUser" class="nav_ico"><i class="fas fa-user-circle"></i></li>

              <!-- user settings, but only if you are an admin  -->
              <li class="nav_ico"><i class="fas fa-cogs"></i></li>

              <!-- logout -->
              <li @click="logOut" class="nav_ico"><i class="fas fa-power-off"></i></li>		

            </ul>
          </div>
        </div>
      </nav>
    </header>
    <router-view @setauth="setAuthenticated"></router-view>

    <br>
    <br><br>  

    <!----------- Footer ------------>
    <footer>
        <div class="footer-content">
            <h3>The <b>Netflix </b>Streaming App</h3>
            <p>Watch you favourite blockbuster movies and TV shows. Find your favourite music. It's free!! </p>
            <ul class="socials">
                <li><a href="#"><i class="fas fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>copyright &copy; <a href="https://www.netflix.com/ca/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fbrowse">Netflix</a>  </p>
                    <div class="footer-menu">
                      <ul class="f-menu">
                        <li><a href="https://en.wikipedia.org/wiki/Netflix">Info</a></li>
                        <li><a href="https://help.netflix.com/en/contactus">Help</a></li>
                      </ul>
                    </div>
        </div>
    </footer>
    
</section>
</template>

<script>
export default {
  name: "TheRokuFkashbackApp",

  created() {
    if (localStorage.getItem('user')) {
      this.$router.push({ name: 'UserHome', params: JSON.parse(localStorage.getItem('user'))});
      this.setAuthenticated(true);
    }
  },

  data() {
    return {
      authenticated: false
    }
  },
 
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
      //console.log(authenticated);
    },

    logOut() {
      //destroy the local storage
      if (localStorage.getItem ('user')){
        //delete the user
        localStorage.removeItem('user');
      }
      //not authticated anymore
      this.setAuthenticated(false);
      this.$router.push({name: 'Login-vue'});
    },

    switchUser() {
      this.$router.push({ name: 'TheUsersView'});
    },
    toMusic() {
      this.$router.push({ name: 'TheMusicView'});
    },
    toTv() {
      this.$router.push({ name: 'TheTvView'});
    },
     toMovies() {
      this.$router.push({ name: 'UserHome'});
    }
  }
}
</script>


<style lang="scss">
  @import "@/assets/sass/vars.scss";
  @import "@/assets/sass/main.scss";
</style>
