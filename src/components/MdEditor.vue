<script setup lang="ts">
import Vditor from "vditor";
import {ref, onMounted} from "vue";
import 'vditor/dist/index.css';

const contentEditor = ref();
onMounted(() => {
  contentEditor.value = new Vditor("vditor", {
    height: 560,
    toolbarConfig: {
      pin: true
    },
    cache: {
      enable: false,
    },
    after: () => {
      contentEditor.value.setValue("hello,Vditor+Vue!");
    },
  });
});
</script>

<template>
  <div id="vditor">

  </div>
</template>

<style scoped>

</style>