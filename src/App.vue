<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <Test />
  <hr>
  <div>
    <p>导航：点击切换路由</p>
    <p>
      <router-link to='/'>test</router-link>
      <span>&nbsp|&nbsp</span>
      <router-link to='/demo'>demo</router-link>
    </p>
  </div>
  <router-view />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Test
  }
}
</script>
