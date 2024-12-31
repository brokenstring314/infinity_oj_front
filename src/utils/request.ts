import axios from "axios"
import { outMessage } from './OutMessage.ts'
import { useUserStore } from '../store/index.ts'
import 'nprogress/nprogress.css'
//remoteURL = 'http://8.134.181.125:3007/'
const baseURL = 'http://8.134.181.125:7000/'
export const request = axios.create({
    baseURL,
    timeout: 30000
})

const userStore = useUserStore()
request.interceptors.request.use(
    (config) => {
        config.headers.satoken = userStore.userInfo?.token
        return config
    }, (err) => Promise.reject(err)
)

request.interceptors.response.use(
    (res) => {
        outMessage(res.data.code)
        if (res.data.code >= 2000) return res.data
        return Promise.reject(res)
    }, (err) => {
        Promise.reject(err)
    }
)




