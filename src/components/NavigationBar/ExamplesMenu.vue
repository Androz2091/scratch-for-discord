<template>
    <b-nav-item-dropdown id="v-step-0" text="Examples" right>
        <b-dropdown-item @click="load('ping-pong')">Ping-Pong Command</b-dropdown-item>
        <b-dropdown-item @click="load('command-parsing')">Command Handler</b-dropdown-item>
        <b-dropdown-item @click="load('bettercmd')">Prefix Command Handler</b-dropdown-item>
        <b-dropdown-item @click="load('leveling')">Basic Leveling System</b-dropdown-item>
        <b-dropdown-item @click="load('music')">Music System</b-dropdown-item>
        <b-dropdown-item @click="load('image-gen')">Image Generation</b-dropdown-item>
        <b-dropdown-item @click="load('economy')">Economy System</b-dropdown-item>
        <b-dropdown-item @click="load('leaderboard')">Leaderboard from Database</b-dropdown-item>
        <b-dropdown-item @click="load('backup')">Backups</b-dropdown-item>
        <b-dropdown-item @click="load('random')">Random Responses</b-dropdown-item>
        <b-dropdown-item @click="load('cooldown')">Cooldowns</b-dropdown-item>
        <b-dropdown-item @click="load('button')">Buttons & Button rows</b-dropdown-item>
        <b-dropdown-item @click="load('slash')">Slash Commands</b-dropdown-item>
        <b-dropdown-item @click="load('advjsonreq')">Advanced JSON Request</b-dropdown-item>
        <b-dropdown-item @click="load('regex')">RegEx: Finding specific text</b-dropdown-item>
        <b-dropdown-item @click="load('embed example')">Using Embeds Category</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item @click="userexamples()">User Uploaded Examples</b-dropdown-item>
    </b-nav-item-dropdown>
</template>

<script>
import Blockly from "blockly";

import PingPongExample from "../../examples/ping-pong";
import CommandParsingExample from "../../examples/command-parsing";
import bettercmd from "../../examples/bettercmd";
import LevelingExample from "../../examples/leveling";
import MusicExample from "../../examples/music";
import ImageGen from "../../examples/image_gen";
import Economy from "../../examples/economy";
import backup from "../../examples/backup";
import random from "../../examples/random";
import aki from "../../examples/aki";
import reddit from "../../examples/reddit";
import ticket from "../../examples/ticket";
import button from "../../examples/button";
import cooldown from "../../examples/cooldown";
import slash from "../../examples/slash";
import advjsonreq from "../../examples/advjsonreq.js";
import regex from "../../examples/regex.js";
import leaderboard from "../../examples/leaderboard.js";
import embed from "../../examples/embed example.js";
import localforage from 'localforage';

const examples = {
    "ping-pong": PingPongExample,
    "command-parsing": CommandParsingExample,
    "bettercmd": bettercmd,
    "leveling": LevelingExample,
    "music": MusicExample,
    "image-gen": ImageGen,
    "economy": Economy,
    "backup": backup,
    "random": random,
    "aki": aki,
    "reddit": reddit,
    "ticket": ticket,
    "button": button,
    "cooldown": cooldown,
    "slash": slash,
    "advjsonreq": advjsonreq,
    "regex": regex,
    "leaderboard": leaderboard,
    "embed example": embed
};

