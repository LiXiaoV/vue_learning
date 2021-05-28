import Vue from 'vue'
import VueRouter from "vue-router"
import Index from '../components/home/Index.vue'
import Index1 from "@/components/home/Index1";
import Index2 from "@/components/home/Index2";
import Index3 from "@/components/home/Index3";
import Index4 from "@/components/home/Index4";
import Index5 from "@/components/home/Index5";
import Index6 from "@/components/home/Index6";
import Index7 from "@/components/home/Index7";
import Index8 from "@/components/communication/parent/Index8";
import Index9 from "@/components/communication/brother/Index9";
import Index10 from "@/components/lifecycle/Index10";
import Index11 from "@/components/home/Index11";
import Index12 from "@/components/slot/Index12";
import Index13 from "@/components/scopeSlot/Index13";
import Index14 from "@/components/menu/Index14";
import Index15 from "@/components/dynamicComponent/Index15";
import Index16 from "@/components/asynComponent/Index16";
import Index17 from "@/components/cache/Index17";
import Index18 from "@/components/mixin/Index18";
import Index19 from "@/components/home/Index19";
import Index20 from "@/components/home/Index20";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/index1',
        name: 'Index1',
        component: Index1
    },
    {
        path: '/index2',
        name: 'Index2',
        component: Index2
    },
    {
        path: '/index3',
        name: 'Index3',
        component: Index3
    },
    {
        path: '/index4',
        name: 'Index4',
        component: Index4
    },
    {
        path: '/index5',
        name: 'Index5',
        component: Index5
    },
    {
        path: '/index6',
        name: 'Index6',
        component: Index6
    },
    {
        path: '/index7',
        name: 'Index7',
        component: Index7
    },
    {
        path: '/index8',
        name: 'Index8',
        component: Index8
    },
    {
        path: '/index9',
        name: 'Index9',
        component: Index9
    },
    {
        path: '/index10',
        name: 'Index10',
        component: Index10
    },
    {
        path: '/index11',
        name: 'Index11',
        component: Index11
    },
    {
        path: '/index12',
        name: 'Index12',
        component: Index12
    },
    {
        path: '/index13',
        name: 'Index13',
        component: Index13
    },
    {
        path: '/index14',
        name: 'Index14',
        component: Index14
    },
    {
        path: '/index15',
        name: 'Index15',
        component: Index15
    },
    {
        path: '/index16',
        name: 'Index16',
        component: Index16
    },
    {
        path: '/index17',
        name: 'Index17',
        component: Index17
    },
    {
        path: '/index18',
        name: 'Index18',
        component: Index18
    },
    {
        path: '/index19',
        name: 'Index19',
        component: Index19
    },
    {
        path: '/index20',
        name: 'Index20',
        component: Index20
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router