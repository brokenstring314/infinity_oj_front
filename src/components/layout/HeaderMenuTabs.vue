<script setup lang="ts">
import {defineComponent, h, ref, Component} from 'vue'
import {MenuOption} from "naive-ui";
import {RouterLink} from "vue-router";
import {useroutesStore} from '../../store/RoutesStore/RoutesStore.ts'



const menuOptions: MenuOption[] = [
  // {
  //   label: () =>
  //       h(
  //           RouterLink,
  //           {
  //             to: {
  //               name: 'test',
  //               params: {
  //                 lang: 'zh-CN'
  //               }
  //             }
  //           },
  //           {default: () => '回家'}
  //       ),
  //   key: 'hear-the-wind-sing',
  // },
  {
    label: () =>
        h(
            RouterLink,
            {
              to: {
                path: '/'
              }
            },
            { default: () => '首页' }
        ),
    key: 'home',
  },
  {
    label: () =>
        h(
            RouterLink,
            {
              to: {
                path: '/questionBank'
              }
            },
            { default: () => '题库' }
        ),
    key: 'questionBank',
  },
  {
    label: () =>
        h(
            RouterLink,
            {
              to: {
                path: '/questionSubmitRecord'
              }
            },
            { default: () => '提交记录' }
        ),
    key: 'questionSubmitRecord',
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  }
]


let routesStore=useroutesStore()

</script>

<template>
  <div>{{routesStore.routerName}}</div>
  <div class="flex flex-col center" id="test">
    <n-menu
        class="h-full"
        mode="horizontal"
        :value="routesStore.routerName"
        :options="menuOptions"
        responsive
        watch-props

    />
  </div>
</template>

<style scoped>

</style>