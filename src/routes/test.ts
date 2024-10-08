import { createRouter, createWebHistory, Router } from 'vue-router'
import Home from "../components/views/Home.vue";
import QuestionBank from "../components/views/QuestionBank.vue";
import QuestionSubmitRecord from "../components/views/QuestionSubmitRecord.vue";
import { useroutesStore } from "../store/RoutesStore/RoutesStore.ts"

const routes: any[] = [
    {
        name: "home", path: '/', component: Home, children: [

        ]
    },
    {
        name: "questionBank", path: '/questionBank', component: QuestionBank, children: [

        ],
    },
    {
        name: "questionSubmitRecord", path: '/questionSubmitRecord', component: QuestionSubmitRecord, children: [

        ],
    },
]

export const router: Router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from) => {
    useroutesStore().routerName = to.name

})