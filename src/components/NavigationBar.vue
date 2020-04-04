<template>
    <b-navbar toggleable="lg" type="dark" variant="info" id="navbar">
        <b-navbar-brand>Scratch4Discord</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item-dropdown :text="$t('file.title')" right>
                    <b-dropdown-item @click="askForFile">{{ $t('file.open') }}</b-dropdown-item>
                    <input hidden @change="load" id="load-code" type="file">
                    <b-dropdown-item @click="viewCode">{{ $t('file.javascript') }}</b-dropdown-item>
                    <b-dropdown-item @click="save">{{ $t('file.save') }}</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown :text="$t('edit.title')" right>
                    <b-dropdown-item @click="undo">{{ $t('edit.undo') }}</b-dropdown-item>
                    <b-dropdown-item @click="redo">{{ $t('edit.redo') }}</b-dropdown-item>
                    <b-dropdown-item @click="clear">{{ $t('edit.clear', {
                        blockCount
                    }) }}</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown :text="$t('lang.title')" right>
                    <b-dropdown-item @click="changeLanguage('en')">English (EN)</b-dropdown-item>
                    <b-dropdown-item @click="changeLanguage('es')">Español (ES)</b-dropdown-item>
                    <b-dropdown-item @click="changeLanguage('ru')">Русь (RU)</b-dropdown-item>
                    <b-dropdown-item @click="changeLanguage('fr')">Français (FR)</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
            <b-button>
                <span contenteditable="true" ref="docName">{{ $t("untitled") }}</span>
            </b-button>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import Blockly from "blockly";
import BlocklyJS from "blockly/javascript";
import JSZip from "jszip";

export default {
    name: "navbar",
    computed: {
        blockCount: function() {
            return this.$store.state.workspace ? this.$store.state.workspace.getAllBlocks().length : 0;
        }
    },
    mounted(){
        const element = this.$refs.docName;
        element.spellcheck = false;
        element.focus();
        element.blur();
    },
    methods: {
        undo() {
            this.$store.state.workspace.undo(false);
        },
        redo() {
            this.$store.state.workspace.undo(true);
        },
        clear() {
            this.$store.state.workspace.getAllBlocks().forEach((block) => block.dispose());
        },
        viewCode() {
			alert(BlocklyJS.workspaceToCode(this.$store.state.workspace))
            /*const textarea = document.createElement("textarea");
            textarea.value = BlocklyJS.workspaceToCode(this.$store.state.workspace);
            this.$swal({
                content: textarea
            });*/
        },
        changeLanguage(locale){
            this.$store.commit("setLocale", {
                newLocale: locale
            });
            this.$parent.changeLanguage(locale);
        },
        load(){
            const file = document.getElementById("load-code").files[0];
            const documentName = file.name.split(".").slice(0, file.name.split(".").length-1);
            this.$refs.docName.textContent = documentName;
            const reader = new FileReader();
            reader.onload = (e) => {
                // Open the zip file
                JSZip.loadAsync(e.target.result)
                    .then((data) => {
                    // If there is a blocks.xml file, open it
                    if (data.file('blocks.xml')) {
                        return data.file("blocks.xml").async("string")
                    }
                })
                .then((text) => {
                    // With the blocks.xml file, import it to Blockly.
                    const xml = Blockly.Xml.textToDom(text);
                    Blockly.Xml.domToWorkspace(xml, this.$store.state.workspace);
                });
            };
            if (file) {
                reader.readAsArrayBuffer(file);
                document.getElementById("load-code").setAttribute("value", "");
            }
        },
        save(){
            const zip = new JSZip();
            const xmlContent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(this.$store.state.workspace));
            const fileName = `${encodeURIComponent(this.$refs.docName.textContent).replace(/%20/g, ' ')}.s4d`;
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
            });
        },
        askForFile(){
            document.querySelector("#load-code").click();
        }
    }
}
</script>

<style scoped>
.workspace-name {
    background-color: #F17F29 !important;
    border-color: #F96900 !important;
}
.btn-file {
    position: relative;
    overflow: hidden;
}
.btn-file input[type=file] {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    font-size: 100px;
    text-align: right;
    filter: alpha(opacity=0);
    opacity: 0;
    outline: none;
    background: white;
    cursor: inherit;
    display: block;
}
</style>
