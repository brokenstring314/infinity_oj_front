<script setup lang="ts"></script>

<template>
  <n-message-provider>
    <div class="ml-16 mr-16">
      <Transition name="fade">
        <router-view></router-view>
      </Transition>
    </div>
  </n-message-provider>

</template>

<style scoped></style>
