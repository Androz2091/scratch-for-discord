import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import store from './store';
import VueSwal from 'vue-swal';
import Vuei18n from 'vue-i18n';
import Blockly from "blockly";

Vue.use(Vuei18n);
Vue.use(VueSwal);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;
Vue.config.ignoredElements = ["field","block","category","xml","mutation","value","sep"];

import blocklyLocaleEN from "blockly/msg/en";
import blocklyLocaleFR from "blockly/msg/fr";

import customLocaleEN from './locales/en';
import customLocaleFR from './locales/fr';

const messages = {
    en: customLocaleEN.websiteMessages,
    fr: customLocaleFR.websiteMessages
};

const i18n = new Vuei18n({
    locale: 'en',
    messages
});

Vue.mixin({
    methods: {
        reloadWorkspace(){
            // Get current workspace
            const workspace = this.$store.state.workspace;
            // Convert it to a dom string
            const dom = Blockly.Xml.workspaceToDom(workspace);
            // Delete the current workspace
            workspace.dispose();
            // Create a new workspace (with the good language)
            const newWorkspace = Blockly.inject(document.getElementById("blocklyDiv"), this.options);
            // And restore the blocks
            Blockly.Xml.domToWorkspace(dom, newWorkspace);
            // Update the workspace in the vuex store
            this.$store.commit("setWorkspace", {
                workspace: newWorkspace
            });
            // Return the workspace
            return workspace;
        },
        setLanguage(locale){
            switch (locale) {
                case "en":
                    // Change Blockly language for default blocks
                    Blockly.setLocale(blocklyLocaleEN);
                    // Change Blockly language for custom blocks
                    customLocaleEN.applyBlocklyLocale();
                    // Change website languages (navbar, etc...)
                    this.$root.$i18n.locale = "en";
                    break;
                case "fr":
                    // Change Blockly language for default blocks
                    Blockly.setLocale(blocklyLocaleFR);
                    // Change Blockly language for custom blocks
                    customLocaleFR.applyBlocklyLocale();
                    // Change website languages (navbar, etc...)
                    this.$root.$i18n.locale = "fr";
                    break;
                default:
                    break;
            }
        }
    }
});
  
new Vue({
    store,
    render: h => h(App),
    i18n
}).$mount("#app");

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
