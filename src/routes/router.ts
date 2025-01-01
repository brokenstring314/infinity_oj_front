import { createRouter, createWebHistory, Router } from 'vue-router'
import { useroutesStore } from "../store/RoutesStore/RoutesStore.ts"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { fromCodePoint } from 'markdown-it/lib/common/utils.mjs'

const routes: any[] = [
    {
        name: "myTemplate", path: '/', component: () => import('../components/layout/MyTemplate.vue'), children: [
            {
                name: "home", path: '', component: () => import('../components/layout/Home.vue'), children: [

                ]
            },
            {
                name: "questionBank", path: 'questionBank/:page', component: () => import('../components/layout/QuestionBank.vue'), children: [

                ],
            },
            {
                name: "questionSubmitRecord", path: 'questionSubmitRecord/:page', component: () => import('../components/layout/QuestionSubmitRecordBank.vue'), children: [

                ],
            },
            {
                name: 'ProblemDetail', path: 'ProblemDetail/:id', component: () => import('../components/layout/ProblemDetail.vue')
            },
        ]
    }

]

export const router: Router = createRouter({
    history: createWebHistory(),
    routes,
})


router.beforeEach((to, from) => {
    NProgress.start();
    useroutesStore().routerName = to.name
    if (document.activeElement != null)
        (document.activeElement as HTMLElement).blur();
    // document.activeElement找到当前页面鼠标焦点元素
    // 进行类型检查后用 blur()使其失焦
})

//路由进入后
router.afterEach((to, from) => {
    NProgress.done()
})


