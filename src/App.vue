<template>
  <div>
    <NavBar />
    <MainCard/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import MainCard from "./components/MainCard.vue"
export default {
  name: 'App',
  components: {
    NavBar,
    MainCard
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
