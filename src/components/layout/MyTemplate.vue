<script lang="ts" setup>
import HeaderMenuTabs from './HeaderMenuTabs.vue';
import HeaderSiteName from './HeaderSiteName.vue';
import UserAvatar from './UserAvatar.vue';
import { useroutesStore } from '../../store/index'
const routeStore = useroutesStore()
</script>

<template>
    <n-layout class="h-full">
        <n-layout-header>
            <n-grid x-gap="12" :cols="12" item-responsive>
                <n-grid-item span="2">
                    <header-site-name class="h-full"></header-site-name>
                </n-grid-item>
                <n-grid-item span="7">
                    <HeaderMenuTabs class="flex flex-col justify-center h-full"></HeaderMenuTabs>
                </n-grid-item>
                <n-grid-item span="3">
                    <user-avatar class="min-w-25 h-full"
                        content-style="padding: 8px;display: flex;align-items: center;justify-content: space-evenly;"></user-avatar>
                </n-grid-item>
            </n-grid>
        </n-layout-header>
        <n-layout-content>
            <Transition name="fade">
                <router-view></router-view>
            </Transition>
        </n-layout-content>
        <n-back-top :right="100" v-if="routeStore.routerName === 'questionBank'" />
    </n-layout>
</template>

<style scoped></style>