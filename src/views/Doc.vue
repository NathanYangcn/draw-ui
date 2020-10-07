<template>
  <div class="doc">
    <Topnav />
    <div class="content">
      <aside class="aside">
        <ul>
          <li v-for="item in 50" :key="item">侧边栏</li>
        </ul>
      </aside>
      <main class="main">
        <div v-for="item in 50" :key="item">主内容</div>
      </main>
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

<style lang='scss' scoped>
// 定义 media
@mixin phone {
  @media (max-width: 500px) {
    @content;
  }
}
// 默认 PC
.aside {
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 230px;
  border-right: 1px solid #bbb;
  overflow: auto;
}
.main {
  padding: 60px 0 0 240px;
}
// media phone
@include phone {
  .aside {
    display: none;
  }
  .main {
    padding-left: 0;
  }
}
</style>