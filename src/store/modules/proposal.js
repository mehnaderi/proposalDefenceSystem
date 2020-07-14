import axios from "axios";
import router from '../../router'

const state = {
    first_name: null,
    last_name: null,

    title_persian: null,
    title_english: null,
    keywords_persian: null,
    keywords_english: null,
    type: null,

    definition: null,
    history: null,
    how_to_solve: null,
    assumption: null,
    is_new: null,
    tools: null,
    supportive_reference: null,

    //todo -> references_links (array)
    references: null,
    references_other_languages: null,

    time_table: null,
};

const getters = {
    getTitle: state => {
        // return state
        if (state)
        return "pouyaaaaaaa"
    },
    getProposalInfo: state => {
        return state
    }
};

const mutations = {
    setPreferedProf: (state, prof) => {
        state.preferedProf = prof.selected
    },
    setProposalHeader: (state, header) => {
        state.title_persian = header.title_fa
        state.title_english = header.title_en
        state.keywords_persian = header.keywords_fa
        state.keywords_english = header.keywords_en
        state.type = header.proposal_type
    },
    setProposalContent: (state, contents) => {
        // console.log(contents);
        state.definition = contents[0]
        state.history = contents[1]
        state.how_to_solve = contents[2]
        state.assumption = contents[3]
        state.is_new = contents[4]
        state.tools = contents[5]
        state.supportive_reference = contents[6]
        // console.log(state.tools);
    },
    setProposalRefs: (state, references) => {
        // console.log(references);
        state.references = references
        // console.log(state.references);
    },
    setProposalTimeTable: (state, timetable) => {
        console.log("time table" + timetable);
        state.time_table = timetable
        // console.log(state.references);
    },
};

const actions = {
    savePreferedProf: ({
        commit
    }, data) => {
        commit('setPreferedProf', data)
        router.push(data.to);
    },
    saveProposalHeader: ({
        commit
    }, data) => {
        commit('setProposalHeader', data)
        router.push(data.to);
    },
    saveProposalContent: ({
        commit
    }, data) => {
        commit('setProposalContent', data.contents)
        router.push(data.to);
    },
    saveProposalRefs: ({
        commit
    }, data) => {
        commit('setProposalRefs', data.references)
        router.push(data.to);
    },
    saveProposalTimeTable: ({
        commit
    }, data) => {
        console.log("Here in proposal");
        console.log(data);
        console.log(data.timetable);
        commit('setProposalTimeTable', data.timetable)
        // router.push(data.to);
        const proposalInfo = state;
        console.log(proposalInfo);
        const token = localStorage.getItem('token')
        console.log(token);
        const headers = {
            Authorization: "Bearer " + token,
        };
        axios
            .post(data.api, proposalInfo, {
                headers: headers
            })
            .then(res => {
                // p.mo@gmail.co
                console.log(res);
                //todo: check if the token is availabe and user is authenticated
                // const token = res.data.token;
                if (token !== undefined) {
                    // commit('', token)
                    console.log("Proposal info stored in mongo");
                    router.push(data.to);
                } else {
                    console.log("storing proposal Error");
                    alert("خطا در ذخیره پروپوزال در سرور")
                }
            })
            .then(error => {
                if (error !== undefined) {
                    console.log(error);
                }
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions
}