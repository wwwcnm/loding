import {createRouter,Router,RouterOptions,RouteRecordRaw,createWebHistory} from 'vue-router'

import Loding from '../components/loding.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/loding',
        name: '/loding',
        component: Loding,
    }
];

const options: RouterOptions = {
    history: createWebHistory(),
    routes,
};
const router: Router = createRouter(options);

export default router;