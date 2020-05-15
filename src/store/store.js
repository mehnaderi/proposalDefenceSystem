import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user'
import proposal from './modules/proposal'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        user,
        //todo: proposal
        proposal,
    }
});