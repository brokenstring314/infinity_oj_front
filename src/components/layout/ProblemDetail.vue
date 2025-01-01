<script lang="ts" setup>
import { MenuOption, NIcon } from 'naive-ui'
import { h, onMounted, ref, Ref } from 'vue'
import { RouterLink, useRoute } from "vue-router";
import { BookmarkOutline, CaretDownOutline } from '@vicons/ionicons5'
import PromlemText from '../views/PromlemText.vue'
import CodeEditor from '../views/CodeEditor.vue'
import { getProblemService } from '../../api/question'
//使用路由
const route = useRoute()
//菜单是否打开
const collapsed: Ref<boolean> = ref(true)
//菜单信息
const menuOptions: MenuOption[] = [
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/'
                    }
                },
                { default: () => '题目' }
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
                { default: () => '记录' }
            ),
        key: 'questionBank',
    }
]

const renderMenuIcon = (option: MenuOption) => {
    // 渲染图标占位符以保持缩进
    if (option.key === 'sheep-man')
        return true
    // 返回 falsy 值，不再渲染图标及占位符
    if (option.key === 'food')
        return null
    return h(NIcon, null, { default: () => h(BookmarkOutline) })
}
const expandIcon = () => {
    return h(NIcon, null, { default: () => h(CaretDownOutline) })
}
const isLoading: Ref<boolean> = ref(false)
const data = ref()
onMounted(async () => {
    isLoading.value = false
    data.value = await (await getProblemService(route.params.id)).data
    console.log(data.value)
    isLoading.value = true
})
</script>

<template>
    <n-layout has-sider>
        <n-layout-sider bordered collapse-mode="width" :collapsed-width="50" :width="150" :collapsed="collapsed"
            show-trigger @collapse="collapsed = true" @expand="collapsed = false">
            <n-menu :collapsed="collapsed" :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions"
                :render-icon="renderMenuIcon" :expand-icon="expandIcon" />
        </n-layout-sider>
        <n-layout-content>
            <n-split direction="horizontal" :max="0.75" :min="0.25">
                <template #1>
                    <n-scrollbar>
                        <Spin v-if="!isLoading"></Spin>

                        <PromlemText :input-examples="data.inputExamples" :output-examples="data.outputExamples"
                            :input="data.input" :out="data.output" :detail="data.description" v-else>
                            <template #title>{{ data.title }}</template>
                            <template #timeLimit>{{ data.timeLimit }}</template>
                            <template #memoryLimit>{{ data.memoryLimit }}</template>
                        </PromlemText>
                    </n-scrollbar>
                </template>
                <template #2>
                    <CodeEditor style="height: 100%;" ></CodeEditor>
                </template>
            </n-split>
        </n-layout-content>
    </n-layout>
</template>
<style scoped></style>