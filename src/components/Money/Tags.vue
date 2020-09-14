<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id" @click="toggle(tag)" :class="{selected:selectedTag.indexOf(tag)>=0}" >{{ tag.name }}</li>
    </ul>
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import store from "@/store"
import {mixins} from 'vue-class-component';
import tagHelper from '@/mixins/tagHelper';
@Component
export default class Tags extends mixins(tagHelper) {
  //tagList=store.fetchTags();
  get tagList(){
    return store.state.tagList;
  }
  selectedTag: string[]=[] ;

  toggle(tag: string){
    const index=this.selectedTag.indexOf(tag);
    if(index>=0){
      this.selectedTag.splice(index,1);
    }else{
      this.selectedTag.push(tag);
    }
    this.$emit("update:selectedTag",this.selectedTag);
  }

  created(){
    store.commit("fetchTags");
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