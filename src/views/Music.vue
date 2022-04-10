<template>
<section>
<h1>This is my new music pages</h1>

    <!-- custom component got here- show current selection -->
    <section class="movie-container">
      <MovieData
      :movies_title="currentMovie.movies_title"
      :movies_storyline="currentMovie.movies_storyline"
      :movies_runtime="currentMovie.movies_runtime"
      :movies_year="currentMovie.movies_year"
      >
      </MovieData>
      <MoviePlayer
        :movies_trailer="currentMovie.movies_trailer"
      ></MoviePlayer>
    </section>
    <!-- custom component got here -->
    <section class="movie-thumbs">
      <MovieThumb
        v-for="movie in movies"
        :key="movie.movies_id"
        :thumb="movie.movies_cover"
        @click="setCurrentMovie(movie)"
      ></MovieThumb>
    </section> 
    
</section>
</template>

<script>
import MoviePlayer from "@/components/MoviePlayer.vue";
import MovieData from "@/components/MovieData.vue";
import MovieThumb from "@/components/MovieThumb.vue";

export default {
  name: "TheMusicView",

  props: {
      first_name: String,
      role: String,
      permissions: String,
      avatar: String
  },

  created() {
    //store this user to local host
    let currentUser = {
      name: this.first_name,
      role: this.role,
      permissions: this.permissions,
      avatar: this.avatar
    }

     if (window.localStorage) {
            localStorage.setItem('user', JSON.stringify(currentUser));
      }


    fetch('/movies')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                //push movies into vue instance
                this.movies = data[0];
                //set deffault random movie
                this.currentMovie = data[0][Math.floor(Math.random() * data[0].length)];
            })
        .catch(error => console.error(error));
  },

  data() {
    return {
      movies: [],
      currentMovie: {}
    }
  },

   methods: {
       setCurrentMovie(movie) {
         this.currentMovie = movie;
       }
   },

  components: {
    MoviePlayer,
    MovieData ,
    MovieThumb
  }
}
</script>

<style lang="scss">
  @import "@/assets/sass/homepage.scss";
</style>
