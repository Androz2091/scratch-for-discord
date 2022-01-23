<template>
    <b-navbar toggleable="lg" type="dark" style="background-color:#161719;user-select:none;" id="navbar nav-main">
        <b-navbar-brand>
            <img src="scratch.png" width="40" draggable="false">
            Scratch For Discord
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <CodeModal></CodeModal>
                <FileMenu></FileMenu>
                <EditMenu></EditMenu>
                <ToolboxModal></ToolboxModal>
                <LanguageMenu></LanguageMenu>
                <ExamplesMenu></ExamplesMenu>
                <preBuilds></preBuilds>
                <TokenModal></TokenModal>
                <Socials></Socials>
                <b-nav-item href="https://androz2091.gitbook.io/scratch-for-discord/" target="_blank">{{ $t('help') }}</b-nav-item>
                <Credit></Credit>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <RunModal></RunModal>
                <b-button style="border-right-color: #161719; border-radius: 0em; border-top-left-radius: 0.25em; border-bottom-left-radius: 0.25em">
                <span contenteditable="true" id="docName">{{ $t("untitled") }}</span>
                </b-button>
                <b-button id="v-step-1" :disabled="!configurationValidated" style="border-right-color: #161719; border-radius: 0em;" v-b-modal.run-modal>
                    <b-icon-play></b-icon-play>
                </b-button>
                <b-button style="border-right-color: #161719; border-radius: 0em; border-top-left-radius: 0.25em; border-bottom-left-radius: 0.25em">
                <span contenteditable="true" id="docName">{{ $t("untitled") }}</span>
                </b-button>
                <b-button id="v-step-2" :disabled="!configurationValidated" style="border-radius: 0em; border-top-right-radius: 0.25em; border-bottom-right-radius: 0.25em" @click="exportToCode">
                    <b-icon-download></b-icon-download>
                </b-button>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import Blockly from "blockly";
