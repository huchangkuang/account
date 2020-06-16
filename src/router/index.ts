import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '../views/Home.vue'
import Label from "@/views/label.vue";
import Money from "@/views/money.vue"
import Statistic from "@/views/statistic.vue"
import NotFound from "@/views/notFound.vue"

Vue.use(VueRouter)


const routes: Array<RouteConfig> = [
    {
        path: "/",
        redirect: "/money"
    },
    {
        path: "/label",
        component: Label
    },
    {
        path: "/money",
        component: Money
    },
    {
        path: "/statistic",
        component: Statistic
    },
    {
        path: "*",
        component: NotFound
    }
]

const router = new VueRouter({
    routes
})

export default router
