import axios from "axios";
import router from '../../router'

const state = {
    email: null,
    token: null,
    name: null,
    is_prof: null,
    has_proposal: null,
    progress_state: null,
    //todo: other info
};

const getters = {
    // getUserInfo: state => {
    //     return state.token
    // },
    getToken: state => {
        if (state.token == undefined) {
            return false

        } else {
            return true
        }
    },
};

const mutations = {
    setUserInfo: (state, token) => {
        console.log("mutations > setUserInfo() - login");
        // console.log(token);
        state.token = token
    },
    clearAuthData(state) {
        state.token = null
    },
    //todo
    // authUser(state, userData) {
    //     state.token = userData.token
    //     state.userId = userData.userId
    // },
    // storeUser(state, user) {
    //     state.user = user
    // },
};

// for Asyncronous actions
const actions = {
    setLogoutTimer({
        commit
    }, expirationTime) {
        setTimeout(() => {
            commit('clearAuthData')
        }, expirationTime * 1000)
    },
    asyncGetUserInfo: ({
        commit,
        dispatch
    }, data) => {
        axios
            .post(data.api, {
                email: data.email,
                password: data.password,
                // returnSecureToken: true
                // is_prof: false
            })
            .then(res => {
                // p.mo@gmail.co
                console.log(res);

                const now = new Date()
                const expirationDate = new Date(now.getTime() + 3600 * 1000) //1 hour
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('expirationDate', expirationDate)

                const token = res.data.token;
                if (token !== undefined) {
                    commit('setUserInfo', token)
                    dispatch('setLogoutTimer', 3600)
                    router.push(data.to);
                } else {
                    console.log("Login in Error");
                    alert("خطا در ورودی به سیستم")
                }
            })
            .then(error => {
                if (error !== undefined) {
                    console.log(error);
                }
            });
    },
    logout({
        commit
    }) {
        commit('clearAuthData')
        localStorage.removeItem('expirationDate')
        localStorage.removeItem('token')
        router.replace('/signin')
    },
    // TODO:
    // signup
    // login
    //logout
    // forget password

    // axios.post(url, {
    //     headers: {
    //         'Authorization': `Bearer ${state.token}`
    //     }
    // })

}

export default {
    state,
    getters,
    mutations,
    actions,
}