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
// let changesAreUnsaved = false
// let workspaceContent = `<xml xmlns="https://developers.google.com/blockly/xml"></xml>`
export default {
    name: "filemenu",
    /*
    mounted(){
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
    },
    */
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
        load(){
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
            }).then(result => {
                if(typeof result == "object"){
                    return;
                } else if (result) {
                    this.$store.state.workspace.getAllBlocks().forEach((block) => block.dispose());
                }
            const file = document.getElementById("load-code").files[0];
            const documentName = file.name.split(".").slice(0, file.name.split(".").length-1);
            document.querySelector("#docName").textContent = documentName;
            const reader = new FileReader();
            reader.onload = (e) => {
                // console.log(e.target.result)
                if (file.type == "text/xml") {
                    const decoder = new TextDecoder("utf-8")
                    const raw = decoder.decode(e.target.result)
                    const xml = Blockly.Xml.textToDom(raw);
                    Blockly.Xml.domToWorkspace(xml, this.$store.state.workspace);
                    return
                }
                JSZip.loadAsync(e.target.result)
                    .then((data) => {
                    if (data.file("blocks.xml")) {
                        return data.file("blocks.xml").async("string")
                    }
                })
                .then((text) => {
                    const xml = Blockly.Xml.textToDom(text);
                    Blockly.Xml.domToWorkspace(xml, this.$store.state.workspace);
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
            const xmlContent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(this.$store.state.workspace));
            const fileName = `${encodeURIComponent(document.querySelector("#docName").textContent).replace(/%20/g, ' ')}.s4d`;
            zip.file("blocks.xml", xmlContent);
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
            const xmlContent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(this.$store.state.workspace));
            zip.file("blocks.xml", xmlContent);
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
