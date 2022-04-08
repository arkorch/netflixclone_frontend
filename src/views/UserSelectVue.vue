<template>
    <section class="users">
        <h1>Who's using Roku?</h1>
    </section>
</template>

<script>

export default {
    name: 'TheUsersView',

    created() {
        fetch('/users/getall')
            .then(res => res.json())
            .then(data => console.table(data))
        .catch(err => console.error(err));
    }
}
</script>