import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import store from './store';
import VueSwal from 'vue-swal';
import Vuei18n from 'vue-i18n';

Vue.use(Vuei18n);
Vue.use(VueSwal);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;
Vue.config.ignoredElements = ["field","block","category","xml","mutation","value","sep"];

import enCustom from './locales/en';
import frCustom from './locales/fr';

const messages = {
    en: enCustom.websiteMessages,
    fr: frCustom.websiteMessages
};

const i18n = new Vuei18n({
    locale: 'en',
    messages
});

new Vue({
    store,
    render: h => h(App),
    i18n
}).$mount("#app");

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
