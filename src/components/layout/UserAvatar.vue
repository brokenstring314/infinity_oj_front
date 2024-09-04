<script setup lang="ts">
import {MessageOne, Logout} from '@icon-park/vue-next'
</script>

<template>
  <n-card class="flex flex-row" size="medium">
    <n-avatar
        round
        class="min-w-12"
        :size="48"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    />
    <div class="hidden md:flex md:flex-col md:pl-4">
      <h3>brokenstring314</h3>
    </div>
    <div class="hidden lg:flex lg:flex-row lg:pl-4">
      <n-button text style="font-size: 24px">
        <n-icon>
          <message-one theme="outline" size="24" fill="#333"/>
        </n-icon>
      </n-button>
      <n-button text class="ml-3" style="font-size: 24px">
        <n-icon>
          <logout theme="outline" size="24" fill="#333"/>
        </n-icon>
      </n-button>
    </div>
  </n-card>
</template>

<style scoped>

</style>