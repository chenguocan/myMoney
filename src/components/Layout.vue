<template>
  <div>
    <div class="nav-wrapper">
      <div class="content" :class="classProfix && `${classProfix}-content`">
        <slot></slot>
      </div>
      <Nav />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props:["classProfix"],
  name: "Layout"
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  .content {
    flex-grow: 1;
    overflow: auto;
  }
}
</style>