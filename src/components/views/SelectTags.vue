<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
    name: String,
    isSelect: Boolean
});

// const isSelect: Ref<boolean> = ref(false)

const emit = defineEmits(['changeTags'])

const changeTags = () => {
    emit('changeTags', props.name)
}

</script>

<template>

    <n-tag class="mr-2" v-if="!props.isSelect" @click="changeTags()">{{ props.name }}</n-tag>
    <n-tag class="mr-2" v-else type="info" closable @close="changeTags()">
        {{ props.name }}
    </n-tag>

</template>


<style scoped></style>