import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Money from "@/views/Money.vue";
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
import Edit from "@/views/Edit.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path:"/",
    redirect:"/money",
  },
  {
    path:"/money",
    component:Money,
  },
  {
    path:"/labels",
    component: Labels,
  },

  {
    path:"/labels/edit/:id",
    component: Edit,
  },
  {
    path:"/statistics",
    component:Statistics,
  },
  {
    path:"*",
    component:NotFound,
  }
    /*{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',

    }*/
];

const router = new VueRouter({
    routes
});

export default router;