export default {
    name: "editmenu",
    computed: {
    },
    methods: {
        load(example) {
            this.$swal({
                title: this.$t('examples.confirm.title'),
                text: this.$t('examples.confirm.text'),
                buttons: {
                    cancel: this.$t('examples.confirm.cancel'),
                    no: {
                        text: this.$t('examples.confirm.no'),
                        value: false,
                        className: "red-button"
                    },
                    yes: {
                        text: this.$t('examples.confirm.yes'),
                        value: true
                    }
                },
                closeOnClickOutside: false
            }).then(result => {
                if (typeof result == "object") {
                    return;
                } else if (result) {
                    this.$store.state.workspace.getAllBlocks().forEach((block) => block.dispose());
                }
                const exampleXml = examples[example];
                Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(exampleXml), this.$store.state.workspace);
                setTimeout(() => {
                    this.$toast.open({
                        message: this.$t('examples.loaded', {
                            example
                        }),
                        type: "success",
                        dismissible: true,
                        duration: 10000
                    });
                }, (200));
            });
        },
        userexamples() {
            const workspace = this.$store.state.workspace
            let url = "https://469exampletest.jeremygamer13.repl.co/"
            if (String(process.env.NODE_ENV) == "development") {
                url = prompt("Examples server URL to use?", "https://469exampletest.jeremygamer13.repl.co/")
                if (!url.endsWith("/")) url += "/"
            }
            const SERVER = url
            this.$swal({
                title: "User Examples",
                text: "What would you like to do here?",
                buttons: {
                    cancel: "Cancel",
                    upload: {
                        text: "Upload an Example",
                        value: "upload"
                    },
                    seeall: {
                        text: "View Examples",
                        value: "seeall"
                    }
                },
                closeOnClickOutside: false
            }).then(async result => {
                let checkSessionIDsExistence = await localforage.getItem("EXAMPLE_SESSION_ID")
                if (checkSessionIDsExistence == null) {
                    const usableChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "-", "_", "=", "+", "[", "]", "(", ")"]
                    let sesid = ""
                    for (let i = 0; i < 55; i++) {
                        let character = usableChars[(Math.round(Math.random() * (usableChars.length - 1)))]
                        sesid += character
                    }
                    await localforage.setItem("EXAMPLE_SESSION_ID", String(sesid))
                }
                if (String(result) == "upload") {
                    const name = encodeURIComponent(document.querySelector("#docName").textContent).replace(/%20/g, ' ').replaceAll("\n", "").replaceAll(/[^a-z 0-9]/gmi, "")
                    const wrapper = document.createElement('div');
                    const blockCounts = workspace.getAllBlocks().length
                    wrapper.innerHTML = `<h5>The content of the example is going to be the blocks you've placed.</h5>
<label for="name">Name of your Example </label>
<input type="text" id="UserExampleName" value="${name == "Untitled document" ? "Untitled example" : name}" maxlength="50">
<label for="author">Author of the Example </label>
<input type="text" id="UserExampleAuthor" value="Anonymous" maxlength="20">
<br>
<label style="font-weight: bold;" for="name">Describe your Example...</label>
<textarea id="UserExampleDescription" rows="4" cols="50" maxlength="500"></textarea>
<p>Your example has <b>${blockCounts} block${blockCounts == 1 ? "" : "s"}</b> in it.</p>
${blockCounts <= 5 ? `<p style="color: darkred; font-weight: bold;">Uploading near empty examples is not encouraged.</p>` : ''}
`
                    this.$swal({
                        title: "Upload an example",
                        content: wrapper,
                        buttons: {
                            cancel: "Cancel",
                            upload: {
                                text: "Upload",
                                value: "upload"
                            }
                        },
                        closeOnClickOutside: false
                    }).then(async result2 => {
                        if (String(result2) != "upload") {
                            return
                        }
                        const xmlContent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(workspace))
                        let sessionIDe = await localforage.getItem("EXAMPLE_SESSION_ID")
                        if (sessionIDe == null) {
                            const usableChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "-", "_", "=", "+", "[", "]", "(", ")"]
                            let sesid = ""
                            for (let i = 0; i < 55; i++) {
                                let character = usableChars[(Math.round(Math.random() * (usableChars.length - 1)))]
                                sesid += character
                            }
                            await localforage.setItem("EXAMPLE_SESSION_ID", String(sesid))
                            sessionIDe = String(sesid)
                        }
                        console.log(sessionIDe)
                        const requestOptions = {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                name: String(document.getElementById("UserExampleName").value),
                                desc: String(document.getElementById("UserExampleDescription").value),
                                xml: String(xmlContent),
                                count: workspace.getAllBlocks().length,
                                author: String(document.getElementById("UserExampleAuthor").value),
                                sessionID: String(sessionIDe)
                            })
                        };
                        fetch(SERVER + 'api/upload', requestOptions)
                            .then(async (response) => {
                                console.log(response)
                                console.log("S4D sent a request, the response status code is", response.status)
                                if (response.status != 200) {
                                    const responseHTML = document.createElement('div');
                                    responseHTML.innerHTML = `Failed to load message`
                                    response.json().then((json) => {
                                        responseHTML.innerHTML = `${String(json.error)}`
                                    })
                                    this.$swal({
                                        title: "An error occurred uploading the example!",
                                        content: responseHTML,
                                        icon: "error"
                                    })
                                    return
                                }
                                const responseHTML = document.createElement('div');
                                responseHTML.innerHTML = `The example was uploaded!`
                                this.$swal({
                                    title: "Congrats!",
                                    content: responseHTML,
                                    icon: "success"
                                })
                            })
                    });
                } else if (String(result) == "seeall") {
                    fetch(SERVER + 'api/examples')
                        .then(async (response) => {
                            console.log(response)
                            console.log("S4D sent a request, the response status code is", response.status)
                            if (response.status != 200) {
                                this.$swal({
                                    title: "An unexpected error occurred!",
                                    icon: "error"
                                })
                                return
                            }
                            const responseHTML = document.createElement('div');
                            response.json().then(async (json) => {
                                const examples = JSON.parse(JSON.stringify(json))
                                responseHTML.innerHTML = `${JSON.stringify(json)}`
                                const names = []
                                let boxes = ''
                                Object.entries(examples).forEach((i) => {
                                    // console.log("Found example with name", i[1][0])
                                    let name = i[1][0]
                                    names.push([name, i[1][3], i[1][4], i[1][6], i[1][1], i[1][8], i[1][9], i[1][10], i[1][11], i[1][12]])
                                })
                                /* eslint-disable */
                                let voteButtonSessionList = {}
                                names.forEach((name) => {
                                    voteButtonSessionList[String(name[2])] = {likes: name[8], dislikes: name[9]}
                                    boxes += `<label name="pickThisExampleToImportButton">
    <div class="box">
        <input type="radio" id="${name[2]}" name="pickThisExampleToImportButton" class="sr-only-basic">
            <center>
                <h4>${name[0].replaceAll("<", "").replaceAll(">", "").replaceAll("/", "").replaceAll("\\", "")}</h4>
                <p><i class="fa fa-cube"></i> ${String(name[1])} blocks	&#8226 <i class="fas fa-id-badge"></i> ID: ${name[2]}<br><i class="fas fa-user-shield"></i> Creator: ${name[3]}</p>
                <p style="font-style: italic;font-size:small;" title="${name[4]}">${name[4].length > 100 ? name[4].substring(0, 96) + "..." : name[4]}</p>
            </center>
        </input>
        <button type="button" name="like" class="examplesMenuBox_Likes" id="${name[2]}" title="Like this example" style="background-color: Transparent;border: none;color:gray">
            <i class="fa-solid fa-thumbs-up"> ${name[5]}</i>
        </button>
        <button type="button" name="dislike" class="examplesMenuBox_Dislikes" id="${name[2]}" title="Dislike this example" style="background-color: Transparent;border: none;color:gray">
            <i class="fa-solid fa-thumbs-down"> ${name[6]}</i>
        </button>
        <button type="button" name="downloads" class="examplesMenuBox_Downloads" id="${name[2]}" title="Total number of Imports" style="background-color: Transparent;border: none;color:gray">
            <i class="fa-solid fa-file-import"> ${name[7]}</i>
        </button>
    </div>
</label>
<br>`
                                })
                                /* eslint-disable */
                                responseHTML.innerHTML = `<!-- buttons to search & stuff -->
<div>
    <i title="Search for an Example" class="fa-solid fa-magnifying-glass">: </i>
    <input type="text" size="60" id="swal_dialog_box_searchForUserExamples" title="Name of the example you are looking for">
</div>
<!--<div style="float: right;">
    <i title="Sort the examples menu" class="fa-solid fa-arrow-down-wide-short">: </i>
    <select id="swal_dialog_box_sortUserExamples">
        <option value="new">Newest First</option>
        <option value="old">Oldest First</option>
        <option value="liked">Most Liked</option>
        <option value="hated">Most Hated</option>
        <option value="mostImports">Most Imported</option>
        <option value="leastImports">Least Imported</option>
    </select>
</div>-->
<!-- examples area -->
<center>
    <form id="swal_user_examples_dialog_box-form_area" style="width: 100%; display: flex; flex-wrap: wrap; justify-content: center;">
        ${boxes}
    </form>
</center>
<style>
.sr-only-basic {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    width: 1px;
    display: none;
}
</style>`
                                //console.log("a") 
                                this.$swal({
                                    title: "Pick an Example",
                                    content: responseHTML,
                                    className: "swal-wide",
                                    buttons: {
                                        cancel: "Cancel",
                                        confirm: {
                                            text: "Import Selected Example",
                                            value: "import"
                                        }
                                    },
                                }).then(async (result) => {
                                    if (String(result) != "import") return
                                    const selectedOption = document.querySelector('input[name="pickThisExampleToImportButton"]:checked')?.id
                                    if (selectedOption == null) return
                                    console.log(selectedOption)
                                    const lkjgenwhikgu4ewkjn = document.createElement('div');
                                    fetch(SERVER + `api/getExample?id=${selectedOption}`)
                                        .then(async (result) => {
                                            result.json().then((json) => {
                                                lkjgenwhikgu4ewkjn.innerHTML = `<b>${json.example[0].replaceAll("<", "").replaceAll("/", "").replaceAll("\\", "")}</b> with <b><em>${json.example[2]} blocks</em></b> uploaded by <b>${json.example[4].replaceAll("\\", "").replaceAll("<", "").replaceAll(">", "").replaceAll("/", "")}</b> <br><br><p>${json.example[1].replaceAll("<", "").replaceAll("\\", "")}</p>${json.example[3] == null || json.example[3] == "" ? "" : `<image src="${String(json.example[3])}"></image>`}`
                                                this.$swal({
                                                    title: "Load this example?",
                                                    content: lkjgenwhikgu4ewkjn,
                                                    buttons: {
                                                        cancel: "Cancel",
                                                        confirm: {
                                                            text: "Load",
                                                            value: "load"
                                                        }
                                                    },
                                                }).then(async (result) => {
                                                    if (String(result) != "load") return
                                                    this.$swal({
                                                        title: "Delete current blocks?",
                                                        text: "Would you like to remove the current blocks before importing the example?",
                                                        buttons: {
                                                            cancel: "Cancel",
                                                            no: {
                                                                text: "No",
                                                                value: false,
                                                                className: "red-button"
                                                            },
                                                            yes: {
                                                                text: "Yes",
                                                                value: true
                                                            }
                                                        },
                                                        closeOnClickOutside: false
                                                    }).then(result => {
                                                        if (typeof result == "object") {
                                                            return;
                                                        } else if (result) {
                                                            this.$store.state.workspace.getAllBlocks().forEach((block) => block.dispose());
                                                        }
                                                        let exampleXml = ""
                                                        fetch(SERVER + `api/getExample?xml=true&id=${selectedOption}`).then(result => result.text().then(xml => {
                                                            exampleXml = String(xml)
                                                            Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(exampleXml), this.$store.state.workspace);
                                                            setTimeout(() => {
                                                                this.$toast.open({
                                                                    message: "Loaded a custom example!",
                                                                    type: "success",
                                                                    dismissible: true,
                                                                    duration: 10000
                                                                });
                                                            }, (200));
                                                        }))
                                                        const requestOptions = {
                                                            method: 'POST',
                                                            headers: { 'Content-Type': 'application/json' },
                                                            body: JSON.stringify({
                                                                id: selectedOption,
                                                            })
                                                        }
                                                        fetch(`${SERVER}api/examples/updateDownloads`, requestOptions)
                                                    });
                                                })
                                            })
                                        })
                                })
                                console.log("EPIC CLIENT: Running examples scripts for the buttons mm nmmmayay")
                                let elements = document.getElementsByClassName("sr-only-basic")
                                for (let i = 0; i < elements.length; i++) {
                                    let current = elements.item(i)
                                    current.setAttribute("onclick", `let parent = this.parentElement
let elements = document.getElementsByClassName("sr-only-basic")
for (let i = 0; i < elements.length; i++) {
    let current = elements.item(i).parentElement
    if (current.getAttribute("style")) current.removeAttribute("style")
}
parent.setAttribute("style", "border-color:#00aaff")`)
                                }
                                let usableClasses = ["examplesMenuBox_Likes", "examplesMenuBox_Dislikes"]
                                for (let i = 0; i < usableClasses.length; i++) {
                                    let cur = usableClasses[i]
                                    let elements = document.getElementsByClassName(cur)
                                    for (let i = 0; i < elements.length; i++) {
                                        let element = elements.item(i)
                                        let icon = element.getElementsByTagName("i").item(0)
                                        let baseIcon = icon.getAttribute("class")
                                        let originalCount = Number(icon.innerText)
                                        let likeButton = element.getAttribute("name") == "like"
                                        let sessionID = await localforage.getItem("EXAMPLE_SESSION_ID")
                                        if (voteButtonSessionList[String(element.getAttribute("id"))][likeButton ? "likes" : "dislikes"].includes(sessionID)) {
                                            originalCount -= 1
                                            icon.setAttribute("style", "color: #00aaff")
                                            icon.innerText = " " + (originalCount + 1)
                                        }
                                        element.setAttribute("onclick", `let icon = document.getElementsByClassName("${cur}").item(${i}).getElementsByTagName("i").item(0)
icon.setAttribute("class", "fa-solid fa-ellipsis")
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        liking: ${element.getAttribute("name") == "like"},
        id: ${element.getAttribute("id")},
        session: "${sessionID}"
    })
};
fetch("${SERVER + 'api/examples/updateVotes'}", requestOptions)
.then((response) => {
    if (response.status != 200) {
        console.log("EPIC EXAMPLES SERBER: epic fail")
        icon.setAttribute("class", "fa-solid fa-" + (response.status == 429 ? "circle-pause" : "triangle-exclamation"))
        icon.setAttribute("style", "color: #f" + (response.status == 429 ? "cb103" : "00000"))
        return
    }
    response.json().then((json) => {
        console.log(json)
        icon.setAttribute("class", "${baseIcon}")
        icon.removeAttribute("style")
        icon.innerText = " " + ${originalCount}
        if ((json.liked && this.getAttribute("name") == "like") || (json.disliked && this.getAttribute("name") == "dislike")) {
            icon.setAttribute("style", "color: #00aaff")
            icon.innerText = " " + (${originalCount} + 1)
        }
    })
})
.catch((err) => {
    icon.setAttribute("class", "fa-solid fa-triangle-exclamation")
    icon.setAttribute("style", "color: #ff0000")
})
`)
                                    }
                                }
                                // let selectMenu = document.getElementById("swal_dialog_box_sortUserExamples")
                                // selectMenu.onchange = function () {
                                //     console.log()
                                // }
                                let unsearchedHtml = document.getElementById("swal_user_examples_dialog_box-form_area").innerHTML
                                let searchBox = document.getElementById("swal_dialog_box_searchForUserExamples")
                                searchBox.oninput = function () {
                                    let area = document.getElementById("swal_user_examples_dialog_box-form_area")
                                    area.innerHTML = unsearchedHtml
                                    let boxes = area.getElementsByTagName("label")
                                    let kept = boxes.length
                                    for (let i = boxes.length - 1; i >= 0; i--) {
                                        let current = boxes.item(i)
                                        let name = current.getElementsByClassName("box").item(0)
                                            .getElementsByTagName("center").item(0)
                                            .getElementsByTagName("h4").item(0)
                                            .innerText
                                        if (!name.toLowerCase().includes(searchBox.value)) current.remove()
                                        kept = boxes.length
                                    }
                                    if (kept <= 0) {
                                        area.innerHTML = `<div style="display: grid">
    <br>
    <br>
    <em style="color:gray">No examples were found.</em>
    <br>
    <i class="fa-solid fa-circle-question fa-2xl"></i>
</div>`
                                    }
                                }
                            })
                        })
                        .catch(err => {
                            const responseHTML = document.createElement('div');
                            responseHTML.innerHTML = String(err)
                            this.$swal({
                                title: "An unexpected error occurred!",
                                content: responseHTML,
                                icon: "error"
                            })
                        })
                }
            });
        }
    }
}
</script>
<style>
.swal-wide {
    width: 900px;
}

.swal-wide .swal-content {
    height: 30em;
    overflow: auto;
}

.swal-wide h4 {
    font-weight: bold;
    color: rgba(0, 0, 0, .65);
}

/*  .sr-only {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap; 
    width: 1px;
    pointer-events: auto;
} */

label {
    width: 48%;
}

.box {
    height: 200px;
    border: 2px solid lightgray;
    border-radius: 0.25em;
    margin: 0.25em 0.25em;
    padding: 0.5em;
    background-color: white;
}

.box:hover {
    border: 2px solid lightblue;
}

.box:active {
    border: 3px solid lightblue;
    padding: 0.75em;
}

.box p {
    color: gray;
    margin-top: -0.5em;
}

input[type="radio"]:checked {
    background: lightblue;
}
</style>
