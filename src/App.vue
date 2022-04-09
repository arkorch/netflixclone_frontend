<template>
  <section class="app-wrapper">
    <header class="col-sm-12 roku-header">
      <img src="@/assets/images/netflix.svg" alt="Roku logo" width="150"><span>Dynamiic Clone</span>
      <nav class="float-right">
      <ul v-if="authenticated">
        <!-- Music -->
        <li @click="switchUser"><i class="fas fa-user-circle"></i></li>
        <!-- TV -->
        <li @click="switchUser"><i class="fas fa-user-circle"></i></li>
         <!-- -->
        <li @click="switchUser"><i class="fas fa-user-circle"></i></li>
         <!-- user settings, but only if you are an admin  -->
        <li><i class="fas fa-cog"></i></li>
        <!-- logout -->
        <li @click="logOut"><i class="fas fa-power-off"></i></li>					
      </ul>
      </nav>
    </header>
    <router-view @setauth="setAuthenticated"></router-view>

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
    }
  }
}
</script>


<style lang="scss">
  @import "@/assets/sass/vars.scss";
  @import "@/assets/sass/main.scss";
</style>
