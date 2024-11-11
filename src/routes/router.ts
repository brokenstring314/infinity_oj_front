import { createRouter, createWebHistory, Router } from 'vue-router'
import { useroutesStore } from "../store/RoutesStore/RoutesStore.ts"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routes: any[] = [
    {
        name: "myTemplate", path: '/', component: () => import('../components/layout/MyTemplate.vue'), children: [
            {
                name: "home", path: '', component: () => import('../components/views/Home.vue'), children: [

                ]
            },
            {
                name: "questionBank", path: 'questionBank', component: () => import('../components/views/QuestionBank.vue'), children: [

                ],
            },
            {
                name: "questionSubmitRecord", path: 'questionSubmitRecord', component: () => import('../components/views/QuestionSubmitRecord.vue'), children: [

                ],
            },
        ]
    },

    {
        name: "register", path: '/register', component: () => import('../components/views/Register.vue'), children: [

        ]
    },
    {
        name: "login", path: '/login', component: () => import('../components/views/Login.vue'), children: [

        ]
    },


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
router.afterEach(() => {
    NProgress.done()
})

