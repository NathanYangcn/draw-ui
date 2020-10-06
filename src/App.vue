<template>
  <div>
    <p>导航：点击切换路由</p>
    <p>
      <router-link to='/'>test</router-link>
      |
      <router-link to='/demo'>demo</router-link>
    </p>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>
