<template>
  <div class="main-container">
    <div class="profile">
      <img src="../../public/images/headshot.png" alt="headshot">
      <h3>Mickey Mangan</h3>
      <p>Full-Stack Developer</p>
    </div>
    <div class="social-links">
      <a href="">
        <div class="link">
          <img src="../../public/images/github.png" alt="github"/>
        </div>
        <div class="link">
          <img src="../../public/images/linkedin.png" alt="linkedin"/>
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
.main-container {
  background-color:aliceblue
}
.social-links {
  display: flex;
  justify-content: center;
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
    animation: wiggle .5s ease-in-out infinite;
    transform-origin: center;
    overflow-y: hidden;
    overflow-x: hidden;
}
</style>