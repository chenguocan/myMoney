<template>
  <div>
    <Layout>
      <Tabs  :class-prefix="'type'" :date-source="recordType" :type.sync="type"></Tabs>
      <Tabs  :class-prefix="'interval'" :date-source="intervalList" class="day" :type.sync="dayType"></Tabs>
      <ol>
        <li v-for="(group,index) in result" :key="index">
          <h3 class="title">{{group.title}}</h3>
          <ol>
            <li class="record" v-for="item in group.items" :key="item.id">
             <span>{{toStringTags(item.tags)}}</span> <span class="note">{{item.notes}}</span><span>￥{{item.amount}}</span>
            </li>
          </ol>
        </li>
      </ol>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import recordList from '@/constant/recordList';
import intervalList from '@/constant/intervalList';

@Component({
  components: {Tabs}
})
export default class Statistics extends Vue {
  toStringTags(tags: Tag[]){
    console.log(tags);
    return tags.length === 0 ? '无' :tags.join(',');
  }
  get recordList(){
    return this.$store.state.recordList;
  }

  get result(){
    const {recordList}=this;
    type HashTableValue={ title: string;items: RecordItem[]};
    const hashTable: {[key: string]: HashTableValue}={};
    for(let i=0;i<recordList.length;i++){
      const date=recordList[i].createdAt.split("T")[0];
      const time=recordList[i].createdAt.split("T")[1];
      hashTable[date]=hashTable[date]||{title:date,items:[]};
      hashTable[date].items.push(recordList[i]);
      console.log(hashTable);
    }
    return hashTable;
  }
  type="-";
  dayType="day"
  recordType=recordList;
  intervalList=intervalList;

  created(){
    console.log(this.result)
   this.$store.commit("fetchRecords");
  }
}
</script>

<style lang="scss" scoped>
::v-deep .type-tabs-item {
  background: #C4C4C4;
  &.selected {
    background: white;
    &::after {
      visibility: hidden;
    }
  }
}
::v-deep .interval-tabs-item{
  height: 48px !important;
}
%item{
  padding: 8px 16px;
  display: flex;
  line-height: 24px;
  justify-content: space-between;
  align-items: center;
}
.title{
  @extend %item;
}
.record{
  background: white;
  @extend %item;
}
.note{
  margin-right: auto;
  margin-left: 16px;
  color:#999;
}
</style>