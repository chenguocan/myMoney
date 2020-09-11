<template>
  <div>
    <label class="notes">
      <span class="name">{{noteName}}</span>
      <input type="text" :value="value"  @input="onValueChange($event.target.value)" :placeholder="placeholder"/>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  @Prop({default:""}) readonly value?: string;
  @Prop({required: true}) noteName!: string;
  @Prop({default:""}) placeholder?: string;
  onValueChange(value: string){
    this.$emit("update:value",value);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/style.scss";
@import "~@/assets/styles/reset.scss";

.notes {
  padding-left: 16px;
  font-size: 18px;
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