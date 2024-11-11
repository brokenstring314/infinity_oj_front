<script setup lang="ts">
import { MessageOne, Logout } from '@icon-park/vue-next'
import { useUserStore } from '../../store/index'
import { Ref, ref } from 'vue'
import Login from '../views/Login.vue'
import LoginTabs from './LoginTabs.vue'

const userStore = useUserStore()

const showModal: Ref<boolean> = ref(false)
</script>

<template>
  <n-card class="flex flex-row" size="medium">
    <n-avatar round class="min-w-12" :size="48" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
    <div class="hidden md:flex md:flex-col md:pl-4">
      <h3 v-if="userStore.userInfo"></h3>
      <div v-else>
        <n-button type="primary" @click="showModal = true">
          登录
        </n-button>
        <n-button type="info" class="ml-6">
          注册
        </n-button>
      </div>
    </div>
    <div class="hidden lg:flex lg:flex-row lg:pl-4">
      <n-button text style="font-size: 24px">
        <n-icon>
          <message-one theme="outline" size="24" fill="#333" />
        </n-icon>
      </n-button>
      <n-button text class="ml-3" style="font-size: 24px">
        <n-icon>
          <logout theme="outline" size="24" fill="#333" />
        </n-icon>
      </n-button>
    </div>
    <n-modal v-model:show="showModal" :mask-closable="false" preset="card" class="min-w-fit max-w-4xl max-h-fit">
      <login-tabs></login-tabs>
    </n-modal>
  </n-card>


</template>

<style scoped></style>