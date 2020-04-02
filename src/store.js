import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        workspace: 0,
        locale: "en"
    },
    mutations: {
        setWorkspace (state, { workspace }) {
            state.workspace = workspace;
        },
        setLocale (state, { newLocale }) {
            state.locale = newLocale;
        }
    },
    plugins: [new VuexPersistence({
        reducer: (state) => state.locale
    }).plugin]
});
