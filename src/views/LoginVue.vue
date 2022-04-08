<template>
  <section class="container">
    <div class="jumbotron">
        <h1>Welcome to Flashblack!</h1>
        <p class="lead">
        Before revisiting your favourite movies, tv shows or music from yesteryear, please log in with a valid username and password.
        </p>
    </div>

    <section class="log-in">
      <label class="sr-only" for="inlineFormInputName">Name</label>
      <input v-model="username" type="text" class="form-control" id="inlineFormInputName" placeholder="username" required>

      <label class="sr-only" for="inlineFormPassword">Name</label>
      <input v-model="password" type="password" class="form-control" id="inlineFormPassword" placeholder="password" required>
    </section>

    <button
        type="submit" 
        class="btn btn-primary login-submit"
        @click="login"
      >Go!
    </button>
  </section>
</template>

<style lang="scss">
  @import "@/assets/sass/vars.scss";
  @import "@/assets/sass/main.scss";
  @import "@/assets/sass/login.scss";
</style>

<script>
  export default {
    name: "Login-vue",
    
    data () {
      return{
          username: '',
          password: ''
      }
    },
    methods: {
      login() {
        // hit the backend UMS with user n pass
 
        debugger;

        //mock up login
        //navigate to nextt view
        this.$router.push({ name: 'TheUsersView'});
 
/*
        let formData = new FormData();

        formData.append("username", this.username);
        formData.append("password", this.password);

        let url = `someloginurl` //toodo fix when available

        fetch(url, {
          method: 'POST',
          body: formData
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          //for pass route and fail alert for login
        })
        .catch((error) => console.error(error)); */
      }

    }
  }
</script>