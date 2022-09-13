<template>
    <b-nav-item-dropdown :text="$t('file.title')" right>
        <b-dropdown-item @click="askForFile">{{ $t('file.open') }}</b-dropdown-item>
        <input hidden @change="load" id="load-code" type="file" accept=".s4d,.zip,.xml">
        <b-dropdown-item v-b-modal.code-modal>{{ $t('file.javascript') }}</b-dropdown-item>
        <b-dropdown-item @click="copy">{{ $t('file.copy')}}</b-dropdown-item>
        <b-dropdown-item @click="save">{{ $t('file.save') }}</b-dropdown-item>
        <b-dropdown-item @click="saveas">Replace</b-dropdown-item>
    </b-nav-item-dropdown>
</template>

<script>
import Blockly from "blockly";
import JSZip from "jszip";
import beautify from "js-beautify";
import localforage from "localforage";
const smm = require("./module")
const blocklyModule = require("../../blocks/blocklyModule")
// let changesAreUnsaved = false
// let workspaceContent = `<xml xmlns="https://developers.google.com/blockly/xml"></xml>`
function fetchCustomBlocks(dataobj, loadfunc) {
    //window.isInS4DDebugMode = false
    if (!window.isInS4DDebugMode) {
        const w = blocklyModule.menus.createMenu({
            width: 640,
            height: 240
        })
        w.content.style.textAlign = "center"
        w.content.append(document.createElement("br"))
        const h3 = document.createElement("h3")
        h3.innerHTML = "Enter Debug Mode to use custom blocks as it is experimental currently."
        const clear = w.createDecoratedButton()
        clear.innerHTML = "Remove custom blocks from my autosaves"
        clear.onclick = () => {
            clear.innerHTML = 'Removing...'
            localforage.removeItem("autosave_customBlocks").then(() => {
                clear.innerHTML = 'Cleared!'
            }).catch(() => {
                clear.innerHTML = 'An error occurred'
            })
        }
        w.content.append(h3)
        w.content.append(document.createElement("br"))
        w.content.append(document.createElement("br"))
        w.content.append(clear)
        return
    }
    let j = {}
    try {
        j = JSON.parse(dataobj.customBlocks)
    } catch (err) {
        this.$toast.open({
            message: "Custom block data for this file is corrupted.",
            type: "error",
            dismissible: true,
            duration: 10000
        });
        console.warn("An error occurred when loading custom blocks!", String(err).substring(0, 250))
        if (loadfunc) loadfunc()
        return
    }
    const blocks = j
    const bringBack_setTimeout = window.setTimeout
    const bringBack_setInterval = window.setInterval
    const bringBack_fetch = window.fetch
    const bringBack_Worker = Worker
    const bringBack_SharedWorker = SharedWorker
    const bringBack_ServiceWorker = ServiceWorker
    window.setTimeout = null
    window.setInterval = null
    window.fetch = null
    window.Worker = null
    window.SharedWorker = null
    window.ServiceWorker = null
    window.BlocklyService = {}
    window.BlocklyService.Blocks = {}
    window.BlocklyService.JavaScript = {}
    window.BlocklyService.JavaScript = Blockly.JavaScript
    blocks.forEach(b => {
        /* eslint-disable */
        let bringBack_setTimeout
        let bringBack_setInterval
        let bringBack_fetch
        let bringBack_Worker
        let bringBack_SharedWorker
        let bringBack_ServiceWorker
        let works = true
        try {
            Blockly.Blocks[b.name] = {
                init: function () {
                    eval(b.blocks)
                }
            }
            smm.bypassStrictModeRegister(b.name, b.javascript)
        } catch (err) {
            console.warn("An error occurred when loading a custom block!", String(err).substring(0, 250))
            works = false
        } finally {
            if (works) {
                window.customBlocks.push(b.name)
                window.saveCustomBlocksOutput.push(b)
            }
        }
    })
    localforage.setItem("autosave_customBlocks", JSON.stringify(window.saveCustomBlocksOutput))
    window.setTimeout = bringBack_setTimeout
    window.setInterval = bringBack_setInterval
    window.fetch = bringBack_fetch
    window.Worker = bringBack_Worker
    window.SharedWorker = bringBack_SharedWorker
    window.ServiceWorker = bringBack_ServiceWorker
    if (loadfunc) loadfunc()
    window.loadtoolltovobocaopjsd9fuw4fpoewjoiphgf9ewpojndsfoihgew8ninjagoLOllioolo2222222222222()
}
window.laodadfcusitomsoanblopocoocksooskfetchCustomBlocksocososc = fetchCustomBlocks
export default {
    name: "filemenu",
    mounted() {
        /*
        // unsaved changes stuff
        window.onload = function () {
            window.addEventListener("beforeunload", function (e) {
                let currentWorkspaceContent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(this.$store.state.workspace))
                changesAreUnsaved = workspaceContent != currentWorkspaceContent
                if (!changesAreUnsaved) return
                let confirmationMessage = `You have unsaved blocks! Are you sure?`;
                (e || window.event).returnValue = confirmationMessage; //Gecko + IE
                return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
            });
        }
        // end of unsaved changes stuff
        */
        localforage.getItem("utilitiesShortcuts").then(item => {
            if (item == false) return
            window.addEventListener('keydown', (e) => {
                if (e.ctrlKey && (e.key == "s")) {
                    e.preventDefault()
                    if (e.altKey) {
                        this.saveas()
                    } else {
                        this.save()
                    }
                    return false
                }
            })
        })
    },
    methods: {
        copy() {
            var url = beautify.js(this.getWorkspaceCode(), {
                indent_size: 4,
                space_in_empty_paren: true
            });
           navigator.clipboard.writeText(url)
        },
        viewCode() {
			alert(this.getWorkspaceCode());
        },
        askForFile(){
            document.querySelector("#load-code").click();
        },
        async load(){
          this.$swal({
                title: this.$t('file.confirm.title'),
                text: this.$t('file.confirm.text'),
                buttons: {
                    cancel: this.$t('file.confirm.cancel'),
                    no: {
                        text: this.$t('file.confirm.no'),
                        value: false,
                        className: "red-button"
                    },
                    yes: {
                        text: this.$t('file.confirm.yes'),
                        value: true
                    }
                },
                closeOnClickOutside: false
          }).then(async result => {
                if(typeof result == "object"){
                    return;
                } else if (result) {
                    window.blocklyWorkspaceThatIneedtoUseForThingsLaigwef9o8wifnwp4e.clear()
                }
                const file = document.getElementById("load-code").files[0];
                const documentName = file.name.split(".").slice(0, file.name.split(".").length-1);
                document.querySelector("#docName").textContent = documentName;
                const reader = new FileReader();
                reader.onload = async (e) => {
                // console.log(e.target.result)
                if (file.type == "text/xml") {
                    const decoder = new TextDecoder("utf-8")
                    const raw = decoder.decode(e.target.result)
                    const xml = Blockly.Xml.textToDom(raw);
                    Blockly.Xml.domToWorkspace(xml, window.blocklyWorkspaceThatIneedtoUseForThingsLaigwef9o8wifnwp4e);
                    return
                }
                JSZip.loadAsync(e.target.result).then(async (data) => {
                    const dataObject = {}
                    if (data.file("blocks.xml")) {
                        dataObject.xml = await data.file("blocks.xml").async("string")
                    }
                    if (data.file("customBlocks.json")) {
                        dataObject.customBlocks = await data.file("customBlocks.json").async("string")
                    }
                    return dataObject
                })
                .then((dataobj) => {
                    if (dataobj.xml == null) return
                    function load() {
                        const xml = Blockly.Xml.textToDom(dataobj.xml);
                        Blockly.Xml.domToWorkspace(xml, window.blocklyWorkspaceThatIneedtoUseForThingsLaigwef9o8wifnwp4e);
                    }
                    if (dataobj.customBlocks == null) {
                        load()
                        return
                    }
                    fetchCustomBlocks(dataobj, load)
                })
                .catch((err) => {
                    this.$toast.open({
                        message: this.$t('load.error'),
                        type: "error",
                        dismissible: true,
                        duration: 10000
                    });
                    console.warn("An error occurred when loading a file!", String(err).substring(0, 250))
                });
            };
            if (file) {
                reader.readAsArrayBuffer(file);
                document.getElementById("load-code").setAttribute("value", "");
            }
        });
        },
        save(){
            const zip = new JSZip();
            const xmlContent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(window.blocklyWorkspaceThatIneedtoUseForThingsLaigwef9o8wifnwp4e));
            const fileName = `${encodeURIComponent(document.querySelector("#docName").textContent).replace(/%20/g, ' ')}.s4d`;
            zip.file("blocks.xml", xmlContent);
            if (window.saveCustomBlocksOutput.length > 0) {
                zip.file("customBlocks.json", JSON.stringify(window.saveCustomBlocksOutput));
                localforage.setItem("autosave_customBlocks", JSON.stringify(window.saveCustomBlocksOutput))
            }
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
                // changesAreUnsaved = false
                // workspaceContent = xmlContent
            });
        },
        saveas(){
            const zip = new JSZip();
            const xmlContent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(window.blocklyWorkspaceThatIneedtoUseForThingsLaigwef9o8wifnwp4e));
            zip.file("blocks.xml", xmlContent);
            if (window.saveCustomBlocksOutput.length > 0) {
                zip.file("customBlocks.json", JSON.stringify(window.saveCustomBlocksOutput));
                localforage.setItem("autosave_customBlocks", JSON.stringify(window.saveCustomBlocksOutput))
            }
            zip.generateAsync({
                type: "blob"
            })
            .then(async (blob) => {
                const fileHandle = await window.showSaveFilePicker({
                    types: [{
                        description: "S4D Bot File",
                        accept: {"application/zip": [".s4d"]}
                    }]
                });
                const fileStream = await fileHandle.createWritable();
                await fileStream.write(blob);
                await fileStream.close();
                // changesAreUnsaved = false
                // workspaceContent = xmlContent
            },
          )
        }
    }
}
</script>
