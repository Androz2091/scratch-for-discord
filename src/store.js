import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        workspace: 0
    },
    mutations: {
        setWorkspace (state, { workspace }) {
            state.workspace = workspace;
        }
    }
});
