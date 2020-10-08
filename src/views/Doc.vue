<template>
  <div class="doc">
    <Topnav showToggleAside />
    <div class="content">
      <AsideBar />
      <main class="main">
        <div v-for="item in 50" :key="item">主内容</div>
      </main>
    </div>
  </div>
</template>

<script>
import Topnav from '../components/Topnav.vue'
import AsideBar from '../components/AsideBar.vue'

export default {
  components: {
    Topnav,
    AsideBar
  }
}
</script>

<style lang='scss' scoped>
@import '../styles/media.scss';

// 默认 PC
.main {
  padding: 60px 0 0 240px;
}

// media phone
@include phone {
  .main {
    padding-left: 0;
  }
}
</style>