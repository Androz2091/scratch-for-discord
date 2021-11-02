import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const getSystemTheme = () => {
    // try to detect theme from media query
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const getTheme = () => {
    // if localstorage contains invalid color, update it
    if (!["dark", "light"].includes(window.localStorage.getItem("theme"))) window.localStorage.setItem("theme", getSystemTheme());
    return window.localStorage.getItem("theme");
};

export default new Vuex.Store({
    state: {
        workspace: 0,
        blocklyLocale: ["en", "fr", "pt"].includes(navigator.language.split("-")[0]) ? navigator.language.split("-")[0] : "en",
        tourDone: false,
        theme: getTheme()
    },
    mutations: {
        setWorkspace(state, { workspace }) {
            state.workspace = workspace;
        },
        setLocale(state, { newLocale }) {
            state.blocklyLocale = newLocale;
            localStorage.setItem("blocklyLocale", newLocale);
        },
        setTour(state, { status }) {
            state.tourDone = status;
            localStorage.setItem("tourDone", status);
        },
        setTheme(state, { newTheme }) {
            if (!["light", "dark"].includes(newTheme)) newTheme = getSystemTheme();
            state.theme = newTheme;
            window.localStorage.setItem("theme", newTheme);
        }
    }
});
