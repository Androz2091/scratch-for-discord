import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        workspace: 0,
        blocklyLocale: navigator.language.split("-")[0],
        tourDone: false
    },
    mutations: {
        setWorkspace (state, { workspace }) {
            state.workspace = workspace;
        },
        setLocale (state, { newLocale }) {
            state.blocklyLocale = newLocale;
        },
        setTour (state, { status }){
            state.tourDone = status;
        }
    },
    plugins: [createPersistedState({
        paths: ["blocklyLocale","tourDone"]
    })]
});
