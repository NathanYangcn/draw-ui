<template>
  <router-view />
</template>

<script>
import { provide, ref } from 'vue'
import { router } from './routers'

export default {
  name: 'App',
  setup () {
    const asideVisible = ref(false) // ref() 创建一个响应式对象，通过 .value 获取该值
    provide('asideVisible', asideVisible) // provide ≈ vue.set()
    router.afterEach(() => {
      console.log('router afterEach')
    })
  }
}
</script>
