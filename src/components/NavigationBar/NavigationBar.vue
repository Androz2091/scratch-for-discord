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
                <!--<LanguageMenu></LanguageMenu>-->
                <ExamplesMenu></ExamplesMenu>
                <preBuilds></preBuilds>
                <TokenModal></TokenModal>
                <Socials></Socials>
                <b-nav-item href="https://androz2091.gitbook.io/scratch-for-discord/" target="_blank">{{ $t('help') }}</b-nav-item>
                <Credit></Credit>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-button style="border-right-color: #161719; border-radius: 0em; border-top-left-radius: 0.25em; border-bottom-left-radius: 0.25em">
                <span contenteditable="true" id="docName">{{ $t("untitled") }}</span>
                </b-button>
                <!-- border-top-right-radius: 0.25em; border-bottom-right-radius: 0.25em -->
                <b-button id="v-step-2" style="border-right-color: #161719; border-radius: 0em" @click="indexjs">
                    <b-icon-file-code></b-icon-file-code>
                </b-button>
                <b-button id="v-step-3" :disabled="!configurationValidated" style="border-radius: 0em; border-top-right-radius: 0.25em; border-bottom-right-radius: 0.25em" @click="exportToCode">
                    <b-icon-download></b-icon-download>
                </b-button>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
/* eslint-disable */
import Blockly from "blockly";
import JSZip from "jszip";
import TokenModal from "./TokenModal.vue";
import FileMenu from "./FileMenu.vue";
import EditMenu from "./EditMenu.vue";
//import LanguageMenu from "./LanguageMenu.vue";
import ExamplesMenu from "./ExamplesMenu.vue";
import CodeModal from "./CodeModal.vue";
import preBuilds from "./preBuilds.vue";
import ToolboxModal from "./ToolboxModal.vue";
import Socials from "./socials.vue";
import Credit from "./Credit";
import localforage from 'localforage';
import r from "./requires";
import swal from "sweetalert2";
export default {
    name: "navbar",
    components: {
        FileMenu,
        EditMenu,
        //LanguageMenu,
        ExamplesMenu,
        CodeModal,
        TokenModal,
        preBuilds,
        ToolboxModal,
        Credit,
        Socials
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
                let requires = [`"discord.js": "^13.7.0",`,`"process":"^0.11.10",`,`"easy-json-database": "^1.5.0",`]
                let oldrequires = await localforage.getItem("requires")
                r(requires,oldrequires)
                if(result){
                    const zip = new JSZip();
                    const xmlContent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(this.$store.state.workspace));
                    const fileName = `${encodeURIComponent(document.querySelector("#docName").textContent).replace(/%20/g, " ")}.zip`;
                    zip.file("blocks.xml", xmlContent);
                    const javascriptContent = this.getWorkspaceCode();
                    if (javascriptContent.includes("queue.join") && javascriptContent.includes("queue.connect")) {
                        swal.fire("Sorry, but Retro and Jose music blocks do not work together.")
                        return;
                    }
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
console.clear()
console.log(\`
██████╗░░█████╗░░█████╗░████████╗██╗███╗░░██╗░██████╗░░░░░░░░░░
██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██║████╗░██║██╔════╝░░░░░░░░░░
██████╦╝██║░░██║██║░░██║░░░██║░░░██║██╔██╗██║██║░░██╗░░░░░░░░░░
██╔══██╗██║░░██║██║░░██║░░░██║░░░██║██║╚████║██║░░╚██╗░░░░░░░░░
██████╦╝╚█████╔╝╚█████╔╝░░░██║░░░██║██║░╚███║╚██████╔╝██╗██╗██╗
╚═════╝░░╚════╝░░╚════╝░░░░╚═╝░░░╚═╝╚═╝░░╚══╝░╚═════╝░╚═╝╚═╝╚═╝\`)
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
console.clear()
console.log(\`
██████╗░░█████╗░░█████╗░████████╗██╗███╗░░██╗░██████╗░░░░░░░░░░
██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██║████╗░██║██╔════╝░░░░░░░░░░
██████╦╝██║░░██║██║░░██║░░░██║░░░██║██╔██╗██║██║░░██╗░░░░░░░░░░
██╔══██╗██║░░██║██║░░██║░░░██║░░░██║██║╚████║██║░░╚██╗░░░░░░░░░
██████╦╝╚█████╔╝╚█████╔╝░░░██║░░░██║██║░╚███║╚██████╔╝██╗██╗██╗
╚═════╝░░╚════╝░░╚════╝░░░░╚═╝░░░╚═╝╚═╝░░╚══╝░╚═════╝░╚═╝╚═╝╚═╝\`)
console.log(\`𝕔𝕠𝕕𝕖 𝕝𝕠𝕒𝕕𝕖𝕕\`)
require("./bot")
}
load()`);
                    }
                    zip.file("bot.js", javascriptContent);
                    zip.file(".replit", 'run = "npm start"');
                  zip.file("database.json", "{}");
                    zip.file("package.json", `{\n
                        "name": "scratch-for-discord-bot",\n
                        "version": "1.0.0",\n
                        "main": "boot.js",\n
                        "scripts": {\n
                            "start": "npm i && node .",\n
                            "node-update": "npm i --save-dev node@17 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH",\n
                            "node-clean": "rm -rf node_modules && rm package-lock.json && npm cache clear --force && npm cache clean --force && npm i"\n
                        },\n
                        "dependencies": {\n
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
        },
        indexjs(){
            const wrapper = document.createElement('div');
            wrapper.innerHTML = `<h6>Explanations:</h6>
            <ul>
                <li style='text-align:left'>"bot.js" contains your bot's code.</li>
                <li style='text-align:left'>"package.json" contains all of the packages needed for hosting on your computer.</li>
                <li style='text-align:left'>"blocks.xml" contains all of your blocks used to create your bot.</li>
                <li style='text-align:left'>".replit" allows the bot to start with a certain command. Not required if the bot file is named "index.js".</li>
                <li style='text-align:left'>"database.json" is an empty database ready for you to fill.</li>
                <li style='text-align:left'>"boot.js" literally just runs the bot.js file.</li>
            </ul>`;
                //     zip.file(".replit", 'run = "npm start"');
                //   zip.file("database.json", "{}");
            this.$swal({
                title: "Which file are you downloading?",
                content: wrapper,
                icon: 'warning',
                buttons: {
                    cancel: "Nevermind...",
                    file1: "bot.js",
                    file2: "package.json",
                    file3: "blocks.xml",
                    file4: ".replit",
                    file5: "database.json",
                    file6: "boot.js"
                },
            }).then(async (result) => {
                console.log(result)
if ((result == "file1")) {
            const javascriptContent = this.getWorkspaceCode();
            const blob = new Blob([javascriptContent])
            const a = document.createElement("a");
                a.style = "display: none";
                document.body.appendChild(a);
                const url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = "bot.js";
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
} else if ((result == "file2")) {
                let requires = [`"discord.js": "^13.7.0",`,`"process":"^0.11.10",`,`"easy-json-database": "^1.5.0",`]
                let oldrequires = await localforage.getItem("requires")
                r(requires,oldrequires)
            const javascriptContent = `{\n
                        "name": "scratch-for-discord-bot",\n
                        "version": "1.0.0",\n
                        "main": "boot.js",\n
                        "scripts": {\n
                            "start": "npm i && node .",\n
                            "node-update": "npm i --save-dev node@17 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH",\n
                            "node-clean": "rm -rf node_modules && rm package-lock.json && npm cache clear --force && npm cache clean --force && npm i"\n
                        },\n
                        "dependencies": {\n
                            "moment": "latest",\n
                            ${requires.join("\n")}\n
                            
                        },\n
                        "devDependencies": {\n
                            "node": "^17"\n
                        }\n
                    }`;
            const blob = new Blob([javascriptContent])
            const a = document.createElement("a");
                a.style = "display: none";
                document.body.appendChild(a);
                const url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = "package.json";
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);

} else if ((result == "file3")) {
            const xmlContent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(this.$store.state.workspace));
            const blob = new Blob([xmlContent])
            const a = document.createElement("a");
                a.style = "display: none";
                document.body.appendChild(a);
                const url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = "blocks.xml";
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);

} else if ((result == "file4")) {
            const blob = new Blob(['run = "npm start"'])
            const a = document.createElement("a");
                a.style = "display: none";
                document.body.appendChild(a);
                const url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = "\\.replit";
                // you cant save it as .replit for some reason, _.replit is the best option for this
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);

} else if ((result == "file5")) {
            const blob = new Blob(["{}"])
            const a = document.createElement("a");
                a.style = "display: none";
                document.body.appendChild(a);
                const url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = "database.json";
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);

} else if ((result == "file6")) {
            const blob = new Blob([`const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function load(){
console.log(\`
entering BIOS please wait....\`)
console.clear()
console.log(\`
██████╗░░█████╗░░█████╗░████████╗██╗███╗░░██╗░██████╗░░░░░░░░░░
██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██║████╗░██║██╔════╝░░░░░░░░░░
██████╦╝██║░░██║██║░░██║░░░██║░░░██║██╔██╗██║██║░░██╗░░░░░░░░░░
██╔══██╗██║░░██║██║░░██║░░░██║░░░██║██║╚████║██║░░╚██╗░░░░░░░░░
██████╦╝╚█████╔╝╚█████╔╝░░░██║░░░██║██║░╚███║╚██████╔╝██╗██╗██╗
╚═════╝░░╚════╝░░╚════╝░░░░╚═╝░░░╚═╝╚═╝░░╚══╝░╚═════╝░╚═╝╚═╝╚═╝\`)
console.log(\`𝕔𝕠𝕕𝕖 𝕝𝕠𝕒𝕕𝕖𝕕\`)
require("./bot")
}
load()`])
            const a = document.createElement("a");
                a.style = "display: none";
                document.body.appendChild(a);
                const url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = "boot.js";
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);

}
            })
        }
    }
}
</script>
