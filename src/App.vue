<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/experience">Experience</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
  <router-view/>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import MainCard from "./components/MainCard.vue"
import ExperienceCard from "./components/ExperienceCard.vue"
import ProjectsCard from "./components/ProjectsCard.vue"
import ContactCard from "./components/ContactCard.vue"
export default {
  name: 'App',
  components: {
    NavBar,
    MainCard,
    ExperienceCard,
    ProjectsCard, 
    ContactCard,
  }

}
</script>

<style>
#app {
  font-family: Archivo, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
}
</style>