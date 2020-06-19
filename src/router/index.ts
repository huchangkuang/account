import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Label from "@/views/label.vue";
import Money from "@/views/money.vue"
import Statistic from "@/views/statistic.vue"
import NotFound from "@/views/notFound.vue"
import Target from "@/views/target.vue";
import Bill from "@/views/bill.vue";

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
        path: "/target",
        component: Target
    },
    {
        path: "/bill",
        component: Bill
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
