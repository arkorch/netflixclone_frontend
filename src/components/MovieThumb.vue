<template>
    <div class="thumb-wrapper">
        <img :src="'/image/'+thumb "/>
    </div>
</template>

<script>
export default {
    name: "TheMovieThumb",

    props: ['thumb','name']
}
</script>
