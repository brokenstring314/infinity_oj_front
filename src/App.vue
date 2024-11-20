<script setup lang="ts"></script>

<template>
  <n-message-provider>

    <Transition name="fade">
      <router-view></router-view>
    </Transition>

  </n-message-provider>

</template>

<style scoped></style>
