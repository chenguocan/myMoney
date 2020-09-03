<template>
  <div class="nav">
    <router-link to="/Labels">标签</router-link>|
    <router-link to="/Money">记账</router-link>|
    <router-link to="/statistics">统计</router-link>
  </div>
</template>

<script lang="ts">
export default {
name: "Nav.vue"
}
</script>

<style lang="scss" scoped>
.nav{
  border:1px solid red;
}
</style>