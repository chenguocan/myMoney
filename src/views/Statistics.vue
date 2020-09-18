<template>
  <div>
    <Layout>
      <Tabs  :class-prefix="'type'" :date-source="recordType" :type.sync="type"></Tabs>
      <ol>
        <div v-if="groupList.length===0" class="noMessage">暂无记录</div>
        <li  v-else v-for="(group,index) in groupList" :key="index">
          <h3 class="title">{{beautify(group.title)}} <span>{{group.total}}</span></h3>
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
import dayjs from 'dayjs'
import clone from "@/lib/clone.ts"
@Component({
  components: {Tabs}
})
export default class Statistics extends Vue {
  beautify(string: string) {
    const day = dayjs(string);
    const now = dayjs();
    if (day.isSame(now, 'day')) {
      return '今天';
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (day.isSame(now, 'year')) {
      return day.format('M月D日');
    } else {
      return day.format('YYYY年M月D日');
    }
  }
  toStringTags(tags: Tag[]){
    return tags.length === 0 ? '无' :tags.join(',');
  }
  get recordList(){
    return this.$store.state.recordList;
  }

  get groupList(){
    const {recordList}=this;
    const newList = clone(recordList)
        .filter((r: { type: string }) => r.type === this.type)
        .sort((a: { createdAt: string | number | Date | dayjs.Dayjs | undefined }, b: { createdAt: string | number | Date | dayjs.Dayjs | undefined }) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
    if(newList.length===0){return []}
    type Result={title: string;total?: number;items: RecordItem[]}[]
    const result: Result=[{title:dayjs(newList[0].createdAt).format("YYYY-MM-DD"),items:[newList[0]]}]
    for(let i=1;i<newList.length;i++){
      const current=newList[i];
      const last=result[result.length-1];

      if(dayjs(last.title).isSame(current.createdAt,'day')){
          last.items.push(current);
      }else{
        result.push({title:dayjs(current.createdAt).format('YYYY-MM-DD'),items:[current]})
      }
    }
    result.map(group=>group.total=group.items.reduce((sum,item)=>{
          return sum+item.amount;
    },0)
    )
    return result;
  }
  type="-";
  dayType="day"
  recordType=recordList;
  created(){
   this.$store.commit("fetchRecords");
  }
}
</script>

<style lang="scss" scoped>
.noMessage{
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
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