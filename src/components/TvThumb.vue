<template>
    <div class="thumb-wrapper">
        <h4>{{name}}</h4>
    </div>
</template>

<script>
export default {
    name: "TheTvThumb",

    props: {
        thumb: String,
        name: String,
    }
}
</script>
