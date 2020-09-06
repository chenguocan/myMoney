<template>
  <nav>
    <router-link to="/labels" class="item" active-class="selected" ><Icon  name="labels"/>标签</router-link>
    <router-link to="/money" class="item" active-class="selected"><Icon name="money"/>记账</router-link>
    <router-link to="/statistics" class="item" active-class="selected"><Icon name="statistics"/>统计</router-link>
  </nav>
</template>

<script lang="ts">
const importAll=(requireContext: __WebpackModuleApi.RequireContext)=>requireContext.keys().forEach(requireContext);
try{
  importAll(require.context("../assets/icons",true, /\.svg$/));
}catch (error){
  console.log(error);
}

export default {
name: "Nav.vue"
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/style.scss";
nav{
  display: flex;
  @extend %outerShadow;
  justify-content:space-around;
  > .item{
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top:5px;
     &.selected{
      color:red;
    }
  }
}
</style>