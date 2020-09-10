<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag.id" @click="toggle(tag)" :class="{selected:selectedTag.indexOf(tag)>=0}" >{{ tag.name }}</li>
    </ul>
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop,Watch} from 'vue-property-decorator';
import tagsListModel from '@/Models/tagsListModel';

@Component
export default class Tags extends Vue {
  @Prop(Array) readonly dataSource: string[] | undefined;
  selectedTag: string[]=[] ;
  toggle(tag: string){
    const index=this.selectedTag.indexOf(tag);
    if(index>=0){
      this.selectedTag.splice(index,1);
    }else{
      this.selectedTag.push(tag);
    }
  }

  create() {
    const name = window.prompt('请输入标签');
    if(name!==null){
      const message= tagsListModel.create(name);
      if(message==="duplicate"){
        window.alert("标签名重复");
      }else if(message==="ok"){
        window.alert("创建标签成功");
      }
    }else{
      window.alert("标签名为空");
    }
 /*   const name = window.prompt('请输入标签');
    if (name === '') {
      window.alert('标签不能为空字符串');
    } else if (this.dataSource) {
      this.$emit('update:dataSource', [...this.dataSource,name]);
    }*/
  }

  @Watch("selectedTag")
  onTagChange(value: string[]){
    this.$emit("update:tag",this.selectedTag);
  }

}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/style.scss";
@import "~@/assets/styles/reset.scss";

.tags {
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: white;
  > .current {
    display: flex;
    flex-wrap: wrap-reverse;
    overflow: auto;

    > li {
      $bg: #d9d9d9;
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;

      &.selected {
        color: white;
        background: darken($bg, 30%);
      }
    }
  }

  > .new {
    padding-top: 16px;

    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 5px;
    }
  }
}
</style>