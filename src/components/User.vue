<template>
    <article class="card-rounded">
        <div class="card-body text-center" @click="navToHome">
            <!-- dynamic images need to be imported like a module using require -->

              <img :src="require('@/assets/images/' + user.avatar)"
            class="rounded-circle img-fluid" alt="avatar" >
            <h2>Name {{ user.first_name }}</h2>

            <h2>{{ user.avatar }}</h2>
        </div>
    </article> 
</template>

<script> 

export default {
    name: "TheUserComponent", 

    props: {
        user: Object
    },

    methods: {
        navToHome() {
            //go to home
            this.$router.push({name: "UserHome", params: this.user});
        }
    }
}
</script>


