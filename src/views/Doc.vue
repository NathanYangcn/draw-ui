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
        <div v-for="item in 50" :key="item">主内容</div>
      </main>
    </div>
  </div>
</template>

<script>
import { inject, onMounted, onBeforeUnmount } from 'vue'
import Topnav from '../components/Topnav.vue'
const deviceScreenWidthLimit = 500

export default {
  components: {
    Topnav
  },
  setup () {
    let asideVisible = inject('asideVisible') // inject ≈ vue.get()
    const initAsideVisible = () => {
      const docPageScreenWidth = document.documentElement.clientWidth;
      asideVisible.value = docPageScreenWidth <= deviceScreenWidthLimit ? false : true
    }
    const screenResized = () => {
      initAsideVisible()
    }
    // 生命周期使用前先引入 import
    onMounted(() => {
      window.addEventListener('resize', screenResized, true)
    })
    // 生命周期名称变更 beforeDestroy => beforeUnmount
    onBeforeUnmount(() => {
      window.removeEventListener('resize', screenResized, true)
    })

    initAsideVisible()
    
    return { asideVisible }
  }
}
</script>

<style lang='scss' scoped>
@import '../styles/media.scss';

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