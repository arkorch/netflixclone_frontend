<template>
<section>

    <!-- custom component got here- show current selection -->
    <section class="movie-container">
      <div class="movie_data">
      <MovieData
      :movies_title="currentMovie.movies_title"
      :movies_storyline="currentMovie.movies_storyline"
      :movies_runtime="currentMovie.movies_runtime"
      :movies_year="currentMovie.movies_year"
      >
      </MovieData></div>
      <div class="movie_vid">
      <MoviePlayer
        :movies_trailer="currentMovie.movies_trailer"
      ></MoviePlayer></div>
    </section>
    <br>
    <!-- custom component got here -->
       <section class="movie-thumbs">
      <MovieThumb
        v-for="movie in movies"
        :key="movie.movies_id"
        :thumb="movie.movies_cover"
        :name="movie.movies_title"
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
  name: "UserHome",

  props: ['profile_type'],

  mounted() {
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

    let uri = this.profile_type == "adult" ? "/movies" : "/tvshows"
    console.log(`home page api uri ${uri}`)
    fetch(uri)
            .then(res => res.json())
            .then(jsonRes => {
                let movies = jsonRes.data
                console.log(movies);
                //push movies into vue instance
                this.movies = movies;
                //set deffault random movie
                this.currentMovie = movies[Math.floor(Math.random() * movies.length)];
            })
        .catch(error => console.error(error));
  },

  data() {
    console.log('home component is loaded')
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
