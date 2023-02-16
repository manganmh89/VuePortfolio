<template>
  <div class="app">
    <!--NavBar-->
    <NavBar />
    <!--Content-->
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
// import EmailForm from './components/EmailForm.vue';
export default {
  name: 'App',
  components:
    {NavBar},
}

</script>

<style>
#app {
  font-family: Archivo, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}
</style>
















<!--OLD CODE BELOW-->

<!-- <button @click="showNavBar">SVG HAMBURG</button> -->
<!-- <router-link to="/">Home</router-link>
  <router-link :to="{ name: 'ExperienceCard' }">Experience</router-link>
  <router-link :to="{ name: 'ProjectsCard' }">Projects</router-link>
  <router-link :to="{ name: 'ContactCard' }">Contact</router-link> -->

<!-- <script>
  import NavBar from "./components/NavBar.vue"
  // import MainCard from "./views/MainCard.vue"
  // import ExperienceCard from "./views/ExperienceCard.vue"
  // import ProjectsCard from "./views/ProjectsCard.vue"
  // import ContactCard from "./views/ContactCard.vue"
  
  </script> -->