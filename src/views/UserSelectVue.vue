<template>
<section class="users resp_user">
        <br>
    <h1 class="users-headline text-center"> Who's Watching?</h1>
    <section class="users-container">
        <User class="user-panel"
            v-for="user in users"
            :key="user.id"
            :user="user"
            @click="onProfileSelected(user)"
        >
        </User>
    </section>

</section> 
</template> 

<script>
import User from "@/components/User.vue"

export default {
    name: 'TheUsersView', 
 
    created() {
        fetch('/users/getall')
            .then(res => res.json())
            .then(data => {
                console.table(data);
                this.users = data;
                })
        .catch(err => console.error(err));
    },

    data(){
        return {
            users: []
        }
    },
    methods:{
        onProfileSelected(profile){
            console.log(`profile selected ${profile.first_name}`)
            //navigate to home with selected profile
            let profile_type = profile.permissions > 1 ? 'adult' : 'kids';
            console.log(`selected profile type ${profile_type}`)
            this.$router.push({name:'UserHome',query:{profile_type}})
        }
    },

    components: {
        User
    }
}
</script>

<style lang="scss">
  @import "@/assets/sass/vars.scss";
  @import "@/assets/sass/main.scss";
  @import "@/assets/sass/userselect.scss";
</style>