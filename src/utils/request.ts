import axios from "axios"
import { router } from '../routes/router.ts'
import { outMessage } from './OutMessage.ts'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
//remoteURL = 'http://8.134.181.125:3007/'
const baseURL = 'http://infinity.natapp1.cc/'
export const request = axios.create({
    baseURL,
    timeout: 10000
})



request.interceptors.request.use(
    (config) => {
        NProgress.start();
        return config
    }, (err) => Promise.reject(err)
)

request.interceptors.response.use(
    (res) => {
        outMessage(res.data.code)
        NProgress.done()
        if (res.data.status === 200) return res.data
        return Promise.reject(res)
    }, (err) => {
        if (err.response.status == 401)
            router.push('/Login')
        Promise.reject(err)
    }
)




