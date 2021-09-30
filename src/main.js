import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import store from './store';
import VueSwal from 'vue-swal';
import Vuei18n from 'vue-i18n';
import Blockly from "blockly";
import VueToast from 'vue-toast-notification';
import VueTour from 'vue-tour';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import savenload from './save-load';

Vue.component('font-awesome-icon', FontAwesomeIcon)

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
import blocklyLocalePT from "blockly/msg/pt";

import customLocaleEN from './locales/en';
import customLocaleFR from './locales/fr';
import customLocalePT from './locales/pt';

const messages = {
    en: customLocaleEN.websiteMessages,
    fr: customLocaleFR.websiteMessages,
    pt: customLocalePT.websiteMessages
};

const i18n = new Vuei18n({
    locale: (messages[navigator.language.split("-")[0]] ? navigator.language.split("-")[0] : "en"),
    messages: messages
});

import toolbox from "./toolbox";
//import {Backpack} from '@blockly/workspace-backpack';
import Theme from '@blockly/theme-dark';
Vue.mixin({
    methods: {
        reloadWorkspace(){
            // Get current workspace
            let workspace = this.$store.state.workspace;
            // Convert it to a dom string
            const dom = Blockly.Xml.workspaceToDom(workspace);
            // Delete the current workspace
            workspace.dispose();
            // Create a new workspace (with the good language)
            const newWorkspace = Blockly.inject(document.getElementById("blocklyDiv"), {
                renderer: "zelos",
                theme: Theme,
                grid: {
                    spacing: 25,
                    length: 3,
                    colour: "#ccc",
                },
								zoom: {
                    controls: true,
                    startScale: 0.9,
                    maxScale: 3,
                    minScale: 0.3,
                    scaleSpeed: 1.2
                     },
                toolbox: toolbox(Blockly)
            });
   
            Blockly.Xml.domToWorkspace(dom, newWorkspace);
            // Update the workspace in the vuex store
            this.$store.commit("setWorkspace", {
                workspace: newWorkspace
            })
;				

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
                case "pt":
                    // Change Blockly language for default blocks
                    Blockly.setLocale(blocklyLocalePT);
                    // Change Blockly language for custom blocks
                    customLocalePT.applyBlocklyLocale();
                    // Change website languages (navbar, etc...)
                    this.$root.$i18n.locale = "pt";
                    break;
                default:
                    break;
            }
        },
        getWorkspaceCode(){
            if(!this.$store.state.workspace) return "";
            return `
            module.exports = async function s4d(){
                    const Discord = require("discord.js");
                    const Database = require("easy-json-database");
                    const moment = require('moment');
                    const { DB } = require("quickmongo");
		    const canvas = require("discord-canvas")
                    const { MessageEmbed, MessageButton, MessageActionRow, Intents, Permissions, MessageSelectMenu } = require('discord.js')
                    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                    const s4d = {
                        Discord,
                        database: new Database(\`\${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json\`),
                        joiningMember:null,
                        reply:null,
                        tokenInvalid:false,
                        tokenError: null,
                        player:null,
                        client:null,
                        checkMessageExists() {
                            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                        }
                    };
                    s4d.client = new s4d.Discord.Client({
                        intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                        partials: ["REACTION"]
                    });
                    const { Player,QueueRepeatMode } = require("discord-player")
                    s4d.player = new Player(s4d.client)
                    ${Blockly.JavaScript.workspaceToCode(this.$store.state.workspace)}
                    return s4d;
                    }
            `;
        }
    }
});



new Vue({
    store,
    render: h => h(App),
    i18n,
    mounted() {
        savenload(this);
    },
}).$mount("#app");

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-toast-notification/dist/theme-default.css';
import 'vue-tour/dist/vue-tour.css';
