<script setup lang="ts">
import {defineComponent, h, ref, Component} from 'vue'
import {MenuOption} from "naive-ui";
import {RouterLink} from "vue-router";

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
    key: 'go-home',
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
    key: 'go-questionBank',
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
    key: 'go-questionSubmitRecord',
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
</script>

<template>
  <div class="flex flex-col center" id="test">
    <n-menu
        class="h-full"
        v-model:value="activeKey"
        mode="horizontal"
        :options="menuOptions"
        responsive
        watch-props
        on-update:value
    />
  </div>
</template>

<style scoped>

</style>