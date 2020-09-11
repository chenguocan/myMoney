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

const recordList=recordListModel.fetch();
@Component({
  components: {Tags, Types, FormItem, NumberPad},
})
export default class Money extends Vue {
  tags=window.tagList;
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
  onSubmit(){
    recordListModel.create(this.record);
  }
  @Watch("recordList")
  onRecordListChange(){
    recordListModel.save();
  }
}

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