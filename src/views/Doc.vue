<template>
  <div class="doc">
    <Topnav />
    <div class="content">
      <div class="aside">侧边栏</div>
      <div class="main">主内容</div>
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
