<template>
  <div>
    <div class="nav-wrapper">
      <div class="content">
        <slot></slot>
      </div>
      <Nav />
    </div>
  </div>
</template>

<script lang="ts">
export default {
name: "Layout"
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  height: 100vh;
  width: 100vw;
  border: 1px solid green;
  display: flex;
  flex-direction: column;

  .content {
    flex-grow: 1;
    overflow: auto;
  }
}
</style>