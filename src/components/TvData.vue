<template>
    <article class="text-wrapper">
        <h1>{{ tvshows_title }}</h1>
        <p>{{ tvshows_storyline }}</p>
        <div class="release-details">
            <h4>Runtime: {{ tvshows_runtime }}</h4>
            <h4>Released: {{ tvshows_year }}</h4>
        </div>
    </article>
</template>

<script>
export default {
  name: "TheTvText",

  props: {
        tvshows_title: String,
        tvshows_storyline: String,
        tvshows_runtime: String,
        tvshows_year: String
  }
}
</script>

<style lang="scss">
  @import "@/assets/sass/movietext.scss";
</style>