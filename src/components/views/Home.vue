<script setup lang="ts">
import Announcement from './Announcement.vue';
import CompetitionInformation from './CompetitionInformation.vue';
import SmallRankList from './SmallRankList.vue'
</script>

<template>
  <n-flex>
    <main>
      <Announcement></Announcement>
      <CompetitionInformation></CompetitionInformation>
    </main>
    <aside>
      <SmallRankList></SmallRankList>
    </aside>
  </n-flex>
</template>

<style scoped>
main {
  width: 40%;
}
</style>