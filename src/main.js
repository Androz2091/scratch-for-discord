import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import store from './store';
import VueSwal from 'vue-swal';
import Vuei18n from 'vue-i18n';
import Blockly from "blockly";
import VueToast from 'vue-toast-notification';
import VueTour from 'vue-tour';

Vue.use(VueTour);
Vue.use(VueToast);
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
    messages: messages
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
            workspace.addChangeListener(Blockly.Events.disableOrphans);
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
        },
        getWorkspaceCode(){
            return `
                let Discord;
                try {
                    Discord = DiscordJS;
                } catch(e){
                    console.log(e);
                    Discord = require("discord.js");
                }
                const delay = (seconds) => new Promise((resolve) => setTimeout(() => resolve, seconds*1000));
                const s4d = {
                    Discord,
                    message: null,
                    client: null,
                    tokenInvalid: false,
                    checkMessageExists() {
                        if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                        if (!s4d.message) throw new Error('You cannot perform message operations outside an "on message" block')
                        if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                    }
                };
                s4d.client = new s4d.Discord.Client();
                ${Blockly.JavaScript.workspaceToCode(this.$store.state.workspace)}
                s4d;
            `;
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
import 'vue-toast-notification/dist/theme-default.css';
import 'vue-tour/dist/vue-tour.css';
