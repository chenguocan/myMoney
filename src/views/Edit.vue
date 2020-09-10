<template>
  <div>
    <Layout>
      <div class="navBar">
        <Icon  name="left" class="left"></Icon>
        <span>标签页</span>
        <div class="right"></div>
      </div>
      <div class="form-wrapper">
       <FormItem note-name="标签" placeholder="请输入标签名" ></FormItem>
      </div>
      <div class="button-wrapper">
         <Button>删除标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagsListModel from '@/Models/tagsListModel';
import FormItem from '@/components/Money/FormItem.vue';
import Button from "@/components/Button.vue";
@Component({
  components: {FormItem,Button}
})
export default class Edit extends Vue {


  created() {
    const tagList = tagsListModel.fetch();
    const id = this.$route.params.id;
    const tag = tagList.filter(item => item.id === id)[0];
    if (tag) {
      console.log(id);
    } else {
      this.$router.replace('/404');
    }
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