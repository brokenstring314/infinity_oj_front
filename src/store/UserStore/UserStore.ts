import axios from 'axios';
import { defineStore } from 'pinia'
import { ref,Ref } from 'vue';
import type {UserInfoState} from '../../../types/OutTypes'



export const useUserStore: any = defineStore('userStore', () => {
    const userInfo:Ref<UserInfoState|undefined> = ref()

    return { userInfo}
}, {
    persist: true
})