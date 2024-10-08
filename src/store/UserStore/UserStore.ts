import axios from 'axios';
import { defineStore } from 'pinia'
import { ref } from 'vue';


interface State {
    token: string,
    userForm: UserInfoState;
    isLogin: boolean;
}

export const userStore: any = defineStore('userStore', () => {
    const userInfo = ref({})
    // 获取用户信息
    const setUserInfo = async () => {
        await axios.get("/api/get_user_information").then(res => {
            if (res.data.code === "1000") {
                userInfo.value = res.data.data
            }
        }, res => {
            console.log('请求失败')
        });
    }
    //清除用户信息
    const clearUserInfo = () => {
        userInfo.value = {}
        sessionStorage.removeItem('refresh_token')
        sessionStorage.removeItem('Authorization')
    }
    //判断是否有权限
    const hasPermission = (name) => {
        let flag = false
        let permissionId = null
        permissions.forEach(item => {
            if (name === item.name) {
                permissionId = item.id
            }
        })
        if (permissionId && userInfo.value.permission) {
            if (userInfo.value.permission.split(',').indexOf((permissionId.toString())) != -1) {
                flag = true
            }
        }
        return flag
    }
    return { userInfo, setUserInfo, clearUserInfo, hasPermission }
}, {
    persist: true
})