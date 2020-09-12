import Vue from "vue";
import VueRouter from "vue-router";
import Hello from "../ui/Hello";
import Edit from "../ui/Edit";
import Home from "../ui/Home";
import Add from "../ui/AddStudent";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/add",
    name: "AddStudent",
    component: Add,
  },

  {
    path: "/hello/",
    name: "Hello",
    component: Hello,
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: Edit,
    props: true,
  },
  //   {
  //     path: '/about',
  //     name: 'About',
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
];

const router = new VueRouter({
  routes,
});

export default router;
