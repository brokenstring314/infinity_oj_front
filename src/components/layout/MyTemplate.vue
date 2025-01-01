<script lang="ts" setup>
import HeaderMenuTabs from './HeaderMenuTabs.vue';
import HeaderSiteName from './HeaderSiteName.vue';
import UserAvatar from './UserAvatar.vue';
import { useroutesStore } from '../../store/index'
const routeStore = useroutesStore()
</script>

<template>
    <div class="h-full flex flex-col">
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
        <Transition name="fade">
            <router-view></router-view>
        </Transition>    
        <n-back-top :right="50" visibility-height="40" v-if="routeStore.routerName != 'ProblemDetail'" />
    </div>
    <!-- <n-back-top :right="100" v-if="routeStore.routerName === 'questionBank'" /> -->

</template>

<style scoped></style>