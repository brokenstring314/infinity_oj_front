<script setup lang="ts">
import * as monaco from 'monaco-editor'
import { onMounted, ref, Ref, toRaw } from 'vue'
import { useResizeObserver } from "@vueuse/core";
import { submitProblemService, getSubmissionService } from '../../api/question'
import { useRoute } from 'vue-router';
import { outMsgColor } from '../../utils/OutMessage'
const route = useRoute();
const editorContainer = ref<any>(null)
const editor = ref<any>(null)
onMounted(() => {
    editor.value = monaco.editor.create(editorContainer.value, {
        value: "test",
        language: "java",
        theme: 'vs-dark',
        folding: true, // 是否折叠
        foldingHighlight: true, // 折叠等高线
        foldingStrategy: "indentation", // 折叠方式  auto | indentation
        showFoldingControls: "always", // 是否一直显示折叠 always | mouseover
        disableLayerHinting: true, // 等宽优化
        emptySelectionClipboard: false, // 空选择剪切板
        selectionClipboard: false, // 选择剪切板
        automaticLayout: true, // 自动布局
        codeLens: false, // 代码镜头
        scrollBeyondLastLine: false, // 滚动完最后一行后再滚动一屏幕
        colorDecorators: true, // 颜色装饰器
        accessibilitySupport: "on", // 辅助功能支持  "auto" | "off" | "on"
        lineNumbers: "on", // 行号 取值： "on" | "off" | "relative" | "interval" | function
        lineNumbersMinChars: 5, // 行号最小字符   number
        readOnly: false, //是否只读  取值 true | false
    })



})

const options: any = [
    {
        label: 'C++',
        value: 'C++',
    },
    {
        label: 'Java',
        value: 'Java',
    }
]

const language: Ref<string> = ref('Java')

const showResult: Ref<boolean> = ref(false)

const fixedWidth: Ref<string> = ref('140px')

const divDom = ref(null)

const result: Ref<string | null> = ref(null)

const resultColor: Ref<string> = ref('#94a3b8')


useResizeObserver(divDom, (entries: any) => {
    const entry = entries[0]
    const { width } = entry.contentRect
    fixedWidth.value = `${width}px`
})


const onSubmit = async () => {
    result.value = "正在评测..."
    showResult.value = false
    const data = await submitProblemService(route.params.id, language.value, btoa(toRaw(editor.value).getModel().getValue()))
    console.log(data.data)
    setTimeout(() => { }, 1000)
    const submissionData = (await getSubmissionService(data.data)).data
    console.log(submissionData)
    resultColor.value = outMsgColor(submissionData.numberOfDependents)
    showResult.value = true


}
</script>

<template>
    <div ref="divDom" class="p-5 h-full">
        <div class="flex items-center mb-4">
            <span class="mr-5">选择语言:</span>
            <n-select v-model:value="language" :options="options" class="w-50" />
        </div>

        <div ref="editorContainer" style="min-height: 90%;"></div>

        <n-flex justify="space-between" align="center" class="h-16" :style="{ 'width': fixedWidth }">

            <div v-if="result" :style="{ background: resultColor }" class="p-1">
                {{ result }}
            </div>
            <div v-else></div>
            <n-button type='success' @click="onSubmit">提交</n-button>
        </n-flex>
    </div>

</template>

<style scoped>
.n-flex {
    background-color: #f8fafc;
    position: fixed;
    bottom: 0;
    z-index: 1000;
}
</style>
