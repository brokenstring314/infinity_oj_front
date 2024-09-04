<script setup lang="ts">

import BackTop from "./components/layout/BackTop.vue";
import UserAvatar from "./components/layout/UserAvatar.vue";
import HeaderIcon from "./components/layout/HeaderSiteName.vue";
import HeaderMenuTabs from "./components/layout/HeaderMenuTabs.vue";
import HeaderSiteName from "./components/layout/HeaderSiteName.vue";
</script>

<template>
  <!--  <router-link class="w-100 h-420 bg-gray block" to="/hello">-->
  <!--  </router-link>-->
  <!--  <router-link class="w-100 h-20 bg-amber block" to="/test">-->
  <!--  </router-link>-->
  <!--  <router-link class="w-100 h-20 bg-sky block" to="/editor">-->
  <!--  </router-link>-->
  <!--  <router-view></router-view>-->
  <!--  <div class="flex flex-row justify-between">-->
  <!--    -->
  <!--  </div>-->
  <!--  <n-flex justify="space-around" style="height: 64px; padding: 4px" bordered>-->

  <!--  </n-flex>-->
  <n-layout class="h-full">
    <n-layout-header class="h-auto">
      <n-grid x-gap="12" :cols="12" item-responsive>
        <n-grid-item span="2 450:2 600:3 768:2 880:2 1150:2">
          <header-site-name class="h-full"></header-site-name>
        </n-grid-item>
        <n-grid-item span="7 450:8 600:7 768:6 880:6 1150:7">
          <HeaderMenuTabs class="flex flex-col justify-center h-full"></HeaderMenuTabs>
        </n-grid-item>
        <n-grid-item span="3 450:2 600:2 768:4 880:4 1150:3">
          <user-avatar  class="min-w-25 h-full"
                       content-style="padding: 8px;display: flex;align-items: center;justify-content: space-evenly;"></user-avatar>
        </n-grid-item>
      </n-grid>
    </n-layout-header>
    <n-layout-content class="ml-16 mr-16" >
      <router-view></router-view>
    </n-layout-content>
    <n-back-top :right="100"/>
  </n-layout>
</template>

<style scoped>

</style>
