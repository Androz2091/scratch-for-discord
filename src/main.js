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
Vue.config.ignoredElements = ["field", "block", "category", "xml", "mutation", "value", "sep"];

import r from "./require";

import blocklyLocaleEN from "blockly/msg/en";
import blocklyLocaleFR from "blockly/msg/fr";
import blocklyLocalePT from "blockly/msg/pt";

import customLocaleEN from './locales/en';
import customLocaleFR from './locales/fr';
import customLocalePT from './locales/pt';
import localforage from "localforage";
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
        async reloadWorkspace() {
            let val = await localforage.getItem("fav") === null ? null : await localforage.getItem("fav")
            // Get current workspace
            let workspace = this.$store.state.workspace;
            // Convert it to a dom string
            const dom = Blockly.Xml.workspaceToDom(workspace);
            // Delete the current workspace
            workspace.dispose();
            // Create a new workspace (with the good language)
            const newWorkspace = Blockly.inject(document.getElementById("blocklyDiv"), {
                grid: {
                    spacing: 25,
                    length: 3,
                    colour: "#ccc",
                },
                renderer: "zelos",
                theme: Theme,
                zoom: {
                    controls: true,
                    startScale: 0.9,
                    maxScale: 3,
                    minScale: 0.3,
                    scaleSpeed: 1.2
                },
                move: {
                    scrollbars: {
                        horizontal: true,
                        vertical: true
                    },
                    drag: true,
                    wheel: true
                },
                toolbox: toolbox(Blockly, val)
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
        setLanguage(locale) {
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
        getWorkspaceCode() {
            const workspace = this.$store.state.workspace
            if (!workspace) return "";
            let requires = [
                `let Discord = require("discord.js")`,
                `let Database  = require("easy-json-database")`,
                `let { MessageEmbed, MessageButton, MessageActionRow, Intents, Permissions, MessageSelectMenu }= require("discord.js")`,
                `let logs = require("discord-logs")`
            ]
            let requiresjscode = [`logs(s4d.client);`]
            let xml = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(workspace))
            r(requires, requiresjscode, Blockly.JavaScript.workspaceToCode(workspace), xml)
            setTimeout(async () => {
                await localforage.setItem("requires", requires)
            }, 1000)
            return `(async()=>{
                let process = require('process');
                process.on('uncaughtException', function (err) {
                    console.log(\`Error!\`);
                    console.log(err);
                  });
                  const events = require('events');
                  const { exec } = require("child_process")
                  ${requires.join("\n")}
let fs = require('fs');
                    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                    const s4d = {
                        Discord,
                        database: new Database(\`./database.json\`),
fire:null,
                        joiningMember:null,
                        reply:null,
                        tokenInvalid:false,
                        tokenError: null,
                        player:null,
                        manager:null,
                        Inviter:null,
                        message:null,
                        notifer:null,
                        checkMessageExists() {
                            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                        }
                    };
                    s4d.client = new s4d.Discord.Client({
                    intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                    partials: ["REACTION", "CHANNEL"]
                    });
                    s4d.client.on('ready', () => {
                        console.log(s4d.client.user.tag + " is alive!")
                    })
                    ${requiresjscode.join("\n")}         
                    ${Blockly.JavaScript.workspaceToCode(workspace)}
                    return s4d
                    })();`

        }
    }
}
);


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
