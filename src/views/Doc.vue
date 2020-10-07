<template>
  <div class="doc">
    <Topnav />
    <div class="content">
      <aside class="aside" v-if="asideVisible">
        <ul>
          <li v-for="item in 50" :key="item">侧边栏</li>
        </ul>
      </aside>
      <main class="main">
        <div style="text-align: right;">
          <button @click="toggle">{{ asideVisible ? '关闭aside' : '开启aside' }}</button>
        </div>
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
  },
  data () {
    return {
      asideVisible: false
    }
  },
  methods: {
    toggle () {
      this.asideVisible = !this.asideVisible
    }
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
  border-right: 1px solid #bbb;
  width: 230px;
  background: #fff;
  overflow: auto;
}
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