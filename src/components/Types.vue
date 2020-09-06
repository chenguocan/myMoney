<template>
  <div>
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Types'
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/style.scss";
@import "~@/assets/styles/reset.scss";
.types{
  background:#c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  li{
    width: 50vw;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after{
      content:"";
      display:block;
      position: absolute;
      width: 100%;
      left: 0;
      bottom:0;
      height: 4px;
      background: #333333;
    }
  }
}
</style>