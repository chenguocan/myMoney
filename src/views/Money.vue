<template>
  <div>
    {{this.recordList}}
    <Layout class-profix="layout">
      <Tags :data-source.sync="tags" @update:tag="onUpdateTag"></Tags>
      <Notes @update:value="onUpdateNotes"></Notes>
      <Types :data-type.sync="record.type"></Types>
      <NumberPad @update:Amount="onUpdateAmount" @submit="onSubmit"></NumberPad>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Tags from '@/components/Money/Tags.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import {Component} from 'vue-property-decorator';
import model from "@/model.ts";
const recordList=model.fetch();
@Component({
  components: {Tags, Types, Notes, NumberPad},
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  record: RecordItem = {
    amount:0,
    type:"-",
    notes: '',
    tags: [''],
  };
  recordList: RecordItem[]=recordList;
  onUpdateNotes(value: string) {
    console.log(value);
    this.record.notes = value;
  }

  onUpdateTag(value: string[]) {
    console.log(value);
    this.record.tags = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  onUpdateType(value: string) {
    this.record.type = value;
  }
  onSubmit(value: number){
    this.record.createAt=new Date();
    const record2=model.clone(this.record);
    this.recordList.push(record2);
    model.save(this.recordList);
  }
/*  createDate(){
    const date: Date=new Date();
    const year=date.getFullYear();
    const month=date.getMonth();
    const day=date.getDay();
    const hours=date.getHours();
    const minutes=date.getMinutes();
    const seconds=date.getSeconds();
    return year+"/"+month+"/"+day+"/"+hours+":"+minutes+":"+seconds;
  }*/
}
/*export default {
  name: "Money",
  components: {Tags,Types,Notes,NumberPad},
  data() {
    return {
      tags:['衣','食','住','行'],
    }
  },
}*/
</script>
<style>
.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>