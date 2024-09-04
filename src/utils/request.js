import axios from "axios"
import {useUserStore} from '../store/index.ts'
import router from '../router/router.js'
import { useMessage } from "naive-ui";
//remoteURL = 'http://8.134.181.125:3007/'
const baseURL = 'http://127.0.0.1:8081/'
export const request = axios.create({
    baseURL,
    timeout: 10000
})
export const Message = useMessage()

request.interceptors.request.use(
    (config) => {
        const userStore = useUserStore()
        if (userStore.token)
            config.headers.Authorization = userStore.token
        console.log(config)
        return config
    }, (err) => Promise.reject(err)
)

request.interceptors.response.use(
    (res) => {
        if (res.data.status === 0) return res.data
        Message.error(res.data.message)
        return Promise.reject(res.data)
    }, (err) => {
        if (error.response.status == 401)
            router.push('/Login')
        Promise.reject(err)
    }
)




