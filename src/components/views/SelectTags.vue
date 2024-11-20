<script lang="ts" setup>
import { defineProps } from 'vue';
import { useQuestionStore } from '../../store/index.ts'
import { tagStateRealize } from '../../../types/OutTypes.ts'
const props = defineProps({
    tag: {
        type: Object as () => tagStateRealize,
        required: true
    },
});
const questionStore = useQuestionStore()
</script>

<template>

    <n-tag class="mr-2" v-if="!questionStore.isTag(props.tag)" @click="questionStore.addTag(props.tag)">{{
        props.tag.tagName
    }}</n-tag>
    <n-tag class="mr-2" v-else type="info" closable @close="questionStore.delectTag(props.tag)">
        {{ props.tag.tagName }}
    </n-tag>

</template>


<style scoped></style>