<template>
    <b-navbar toggleable="lg" type="dark" style="background-color:#161719;user-select:none;" id="navbar nav-main">
        <b-navbar-brand style="font-size: 120%;">
            <button id="hideAllGuiElements" class="hide-gui-button"><img :src="decideNavBarImage" width="35" draggable="false" id="navigationBarS4DImage"></button>
            Scratch For Discord
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <CodeModal></CodeModal>
                <FileMenu style="font-size: small;"></FileMenu>
                <EditMenu style="font-size: small;"></EditMenu>
                <!--<ToolboxModal style="font-size: small;"></ToolboxModal>-->
                <!--<LanguageMenu></LanguageMenu>-->
                <ExamplesMenu style="font-size: small;"></ExamplesMenu>
                <Socials style="font-size: small;"></Socials>
                <Forums style="font-size: small;"></Forums>
                <drtrrlrlrlrlrl style="font-size: small;"></drtrrlrlrlrlrl>
                <changelog style="font-size: small;"></changelog>
                <shortcuts style="font-size: small;"></shortcuts>
                <Credit style="font-size: small;"></Credit>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <div id="block-counter" style="margin-right: 5px; font-size: 90%">
                    <p id="block-counter-textParagraph" style="color:rgb(182, 182, 182);">0 blocks</p>
                </div>
                <b-nav-item class="theme-changer" id="themeSwitchingLD"
                    style="width: 32px; height: 32px; margin-top: 2px; margin-right: 5px;" @click="changeTheme">
                </b-nav-item>

                <b-button
                    style="border-right-color: #161719; border-radius: 0em; border-top-left-radius: 0.25em; border-bottom-left-radius: 0.25em">
                    <span id="docName" style="font-size: smaller" @click="changeFileName">{{ $t("untitled") }}</span>
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
                <b-button id="v-step-2" style="border-right-color: #161719; border-radius: 0em" @click="util">
                    <b-icon-gear></b-icon-gear>
                </b-button>
                <b-button id="v-step-3"
                    style="border-radius: 0em; border-top-right-radius: 0.25em; border-bottom-right-radius: 0.25em"
                    @click="exportToCode">
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
import FileMenu from "./FileMenu.vue";
import EditMenu from "./EditMenu.vue";
//import LanguageMenu from "./LanguageMenu.vue";
import shortcuts from './shortcuts.vue';
import ExamplesMenu from "./ExamplesMenu.vue";
import CodeModal from "./CodeModal.vue";
//import ToolboxModal from "./ToolboxModal.vue";
import Socials from "./socials.vue";
import Credit from "./Credit";
import Forums from "./ForumsMenu.vue";
import drtrrlrlrlrlrl from "./data.vue"
import changelog from "./changelog.vue"
import localforage from 'localforage';
import r from "./requires";
import swal from "sweetalert2";
import ForumsMenu from "./ForumsMenu.vue";
export default {
    name: "navbar",
    components: {
    FileMenu,
    EditMenu,
    //LanguageMenu,
    ExamplesMenu,
    CodeModal,
    //ToolboxModal,
    shortcuts,
    Credit,
    Forums,
    drtrrlrlrlrlrl,
    changelog,
    Socials,
    ForumsMenu
},
    computed: {
        // configurationValidated: function () {
        //     return  this.$store.state.workspace &&
        //             this.$store.state.workspace.getAllBlocks().some((block) => block.type === "s4d_login") &&
        //             this.$store.state.workspace.getAllBlocks().every((block) => !block.disabled && !block.warning);
        // },
        decideNavBarImage: function() {
            return window.location.origin + "/scratch.png"
        }
    },
    mounted(){
        document.getElementById("docName").addEventListener("input", function() {
            if (document.querySelector("#docName").textContent == "") {
                document.querySelector("#docName").textContent = "Untitled document"
            }
            document.title = `Scratch For Discord 469 - ${document.querySelector("#docName").textContent}`;
        }, false);
        const element = document.querySelector("#docName");
        element.spellcheck = false;
        element.focus(); 
        element.blur();
        this.$store.commit("setLocale", {
            newLocale: "en"
        });
        this.setLanguage("en");
        let url = window.location.href
        window.onload = function () {
            if (url.includes("deploy-preview-469--scratch-for-discord.netlify.app") && !url.includes("#force")) location.href = "https://scratch-for-discord-469.vercel.app/";
            if (url.includes("#snd=")) {
                let soundlink = url.substring(url.indexOf("#snd=") + 5, url.lastIndexOf("#")).replaceAll('"', "").replaceAll("\n", "")
                const audio = new Audio(soundlink)
                let audio_played = false
                audio.onended = function () { audio.play() }
                window.onclick = function () { if (!audio_played) if (audio.play()) audio_played = true }
            }
        }
        document.getElementById("hideAllGuiElements").onclick = () => {
            const navSpace = document.getElementById("navSpace")
            const blocklySpace = document.getElementById("blocklySpace")
            const blocklyToolboxDiv = document.getElementsByClassName("blocklyToolboxDiv").item(0)
            navSpace.classList.add("hideAllGuiElements")
            blocklySpace.classList.add("hideAllGuiElements")
            blocklyToolboxDiv.classList.add("hideAllGuiElements")
            const showButton = document.createElement("button")
            showButton.classList.add("show-gui-button")
            showButton.onclick = () => {
                navSpace.classList.remove("hideAllGuiElements")
                blocklySpace.classList.remove("hideAllGuiElements")
                blocklyToolboxDiv.classList.remove("hideAllGuiElements")
                showButton.remove()
                Blockly.svgResize(window.blocklyWorkspaceThatIneedtoUseForThingsLaigwef9o8wifnwp4e)
            }
            showButton.innerHTML = '<img src="' + window.location.origin + "/scratch.png" + '" width="35" draggable="false">'
            document.body.append(showButton)
            Blockly.svgResize(window.blocklyWorkspaceThatIneedtoUseForThingsLaigwef9o8wifnwp4e)
        }
        if (String(window.location.pathname).replace(/\//gmi, "") == "spooky") {
            const wrapper = document.createElement('div')
            wrapper.innerHTML = 'Flashing Lights and "jumpscares" appear in this S4D secret. Continue if you are fine with this, and feel free to exit the page now if you aren\'t.'
            this.$swal({
                title: "Warning!",
                icon: "warning",
                content: wrapper,
                buttons: {
                    ok: "I understand"
                },
            })
            function preloadImage(url, appendS4dUrl) {
                if (appendS4dUrl) url = "https://scratch-for-discord.com/spooky/" + url
                const pl = document.createElement("img")
                pl.src = url
                pl.style.width = "1px"
                pl.style.height = "1px"
                pl.style.position = "absolute"
                pl.style.left = "0px"
                pl.style.top = "0px"
                pl.style.opacity = 0.2
                document.body.append(pl)
            }
            function preloadAudio(url, appendS4dUrl) {
                if (appendS4dUrl) url = "https://scratch-for-discord.com/spooky/" + url
                const pl = document.createElement("audio")
                pl.preload = "auto"
                pl.style.width = "1px"
                pl.style.height = "1px"
                pl.style.position = "absolute"
                pl.style.left = "0px"
                pl.style.top = "0px"
                pl.style.opacity = 0.1
                pl.innerHTML = '<source src="' + url + '">'
                document.body.append(pl)
            }
            [
                "emptyObject_inVent.png",
                "emptyObject.gif",
                "glitch1.png",
                "glitch2.png",
                "gottenThread_inVent.png",
                "gottenThread.gif",
                "history.gif",
                "night2.png",
                "office_door_left.png",
                "office_door_right.png",
                "office_shine.png",
                "office_unlit.png",
                "power.png",
                "powerMeter_back.png",
                "powerMeter_filled.png",
                "static.gif",
            ].forEach(img => {
                preloadImage(img, true)
            })
            preloadAudio("glitchare.mp3", true)
        }
    },
    methods: {
        exportToCode(){
            function getWorkspaceProblems(workspace) {
                let problems = []
                let problematic = false
                let blockProblems = []
                let allBlocks = workspace.getAllBlocks()
                if (!allBlocks.some((block) => block.type === "s4d_login")) {
                    problems.push(`<li style='text-align:left'>The <b>Connect to Discord</b> block is missing.</li>`)
                }
                allBlocks.forEach(block => {
                    if (block.warning) {
                        blockProblems.push(`<li style='text-align:left'>` + block.warning.getText() + `</li>`)
                        problematic = true
                    }
                })
                let newString = ""
                if (problems.length > 0 || problematic) {
                    newString = `<h2>Hold up!</h2>
<p>Some problems on the workspace need to be solved before you can get a working download.</p>
<ul>
`
                    newString += problems.join("")
                    if (blockProblems.length > 0) {
                        newString += `<details style='text-align:left'>
    <summary><b>Some blocks have some errors on them.</b></summary>
    <div>`
                        newString += blockProblems.join("")
                        newString += `</div>
</details>`
                    }
                    newString += `</ul>
<b style="color:darkred">If you continue with the download, the bot may not work correctly!</b>
<br><br>`
                }
                return newString
            }
            const wrapper = document.createElement('div');
            wrapper.innerHTML = `${getWorkspaceProblems(this.$store.state.workspace)}<h6>How to start your bot once downloaded?</h6>
<ul>
<li style='text-align:left'>Unzip the Downloaded File.</li>
<li style='text-align:left'>Install NPM and Node.js (Hint: Google Search).</li>
<li style='text-align:left'>Run 'npm install' and 'npm start' in a terminal</li>
<li style='text-align:left'>Your bot is started!</li>
</ul>
<style>
.lololoEPIC_EXPORT_CLASS_NAME_bruh_xd_1123123123 {
    width: 35%
}
</style>`;
            this.$swal({
                title: "Download your bot?",
                content: wrapper,
                className: "lololoEPIC_EXPORT_CLASS_NAME_bruh_xd_1123123123",
                buttons: {
                    cancel: "Cancel",
                    confirm: "Download"
                },
            }).then(async result => {
                let requires = [`"discord.js": "^13.7.0",`,`"process":"^0.11.10",`,`"easy-json-database": "^1.5.0",`,`"discord-logs": "2.0.0",`]
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
                    }/*
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
console.log(\`Code Loaded!\`)
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
console.log(\`Code Loaded!\`)
require("./bot")
}
load()`);
                    }*/
                    zip.file("index.js", javascriptContent);
                    /*
                    zip.file(".replit", 'run = "npm start"');
                  zip.file("database.json", "{}");
                  */
                    zip.file("package.json", `{\n
                        "name": "scratch-for-discord-bot",\n
                        "version": "1.0.0",\n
                        "main": "index.js",\n
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
            console.log("barry: well we are done, let's get back to managing the blocks")
            console.log("johnathan: ok")
                }
                else
                {
                    
            console.log("barry: nvm lol")
                }
            });
        },
        async util() {
            if (String(window.location.pathname).replace(/\//gmi, "") == "spooky") {
                const random = Math.floor(Math.random() * 6)
                if (random != 0) {
                    const audio = new Audio('https://scratch-for-discord.com/spooky/button_jam.wav')
                    audio.play()
                } else {
                    function delay(ms) {
                        return new Promise((resolve, _) => {
                            setTimeout(resolve, ms)
                        })
                    }
                    let GAMESCORE = 0
                    const parentDiv = document.createElement("div") // set the div responsible for holding all the elements the game uses
                    document.body.append(parentDiv)
                    // comment code inbetween this and the next comment to remove div sizing
                    parentDiv.style.position = "absolute"
                    parentDiv.style.left = "0px"
                    parentDiv.style.top = "0px"
                    parentDiv.style.width = "100%"
                    parentDiv.style.height = "100%"
                    parentDiv.style.zIndex = 999999
                    // div sizing stuff above
                    parentDiv.style.backgroundColor = "black"
                    parentDiv.style.color = "white"
                    // silly little camera sound
                    const nightStartingSound = new Audio('https://scratch-for-discord.com/spooky/camera_flip.mp3')
                    nightStartingSound.play()
                    const nightText = document.createElement("img")
                    nightText.style.position = "absolute"
                    nightText.style.left = "40%"
                    nightText.style.top = "calc(50% - 30px)"
                    nightText.src = "https://scratch-for-discord.com/spooky/night2.png"
                    nightText.height = 60
                    parentDiv.append(nightText)
                    for (let i = 1; i < 3; i++) {
                        const glitch = document.createElement("img")
                        glitch.style.position = "absolute"
                        glitch.style.left = "0px"
                        glitch.style.top = "0px"
                        glitch.style.width = "100%"
                        glitch.style.height = "100%"
                        glitch.src = 'https://scratch-for-discord.com/spooky/glitch' + i + '.png'
                        parentDiv.append(glitch)
                        await delay(135)
                        glitch.remove()
                    }
                    await delay(3000)
                    let powerLevel = 100
                    let generatorEnabled = false
                    nightText.remove()
                    const office = document.createElement("img")
                    office.style.position = "absolute"
                    office.style.left = "0px"
                    office.style.top = "0px"
                    office.style.width = "100%"
                    office.style.height = "100%"
                    office.src = "https://scratch-for-discord.com/spooky/office_unlit.png"
                    parentDiv.append(office)
                    const blocks = {}
                    blocks.emptyObject = {
                        acting: false,
                        inVent: false,
                        anger: 1,
                        waitingForVentOpen: false,
                        jumpscare: () => playJumpscare("emptyObject"),
                        displayMyself: () => {
                            blocks.emptyObject.element.style.display = "none"
                            if (blocks.emptyObject.inVent) blocks.emptyObject.element.style.display = "inherit"
                        },
                        actionsInterval: setInterval(() => {
                            if (blocks.emptyObject.acting) return
                            if (Math.round(Math.random() * (439 / blocks.emptyObject.anger)) == 0) {
                                blocks.emptyObject.acting = true
                                blocks.emptyObject.inVent = true
                                blocks.emptyObject.waitingForVentOpen = true
                                blocks.emptyObject.displayMyself()
                                setTimeout(() => {
                                    if (!office.doors.left.closed) return blocks.emptyObject.jumpscare()
                                    blocks.emptyObject.waitingForVentOpen = false
                                    blocks.emptyObject.inVent = false
                                    blocks.emptyObject.displayMyself()
                                    setTimeout(() => {
                                        blocks.emptyObject.acting = false
                                    }, 2380)
                                }, 2700)
                            }
                        }, 50)
                    }
                    blocks.emptyObject.element = document.createElement("img")
                    blocks.emptyObject.element.style.position = "absolute"
                    blocks.emptyObject.element.style.left = "6%"
                    blocks.emptyObject.element.style.top = "70%"
                    blocks.emptyObject.element.style.width = "15%"
                    blocks.emptyObject.element.style.height = "12%"
                    blocks.emptyObject.element.style.display = "none"
                    blocks.emptyObject.element.src = "https://scratch-for-discord.com/spooky/emptyObject_inVent.png"
                    parentDiv.append(blocks.emptyObject.element)
                    blocks.gottenThread = {
                        acting: false,
                        inVent: false,
                        anger: 1,
                        waitingForVentOpen: false,
                        jumpscare: () => playJumpscare("gottenThread"),
                        displayMyself: () => {
                            blocks.gottenThread.element.style.display = "none"
                            if (blocks.gottenThread.inVent) blocks.gottenThread.element.style.display = "inherit"
                        },
                        actionsInterval: setInterval(() => {
                            if (blocks.gottenThread.acting) return
                            if (Math.round(Math.random() * (560 / blocks.gottenThread.anger)) == 0) {
                                blocks.gottenThread.acting = true
                                blocks.gottenThread.inVent = true
                                blocks.gottenThread.waitingForVentOpen = true
                                blocks.gottenThread.displayMyself()
                                setTimeout(() => {
                                    if (!office.doors.right.closed) return blocks.gottenThread.jumpscare()
                                    blocks.gottenThread.waitingForVentOpen = false
                                    blocks.gottenThread.inVent = false
                                    blocks.gottenThread.displayMyself()
                                    setTimeout(() => {
                                        blocks.gottenThread.acting = false
                                    }, 1450)
                                }, 4000)
                            }
                        }, 50)
                    }
                    blocks.gottenThread.element = document.createElement("img")
                    blocks.gottenThread.element.style.position = "absolute"
                    blocks.gottenThread.element.style.left = "77%"
                    blocks.gottenThread.element.style.top = "71%"
                    blocks.gottenThread.element.style.width = "16%"
                    blocks.gottenThread.element.style.height = "12%"
                    blocks.gottenThread.element.style.display = "none"
                    blocks.gottenThread.element.src = "https://scratch-for-discord.com/spooky/gottenThread_inVent.png"
                    parentDiv.append(blocks.gottenThread.element)
                    // lmao what are you talking about all of my code is perfectly readable
                    // i have no idea what you mean by countless objects inside of other objects
                    // literally the same thing over and over again
                    // and 90% of the code just being me creating html elements
                    // this is totally just the best way to do things bro
                    office.doors = {}
                    office.doors.left = document.createElement("img")
                    office.doors.left.closed = false
                    office.doors.left.src = "https://scratch-for-discord.com/spooky/office_door_left.png"
                    office.doors.left.style.display = "none"
                    office.doors.left.style.position = "absolute"
                    office.doors.left.style.left = "0px"
                    office.doors.left.style.top = "0px"
                    office.doors.left.style.width = "100%"
                    office.doors.left.style.height = "100%"
                    office.doors.right = document.createElement("img")
                    office.doors.right.closed = false
                    office.doors.right.src = "https://scratch-for-discord.com/spooky/office_door_right.png"
                    office.doors.right.style.display = "none"
                    office.doors.right.style.position = "absolute"
                    office.doors.right.style.left = "0px"
                    office.doors.right.style.top = "0px"
                    office.doors.right.style.width = "100%"
                    office.doors.right.style.height = "100%"
                    parentDiv.append(office.doors.left)
                    parentDiv.append(office.doors.right)
                    const officeShine = document.createElement("img")
                    officeShine.style.position = "absolute"
                    officeShine.style.left = "0px"
                    officeShine.style.top = "0px"
                    officeShine.style.width = "100%"
                    officeShine.style.height = "100%"
                    officeShine.style.opacity = 0.3607
                    officeShine.src = "https://scratch-for-discord.com/spooky/office_shine.png"
                    parentDiv.append(officeShine)
                    const officeDarkener = document.createElement("div")
                    officeDarkener.style.backgroundColor = "black"
                    officeDarkener.style.position = "absolute"
                    officeDarkener.style.left = "0px"
                    officeDarkener.style.top = "0px"
                    officeDarkener.style.width = "100%"
                    officeDarkener.style.height = "100%"
                    officeDarkener.style.opacity = 0.6431
                    parentDiv.append(officeDarkener)
                    office.doors.left.clickableButton = document.createElement("button")
                    office.doors.left.clickableButton.style.opacity = 0
                    office.doors.left.clickableButton.style.position = "absolute"
                    office.doors.left.clickableButton.style.left = "6%"
                    office.doors.left.clickableButton.style.top = "62%"
                    office.doors.left.clickableButton.style.width = "9%"
                    office.doors.left.clickableButton.style.height = "27%"
                    office.doors.right.clickableButton = document.createElement("button")
                    office.doors.right.clickableButton.style.opacity = 0
                    office.doors.right.clickableButton.style.position = "absolute"
                    office.doors.right.clickableButton.style.left = "85%"
                    office.doors.right.clickableButton.style.top = "64%"
                    office.doors.right.clickableButton.style.width = "9%"
                    office.doors.right.clickableButton.style.height = "27%"
                    office.doors.updateDoor = (bitSide, closed) => {
                        if (bitSide == 0) {
                            if (office.doors.left.closed != closed) {
                                const closeSound = new Audio('https://scratch-for-discord.com/spooky/vent_door_update.mp3')
                                closeSound.play()
                            }
                        } else {
                            if (office.doors.right.closed != closed) {
                                const closeSound = new Audio('https://scratch-for-discord.com/spooky/vent_door_update.mp3')
                                closeSound.play()
                            }
                        }
                        if (bitSide == 0) {
                            office.doors.left.closed = closed
                            office.doors.left.style.display = closed ? "inherit" : "none"
                            blocks.emptyObject.element.style.display = "none"
                            if (blocks.emptyObject.inVent && !closed) blocks.emptyObject.element.style.display = "inherit"
                            if (!closed && blocks.emptyObject.waitingForVentOpen) blocks.emptyObject.jumpscare()
                        } else {
                            office.doors.right.closed = closed
                            office.doors.right.style.display = closed ? "inherit" : "none"
                            blocks.gottenThread.element.style.display = "none"
                            if (blocks.gottenThread.inVent && !closed) blocks.gottenThread.element.style.display = "inherit"
                            if (!closed && blocks.gottenThread.waitingForVentOpen) blocks.gottenThread.jumpscare()
                        }
                    }
                    office.doors.left.clickableButton.onclick = () => {
                        if ((powerLevel <= 0) || generatorEnabled) {
                            const audio = new Audio('https://scratch-for-discord.com/spooky/button_jam.wav')
                            return audio.play()
                        }
                        office.doors.updateDoor(0, !(office.doors.left.closed))
                    }
                    office.doors.right.clickableButton.onclick = () => {
                        if ((powerLevel <= 0) || generatorEnabled) {
                            const audio = new Audio('https://scratch-for-discord.com/spooky/button_jam.wav')
                            return audio.play()
                        }
                        office.doors.updateDoor(1, !(office.doors.right.closed))
                    }
                    parentDiv.append(office.doors.left.clickableButton)
                    parentDiv.append(office.doors.right.clickableButton)
                    const fanSound = new Audio('https://scratch-for-discord.com/spooky/fan.mp3')
                    fanSound.loop = true
                    fanSound.play()
                    const funnyButton = document.createElement("button")
                    funnyButton.style.position = "absolute"
                    funnyButton.style.left = "28%"
                    funnyButton.style.top = "22%"
                    funnyButton.style.width = "5%"
                    funnyButton.style.height = "4%"
                    funnyButton.style.opacity = 0
                    parentDiv.append(funnyButton)
                    funnyButton.onclick = () => {
                        const funny = new Audio('https://scratch-for-discord.com/spooky/fard.mp3')
                        funny.play()
                    }
                    const powerMeter = document.createElement("div")
                    powerMeter.style.position = "absolute"
                    powerMeter.style.left = "3%"
                    powerMeter.style.bottom = "3%"
                    powerMeter.style.width = "30%"
                    powerMeter.style.height = "8%"
                    powerMeter.style.backgroundColor = "black"
                    parentDiv.append(powerMeter)
                    powerMeter.filling = document.createElement("img")
                    powerMeter.filling.style.position = "absolute"
                    powerMeter.filling.style.left = "1%"
                    powerMeter.filling.style.top = "7%"
                    powerMeter.filling.style.width = "98%"
                    powerMeter.filling.style.height = "86%"
                    powerMeter.filling.style.zIndex = 500
                    powerMeter.filling.src = "https://scratch-for-discord.com/spooky/powerMeter_filled.png"
                    powerMeter.append(powerMeter.filling)
                    powerMeter.text = document.createElement("img")
                    powerMeter.text.style.position = "absolute"
                    powerMeter.text.style.left = "2%"
                    powerMeter.text.style.top = "24%"
                    powerMeter.text.style.height = "calc(100% - (" + powerMeter.text.style.top + " * 2))"
                    powerMeter.text.style.zIndex = 600
                    powerMeter.text.src = "https://scratch-for-discord.com/spooky/power.png"
                    powerMeter.append(powerMeter.text)
                    const generatorButton = document.createElement("button")
                    generatorButton.style.position = "absolute"
                    generatorButton.style.left = "47.28%"
                    generatorButton.style.top = "67%"
                    generatorButton.style.width = "4.4%"
                    generatorButton.style.height = "2%"
                    generatorButton.style.opacity = 0
                    parentDiv.append(generatorButton)
                    const generatorRunningSound = new Audio('https://scratch-for-discord.com/spooky/generatorPowering.mp3')
                    generatorRunningSound.loop = true
                    generatorButton.onclick = () => {
                        office.doors.updateDoor(0, false)
                        office.doors.updateDoor(1, false)
                        if (powerLevel <= 0) {
                            const audio = new Audio('https://scratch-for-discord.com/spooky/button_jam.wav')
                            return audio.play()
                        }
                        generatorEnabled = !generatorEnabled
                        if (generatorEnabled) generatorRunningSound.play()
                        else generatorRunningSound.pause()
                        const click = new Audio('https://scratch-for-discord.com/spooky/click.mp3')
                        click.play()
                    }
                    powerMeter.filling.render = () => {
                        powerMeter.filling.style.width = ((powerLevel / 100) * 98) + "%"
                    }
                    const powerDecreaseInterval = setInterval(() => {
                        GAMESCORE++
                        blocks.emptyObject.anger += 0.021
                        blocks.gottenThread.anger += 0.013
                        powerLevel -= 1
                        if (office.doors.left.closed) powerLevel -= 1; GAMESCORE++
                        if (office.doors.right.closed) powerLevel -= 1; GAMESCORE++
                        if (powerLevel < 0) powerLevel = 0
                        powerMeter.filling.render()
                        if (powerLevel > 0) return
                        fanSound.pause()
                        clearInterval(blocks.emptyObject.actionsInterval)
                        clearInterval(blocks.gottenThread.actionsInterval)
                        const powerDownsound = new Audio('https://scratch-for-discord.com/spooky/powerout.mp3')
                        powerDownsound.play()
                        officeDarkener.style.opacity = 0.9672
                        officeDarkener.style.zIndex = 1000000
                        office.doors.updateDoor(0, false)
                        office.doors.updateDoor(1, false)
                        clearInterval(powerDecreaseInterval)
                        setTimeout(() => {
                            powerDownsound.pause()
                            playJumpscare("history")
                        }, Math.round(Math.random() * 10000))
                    }, 4000)
                    setInterval(() => {
                        if (!generatorEnabled) return
                        powerLevel += 1
                        if (powerLevel > 100) powerLevel = 100
                        powerMeter.filling.render()
                        GAMESCORE++
                        blocks.emptyObject.anger += 0.1
                        blocks.gottenThread.anger += 0.023
                    }, 500)
                    let alreadyLosing = false
                    function playJumpscare(character) {
                        if (alreadyLosing) return
                        alreadyLosing = true
                        clearInterval(blocks.emptyObject.actionsInterval)
                        clearInterval(blocks.gottenThread.actionsInterval)
                        GAMESCORE += 20
                        const STATICIMAGE = document.createElement("img")
                        STATICIMAGE.style.width = "1px"
                        STATICIMAGE.style.height = "1px"
                        STATICIMAGE.style.position = "absolute"
                        STATICIMAGE.style.left = "0px"
                        STATICIMAGE.style.top = "0px"
                        STATICIMAGE.style.zIndex = 100000002
                        STATICIMAGE.src = "https://scratch-for-discord.com/spooky/static.gif"
                        parentDiv.append(STATICIMAGE)
                        let gif = ""
                        let lastForMS = 0
                        switch (character) {
                            case 'history':
                                gif = "https://scratch-for-discord.com/spooky/history.gif"
                                lastForMS = 547
                                break
                            case 'emptyObject':
                                gif = "https://scratch-for-discord.com/spooky/emptyObject.gif"
                                lastForMS = 426
                                break
                            case 'gottenThread':
                                gif = "https://scratch-for-discord.com/spooky/gottenThread.gif"
                                lastForMS = 490
                                break
                        }
                        const image = document.createElement("img")
                        image.src = gif
                        image.style.position = "absolute"
                        image.style.left = "0px"
                        image.style.top = "0px"
                        image.style.width = "100%"
                        image.style.height = "100%"
                        image.style.zIndex = 100000000
                        parentDiv.append(image)
                        fanSound.pause()
                        generatorRunningSound.pause()
                        const jss = new Audio("https://scratch-for-discord.com/spooky/glitchare.mp3")
                        jss.play()
                        setTimeout(() => {
                            jss.pause()
                            STATICIMAGE.style.width = "100%"
                            STATICIMAGE.style.height = "100%"
                            const staticSound = new Audio("https://scratch-for-discord.com/spooky/static.wav")
                            staticSound.loop = true
                            staticSound.play()
                            setTimeout(() => {
                                const scoring = document.createElement("p")
                                scoring.style.backgroundColor = "black"
                                scoring.style.color = "white"
                                scoring.style.position = "absolute"
                                scoring.style.left = "30px"
                                scoring.style.top = "30px"
                                scoring.style.fontSize = "400%"
                                scoring.style.fontFamily = "monospace"
                                scoring.style.textAlign = "center"
                                scoring.style.marginTop = "30%"
                                scoring.style.zIndex = 100000012
                                scoring.innerHTML = "FINAL SCORE:"
                                parentDiv.append(scoring)
                                const scoreReadingSound = new Audio("https://scratch-for-discord.com/spooky/scoreReading.mp3")
                                scoreReadingSound.play()
                                setTimeout(() => { // i LOVE call backs!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                                    scoring.innerHTML += " " + String(GAMESCORE).replace(/</gmi, "&lt;")
                                    const congratulationsSound = new Audio("https://scratch-for-discord.com/spooky/congratulations.mp3")
                                    congratulationsSound.play()
                                    setTimeout(() => { // bruh
                                        scoring.innerHTML += '<br><button style="background-color:transparent;outline-width:0px;border-width:0px;font-size:50%;color:white;text-align:left" onclick="window.location.reload()">Refresh</button>'
                                        // yes i used inline styling AND non-user defined functions cry about it
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, lastForMS)
                    }
                }
                return;
            }
            const wrapper = document.createElement('div');
            wrapper.innerHTML = `<h6>Manage S4D content here.</h6>`
            this.$swal({
                title: "Utilities",
                content: wrapper,
                buttons: {
                    cancel: "Exit",
                    settings: "Settings",
                    optimizations: "Optimizations",
                    tokendb: "Token Database",
                    prebuilds: "Prebuilds",
                    clear: "Clear Autosave",
                    manage: "Manage Favorites",
                    dfi: "Download Files Indiv.",
                },
            }).then(async (result) => {
                if (String(result) == "clear") {
                    const wrapper = document.createElement('div');
                    wrapper.innerHTML = `Are you sure?`
                    this.$swal({
                        title: "Clear autosave",
                        content: wrapper,
                        dangerMode: true,
                        icon: "warning",
                        buttons: {
                            cancel: "Cancel",
                            confirm: "Confirm"
                        },
                    }).then(async (result) => {
                        if (result) {
                            localforage.removeItem("save3")
                            localforage.removeItem("autosaveName")
                            localforage.removeItem("autosave_customBlocks")
                            console.log("Autosave cleared...")
                        }
                    })
                } else if (String(result) == "dfi") {
                    // bruhb
                        console.log("barry: hey what file do you want to download?")
                        console.log("johnathan: dude they cant hear us")
                        console.log("barry: oh right i forgot")
                        const wrapper = document.createElement('div');
                        wrapper.innerHTML = `<h6>Explanations:</h6>
            <ul>
                <li style='text-align:left'>"index.js" contains your bot's code.</li>
                <li style='text-align:left'>"package.json" contains all of the packages needed for hosting on your computer.</li>
                <li style='text-align:left'>"blocks.xml" contains all of your blocks used to create your bot.</li><!--
                <li style='text-align:left'>".replit" allows the bot to start with a certain command. Not required if the bot file is named "index.js".</li>
                <li style='text-align:left'>"database.json" is an empty database ready for you to fill.</li>
                <li style='text-align:left'>"boot.js" literally just runs the bot.js file.</li>-->
            </ul>
            
  <input type="checkbox" id="file1" checked="checked">
  <label for="file1"> index.js </label>
  <input type="checkbox" id="file2">
  <label for="file2"> package.json </label>
  <input type="checkbox" id="file3">
  <label for="file3"> blocks.xml</label><!--<br>
  <input type="checkbox" id="file4">
  <label for="file4"> .replit </label>
  <input type="checkbox" id="file5">
  <label for="file5"> database.json </label>
  <input type="checkbox" id="file6">
  <label for="file6"> boot.js</label><br><br>
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
                                // var file4 = document.getElementById('file4').checked
                                // var file5 = document.getElementById('file5').checked
                                // var file6 = document.getElementById('file6').checked
                                //var zip = document.getElementById('ZIP').checked
                                console.log(file1)
                                console.log(file2)
                                console.log(file3)
                                // console.log(file4)
                                // console.log(file5)
                                // console.log(file6)
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
                                    a.download = "index.js";
                                    a.click();
                                    window.URL.revokeObjectURL(url);
                                    document.body.removeChild(a);
                                    console.log("johnathan: done")
                                }
                                if ((file2)) {
                                    console.log("johnathan: hey can you grab the packages")
                                    console.log("barry: on it")
                                    let requires = [`"discord.js": "^13.7.0",`, `"process":"^0.11.10",`, `"easy-json-database": "^1.5.0",`]
                                    let oldrequires = await localforage.getItem("requires")
                                    r(requires, oldrequires)
                                    var requireUsed = requires.join("\n")
                                    if ((requireUsed.charAt(requireUsed.length - 1)) == ",") {
                                        requireUsed = requireUsed.substring(0, (requireUsed.length - 1))
                                    }
                                    const javascriptContent = `{\n
                        "name": "scratch-for-discord-bot",\n
                        "version": "1.0.0",\n
                        "main": "index.js",\n
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
                                /*
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
                                }*/
                                console.log("barry: welp guess we are done")
                                console.log("johnathan: lets get back to work, shall we?")
                            }
                        })
                    // bruh j
                } else if (String(result) == "manage") {
                    const wrapper = document.createElement('div');
                    wrapper.innerHTML = ``
                    this.$swal({
                        title: "Favorites manager",
                        content: wrapper,
                        dangerMode: true,
                        buttons: {
                            cancel: "Cancel",
                            clF: "Clear Favorites",
                            mnF: "Manual Favorite"
                        },
                    }).then(async (result) => {
                        if (String(result) == "clF") {
                            localforage.setItem("fav", null)
                            console.log("Favorites cleared...")
                        } else if (String(result) == "mnF") {
                            const wrapper = document.createElement('div');
                            wrapper.innerHTML = `Make sure the block exists, you could accidentally break the site!<br><br><input type="text" id="block">`
                            this.$swal({
                                title: "Add a block to favorites",
                                content: wrapper,
                                buttons: {
                                    cancel: "Cancel",
                                    confirm: "Add"
                                },
                            }).then(async (result) => {
                                if (result) {
                                    localforage.getItem("fav").then((favs) => {
                                        let block = document.getElementById("block").value.replaceAll(" ", "_").replaceAll("<", "_").replaceAll(">", "_").replaceAll("/", "_")
                                        console.log("Adding block", block, "to favorites")
                                        console.log(favs)
                                        if (favs != null) {
                                            let newArray = favs
                                            newArray.push(block)
                                            localforage.setItem("fav", newArray)
                                        } else {
                                            localforage.setItem("fav", [block])
                                        }
                                    })
                                }
                            })
                        }
                    })
                } else if (String(result) == "tokendb") {
                    const wrapper = document.createElement('div');
                    wrapper.innerHTML = `Token Database can be used to store your tokens so you don't need to go back to the Discord Developer Portal to get them.`
                    this.$swal({
                        title: "Token Database",
                        content: wrapper,
                        // content: `Token Database can be used to store your tokens so you don't need to go back to the Discord Developer Portal to get them.`,
                        // dangerMode: true,
                        buttons: {
                            cancel: "Cancel",
                            delete: "Delete Token",
                            save: "Save Token",
                            load: "Load Token",
                        },
                    }).then(async (result) => {
                        console.log(result)
                        if (result == null || result == false) {
                            return
                        }
                        if (String(result) == "delete") {
                        let keys = await localforage.getItem("tokens")
                        if (keys === null) {
                            const Toast = swal.mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                                didOpen: (toast) => {
                                    toast.addEventListener('mouseenter', swal.stopTimer)
                                    toast.addEventListener('mouseleave', swal.resumeTimer)
                                }
                            })
                            Toast.fire({
                                icon: 'error',
                                title: this.$t("token.erros")
                            })
                            return
                        }
                        swal.fire({
                            title: this.$t("token.deletee.title"),
                            html: `
        ${this.$t("token.deletee.text")}<br><br>
        <select class="custom-select" id="restore-select">
            ${keys.map((key) => `<option><b>${key.replace("token-", "")}</b></option>`)}
        </select>
      `,
                            showCancelButton: true,
                            cancelButtonText: this.$t("token.deletee.cancel"),
                            confirmButtonText: this.$t("token.deletee.load"),
                            preConfirm: async () => {
                                const select = document.getElementById("restore-select");
                                await localforage.removeItem(`token-${select.value}`);
                                let tokens = await localforage.getItem("tokens")
                                function arrayRemove(arr, value) {
                                    return arr.filter(function (ele) {
                                        return ele != value;
                                    });
                                }
                                if (arrayRemove(tokens, `token-${select.value}`).length === 0) {
                                    await localforage.setItem("tokens", null)
                                } else {
                                    await localforage.setItem("tokens", arrayRemove(tokens, `token-${select.value}`))
                                }
                                const Toast = swal.mixin({
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 3000,
                                    timerProgressBar: true,
                                    didOpen: (toast) => {
                                        toast.addEventListener('mouseenter', swal.stopTimer)
                                        toast.addEventListener('mouseleave', swal.resumeTimer)
                                    }
                                })
                                let a = this.$t("token.deletee.success")
                                Toast.fire({
                                    icon: 'success',
                                    title: `${a}`
                                })
                            
                            },
                        })
                        } else if (String(result) == "load") {
                            let keys = await localforage.getItem("tokens")
                            if (keys === null) {
                                const Toast = swal.mixin({
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 3000,
                                    timerProgressBar: true,
                                    didOpen: (toast) => {
                                        toast.addEventListener('mouseenter', swal.stopTimer)
                                        toast.addEventListener('mouseleave', swal.resumeTimer)
                                    }
                                })
                                Toast.fire({
                                    icon: 'error',
                                    title: this.$t("token.erros")
                                })
                                return
                            }
                            swal.fire({
                                title: this.$t("token.load2"),
                                html: `
        ${this.$t("token.text4")}<br><br>
        <select class="custom-select" id="restore-select">
            ${keys.map((key) => `<option><b>${key.replace("token-", "")}</b></option>`)}
        </select>
      `,
                                showCancelButton: true,
                                cancelButtonText: this.$t("token.cancels"),
                                confirmButtonText: this.$t("token.loadss"),
                                preConfirm: async () => {
                                    const select = document.getElementById("restore-select");
                                    const token = await localforage.getItem(`token-${select.value}`);
                                    const Toast = swal.mixin({
                                        toast: true,
                                        position: 'top-end',
                                        showConfirmButton: false,
                                        timer: 3000,
                                        timerProgressBar: true,
                                        didOpen: (toast) => {
                                            toast.addEventListener('mouseenter', swal.stopTimer)
                                            toast.addEventListener('mouseleave', swal.resumeTimer)
                                        }
                                    })
                                    let a = this.$t("token.successs")
                                    Toast.fire({
                                        icon: 'success',
                                        title: `${a}`
                                    })
                                    navigator.clipboard.writeText(token)
                                },
                            })
                        } else if (String(result) == "save") {
                            swal.fire({
                                title: this.$t("token.text2"),
                                input: 'text',
                                inputAttributes: {
                                    autocapitalize: 'off'
                                },
                                showCancelButton: true,
                                confirmButtonText: this.$t("token.save2"),
                                showLoaderOnConfirm: true,
                                preConfirm: async (file) => {
                                    let maybe = await localforage.getItem("token-" + file)
                                    if (maybe === null) {
                                        return file
                                    } else {
                                        swal.showValidationMessage(this.$t("token.error"))
                                    }
                                },
                                allowOutsideClick: () => !swal.isLoading()
                            }).then((result2) => {
                                if (result2.isConfirmed) {
                                    let name = result2.value
                                    //name
                                    swal.fire({
                                        title: this.$t("token.text3"),
                                        input: 'text',
                                        inputAttributes: {
                                            autocapitalize: 'off'
                                        },
                                        showCancelButton: true,
                                        confirmButtonText: this.$t("token.save3"),
                                        showLoaderOnConfirm: true,
                                        preConfirm: (file2) => {
                                            return file2
                                        },
                                        allowOutsideClick: () => !swal.isLoading()
                                    }).then(async (result) => {
                                        if (result.isConfirmed) {
                                            let token = result.value
                                            //token
                                            await localforage.setItem(`token-${name}`, token)
                                            let tokens = await localforage.getItem("tokens")
                                            if (tokens === null) {
                                                await localforage.setItem("tokens", [`token-${name}`])
                                            } else {
                                                tokens.push(`token-${name}`)
                                                await localforage.setItem("tokens", tokens)
                                            }
                                            const Toast = swal.mixin({
                                                toast: true,
                                                position: 'top-end',
                                                showConfirmButton: false,
                                                timer: 3000,
                                                timerProgressBar: true,
                                                didOpen: (toast) => {
                                                    toast.addEventListener('mouseenter', swal.stopTimer)
                                                    toast.addEventListener('mouseleave', swal.resumeTimer)
                                                }
                                            })
                                            let a = this.$t("token.success")
                                            Toast.fire({
                                                icon: 'success',
                                                title: `${a}${name}`
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                } else if (String(result) == "prebuilds") {
                    const wrapper = document.createElement('div');
                    wrapper.innerHTML = `Prebuilds can be used to save your projects in browser to load them later.`
                    this.$swal({
                        title: "Prebuilds",
                        content: wrapper,
                        buttons: {
                            cancel: "Cancel",
                            delete: "Delete Prebuild",
                            download: "Download Prebuild",
                            save: "Save Prebuild",
                            load: "Load Prebuild",
                        },
                    }).then(async (result) => {
                        console.log(result)
                        if (result == null || result == false) { return }
                        if (String(result) == "delete") {
                            let keys = await localforage.getItem("prebuilds")
                            if (keys === null) {
                                const Toast = swal.mixin({
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 3000,
                                    timerProgressBar: true,
                                    didOpen: (toast) => {
                                        toast.addEventListener('mouseenter', swal.stopTimer)
                                        toast.addEventListener('mouseleave', swal.resumeTimer)
                                    }
                                })
                                Toast.fire({
                                    icon: 'error',
                                    title: this.$t("prebuild.erros")
                                })
                                return
                            }
                            swal.fire({
                                title: this.$t("prebuild.deletee.title"),
                                html: `
        ${this.$t("prebuild.deletee.text")}<br><br>
        <select class="custom-select" id="restore-select">
            ${keys.map((key) => `<option><b>${key.replace("prebuild-", "")}</b></option>`)}
        </select>
      `,
                                showCancelButton: true,
                                cancelButtonText: this.$t("prebuild.deletee.cancel"),
                                confirmButtonText: this.$t("prebuild.deletee.load"),
                                preConfirm: async () => {
                                    const select = document.getElementById("restore-select");
                                    await localforage.removeItem(`prebuild-${select.value}`);
                                    let tokens = await localforage.getItem("prebuilds")
                                    function arrayRemove(arr, value) {
                                        return arr.filter(function (ele) {
                                            return ele != value;
                                        });
                                    }
                                    if (arrayRemove(tokens, `prebuild-${select.value}`).length === 0) {
                                        await localforage.setItem("prebuilds", null)
                                    } else {
                                        await localforage.setItem("prebuilds", arrayRemove(tokens, `prebuild-${select.value}`))
                                    }
                                    const Toast = swal.mixin({
                                        toast: true,
                                        position: 'top-end',
                                        showConfirmButton: false,
                                        timer: 3000,
                                        timerProgressBar: true,
                                        didOpen: (toast) => {
                                            toast.addEventListener('mouseenter', swal.stopTimer)
                                            toast.addEventListener('mouseleave', swal.resumeTimer)
                                        }
                                    })
                                    let a = this.$t("prebuild.deletee.success")
                                    Toast.fire({
                                        icon: 'success',
                                        title: `${a}`
                                    })
                                },
                            })
                        } else if (String(result) == "download") {
                            let keys = await localforage.getItem("prebuilds")
                            if (keys === null) {
                                const Toast = swal.mixin({
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 3000,
                                    timerProgressBar: true,
                                    didOpen: (toast) => {
                                        toast.addEventListener('mouseenter', swal.stopTimer)
                                        toast.addEventListener('mouseleave', swal.resumeTimer)
                                    }
                                })
                                Toast.fire({
                                    icon: 'error',
                                    title: this.$t("prebuild.erros")
                                })
                                return
                            }
                            swal.fire({
                                title: this.$t("prebuild.download.load2"),
                                html: `
        ${this.$t("prebuild.download.text4")}<br><br>
        <select class="custom-select" id="restore-select">
            ${keys.map((key) => `<option><b>${key.replace("prebuild-", "")}</b></option>`)}
        </select>
      `,
                                showCancelButton: true,
                                cancelButtonText: this.$t("prebuild.download.cancels"),
                                confirmButtonText: this.$t("prebuild.download.loadss"),
                                preConfirm: async () => {
                                    const select = document.getElementById("restore-select");
                                    const token = await localforage.getItem(`prebuild-${select.value}`);
                                    const Toast = swal.mixin({
                                        toast: true,
                                        position: 'top-end',
                                        showConfirmButton: false,
                                        timer: 3000,
                                        timerProgressBar: true,
                                        didOpen: (toast) => {
                                            toast.addEventListener('mouseenter', swal.stopTimer)
                                            toast.addEventListener('mouseleave', swal.resumeTimer)
                                        }
                                    })
                                    let a = this.$t("prebuild.download.successs")
                                    Toast.fire({
                                        icon: 'success',
                                        title: `${a}`
                                    })
                                    const zip = new JSZip();
                                    const fileName = `${select.value}.s4d`;
                                    zip.file("blocks.xml", token);
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
                                },
                            })
                        } else if (String(result) == "save") {
                            swal.fire({
                                title: this.$t("prebuild.text2"),
                                input: 'text',
                                inputAttributes: {
                                    autocapitalize: 'off'
                                },
                                showCancelButton: true,
                                confirmButtonText: this.$t("prebuild.save2"),
                                showLoaderOnConfirm: true,
                                preConfirm: async (file) => {
                                    let maybe = await localforage.getItem("prebuild-" + file)
                                    if (maybe === null) {
                                        return file
                                    } else {
                                        swal.showValidationMessage(this.$t("prebuild.error"))
                                    }
                                },
                                allowOutsideClick: () => !swal.isLoading()
                            }).then(async (result2) => {
                                if (result2.isConfirmed) {
                                    let name = result2.value
                                    const xmlContent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(this.$store.state.workspace));
                                    await localforage.setItem(`prebuild-${name}`, xmlContent)
                                    let tokens = await localforage.getItem("prebuilds")
                                    if (tokens === null) {
                                        await localforage.setItem("prebuilds", [`prebuild-${name}`])
                                    } else {
                                        tokens.push(`prebuild-${name}`)
                                        await localforage.setItem("prebuilds", tokens)
                                    }
                                    const Toast = swal.mixin({
                                        toast: true,
                                        position: 'top-end',
                                        showConfirmButton: false,
                                        timer: 3000,
                                        timerProgressBar: true,
                                        didOpen: (toast) => {
                                            toast.addEventListener('mouseenter', swal.stopTimer)
                                            toast.addEventListener('mouseleave', swal.resumeTimer)
                                        }
                                    })
                                    let a = this.$t("prebuild.success")
                                    Toast.fire({
                                        icon: 'success',
                                        title: `${a}${name}`
                                    })
                                }
                            })
                        } else if (String(result) == "load") {
                            let keys = await localforage.getItem("prebuilds")
                            if (keys === null) {
                                const Toast = swal.mixin({
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 3000,
                                    timerProgressBar: true,
                                    didOpen: (toast) => {
                                        toast.addEventListener('mouseenter', swal.stopTimer)
                                        toast.addEventListener('mouseleave', swal.resumeTimer)
                                    }
                                })
                                Toast.fire({
                                    icon: 'error',
                                    title: this.$t("prebuild.erros")
                                })
                                return
                            }
                            swal.fire({
                                title: this.$t("prebuild.load2"),
                                html: `
        ${this.$t("prebuild.text4")}<br><br>
        <select class="custom-select" id="restore-select">
            ${keys.map((key) => `<option><b>${key.replace("prebuild-", "")}</b></option>`)}
        </select>
      `,
                                showCancelButton: true,
                                cancelButtonText: this.$t("prebuild.cancels"),
                                confirmButtonText: this.$t("prebuild.loadss"),
                                preConfirm: async () => {
                                    const select = document.getElementById("restore-select");
                                    const token = await localforage.getItem(`prebuild-${select.value}`);
                                    const Toast = swal.mixin({
                                        toast: true,
                                        position: 'top-end',
                                        showConfirmButton: false,
                                        timer: 3000,
                                        timerProgressBar: true,
                                        didOpen: (toast) => {
                                            toast.addEventListener('mouseenter', swal.stopTimer)
                                            toast.addEventListener('mouseleave', swal.resumeTimer)
                                        }
                                    })
                                    let a = this.$t("prebuild.successs")
                                    Toast.fire({
                                        icon: 'success',
                                        title: `${a}`
                                    })
                                    Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(token), this.$store.state.workspace);
                                },
                            })
                        }
                    })
                } else if (String(result) == "optimizations") {
                    const wrapper = document.createElement('div');
                    wrapper.innerHTML = `<h6>Most of these optimizations are minor, but can help if you have a good amount of blocks.</h6><h4><b>These do require a refresh to fully work.</b></h4>`
                    this.$swal({
                        title: "Site Optimizations",
                        content: wrapper,
                        buttons: {
                            cancel: "Cancel",
                            dbc: "Toggle Block Counter"
                        },
                    }).then(async (result) => {
                        if (String(result) == "dbc") {
                            localforage.getItem("hide-blockcount").then((item) => {
                                if (item == null) {
                                    localforage.setItem("hide-blockcount", true)
                                    return
                                }
                                if (String(item) == "true") {
                                    localforage.setItem("hide-blockcount", false)
                                } else {
                                    localforage.setItem("hide-blockcount", true)
                                }
                                localforage.getItem("hide-blockcount").then(console.log)
                            })
                        }
                    })
                } else if (String(result) == "settings") {
                    const wrapper = document.createElement('div');
                    wrapper.innerHTML = `Toggle shortcuts being enabled and change the theme!`
                    this.$swal({
                        title: "S4D Site Settings",
                        content: wrapper,
                        icon: "https://media.discordapp.net/attachments/914411539887456296/993734332302770237/setting2.png",
                        buttons: {
                            cancel: "Cancel",
                            shortcut: "Toggle shortcuts",
                            theme: "Set theme"
                        },
                    }).then(async result => {
                        if (String(result) == "shortcut") {
                            localforage.getItem("utilitiesShortcuts").then(item => {
                                localforage.setItem("utilitiesShortcuts", (item == null ? false : null)).then(() => {
                                    localforage.getItem("utilitiesShortcuts").then(item => {
                                        this.$swal({
                                            title: "Updated shortcuts!",
                                            text: `Shortcuts have been toggled ${item == null ? "on" : "off"}. Please refresh the page.`,
                                            icon: "success"
                                        })
                                    })
                                })
                            })
                        } else if (String(result) == "theme") {
                            const previews = `
<style>
.row123 {
  display: flex;
}
.column123 {
  flex: 33.33%;
  padding: 5px;
}
</style>
<center>
    <image src="https://media.discordapp.net/attachments/914411539887456296/993745043741495336/screenshot_11.png?width=1084&height=676" width="213" height="133"></image>
    <hr>
    <span>
        <div class="row123">
            <div class="column123" name="neo">
                <image src="https://media.discordapp.net/attachments/914411539887456296/994269048143626433/screenshot_20.png?width=1084&height=676" width="213" height="133"></image>
            </div>
            <div class="column123" name="toon">
                <image src="https://media.discordapp.net/attachments/914411539887456296/993745044907507822/screenshot_12.png?width=1084&height=676" width="213" height="133"></image>
            </div>
            <div class="column123" name="invert">
                <image src="https://media.discordapp.net/attachments/914411539887456296/993745044626493511/screenshot_13.png?width=1084&height=676" width="213" height="133"></image>
            </div>
            <div class="column123" name="textless">
                <image src="https://media.discordapp.net/attachments/914411539887456296/993745044290928640/screenshot_14.png?width=1084&height=676" width="213" height="133"></image>
            </div>
        </div>
    </span>
    <span>
        <div class="row123">
            <div class="column123" name="grayscale">
                <image src="https://media.discordapp.net/attachments/914411539887456296/994153873214279720/screenshot_16.png?width=1084&height=676" width="213" height="133"></image>
            </div>
            <div class="column123" name="glowy">
                <image src="https://media.discordapp.net/attachments/914411539887456296/994420310352863242/glowy_theme.png?width=981&height=676" width="213" height="133"></image>
            </div>
            <div class="column123" name="scratch block top">
                <image src="https://media.discordapp.net/attachments/914411539887456296/994381648202309672/screenshot_21.png?width=979&height=676" width="213" height="133"></image>
            </div>
            <div class="column123" name="full colors">
                <image src="https://media.discordapp.net/attachments/914411539887456296/994489879830470726/screenshot_22.png?width=981&height=676" width="213" height="133"></image>
            </div>
        </div>
    </span>
    <span>
        <div class="row123">
            <div class="column123" name="textonly">
                <image src="https://media.discordapp.net/attachments/914411539887456296/1006879208397611048/screenshot_23.png?width=1084&height=676" width="213" height="133"></image>
            </div>
        </div>
    </span>
    <b>Switching themes may require a refresh to work properly.</b>
</center>
`
                            const { value: result } = await swal.fire({
                                title: "Basic Themes",
                                iconHtml: `<img style="background-color: white;" src="https://media.discordapp.net/attachments/914411539887456296/993741275104804864/theme.png"/>`,
                                html: previews,
                                input: 'select',
                                inputOptions: {
                                    't1': 'Neo',
                                    't2': 'Toon',
                                    't3': 'Invert',
                                    't4': 'Textless',
                                    't5': 'Grayscale',
                                    't6': 'Glowy',
                                    't7': "Scratch Block Top",
                                    't8': "Full Colors",
                                    't9': "Text only",
                                    'none': 'Default'
                                },
                                inputPlaceholder: 'Select a theme',
                                showCancelButton: true,
                                width: "1000px"
                            })
                            switch (String(result)) {
                                case "t1":
                                    localforage.setItem("utilitiesTheme", "neo")
                                    break
                                case "t2":
                                    localforage.setItem("utilitiesTheme", "toon")
                                    break
                                case "t3":
                                    localforage.setItem("utilitiesTheme", "invert")
                                    break
                                case "t4":
                                    localforage.setItem("utilitiesTheme", "textless")
                                    break
                                case "t5":
                                    localforage.setItem("utilitiesTheme", "gray")
                                    break
                                case "t6":
                                    this.$swal({
                                        title: "Performance Warning!",
                                        text: "This theme can be very laggy and make the site slow on low-end devices. Are you sure you want to enable it?",
                                        icon: "warning",
                                        buttons: {
                                            cancel: "Cancel",
                                            ye: "Use this theme"
                                        },
                                    }).then(async result => {
                                        if (String(result) != "ye") return
                                        localforage.setItem("utilitiesTheme", "glow")
                                    })
                                    break
                                case "t7":
                                    this.$swal({
                                        title: "Warning!",
                                        text: "This theme is experimental and may cause problems when trying to create your bot. Are you sure you want to enable it?",
                                        icon: "warning",
                                        buttons: {
                                            cancel: "Cancel",
                                            ye: "Use this theme"
                                        },
                                    }).then(async result => {
                                        if (String(result) != "ye") return
                                        localforage.setItem("utilitiesTheme", "scratch-top")
                                    })
                                    break
                                case "t8":
                                    localforage.setItem("utilitiesTheme", "full-colors")
                                    break
                                case "t9":
                                    this.$swal({
                                        title: "Warning!",
                                        text: "This theme is experimental and may cause problems when trying to create your bot. Are you sure you want to enable it?",
                                        icon: "warning",
                                        buttons: {
                                            cancel: "Cancel",
                                            ye: "Use this theme"
                                        },
                                    }).then(async result => {
                                        if (String(result) != "ye") return
                                        localforage.setItem("utilitiesTheme", "text-only")
                                    })
                                    break
                                case "none":
                                    localforage.removeItem("utilitiesTheme")
                                    break
                            }
                        }
                    })
                }
            })
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
            wrapper.innerHTML = `<h6>You will have to manually stop your bot in Discord!</h6>You also might not get a response until the bot gets an error, or stops.`
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
                    const workspace = this.$store.state.workspace
                    const xmlContent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(workspace));
                    // block type="frost_env"
                    // block type="frost_webserver"
                    // const banned_music_blocks = [
                    //     `<block type="first_track"`,
                    //     `<block type="track_start"`,
                    //     `<block type="empty"`,
                    //     `<block type="kicked"`,
                    //     `<block type="queue_error"`,
                    //     `<block type="track_added"`,
                    //     `<block type="discord_connect"`,
                    //     `<block type="better_stop"`,
                    //     `<block type="better_play"`,
                    // ]
                    // jg_express_start_website_then_using_port
                    function customBlocksHasAMcxdondalldakdoij9() {
                        let epic = false
                        window.customBlocks.forEach(name => {
                            workspace.getAllBlocks().forEach(block => {
                                if (block.type == name) epic = true
                            })
                        })
                        return epic
                    }
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
                        xmlContent.includes("block type=\"s4d_eval2\"") ||
                        xmlContent.includes("block type=\"s4d_exec\"") ||
                        xmlContent.includes("block type=\"jg_s4d_other_run_code_inside_file\"")
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
                    } else if (
                        xmlContent.includes("block type=\"jg_express_start_website_then_using_port\"")
                    ) {
                        swal.fire("Your bot contains blocks for starting websites.", "Remove any \"start website\" blocks before running.", "error")
                        console.log("barry: ok so i finished but the user has website block")
                        console.log("johnathan: zamn")
                        console.error("barry and johnathan found out you have a website...")
                        return;
                    } else if (
                        customBlocksHasAMcxdondalldakdoij9()
                    ) {
                        swal.fire("Your bot contains custom blocks.", "Custom blocks are currently unsupported for the run button. Please remove them before continuing.", "error")
                        console.log("barry: this mf got custom blocks")
                        console.log("johnathan: dayumm")
                        console.error("barry and johnathan found out you are epic gamer...")
                        return;
                    } else if (
                        window.isInS4DDebugMode == true
                    ) {
                        swal.fire("S4D is currently in debug mode.", "Please disable debug mode to run your bot.", "error")
                        console.log("barry: placeholder")
                        console.log("johnathan: placeholder")
                        console.error("placeholder")
                        return;
                    }
                    //  else if (
                    //     banned_music_blocks.includes(xmlContent)
                    // ) {
                    //     swal.fire("Your bot contains Music blocks.", "Remove any music blocks before running.", "error")
                    //     console.log("barry: ok so i finished but the user has music blocks")
                    //     console.log("johnathan: bruh")
                    //     console.error("barry and johnathan found music blocks...")
                    //     return;
                    // }
                    let api_key = process.env.VUE_APP_KEY
                    let modifiedJScontent = javascriptContent.replaceAll("const S4D_APP_RUN_BUTTON = false", "const S4D_APP_RUN_BUTTON = true")
                    console.log("barry: done")
                    console.log("johnathan: ok go send the post request")
                    console.log("barry: ok")
                    console.log("epic server: now going to be sending POST request to JeremyGamer13s dumb and insecure API!!1!1!!")
                    const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            key: api_key,
                            code: modifiedJScontent,
                            update: "2"
                        })
                    };
                    try {
                        if (api_key == null) {
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
                        // fetch('https://469runtest.jeremygamer13.repl.co/?imbored=true')
                        .then(async (response) => {
                            console.log(response)
                            console.log("S4D sent a request, the response status code is", response.status)
                            if ((response.status >= 300) && (response.status < 400)) {
                                console.log("epic server: oopsie poopsie something happen")
                                console.log("barry: idk something happen")
                                console.log("johnathan: thats not good but we cant do much")
                                console.log("barry: true :(")
                                swal.fire(
                                    "Uhh..",
                                    `Something may have gone wrong with the request. The server responded with status code ${String(response.status)}. You could check if your bot went online? You can also try to refresh.`,
                                    "warning"
                                )
                            } else if (response.status >= 400) {
                                console.log("epic server: broken")
                                console.log("barry: bruh it broken")
                                console.log("johnathan: :(")
                                console.log("barry: :(")
                                let morestuffIDK = response
                                response.text().then((repons) => {
                                    swal.fire(
                                        "Whoops!",
                                        `Something went wrong with the request. The server responded with status code <b>${String(morestuffIDK.status)}</b>. You may need to refresh the page or try again later as the server could be down.<br><br>Server Response:<br><code>${repons}</code>`,
                                        "error"
                                    )
                                })
                            } else {
                                console.log("epic server: POST request sent to JeremyGamer13s dumb and insecure API😀😁😀👍😁👍👍👍")
                                console.log("barry: done")
                                console.log("johnathan: nice, now lets get back to work")
                                swal.fire(
                                    "Nice!",
                                    `Your bot should go online soon.`,
                                    "success"
                                )
                            }
                        })
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
            
            
        },
        changeFileName() {
          let oldFileName = document.querySelector("#docName").textContent
          let fileName = prompt("Please enter your new document's name:", oldFileName);
          if (fileName.length != 0) {
            document.querySelector("#docName").textContent = fileName;
          }
        },
        changeTheme() {
      if (localStorage.getItem("theme") === "dark") {
        localStorage.setItem("theme", "light");
        document.querySelector("html").classList.add("light-them");
        console.log("changed theme to light");
      } else {
        localStorage.setItem("theme", "dark");
        document.querySelector("html").classList.remove("light-them");
        console.log("changed theme to dark");
      }
        }
    }
}
if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme", "dark");
  }
  (async() => {
  if (localStorage.getItem("theme") === "light") {
    document.querySelector("html").classList.add("light-them");
      } else {
          const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(1 * 1000);
     document.querySelector("html").classList.remove("light-them");
      }
       })()
</script>

<style>
    .hide-gui-button {
        background-color: transparent;
        border-width: 0px;
        outline-width: 0px;
    }
    .show-gui-button {
        background-color: transparent;
        border-width: 0px;
        outline-width: 0px;
        margin: 13px;
        position: absolute;
        left: 3px;
        top: 0px;
        z-index: 99999;
    }
</style>
