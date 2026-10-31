import { shallowReactive } from "vue";
import locales from "./locales";

const browserLocale = navigator.language.split("-")[0];

export default shallowReactive({
    workspace: null,
    locale: localStorage.getItem("blocklyLocale") || (locales[browserLocale] ? browserLocale : "en"),
    docName: "",
    // Kept in sync with the workspace by its change listener
    blockCount: 0,
    hasLogin: false,
    valid: false
});
