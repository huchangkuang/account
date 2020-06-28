import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Money from "@/views/money.vue";
import Statistic from "@/views/statistic.vue";
import NotFound from "@/views/notFound.vue";
import Target from "@/views/target.vue";
import Bill from "@/views/bill.vue";
import tag from "@/views/tag.vue";
import EditTags from "@/views/EditAddTags.vue";
import EditModifyTags from "@/views/EditModifyTags.vue";

Vue.use(VueRouter);


const routes: Array<RouteConfig> = [
    {
        path: "/",
        redirect: "/money"
    },
    {
        path: "/label",
        component: tag
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
        path: "/edit",
        component: EditTags
    },
    {
        path: "/edit/modify/:id",
        component: EditModifyTags
    },
    {
        path: "*",
        component: NotFound
    }
];

const router = new VueRouter({
    routes
});

export default router;
