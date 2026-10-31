import { shallowReactive } from "vue";
import locales from "./locales";

// Regional variants first (zh-TW), then the language alone (fr-CA → fr)
const browserLocale = [navigator.language, navigator.language.split("-")[0]].find((code) => locales[code]) ?? "en";

export default shallowReactive({
    workspace: null,
    locale: localStorage.getItem("blocklyLocale") || browserLocale,
    docName: "",
    // Kept in sync with the workspace by its change listener
    blockCount: 0,
    hasLogin: false,
    valid: false
});
