<script setup lang="ts"></script>

<template>
    <div class="comframe">
        <n-flex justify="space-between">
            <div>
                <slot name="comTitle"></slot>
            </div>
            <div>
                <slot name="date"></slot>
            </div>
        </n-flex>
        <n-flex justify="space-between">
            <div>
                <slot name="organizer"></slot>
            </div>
            <div>
                <slot name="time"></slot>
            </div>
        </n-flex>
    </div>
</template>

<style scoped>
.comframe {
    width: 45%;
}
</style>