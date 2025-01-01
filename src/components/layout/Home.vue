<script setup lang="ts">
import Announcement from '../views/Announcement.vue';
import CompetitionInformation from '../views/CompetitionInformation.vue';
import SmallRankList from '../views/SmallRankList.vue'
import HomeDiscuss from '../views/HomeDiscuss.vue';
import HomeSearch from '../views/HomeSearch.vue';
import OwnFrame from '../views/OwnFrame.vue';
</script>

<template>
  <n-flex justify="center" class="pb-2 px-32 mt-8">
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
  width: 50%;
}
</style>