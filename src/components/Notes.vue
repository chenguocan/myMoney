<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="在这里输入备注"/>
    </label>
  </div>
</template>

<script lang="ts">
export default {
name: "Notes"
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/style.scss";
@import "~@/assets/styles/reset.scss";
.notes{
  padding-left:16px;
  font-size: 14px;
  display: block;
  display: flex;
  align-items: center;
  background: #f5f5f5;
  .name{
    padding-right: 16px;
  }
  input{
    height: 64px;
    flex-grow: 1;
    background:transparent;
    border:none;
    padding-right: 16px;
  }
}
</style>