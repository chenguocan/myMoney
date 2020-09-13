<template>
  <div>
    <Layout>
      <div class="navBar">
        <Icon @click="goBack"  name="left" class="left"></Icon>
        <span>标签页</span>
        <div class="right"></div>
      </div>
      <div class="form-wrapper">
       <FormItem note-name="标签" placeholder="请输入标签名" @update:value="changeValue" :value="tag.name" ></FormItem>
      </div>
      <div class="button-wrapper">
         <Button @click="remove(tag.id)">删除标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/Money/FormItem.vue';
import Button from "@/components/Button.vue";
import store from "@/store/tagsStore"
@Component({
  components: {FormItem,Button}
})
export default class Edit extends Vue {
  tag?: { id: string ;  name: string } = undefined;
  created() {
    const tag=store.findTag(this.$route.params.id);
    if (tag) {
      this.tag=tag;
    } else {
      this.$router.replace('/404');
    }
  }
  changeValue(name: string){
    if(this.tag){
      store.updateTag(this.tag.id,name);
    }
  }
  remove(id: string){
    const status: boolean=store.removeTag(id);
    if(status){
      this.$router.back();
    }
  }
  goBack(){
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/style.scss";

.navBar {
  display: flex;
  align-items: center;
  font-size: 18px;
  justify-content: space-between;
  background: white;
  > .left {
    transform: scale(0.7);
  }
  >.right{
    width: 24px;
    height: 24px;
  }
}
.form-wrapper{
  background: white;
  margin-top:10px;
}
.button-wrapper{
  text-align: center;
  padding-top: 44px;
}
</style>