import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Home2 from '../views/Home2.vue'
import Start from '../views/Start.vue'
import Login from '../views/Login.vue'
import SendProposal from '../views/SendProposal.vue'
import Form1 from '../views/Form1.vue'
import Form2 from '../views/Form2.vue'
import Form3 from '../views/Form3.vue'
import InputDataComp from "../components/InputDataComp";
import SuggestionDetails from "../views/SuggestionDetails";

Vue.use(VueRouter);

const routes = [
  {
    path: '/form3',
    name: 'Form3',
    component: Form3
  },
  {
    path: '/form2',
    name: 'Form2',
    component: Form2
  },
  {
    path: '/form1',
    name: 'Form1',
    component: Form1
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
    path: '/rostam',
    name: 'InputDataComp',
    component: InputDataComp
  },
  {
    path: '/rostam2',
    name: 'SuggestionDetails',
    component: SuggestionDetails
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
