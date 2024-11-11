
import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'


export const useroutesStore: any = defineStore('routesName', () => {
    let routerName: Ref<string> = ref("")


    return { routerName }
}, {
    persist: true
})