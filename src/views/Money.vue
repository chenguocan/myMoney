<template>
  <div>
    <Layout class-profix="layout">
      <Tags></Tags>
      <Notes></Notes>
      <Types></Types>
      <NumberPad></NumberPad>
    </Layout>
  </div>
</template>

<script lang="ts">

import Tags from "@/components/Tags.vue";
import Types from '@/components/Types.vue';
import Notes from '@/components/Notes.vue';
import NumberPad from '@/components/NumberPad.vue';
export default {
  name: "Money",
  components: {Tags,Types,Notes,NumberPad},
  data() {
    return {
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