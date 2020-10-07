<template>
  <div class="home">
    <Topnav />
    <div class="content">
      <h1 class="title">draw ui</h1>
      <h2 class="brief">draw ui description</h2>
      <p class="actions">
        <a>github</a>
        <a>doc</a>
      </p>
    </div>
    <div class="footer">
      <div class="copyright">Copyright</div>
    </div>
  </div>
</template>

<script>
import Topnav from '../components/Topnav.vue'

export default {
  components: {
    Topnav
  }
}
</script>
