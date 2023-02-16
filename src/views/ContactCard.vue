<template>
  <div class="bg-white shadow-md rounded p-6">
    <h2 class="text-2xl font-bold text-darkblue mb-4">Contact Me</h2>
    <EmailForm />
  </div>
</template>

<script>
import EmailForm from '../components/EmailForm.vue';

export default {
  components: {
    EmailForm,
  },
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,900;1,100;1,200;1,300;1,400&display=swap');
  /* .custom-font {
    font-family: Archivo;
  } */
  .contact-container {
    background-color:black;
    font-family: Archivo;
  }
</style>