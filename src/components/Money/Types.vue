<template>
  <div>
    <ul class="types">
      <li :class="dataType==='-' ? 'selected' : 'false'"  @click="selectType('-')">支出</li>
      <li :class="dataType==='+' ? 'selected' : 'false  '" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,Prop} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  @Prop(String) dataType!: string;
  type = this.dataType; //"-"为支出,"+"为收入
  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('');
    }
    this.$emit("update:dataType",type);
  }
}
/*export default {
  name: 'Types',
  props:['xxx'],
  data(){
    return {
      type: "-" //"-"为支出,"+"为收入
    }
  },
  methods:{
    selectType(type: string){
      if(type!=="-" && type!=="+"){
        throw new Error ("")
      }
      this.type=type;
    }
  },
  mounted() {
    console.log(this.xxx);
  }
};*/
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/style.scss";
@import "~@/assets/styles/reset.scss";

.types {
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