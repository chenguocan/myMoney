<template>
  <div class="nav-wrapper">
    <div class="content">
      <p>我是记账本</p>
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
export default {
  name: "Money",
}
</script>

<style lang="scss" scoped>
.nav-wrapper{
  height: 100vh;
  width:100vw;
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  .content{
    flex-grow: 1;
    overflow: auto;
  }
}
</style>