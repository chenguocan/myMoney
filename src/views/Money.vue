<template>
  <div>
    <Layout class-profix="layout">
      <Tags :data-source.sync="tags"></Tags>
      <Notes></Notes>
      <Types></Types>
      <NumberPad></NumberPad>
    </Layout>
  </div>
</template>

<script lang="ts">

import Tags from "@/components/Money/Tags.vue";
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
export default {
  name: "Money",
  components: {Tags,Types,Notes,NumberPad},
  data() {
    return {
      tags:['衣','食','住','行'],
    }
  },
}
</script>
<style>
.layout-content{
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>