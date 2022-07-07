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
    "music":MusicExample,
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
        load(example){
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
                if(typeof result == "object"){
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
                        text: "See All Examples",
                        value: "seeall"
                    },
                    search: {
                        text: "Search for an Example",
                        value: "search"
                    }
                },
                closeOnClickOutside: false
            }).then(async result => {
                if (String(result) == "upload") {
                    const name = encodeURIComponent(document.querySelector("#docName").textContent).replace(/%20/g, ' ').replaceAll("\n", "").replaceAll(/[^a-z 0-9]/gmi, "")
                    const wrapper = document.createElement('div');
                    const blockCounts = workspace.getAllBlocks().length
                    wrapper.innerHTML = `<h5>The content of the example is going to be the blocks you've placed.</h5>
<label for="name">Name of your Example </label>
<input type="text" id="UserExampleName" value="${name == "Untitled document" ? "Untitled example" : name}">
<label for="author">Author of the Example </label>
<input type="text" id="UserExampleAuthor" value="Anonymous">
<br>
<small><em>Note, impersonation is possible!</em></small>
<br>
<label for="name">Describe your Example...</label>
<textarea id="UserExampleDescription" rows="4" cols="50"></textarea>
<p>Your example has <b>${blockCounts} block${blockCounts == 1 ? "" : "s"}</b> in it.</p>
${blockCounts <= 5 ? `<h3 style="color:darkred">Uploading near empty examples is not encouraged.</h3>` : ''}
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
                            response.json().then((json) => {
                                const examples = JSON.parse(JSON.stringify(json))
                                responseHTML.innerHTML = `${JSON.stringify(json)}`
                                const names = []
                                let boxes = ''
                                Object.entries(examples).forEach((i) => {
                                    // console.log("Found example with name", i[1][0])
                                    let name = i[1][0]
                                    names.push([name, i[1][3], i[1][4]])
                                })
                                names.forEach((name) => {
                                    boxes += `<div class="box" style="width: 425px; height: 75px; border: 2px solid lightgray; margin: 0.5; padding: 1;">
    <center>
        <h4>${name[0].replaceAll("<", "").replaceAll(">", "").replaceAll("/", "").replaceAll("\\", "")}</h4>
        <input type="radio" id="${name[2]}" name="pickThisExampleToImportButton">
        <em style="color: Gray">${String(name[1])} blocks</em>
    </center>
</div>
<br>`
                                })
                                responseHTML.innerHTML = "<center><form>" + boxes + "</form></center>"
                                this.$swal({
                                    title: "Pick an Example",
                                    content: responseHTML,
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
                                                    });
                                                })
                                            })
                                        })
                                })
                            })
                        })
                } else if (String(result) == "search") {
                    const searchboxthingyidkfenwiugfwre89 = document.createElement('div');
                    searchboxthingyidkfenwiugfwre89.innerHTML = `<input type="text" id="searchforsomethingbruhOHHMYGODuserexampleswtf">`
                    this.$swal({
                        title: "Search for an Example",
                        content: searchboxthingyidkfenwiugfwre89,
                        buttons: {
                            cancel: "Cancel",
                            confirm: {
                                text: "Search",
                                value: "search"
                            }
                        },
                    }).then(async (result) => {
                        if (String(result) != "search") return
                        const SEARCHQUERYBRO = document.getElementById("searchforsomethingbruhOHHMYGODuserexampleswtf").value
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
                                response.json().then((json) => {
                                    const examples = JSON.parse(JSON.stringify(json))
                                    responseHTML.innerHTML = `${JSON.stringify(json)}`
                                    const names = []
                                    let boxes = ''
                                    Object.entries(examples).forEach((i) => {
                                        // console.log("Found example with name", i[1][0])
                                        let name = i[1][0]
                                        if (String(name).toLowerCase().includes(String(SEARCHQUERYBRO).toLowerCase())) names.push([name, i[1][3], i[1][4]])
                                    })
                                    names.forEach((name) => {
                                        boxes += `<div class="box" style="width: 425px; height: 75px; border: 2px solid lightgray; margin: 0.5; padding: 1;">
    <center>
        <h4>${name[0].replaceAll("<", "").replaceAll(">", "").replaceAll("/", "").replaceAll("\\", "")}</h4>
        <input type="radio" id="${name[2]}" name="pickThisExampleToImportButton">
        <em style="color: Gray">${String(name[1])} blocks</em>
    </center>
</div>
<br>`
                                    })
                                    responseHTML.innerHTML = "<center><form>" + boxes + "</form></center>"
                                    this.$swal({
                                        title: "Pick an Example",
                                        content: responseHTML,
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
                                                    console.log(json.example)
                                                    lkjgenwhikgu4ewkjn.innerHTML = `<b>${json.example[0].replaceAll("<", "").replaceAll("/", "").replaceAll("\\", "")}</b> with <b><em>${json.example[2]} blocks</em></b><br><br><p>${json.example[1].replaceAll("<", "").replaceAll("\\", "")}</p>${json.example[3] == null || json.example[3] == "" ? "" : `<image src="${String(json.example[3])}"></image>`}`
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
                                                        });
                                                    })
                                                })
                                            })
                                    })
                                })
                            })
                    })
                }
            });
        }
    }
}
</script>
