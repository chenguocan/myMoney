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

import Tags from "@/components/Money/Tags.vue";
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
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