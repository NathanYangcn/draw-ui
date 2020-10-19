<template>
  <aside class="aside" v-if="asideVisible">
    <ul>
      <li>侧边栏</li>
    </ul>
  </aside>
</template>

<script lang='ts'>
import { inject, onMounted, onBeforeUnmount, Ref } from 'vue'
import { debounce } from '../utils'
const deviceScreenWidthLimit = 500
export default {
  setup () {
    let asideVisible = inject<Ref<boolean>>('asideVisible') // inject ≈ vue.get()
    const initAsideVisible = () => {
      // 防抖函数
      debounce(() => {
        const docPageScreenWidth = document.documentElement.clientWidth;
        asideVisible.value = docPageScreenWidth <= deviceScreenWidthLimit ? false : true
      }, 250)()
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
</style>