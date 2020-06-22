import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Start from '../views/Start.vue'
import Login from '../views/Login.vue'
import Form0 from '../views/Form0.vue'
import Form1 from '../views/Form1.vue'
import Form2 from '../views/Form2.vue'
import Form3 from '../views/Form3.vue'
import Form4 from '../views/Form4.vue'
import Form5 from '../views/Form5.vue'
import RefereeResults from "../views/RefereeResults";
import Masters from "../views/Masters";
import ToDoPage from "../views/ToDoPage";
import MasterHome from "../views/MasterHome";
import StudentItemLayout from "../components/StudentPageItemLayout";
import navStudents from "../views/NavStudents";

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'Start',
    component: Start
},
    {
        path: '/register/0',
        name: 'Form0',
        component: Form0,
        // beforeEnter: (to, from, next) => {
        //     if (store.state.user.token) {
        //         next()
        //     } else {
        //         next('/login')
        //     }
        // }
    },
    {
        path: '/register/1',
        name: 'Form1',
        component: Form1,
        // beforeEnter: (to, from, next) => {
        //     console.log(store.state.user.token === undefined);

        //     if (store.state.user.token) {
        //         next()
        //     } else {
        //         next('/login')
        //     }
        // }
    },
    {
        path: '/register/2',
        name: 'Form2',
        component: Form2,
        // beforeEnter: (to, from, next) => {
        //     if (store.state.user.token) {
        //         next()
        //     } else {
        //         next('/login')
        //     }
        // }
    },
    {
        path: '/register/3',
        name: 'Form3',
        component: Form3,
        // beforeEnter: (to, from, next) => {
        //     if (store.state.user.token) {
        //         next()
        //     } else {
        //         next('/login')
        //     }
        // }
    },
    {
        path: '/register/4',
        name: 'Form4',
        component: Form4,
        // beforeEnter: (to, from, next) => {
        //     if (store.state.user.token) {
        //         next()
        //     } else {
        //         next('/login')
        //     }
        // }
    },
    {
        path: '/register/5',
        name: 'Form5',
        component: Form5,
        // beforeEnter: (to, from, next) => {
        //     if (store.state.user.token) {
        //         next()
        //     } else {
        //         next('/login')
        //     }
        // }
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        // beforeEnter: (to, from, next) => {
        //     if (store.state.user.token) {
        //         next()
        //     } else {
        //         next('/login')
        //     }
        // }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/results',
        name: 'RefereeResult',
        component: RefereeResults
    },
    {
        path: '/masters',
        name: 'Masters',
        component: Masters
    },
    {
        path: '/todo',
        name: 'ToDoPage',
        component: ToDoPage
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/masterHome',
        name: 'MasterHome',
        component: MasterHome,
        // beforeEnter: (to, from, next) => {
        //     if (store.state.user.token) {
        //         next()
        //     } else {
        //         next('/login')
        //     }
        // }
    },
    {
        path: '/navStudents',
        name: 'navStudents',
        component: navStudents,
        // beforeEnter: (to, from, next) => {
        //     if (store.state.user.token) {
        //         next()
        //     } else {
        //         next('/login')
        //     }
        // }
    },
    {
        path: '/temp2',
        name: 'MasterReferee',
        component: StudentItemLayout,
        // beforeEnter: (to, from, next) => {
        //     if (store.state.user.token) {
        //         next()
        //     } else {
        //         next('/login')
        //     }
        // }
    }

];

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router