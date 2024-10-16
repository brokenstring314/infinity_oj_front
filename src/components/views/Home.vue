<script setup lang="ts">
import Announcement from './Announcement.vue';
import CompetitionInformation from './CompetitionInformation.vue';
import SmallRankList from './SmallRankList.vue'
import HomeDiscuss from './HomeDiscuss.vue';
import HomeSearch from './HomeSearch.vue';
import OwnFrame from './OwnFrame.vue';
</script>

<template>
  <n-flex justify="space-between" class="pb-2">
    <main>
      <Announcement></Announcement>
      <CompetitionInformation></CompetitionInformation>
      <HomeDiscuss></HomeDiscuss>
    </main>
    <aside>
      <OwnFrame></OwnFrame>
      <HomeSearch></HomeSearch>
      <SmallRankList></SmallRankList>
    </aside>
  </n-flex>
</template>

<style scoped>
main {
  width: 40%;
}
</style>