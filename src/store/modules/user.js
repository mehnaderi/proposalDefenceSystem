import axios from "axios";
import router from '../../router'

const state = {
    token: null,
    name: "عادل حسینی",
    email: "adel@gmail.com",
    is_prof: true,
    // has_proposal: null,
    // progress_state: null,
    //todo: other info
    news: {
        "x": ["اساتید محترم، لطفا تا پایان آبان ماه زمانهای خالی برای حضور در جلسات را مشخص کنید",
            "اساتید محترم، لطفا تا پیش از تاریخ ۱۷ آذر پروپوزالهای دانشجویان را بررسی نمایید",
            "روز جشن دانشکده منتظر حضور گرمتان هستیم",
        ]
    },
    timetable: [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    info: {
        "students_to_judge": [{
                "name": "پویا محمدخانی",
                "studentID": "۹۵۲۴۳۰۵۳",
                "proposal_url": "ee",
                "content": "خالی ۱",
            },
            {
                "name": "نیره اسلامی",
                "studentID": "۹۶۲۴۳۰۲۶",
                "proposal_url": "",
                "content": "خالی ۲",
            },
            // {
            //     "name": "علی خاک شده",
            //     "studentID": "۲۱۰۳۸۹"
            // },
            // {
            //     "name": "امام جمعه",
            //     "studentID": "۱۲۴۴۳۲"
            // }
        ]
    },
};

const getters = {
    // getUserInfo: state => {
    //     return state.token
    // },
    getNews: state => {
        return state.news.x
    },
    getCurrentUser: state => {
        return state
    },
    isProf: state => {
        return state.is_prof
    },
    getStudentInfoForProf: state => {
        return state.info.students_to_judge
        // if (state.token == undefined) {
        //     return false

        // } else {
        //     return true
        // }
    },
    getToken: state => {
        if (state.token == undefined) {
            return false

        } else {
            return true
        }
    },
    getStudentsList: state => {
        // alert('times')
        const students = {
            "hello": 12,
            "students": [{
                    "name": "پویا محمدخانی",
                    "studentID": "۹۵۲۴۳۰۵۳",
                    "email": "pouya@gmail.com",
                    "field_of_study": "هوش مصنوعی",
                    "proposal_url": "ee",
                    "content": "wef",
                    "url_proposal": "google.com"
                },
                {
                    "name": "نیره اسلامی",
                    "studentID": "۹۶۲۴۳۰۰۰",
                    "email": "nayere@gmail.com",
                    "field_of_study": "قرآن کاوی رایانشی",
                    "proposal_url": "we",
                    "content": "weawefawefaweff",
                },
                // {
                //     "name": "علی خاک شده",
                //     "studentID": "۲۱۰۳۸۹",
                //     "email": "ali@gmail.com",
                //     "field_of_study": "هوش مصنوعی",
                // },
                // {
                //     "name": "امام جمعه",
                //     "studentID": "۱۲۴۴۳۲"
                // }
            ]
        }
        if (state.token == undefined)
            return students.students

        // if (state.token == undefined) {
        //     return null
        // } else {
        //     return state.info.students_to_judge //دانشجویان استاده که قراره داوری بشن
        // }
    },
    getTimeTable: state => {
        const timeTable = state.timetable
        // alert(timeTable)
        // if (state.token == undefined)
        return timeTable

    },
};

const mutations = {
    setUserToken: (state, token) => {
        console.log("mutations > setUserToken() - login");
        // console.log(token);
        state.token = token
    },
    setUserInfo: (state, info) => {
        state.info = info
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
                const info = res.data.info;
                if (token !== undefined) {
                    commit('setUserToken', token)
                    commit('setUserInfo', info)
                    dispatch('setLogoutTimer', 3600)
                    if (res.data.is_prof) {
                        router.push('/masterHome');
                    } else {
                        router.push(data.to);
                    }
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