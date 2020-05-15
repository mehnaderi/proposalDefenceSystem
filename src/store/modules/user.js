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
    //     return ''
    // },
    // getToken: state => {
    //     return ''
    // },
};

const mutations = {
    setUserInfo: state => {
        console.log("Darush");

        state.email = "Darush"
    }
};

// for Asyncronous actions
const actions = {
    asyncGetUserInfo: ({
        commit
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

                const token = res.data.token;
                if (token !== undefined) {
                    commit('setUserInfo')
                    router.push("/proposalform");
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
    }
    // TODO:
    // signup
    // login
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