<template>
    <v-app class="home">
        <Login/>
        <!-- <Register/> -->
    </v-app>
</template>



<script>
import Login from '@/components/modules/Login.vue';
// import Register from '@/components/modules/Register.vue';
export default {
    name : 'home',
    components : {
        Login,
        // Register
    }
}
</script>
