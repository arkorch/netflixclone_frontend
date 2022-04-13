<template>
<section>
<h1>This is my new TV VIEW pages</h1>

    <!-- custom component got here- show current selection -->
    <section class="movie-container">
      <TvData
      :tvshows_title="currentTvshow.tvshows_title"
      :tvshows_storyline="currentTvshow.tvshows_storyline"
      :tvshows_runtime="currentTvshow.tvshows_runtime"
      :tvshows_year="currentTvshow.tvshows_year"
      >
      </TvData>
      <TvPlayer 
        :tvshows_trailer="currentTvshow.tvshows_trailer"
      ></TvPlayer>
    </section>
    <!-- custom component got here -->
    <section class="movie-thumbs">
      <TvThumb
        v-for="movie in tvshows"
        :key="movie.movies_id"
        :thumb="movie.movies_cover"
        @click="setcurrentTvshow(movie)" 
      ></TvThumb>
    </section> 
    
</section>
</template>

<script>
import TvPlayer from "@/components/TvPlayer.vue";
import TvData from "@/components/TvData.vue";
import TvThumb from "@/components/TvThumb.vue";

export default {
  name: "TheTvView",

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


    fetch('/tvshow')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                //push movies into vue instance
                this.tvshows = data[0];
                //set deffault random movie
                this.currentTvshow = data[0][Math.floor(Math.random() * data[0].length)];
            })
        .catch(error => console.error(error));
  },

  data() {
    console.log('tv shows component loaded')
    return {
      tvshows: [],
      currentTvshow: {}
    }
  },

   methods: {
       setCurrentTvshows(tvshows) {
         this.currentTvshow = tvshows;
       }
   },

  components: {
    TvPlayer,
    TvData ,
    TvThumb
  }
}
</script>

<style lang="scss">
  @import "@/assets/sass/homepage.scss";
</style>
