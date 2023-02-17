<template>
    <div class="main-container">
      <div class="profile">
        <img src="../assets/images/headshot.png" alt="headshot">
        <h3>Mickey Mangan</h3>
        <p>Full-Stack Developer</p>
      </div>
      <div class="social-links">
        <a href="">
          <div class="link">
            <img src="../assets/images/github.png" alt="github"/>
          </div>
          <div class="link">
            <img src="../assets/images/linkedin.png" alt="linkedin"/>
          </div>
          <h2>Technologies Studied</h2>
          <div class="logos">
            <img src="https://www.svgrepo.com/show/473654/html5.svg" alt="">
            <img src="https://www.svgrepo.com/show/473577/css3.svg" alt="">
            <img src="https://www.svgrepo.com/show/310932/javascript.svg" alt="">
            <img src="https://www.svgrepo.com/show/439173/git.svg" alt="">
            <img src="https://www.svgrepo.com/show/426053/git.svg" alt="">
            <img src="https://www.svgrepo.com/show/349404/heroku.svg" alt="">
            <img src="https://www.svgrepo.com/show/306463/netlify.svg" alt="">
            <img src="https://www.svgrepo.com/show/330398/express.svg" alt="">
            <img src="https://www.svgrepo.com/show/473729/mongodb.svg" alt="">
            <img src="https://www.svgrepo.com/show/424896/react-logo-programming-2.svg" alt="">
            <img src="https://www.svgrepo.com/show/377688/text-x-python.svg" alt="">
            <img src="https://www.svgrepo.com/show/353657/django-icon.svg" alt="">
            <img src="https://www.svgrepo.com/show/331300/aws.svg" alt="">
            <img src="https://www.svgrepo.com/show/369644/vue.svg" alt="">
          </div>
        </a>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'HomeCard',
    components: {},
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,900;1,100;1,200;1,300;1,400&display=swap');
  .custom-font {
    font-family: Archivo;
  }
  .main-container {
    background-color:aliceblue;
    font-family: Archivo;
  }
  
  .profile {
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .social-links {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .link {
    max-width: 70px;
    max-height: 70px;
    transform-origin: center;
    margin-right: 25px;
    overflow-y: hidden;
    overflow-x: hidden;
  }
    @keyframes wiggle {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(-10deg); }
        50% { transform: rotate(10deg); }
        75% { transform: rotate(-10deg); }
        100% { transform: rotate(0deg); }
  }
  .link:hover {
      animation: wiggle .3s ease-in-out infinite;
      transform-origin: center;
      overflow-y: hidden;
      overflow-x: hidden;
  }
  .logos {
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 25px;
    max-width: 25px;
}

  </style>