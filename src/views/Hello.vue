<template>
<section>
<h1>This is my new TV VIEW pages</h1>
<div class="movie_data">
      <MovieData
      :movies_title="currentTvshow.tvshows_title"
      :movies_storyline="currentTvshow.tvshows_storyline"
      :movies_runtime="currentTvshow.tvshows_runtime"
      :movies_year="currentTvshow.tvshows_year"
      >
      </MovieData></div>
      
<section class="movie-thumbs" >
      <TvThumb
        v-for="movie in tvshows"
        :key="movie.id"
        :thumb="movie.tvshows_cover"
        :name="movie.tvshows_title"
        @click="setcurrentTvshow(movie)"
      ></TvThumb>
    </section> 
        
</section>


</template>

<script>
import TvThumb from "@/components/TvThumb.vue";
import MovieData from "@/components/MovieData.vue";

export default {
  name: "HelloWorld",
  data(){
      return {
          tvshows:[],
          currentTvshow:{},
      }
  },
  mounted(){
      console.log('TVView Page mounted')
      fetch('/tvshows')
            .then(res => res.json())
            .then(resJson => {
                console.log(resJson);
                let data  = resJson.data
                console.log(`TV Page data : ${JSON.stringify(data)}`)
                //push movies into vue instance
                this.tvshows = data;
                //set deffault random movie
                this.currentTvshow = data[0];
            })
        .catch(error => console.error(error));
  },

   methods: {
       setCurrentTvshows(tvshows) {
         this.currentTvshow = tvshows;
       }
   },

  components: {
    TvThumb,
    MovieData,
  }
}
</script>

<style lang="scss">
  @import "@/assets/sass/homepage.scss";
</style>
