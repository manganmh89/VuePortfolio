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
  
        </a>
      </div>
    </div>
  </template>

  <script>
  export default {
  
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
  </style>