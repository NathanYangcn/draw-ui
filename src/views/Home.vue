<template>
  <div class="home">
    <Topnav />
    <div class="content">
      <h1 class="title">draw ui</h1>
      <h2 class="brief">draw ui description</h2>
      <p class="actions">
        <a href="https://github.com/NathanYangcn/draw-ui" target="_blank">GitHub</a>
        <router-link to="/doc">Doc</router-link>
      </p>
    </div>
    <Footer />
  </div>
</template>

<script lang='ts'>
import Topnav from '../components/Topnav.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Topnav,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding-top: 25%;
  a + a {
    margin-left: 20px;
  }
}
</style>
