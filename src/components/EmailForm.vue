<template>
    <form class="px-4 my-32 max-w-3xl mx-auto space-y-6" @submit.prevent="submitForm">
      <div>
        <label class="block font-medium text-darkblue">Full Name:</label>
        <input v-model.trim="name" type="text" class="form-input w-full" required>
      </div>
      <div>
        <label class="block font-medium text-darkblue">Email:</label>
        <input v-model.trim="email" type="email" class="form-input w-full" required>
      </div>
      <div>
        <label class="block font-medium text-darkblue">Message:</label>
        <textarea v-model.trim="message" class="form-textarea w-full" rows="4" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary w-full">Send</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: '',
      };
    },
    methods: {
      submitForm() {
        const subject = encodeURIComponent('New Message from Contact Form');
        const body = encodeURIComponent(
          `Name: ${this.name}%0D%0AEmail: ${this.email}%0D%0AMessage: ${this.message}`
        );
        window.location.href = `mailto:manganmh89@gmail.com?subject=${subject}&body=${body}`;
        // replace "youremail@example.com" with your actual email address
      },
    },
  };
  </script>

<style>
    /* form {
     max-width: 420px;
     margin: 30px auto;
     background:rebeccapurple ;
     text-align: left;
     padding: 40px;
     border-radius: 10px;
    }
    label {
     color: whitesmoke ;
     display: inline-block;
     margin: 25px 0 15px;
     font-size: 0.6em;
     text-transform: uppercase;
     letter-spacing: 1px;
     font-weight: bold;
    }
    input {
     display:block;
     padding: 10px 6px;
     width: 100%;
     box-sizing: border-box;
     border: none;
     border-bottom: 1px solid darkblue;
     color: whitesmoke;
    } */
</style>