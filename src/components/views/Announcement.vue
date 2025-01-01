<script setup lang="ts">
import { onMounted } from 'vue';
import { getSimpleAnnouncementList } from '../../api/announce'
import { Ref, ref } from 'vue'
const isLoadFinish: Ref<boolean> = ref(false)
const announcementList: any = ref([])

import MarkdownIt from 'markdown-it'
import mk from 'markdown-it-katex';
const markdown = new MarkdownIt()
markdown.use(mk);
const getAnnouncementList = async () => {
  isLoadFinish.value = false
  announcementList.value = await (await getSimpleAnnouncementList()).data
  console.log((await getSimpleAnnouncementList()).data)
  isLoadFinish.value = true
}
getAnnouncementList()
</script>

<template>

  <n-card title="公告" class="shadow-md">
    <div v-for="announcement in announcementList" class="mb-10" id="announcementHover">
      <n-flex justify="space-between" align="center">
        <div>
          <h3 class="mb-2 mt-2">{{ announcement.mainTitle }}</h3>
        </div>
        <div>{{ announcement.author }}</div>
      </n-flex>
      <n-flex justify="space-between" align="center" class="mb-4">
        <div>
          <h4 class="mt-2 mb-2">{{ announcement.subTitle }}</h4>
        </div>
        <div>{{ new Date(announcement.createdAt).toLocaleString() }}</div>
      </n-flex>
      <div id="textHidden" v-html="markdown.render(announcement.content)"></div>
    </div>
  </n-card>
</template>

<style scoped>
#textHidden {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-indent: 2em;
}

#announcementHover:hover {
  cursor: pointer;
}
</style>