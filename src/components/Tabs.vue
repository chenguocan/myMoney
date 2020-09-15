<template>
  <div>
    <ul class="tabs">
      <li v-for="item in dateSource" :key="item.value"
      :class="profixClass(item)"  @click="changeType(item)">{{item.text}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import {Component, Prop} from 'vue-property-decorator';
type dataSourceItem={
  text: string;
  value: string;
}
@Component
export default  class Tabs extends Vue{
    @Prop(Array) dateSource?: dataSourceItem[];
    @Prop(String) type!: string;
    @Prop(String) classPrefix?: string;
    changeType(item: dataSourceItem){
        this.$emit("update:type",item.value);
    }
    profixClass(item: dataSourceItem){
      return {[this.classPrefix + '-tabs-item']:this.classPrefix,selected:this.type===item.value}
    }
}
</script>

<style lang="scss" scoped>
.tabs {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  li {
    width: 50vw;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
      height: 4px;
      background: #333333;
    }
  }
}
</style>