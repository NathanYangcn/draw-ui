<template>
  <div>
    <p>导航：点击切换路由</p>
    <p>
      <router-link to='/'>Home</router-link>
      |
      <router-link to='/doc'>Doc</router-link>
    </p>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>
