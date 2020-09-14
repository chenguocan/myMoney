<template>
  <div class="nav-wrapper">
    <Layout>
      <ol class="tags">
        <router-link :to="`/labels/edit/${tag.id}`" class="tag" v-for="tag in tags" :key="tag.id"><span>{{tag.name}}</span>
          <Icon class="rightTag" name="right"></Icon></router-link>
      </ol>
      <div class="createTag-wrapper">
        <Button class="createTag" @click="createTag">新增标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">

import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import {mixins} from 'vue-class-component';
import tagHelper from "@/mixins/tagHelper.ts"

@Component({
  components: {Button},
})
export default class Labels extends mixins(tagHelper){
  get tags() {
    return this.$store.state.tagList;
  }
  created() {
    this.$store.commit('fetchTags');
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