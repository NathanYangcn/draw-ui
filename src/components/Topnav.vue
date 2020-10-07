<template>
  <div class="topnav">
    <div class="topnav-inner">
      <div class="toggle-aside">三</div>
      <div class="logo">draw ui</div>
      <div class="actions">
        <router-link to='/'>Home</router-link>
        |
        <router-link to='/doc'>Doc</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/media.scss';

// 默认 PC
.topnav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: #fff;
  &-inner {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #999;
    height: 60px;
    font-weight: bolder;
    font-style: italic;
  }
}
.toggle-aside {
  display: none;
  position: absolute;
  left: 10px;
  font-style: normal;
}

// media phone
@include phone {
  .topnav-inner {
    justify-content: center;
    .actions {
      display: none;
    }
  }
  .toggle-aside {
    display: block;
  }
}
</style>