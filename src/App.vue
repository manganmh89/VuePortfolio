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
/* <style lang="postcss"> 
@tailwind base;
@tailwind components;
@tailwind utilities; */
</style>