import JSZip from "jszip";
import TokenModal from "./TokenModal.vue";
import FileMenu from "./FileMenu.vue";
import EditMenu from "./EditMenu.vue";
import LanguageMenu from "./LanguageMenu.vue";
import ExamplesMenu from "./ExamplesMenu.vue";
import CodeModal from "./CodeModal.vue";
import preBuilds from "./preBuilds.vue";
import ToolboxModal from "./ToolboxModal.vue";
import Socials from "./socials.vue";
import Credit from "./Credit";
import localforage from 'localforage';
import RunModal from "./RunModel.vue";
import r from "./requires"
export default {
    name: "navbar",
    components: {
        FileMenu,
        EditMenu,
        LanguageMenu,
        ExamplesMenu,
        CodeModal,
        TokenModal,
        preBuilds,
        ToolboxModal,
        Credit,
        Socials,
        RunModal
    },
    computed: {
        configurationValidated: function () {
            return  this.$store.state.workspace &&
                    this.$store.state.workspace.getAllBlocks().some((block) => block.type === "s4d_login") &&
                    this.$store.state.workspace.getAllBlocks().every((block) => !block.disabled && !block.warning);
        }
    },
    mounted(){
        document.getElementById("docName").addEventListener("input", function() {
            document.title = `Scratch For Discord - ${document.querySelector("#docName").textContent}`;
        }, false);
        const element = document.querySelector("#docName");
        element.spellcheck = false;
        element.focus(); 
        element.blur();
    },
    methods: {
        exportToCode(){
            const wrapper = document.createElement('div');
            wrapper.innerHTML = `<h6>${this.$t('download.content.title')}</h6><ul><li style='text-align:left'>${this.$t('download.content.unzipFile')}</li><li style='text-align:left'>${this.$t('download.content.node')}</li><li style='text-align:left'>${this.$t('download.content.start')}</li><li style='text-align:left'>${this.$t('download.content.done')}</li></ul>`;
            this.$swal({
                title: this.$t('download.title'),
                content: wrapper,
                buttons: {
                    cancel: this.$t('download.cancel'),
                    confirm: this.$t('download.confirm')
                },
            }).then(async result => {
                let requires = [`"discord.js": "^13.1.0",`,`"process":"^0.11.10",`,`"easy-json-database": "^1.5.0",`]
                let oldrequires = await localforage.getItem("requires")
                r(requires,oldrequires)
                if(result){
                    const zip = new JSZip();
                    const xmlContent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(this.$store.state.workspace));
                    const fileName = `${encodeURIComponent(document.querySelector("#docName").textContent).replace(/%20/g, " ")}.zip`;
                    zip.file("blocks.xml", xmlContent);
                    const javascriptContent = this.getWorkspaceCode();
                    if (String(javascriptContent).includes("let serverjs = ")) {
                        zip.file("server.js", `
const express = require('express');
const server = express();

server.all('/', (req, res)=>{
    res.send('Your bot is alive!')
})
function keepAlive(){
    server.listen(3000, ()=>{console.log("Server is Ready!")});
}
keepAlive()`);
                        zip.file("boot.js", `const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function load(){
console.log(\`
entering BIOS please wait....\`)
await delay(500)
console.clear()
await delay(500)
console.log(\`
                ░██████╗░░██╗██╗██████╗░
                ██╔════╝░██╔╝██║██╔══██╗
                ╚█████╗░██╔╝░██║██║░░██║
                ░╚═══██╗███████║██║░░██║
                ██████╔╝╚════██║██████╔╝
                ╚═════╝░░░░░░╚═╝╚═════╝░

                ░░██╗██╗░█████╗░░█████╗░
                ░██╔╝██║██╔═══╝░██╔══██╗
                ██╔╝░██║██████╗░╚██████║
                ███████║██╔══██╗░╚═══██║
                ╚════██║╚█████╔╝░█████╔╝
                ░░░░░╚═╝░╚════╝░░╚════╝░\`)
console.log(\`
██████╗░░█████╗░░█████╗░████████╗██╗███╗░░██╗░██████╗░░░░░░░░░░
██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██║████╗░██║██╔════╝░░░░░░░░░░
██████╦╝██║░░██║██║░░██║░░░██║░░░██║██╔██╗██║██║░░██╗░░░░░░░░░░
██╔══██╗██║░░██║██║░░██║░░░██║░░░██║██║╚████║██║░░╚██╗░░░░░░░░░
██████╦╝╚█████╔╝╚█████╔╝░░░██║░░░██║██║░╚███║╚██████╔╝██╗██╗██╗
╚═════╝░░╚════╝░░╚════╝░░░░╚═╝░░░╚═╝╚═╝░░╚══╝░╚═════╝░╚═╝╚═╝╚═╝\`)
await delay(2000)
console.log(\`𝕔𝕠𝕕𝕖 𝕝𝕠𝕒𝕕𝕖𝕕\`)
require("./bot")
require("./server")
}
load()`);
                    } else {
                    zip.file("boot.js", `const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function load(){
console.log(\`
entering BIOS please wait....\`)
await delay(350)
console.clear()
await delay(500)
console.log(\`
                ░██████╗░░██╗██╗██████╗░
                ██╔════╝░██╔╝██║██╔══██╗
                ╚█████╗░██╔╝░██║██║░░██║
                ░╚═══██╗███████║██║░░██║
                ██████╔╝╚════██║██████╔╝
                ╚═════╝░░░░░░╚═╝╚═════╝░

                ░░██╗██╗░█████╗░░█████╗░
                ░██╔╝██║██╔═══╝░██╔══██╗
                ██╔╝░██║██████╗░╚██████║
                ███████║██╔══██╗░╚═══██║
                ╚════██║╚█████╔╝░█████╔╝
                ░░░░░╚═╝░╚════╝░░╚════╝░\`)
console.log(\`
██████╗░░█████╗░░█████╗░████████╗██╗███╗░░██╗░██████╗░░░░░░░░░░
██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██║████╗░██║██╔════╝░░░░░░░░░░
██████╦╝██║░░██║██║░░██║░░░██║░░░██║██╔██╗██║██║░░██╗░░░░░░░░░░
██╔══██╗██║░░██║██║░░██║░░░██║░░░██║██║╚████║██║░░╚██╗░░░░░░░░░
██████╦╝╚█████╔╝╚█████╔╝░░░██║░░░██║██║░╚███║╚██████╔╝██╗██╗██╗
╚═════╝░░╚════╝░░╚════╝░░░░╚═╝░░░╚═╝╚═╝░░╚══╝░╚═════╝░╚═╝╚═╝╚═╝\`)
await delay(200)
console.log(\`𝕔𝕠𝕕𝕖 𝕝𝕠𝕒𝕕𝕖𝕕\`)
require("./bot")
}
load()`);
                    }
                    zip.file("bot.js", javascriptContent);
                    zip.file(".replit", 'run = "npm start"');
                  zip.file("database.json",await localStorage.getItem('easyjsondatabase'));
                    zip.file("package.json", `{\n
                        "name": "scratch-for-discord-bot",\n
                        "version": "1.0.0",\n
                        "main": "boot.js",\n
                        "scripts": {\n
                            "start": "node .",\n
                            "node-update": "npm i --save-dev node@17 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH",\n
                            "node-clean": "rm -rf node_modules && rm package-lock.json && npm cache clear --force && npm cache clean --force && npm i"\n
                        },\n
                        "dependencies": {\n
                             "djs-games": "^2.1.10",\n
                            "lyrics-finder": "^21.7.0",\n
                            "discord.js": "latest",\n
                            "os-utils": "0.0.14",\n
                            "easy-json-database": "^1.5.0",\n
                            "moment": "latest",\n
                            ${requires.join("\n")}\n
                            
                        },\n
                        "devDependencies": {\n
                            "node": "^17"\n
                        }\n
                    }`)
                    zip.generateAsync({
                        type: "blob"
                    })
                    .then((blob) => {
                        const a = document.createElement("a");
                        a.style = "display: none";
                        document.body.appendChild(a);
                        const url = window.URL.createObjectURL(blob);
                        a.href = url;
                        a.download = fileName;
                        a.click();
                        window.URL.revokeObjectURL(url);
                        document.body.removeChild(a);
                    });
                }
            });
        }
    }
}
</script>
