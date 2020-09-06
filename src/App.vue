<template>
  <div>
    <div id="app">
      <router-view/>
    </div>
  </div>
</template>
<style lang="scss">
@import "~@/assets/styles/reset.scss";
@import "~@/assets/styles/style.scss";
body{
  font-family: $font-hei;
  line-height: 1.5;
  font-size: 16px;
}
#app{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:#333;
}

</style>
