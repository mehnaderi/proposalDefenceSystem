import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Home2 from '../views/Home2.vue'
import Start from '../views/Start.vue'
import Login from '../views/Login.vue'
import SendProposal from '../views/SendProposal.vue'
import Form0 from '../views/Form0.vue'
import Form1 from '../views/Form1.vue'
import Form2 from '../views/Form2.vue'
import Form3 from '../views/Form3.vue'
import Form4 from '../views/Form4.vue'
import Form5 from '../views/Form5.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/register/0',
        name: 'Form0',
        component: Form0
    },
    {
        path: '/register/1',
        name: 'Form1',
        component: Form1
    },
    {
        path: '/register/2',
        name: 'Form2',
        component: Form2
    },
    {
        path: '/register/3',
        name: 'Form3',
        component: Form3
    },
    {
        path: '/register/4',
        name: 'Form4',
        component: Form4
    },
    {
        path: '/register/5',
        name: 'Form5',
        component: Form5
    },
    {
        path: '/proposalform',
    name: 'SendProposal',
    component: SendProposal
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home2',
    name: 'Home2',
    component: Home2
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router
