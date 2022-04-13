<template>
  <section class="container backgr">
    <div class="login-box">
    <div class="welcome_mes">
        <h1>Welcome to Roku Streaming App </h1>
        <p>
        Watch the best movies movies and TV shows. Find your favourite arists, listen to music for free. Login to continue.
        </p>
    </div>
    <!--h2 class="login-flash" v-if="signup">{{ flash }}</h2-->
    <h2 class="login-flash" v-if="errors">{{ flash }}</h2>

    <section class="all_loogin">
    <section class="log-in">
      <label class="sr-only" for="inlineFormInputName">Name</label>
      <input v-model="username" type="text" class="form-control" id="inlineFormInputName" placeholder="username" required v-on:keyup.enter="login">

      <label class="sr-only" for="inlineFormPassword">Name</label>
      <input v-model="password" type="password" class="form-control" id="inlineFormPassword" placeholder="password" required v-on:keyup.enter="login">
    </section>

    <button
        v-if="signup"
        type="submit" 
        class="btn btn-primary login-submit signup"
        @click="trySignUp"
      >Sign Up
    </button>

    <button
        type="submit" 
        class="btn btn-primary login-submit"
        @click="login"
      >Login
    </button>
    </section>
    </div>
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
          errors: [],
          username: '',
          password: '',
          url: 'users/getone',
          signup: false,
          flash: ''
      }
    },
    methods: {
      tryLogin() {
        this.url = 'users/getone';
        this.login();
      },

      trySignUp() {
        // Form Validation
        //this.errors = [];
        if(!this.username) {
          //this.errors.push('User Name is required');
          this.flash = 'User Name is required';
        }
        else if(!this.password) {
          //this.errors.push('Password is required');
          this.flash = 'Password is required';
        }
        else {
          this.url = '/users/signup';
        this.login();
        }
        
      },

      goToUser(time, vm) {
        setTimeout(function() {
          vm.$emit('setauth', true);
          vm.$router.push({ name: 'TheUsersView'});

        }, time);
      },

      login() {
        // hit the backend UMS with user n pass

        //formData is a vitual <form> element data
        let formData = { username: this.username, password: this.password };

        //pass the form data to our login API
        let url = this.url; 

        fetch(url, {
          method: 'POST',
          headers: {
            "Content-type" : "application/json"
          },
          body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
          console.table(data);
 
          switch(data.action) {
            case 'add': //user doesnt exist
              this.signup = true;
              this.username = '';
              this.password = '';
              this.flash = 'The username does not exist, please try signup !!';
              break;

            case 'added': //adding new user
              this.flash = 'Added you to Roku Flashback! Enjoy! .....redirecting.......';
              this.goToUser(2500, this);
              break;

            case 'retry': //wrong password
              document.querySelector(`input[type=${data.field}]`).classList.add('error');
              this.errors = true;
              this.flash = 'Your login details are incorrect, please try again !!';
              break;

            default: //successful authenticaltion. go to users page
              this.goToUser(0, this);  
          }
          })
        .catch(err => console.error(err)); 
      }
    }
  }
</script>