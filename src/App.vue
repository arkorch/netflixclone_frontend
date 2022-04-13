<template>
  <section>
    <header class="col-sm-12 app-wrapper">
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"> </button>
            <a class="navbar-brand" href="#"><img src="@/assets/images/roku.svg" alt="Roku logo" width="90"></a>
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
            <h3>The <b>Roku </b>Streaming App</h3>
            <p>Watch you favourite blockbuster movies and TV shows. Find your favourite music. It's free!! </p>
            <ul class="socials">
                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-google-plus-g"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>copyright &copy; <a href="https://www.roku.com/en-ca/">Roku Streaming App</a>  </p>
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
