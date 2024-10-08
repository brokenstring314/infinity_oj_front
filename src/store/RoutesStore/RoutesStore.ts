
import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useroutesStore: any = defineStore('routesName', () => {
    let routerName = ref("")


    return { routerName }
}, {
    persist: true
})