<template>
  <div>
    <Layout class-profix="layout">
      <Tags :data-source.sync="tags" @update:tag="onUpdateTag"></Tags>
      <div class="notes">
          <FormItem note-name="备注" placeholder="请输入备注"    @update:value="onUpdateNotes"></FormItem>
      </div>
      <Types :data-type.sync="record.type"></Types>
      <NumberPad @update:Amount="onUpdateAmount" @submit="onSubmit"></NumberPad>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Tags from '@/components/Money/Tags.vue';
import Types from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/FormItem.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import {Component, Watch} from 'vue-property-decorator';
import recordListModel from "@/Models/recordListModel";
import tagsListModel from '@/Models/tagsListModel';
const recordList=recordListModel.fetch();
const tagList=tagsListModel.fetch();
@Component({
  components: {Tags, Types, FormItem, NumberPad},
})
export default class Money extends Vue {
  tags = tagList.map(item => item.name);
  record: RecordItem = {
    amount:0,
    type:"-",
    notes: '',
    tags: [''],
  };
  recordList: RecordItem[]=recordList;
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateTag(value: string[]) {
      this.record.tags=value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  onUpdateType(value: string) {
    this.record.type = value;
  }
  onSubmit(value: number){
    this.record.createAt=new Date();
    const record2=recordListModel.clone(this.record);
    this.recordList.push(record2);
  }
  @Watch("recordList")
  onRecordListChange(){
    console.log("12312");
    recordListModel.save(this.recordList);
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
<style >
.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

}
.notes{
  padding:10px 0;
}

</style>