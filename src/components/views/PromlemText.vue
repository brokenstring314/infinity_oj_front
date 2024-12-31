<script lang="ts" setup>
import { createDiscreteApi } from 'naive-ui';
import MarkdownIt from 'markdown-it'
import mk from 'markdown-it-katex';
const markdown = new MarkdownIt()
markdown.use(mk);
const { message } = createDiscreteApi(["message"]);

const props = defineProps({
    inputExamples: String,
    outputExamples: String,
    input: {
        type: String,
        required: true
    },
    out: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    }
});
const exampleList: any = [
    { example_input: props.inputExamples, example_out: props.outputExamples }
]
const onCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
        message.success('复制成功')
    })
}

</script>

<template>
    <div class="px-10">
        <div class="mb-24">
            <h1>
                <slot name="title">
                    摆烂了
                </slot>
            </h1>
            <h4>
                时间限制:
                <slot name="timeLimit">

                </slot>
                ms
            </h4>
            <h4>
                空间限制:
                <slot name="memoryLimit">

                </slot>
                mb
            </h4>
        </div>
        <div class="mb-24">
            <h3>题目描述</h3>
            <slot name="detail"></slot>
            <div v-html="markdown.render(props.detail)"></div>
        </div>

        <div class="mb-24">
            <h3>题目输入</h3>
            <div v-html="markdown.render(props.input)"></div>
        </div>

        <div class="mb-24">
            <h3>题目输出</h3>
            <div v-html="markdown.render(props.out)"></div>
        </div>

        <div>
            <div v-for="(example, i) in exampleList" class="mb-12 p-2" style="background-color: #e2e8f0;">
                <h4>样例{{ i + 1 }}</h4>
                <div class="mb-10">
                    <n-flex justify="space-between">
                        <div>输入</div>
                        <n-button class="h-10" secondary type="info"
                            @click="onCopy(example.example_input)">复制</n-button>
                    </n-flex>
                    <div style="background-color: #f8fafc;">
                        <pre>{{ example.example_input }}</pre>
                    </div>
                </div>
                <div>
                    <n-flex justify="space-between">
                        <div>输出</div>
                        <n-button class="h-10" secondary type="info" @click="onCopy(example.example_out)">复制</n-button>
                    </n-flex>
                    <div style="background-color: #f8fafc;">
                        <pre>{{ example.example_out }}</pre>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<style scoped></style>