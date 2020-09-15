<template>
  <div>
    <Layout>
      <Tabs :date-source="typeList" :type.sync="type"></Tabs>
      <Tabs :class-prefix="'type'" :date-source="intervalList" class="day" :type.sync="dayType"></Tabs>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';

@Component({
  components: {Tabs}
})
export default class Statistics extends Vue {
  type="-";
  dayType="day"
  typeList = [
    {
      text: '支出',
      value: '-'
    },
    {
      text:"收入",
      value:"+"
    }
  ];
  intervalList=[
    {
      text:"按天",
      value:"day",
    },
    {
      text:"按周",
      value:"week",
    },
    {
      text:"按月",
      value:"month",
    }
  ]
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
</style>