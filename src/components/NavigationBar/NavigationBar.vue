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
                <b-button id="v-step-4" style="border-right-color: #161719; border-radius: 0em" @click="runbot">
                    <b-icon-play></b-icon-play>
                </b-button>
                <!--
                <b-button id="v-step-5" style="border-right-color: #161719; border-radius: 0em" @click="console">
                    <b-icon-newspaper></b-icon-newspaper>
                </b-button>
                -->
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
        if (window.location.href.includes("deploy-preview-469--scratch-for-discord.netlify.app")) {
            this.$swal({
                title: "Hey!",
                content: "<p>You seem to be using the wrong site for <b>Scratch For Discord!</b></p>",
                icon: 'warning',
                buttons: {
                    cancel: "I'm fine",
                    confirm: "Go to Vercel"
                },
            }).then(async (result) => {
                if ((result == true) || (result == "confirm")) {
                    window.location.href = "https://scratch-for-discord-469.vercel.app/"
                }
            })
        }
    },
    methods: {
        exportToCode(){
            console.log("barry: hey johnathan come over here")
            console.log("johnathan: what")
            console.log("barry: the user might be planning to download their zip file")
            console.log("johnathan: ok")
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
                var requireUsed = requires.join("\n")
                if ((requireUsed.charAt(requireUsed.length - 1)) == ",") {
                    requireUsed = requireUsed.substring(0, (requireUsed.length - 1))
                }
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
                            ${requireUsed}\n
                            
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
            console.log("barry: well we are done, lets get back to managing the blocks")
            console.log("johnathan: ok")
                }
                else
                {
                    
            console.log("barry: nvm lol")
                }
            });
        },
        indexjs(){
            if (window.location.pathname == "/spooky") {
                var random = Math.floor(Math.random() * 10)
                if (random == 0) {
                    var app = document.getElementById("app")
                    app.remove()
                    var audio = new Audio('https://cdn.discordapp.com/attachments/931448244725227571/978539713965203536/2022-05-24_08-03-54.mp3')
                    audio.play()
                    setTimeout(() => swal.fire("(this is the part where you refresh the page, btw.)"), ((Math.floor(Math.random() * 15) + 15) * 1000))
                    
                } else {
                    var audio = new Audio('https://cdn.discordapp.com/attachments/914411539887456296/978502828228247562/button_jam.wav')
                    audio.play()
                }
                return;
            }
            console.log("barry: hey what file do you want to download?")
            console.log("johnathan: dude they cant hear us")
            console.log("barry: oh right i forgot")
            const wrapper = document.createElement('div');
            wrapper.innerHTML = `<h6>Explanations:</h6>
            <ul>
                <li style='text-align:left'>"bot.js" contains your bot's code. <p style="color:#9f54bf">Simple Host also requires this file only when hosting.</p></li>
                <li style='text-align:left'>"package.json" contains all of the packages needed for hosting on your computer.</li>
                <li style='text-align:left'>"blocks.xml" contains all of your blocks used to create your bot.</li>
                <li style='text-align:left'>".replit" allows the bot to start with a certain command. Not required if the bot file is named "index.js".</li>
                <li style='text-align:left'>"database.json" is an empty database ready for you to fill.</li>
                <li style='text-align:left'>"boot.js" literally just runs the bot.js file.</li>
            </ul>
            
  <input type="checkbox" id="file1" checked="checked">
  <label for="file1"> bot.js </label>
  <input type="checkbox" id="file2">
  <label for="file2"> package.json </label>
  <input type="checkbox" id="file3">
  <label for="file3"> blocks.xml</label><br>
  <input type="checkbox" id="file4">
  <label for="file4"> .replit </label>
  <input type="checkbox" id="file5">
  <label for="file5"> database.json </label>
  <input type="checkbox" id="file6">
  <label for="file6"> boot.js</label><!--<br><br>
  <input type="checkbox" id="ZIP">
  <label for="ZIP"> ZIP Files</label>-->`;
                //     zip.file(".replit", 'run = "npm start"');
                //   zip.file("database.json", "{}");
            this.$swal({
                title: "Which file are you downloading?",
                content: wrapper,
                icon: 'warning',
                buttons: {
                    cancel: "Nevermind...",
                    confirm: "Download"
                //     file1: "bot.js",
                //     file2: "package.json",
                //     file3: "blocks.xml",
                //     file4: ".replit",
                //     file5: "database.json",
                //     file6: "boot.js"
                },
            }).then(async (result) => {
                console.log(result)
if ((result == true)) {
    var file1 = document.getElementById('file1').checked
    var file2 = document.getElementById('file2').checked
    var file3 = document.getElementById('file3').checked
    var file4 = document.getElementById('file4').checked
    var file5 = document.getElementById('file5').checked
    var file6 = document.getElementById('file6').checked
    //var zip = document.getElementById('ZIP').checked

                console.log(file1)
                console.log(file2)
                console.log(file3)
                console.log(file4)
                console.log(file5)
                console.log(file6)
                //console.log(zip)
if (file1) {
            console.log("barry: hey can you go grab their code")
            console.log("johnathan: ok")
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
            console.log("johnathan: done")
}
if ((file2)) {
            console.log("johnathan: hey can you grab the packages")
            console.log("barry: on it")
                let requires = [`"discord.js": "^13.7.0",`,`"process":"^0.11.10",`,`"easy-json-database": "^1.5.0",`]
                let oldrequires = await localforage.getItem("requires")
                r(requires,oldrequires)
                var requireUsed = requires.join("\n")
                if ((requireUsed.charAt(requireUsed.length - 1)) == ",") {
                    requireUsed = requireUsed.substring(0, (requireUsed.length - 1))
                }
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
                            ${requireUsed}\n
                            
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
            console.log("barry: done")

}
if (file3) {
            console.log("barry: im gonna start getting their blocks")
            console.log("johnathan: ok")
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
            console.log("barry: finished")

}
if (file4) {
            console.log("barry: lemme just type in a couple things real quick")
            console.log("johnathan: ok")
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
            console.log("barry: oh damn i accidentally added an underscore")
            console.log("johnathan: again?")

}
if (file5) {
            console.log("barry: im gonna grab one of our sample databases")
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
            console.log("barry: done")

}
if (file6) {
            console.log("barry: johnathan can you help me get the boot file out of the acid pool?")
            console.log("johnathan: ok")
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
            console.log("barry: thanks")

}
            console.log("barry: welp guess we are done")
            console.log("johnathan: lets get back to work, shall we?")
            }})
        },
        runbot(){
            // const wrapper = document.createElement('div');
            // wrapper.innerHTML = `<!--<h6>Run your bot?</h6>
            // <ul>
            //     <li style='text-align:left'>${this.$t('download.content.unzipFile')}</li>
            //     <li style='text-align:left'>${this.$t('download.content.node')}</li>
            //     <li style='text-align:left'>${this.$t('download.content.start')}</li>
            //     <li style='text-align:left'>${this.$t('download.content.done')}</li>
            // </ul>-->`;
            const wrapper = document.createElement('div');
            wrapper.innerHTML = `<h6>You will have to manually stop your bot in Discord!</h6>`
            this.$swal({
                title: "Start your bot?",
                icon: "warning",
                content: wrapper,
                buttons: {
                    cancel: "Cancel",
                    run: "Yes!"
                },
            }).then(async (result) => {
                if (result == "run") {
                    console.log("johnathan: run the bot bro")
                    console.log("barry: mk lemme just package up the code they made")
                    console.log("johnathan: ok tell me when your done")
                    console.log("barry: ok")
                    const javascriptContent = this.getWorkspaceCode();
                    // http.createServer((req, res) => {
                    // let serverjs = 'true'
                    const xmlContent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(this.$store.state.workspace));
                    // block type="frost_env"
                    // block type="frost_webserver"
                    if (
                        javascriptContent.includes("process.env") ||
                        javascriptContent.includes("http.createServer((req, res) => {") ||
                        xmlContent.includes("block type=\"frost_webserver\"") ||
                        xmlContent.includes("block type=\"frost_env\"")
                    ) {
                        swal.fire("Your bot contains a replit block. Please remove it before continuing.", "You may have a process.env block or a webserver block placed somewhere.", "error")
                        console.log("barry: ok so i finished but the user has incompatible blocks")
                        console.log("johnathan: damn")
                        console.error("barry and johnathan found replit blocks...")
                        return;
                    } else if (
                        xmlContent.includes("block type=\"blank_code\"") ||
                        xmlContent.includes("block type=\"s4d_eval\"") ||
                        xmlContent.includes("block type=\"s4d_eval2\"")
                    ) {
                        swal.fire("Your bot contains blocks that run or insert code.", "Remove any \"insert code\" or \"run code\" blocks before running.", "error")
                        console.log("barry: ok so i finished but the user has custom code blocks")
                        console.log("johnathan: damn")
                        console.error("barry and johnathan found insert or run code blocks...")
                        return;
                    } else if (
                        xmlContent.includes("block type=\"simple_host_auth\"")
                    ) {
                        swal.fire("Your bot contains blocks for Simple Host.", "Remove any \"Simple Host Auth\" blocks before running.", "error")
                        console.log("barry: ok so i finished but the user uses simple host")
                        console.log("johnathan: LMAOOOOOOOOOOOOOOOOOOOOOOOO")
                        console.error("barry and johnathan found out you use simple host...")
                        return;
                    }
                    var botID = String((Math.floor(Math.random() * 8999) + 1000))
                    var modifiedJScontent = javascriptContent.replaceAll(`process.on('uncaughtException', function(err) {`, `let aijpfheiowfoiewfhewoiufewoifjopq = require('fs');\nprocess.on('uncaughtException', function(err) {\naijpfheiowfoiewfhewoiufewoifjopq.appendFileSync('./server/console.rbs', (${botID} + String(err)), function(err) {});`)
                    var modifiedJScontent = modifiedJScontent.replaceAll("const S4D_APP_RUN_BUTTON = false", "const S4D_APP_RUN_BUTTON = true")
                    console.log("barry: done")
                    console.log("johnathan: ok go send the post request")
                    console.log("barry: ok")
                    console.log("epic server: now going to be sending POST request to JeremyGamer13s dumb and insecure API!!1!1!!")
                    const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                                key: process.env.VUE_APP_KEY,
                                code: modifiedJScontent
                            })
                    };
                    try {
                        if (process.env.VUE_APP_KEY == null) {
                            swal.fire(
                                "Cool! However..",
                                `The bot would have been sent,<br><aew3f2 style="color:#188DC8">but the server S4D is currently running on does not have an API key present.</aew3f2><br><br><p>Using Netlify? <a href="https://scratch-for-discord-469.vercel.app/">Click here to go to Vercel!</a></p><!--<br><h6 style="color:#188DC8">This menu popped up because the API key is not present.</h6>-->`,
                                "info"
                            )
                            console.log("epic server: POST request pretended to be sent to JeremyGamer13s dumb and insecure API😀😁😀👍😁👍👍👍")
                            console.log("barry: technically done")
                            console.log("johnathan: nice, now lets get back to work")

                            console.log("Code that would have been sent:")
                            console.log(modifiedJScontent)
                            return;
                        }
                        fetch('https://469runtest.jeremygamer13.repl.co/?imbored=true', requestOptions)
                        .then(async (response) => {
                            console.log(response)
                        })
                        console.log("epic server: POST request sent to JeremyGamer13s dumb and insecure API😀😁😀👍😁👍👍👍")
                        console.log("barry: done")
                        console.log("johnathan: nice, now lets get back to work")
                        /*
                        swal.fire(
                            "Nice!",
                            `Your bot should go online soon.<br>To see any errors that occur in your bot, click the button with the 📰 icon,<br>and then look for any error that starts with the number <b>${botID}.</b>`,
                            "success"
                        )
                        */
                       //localhost:
                        swal.fire(
                            "Nice!",
                            `Your bot should go online soon.`,
                            "success"
                        )
                    }
                    catch (err)
                    {
                        swal.fire(
                            "An error occurred!",
                            String(err),
                            "error"
                        )
                        console.log("*zapping sounds come from epic server*")
                        console.log("epic server: FUCK AHJGJEUYGE*&TIUG#*&IUKJNGUYEFJE(O")
                        console.log("barry: epic server what happened?")
                        console.log(`epic server: ${err}`)
                        console.log("johnathan: damn we gotta get back to work barry")
                        console.log("barry: sorry epic server but we gotta go for now")
                    }
                    // .then(response => response.json())
                    // .then(data => element.innerHTML = data.id );
                    
                }
            })
        },
        console(){
            // const wrapper = document.createElement('div');
            var temp1, temp2
            console.log("fetching RBS console...")
            const showMenu = function (content) {
                swal.fire({
                    title: "Public Error Console (used by the Run Button)",
                    width: "1500px",
                    heightAuto: true,
                    html: content,
                    showCancelButton: true,
                    showConfirmButton: false,
                    cancelButtonText: "Close menu"
                })
            }
            try {
                fetch("https://469runtest.jeremygamer13.repl.co/console").then(response => response.json())
                .then(async (data) => {
                    var serverResponse = "No response from the RBS... maybe try again later?"
                    console.log(data)
                    console.log(data.code)
                    temp1 = String(data.code).replaceAll("□", "\n")
                    temp2 = String(temp1).replaceAll("▣", "\"")
                    serverResponse = temp2
                    const errors = document.createElement('p');
                    errors.appendChild(document.createTextNode(serverResponse))
                    showMenu(errors)
                });
            } catch (err) {
                var serverResponse = "No response from the RBS... maybe try again later?"
                console.warn("damn, RBS went offline or somethin?")
                console.warn(err)
                const errors = document.createElement('p');
                errors.appendChild(document.createTextNode(serverResponse))
                showMenu(errors)
            }
            
            
        }
    }
}
</script>
