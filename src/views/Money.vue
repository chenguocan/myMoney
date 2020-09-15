<template>
  <div>
    <Layout class-profix="layout">
      <Tags v-on:update:selectedTag="tags=$event"></Tags>
      <div class="notes">
        <FormItem note-name="备注" placeholder="请输入备注" @update:value="onUpdateNotes"></FormItem>
      </div>
      <Tabs  :date-source="recordType" :type.sync="record.type" ></Tabs>
      <NumberPad @update:Amount="onUpdateAmount" @submit="onSubmit"></NumberPad>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Tags from '@/components/Money/Tags.vue';
import FormItem from '@/components/Money/FormItem.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import recordList from '@/constant/recordList';
@Component({
  components: {Tabs, Tags, FormItem, NumberPad},
})
export default class Money extends Vue {
  //tags=window.tagList;
  //tags = oldStore.tagList;
  recordType=recordList;
  tags=[];
  record: RecordItem = {
    amount: 0,
    type: '-',
    notes: '',
    tags: [],
  };

  get recordList(){
    return this.$store.state.recordList;
  }
  //recordList: RecordItem[]=oldStore.recordList;//recordList复制到recordList
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  onUpdateType(value: string) {
    this.record.type = value;
  }

  onSubmit() {
      this.record.tags=this.tags.map((item: Tag)=>item.name);
      this.$store.commit("createRecord",this.record);
  }

  created(){
    this.$store.commit("fetchRecords");
    this.$store.commit("fetchTags");
  }
}

</script>
<style>
.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

}

.notes {
  padding: 10px 0;
}

</style>