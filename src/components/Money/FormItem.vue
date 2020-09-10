<template>
  <div>
    <label class="notes">
      <span class="name">{{noteName}}</span>
      <input type="text" v-model="value" @input="onValueChange" :placeholder="placeholder"/>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch,Prop} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  value = '';
  @Prop({required: true}) noteName!: string;
  @Prop({default:""}) placeholder?: string;
  onValueChange(){
    this.$emit("update:value",this.value);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/style.scss";
@import "~@/assets/styles/reset.scss";

.notes {
  padding-left: 16px;
  font-size: 14px;
  display: block;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 36px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>