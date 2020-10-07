<template>
  <div class="footer">
    <div class="footer-inner">
      <div class="copyright">Copyright</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  &-inner {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-top: 1px solid #999;
    height: 60px;
  }
}
</style>