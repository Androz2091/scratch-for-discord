import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";
import locales from "./locales";
import store from "./store";
import { setLanguage } from "./workspace";
import "./dialogs";

const i18n = createI18n({
    legacy: false,
    locale: store.locale,
    fallbackLocale: "en",
    // Translations can be partial: missing strings fall back to English
    missingWarn: false,
    fallbackWarn: false,
    messages: Object.fromEntries(Object.entries(locales).map(([code, locale]) => [code, locale.website]))
});

setLanguage(store.locale, i18n.global.locale);
store.docName = i18n.global.t("untitled");

// The desktop app loads the editor in an iframe and exposes its bridge on the parent window
if (!("ScratchNative" in window) && window.parent?.ScratchNative) window.ScratchNative = window.parent.ScratchNative;

createApp(App).use(i18n).mount("#app");
