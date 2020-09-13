<template>
  <div class="nav-wrapper">
    <Layout>
      <ol class="tags">
        <router-link :to="`/labels/edit/${tag.id}`" class="tag" v-for="tag in tags" :key="tag.id"><span>{{tag.name}}</span><Icon class="rightTag" name="right"></Icon></router-link>
      </ol>
      <div class="createTag-wrapper">
        <Button class="createTag" @click="createNewTag">新增标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import store from "@/store/tagsStore"
@Component({
  components: {Button}
})
export default class Labels extends Vue{
      //tags=window.tagList;
      tags=store.tagList;
      createNewTag(){
        const name=window.prompt("请输入标签名");
        if(name){
          store.createTag(name);
        }else{
          window.alert("请输入正确标签");
        }
      }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/style.scss";
.tags{
  color:$font-hei;
  font-size: 18px;
  padding-left: 16px;
  padding-right: 16px;
  background:white;
  >.tag{
    border-bottom: 1px solid #e6e6e6;
    min-height: 44px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    >.rightTag{
      transform: scale(0.7);
    }
  }
}
.createTag {
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>