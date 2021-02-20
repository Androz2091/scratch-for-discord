<template>
    <b-navbar toggleable="lg" type="dark" variant="info" id="navbar">
        <b-navbar-brand>
            <img src="scratch.png" width="40">
            Scratch For Discord
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <CodeModal></CodeModal>
                <FileMenu></FileMenu>
                <EditMenu></EditMenu>
                <LanguageMenu></LanguageMenu>
                <ExamplesMenu></ExamplesMenu>
                <b-nav-item href="https://androz2091.gitbook.io/scratch-for-discord/" target="_blank">{{ $t('help') }}</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <RunModal></RunModal>
                <b-button style="border-right-color: #3DA2B8; border-radius: 0em; border-top-left-radius: 0.25em; border-bottom-left-radius: 0.25em">
                <span contenteditable="true" id="docName">{{ $t("untitled") }}</span>
                </b-button>
                <b-button id="v-step-1" :disabled="!configurationValidated" style="border-right-color: #3DA2B8; border-radius: 0em;" v-b-modal.run-modal>
                    <b-icon-play></b-icon-play>
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

import FileMenu from "./FileMenu.vue";
import EditMenu from "./EditMenu.vue";
import LanguageMenu from "./LanguageMenu.vue";
import RunModal from "./RunModal.vue";
import ExamplesMenu from "./ExamplesMenu.vue";
import CodeModal from "./CodeModal";

export default {
    name: "navbar",
    components: {
        FileMenu,
        EditMenu,
        LanguageMenu,
        RunModal,
        ExamplesMenu,
        CodeModal
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
            }).then(result => {
                if(result){
                    const zip = new JSZip();
                    const xmlContent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(this.$store.state.workspace));
                    const fileName = `${encodeURIComponent(document.querySelector("#docName").textContent).replace(/%20/g, " ")}.zip`;
                    zip.file("blocks.xml", xmlContent);
                    const javascriptContent = this.getWorkspaceCode();
                    zip.file("bot.js", javascriptContent);
                    zip.file(".replit", 'run = "node bot.js"');
                    zip.file("package.json", JSON.stringify({
                        name: 'scratch-for-discord-bot',
                        version: '1.0.0',
                        main: 'bot.js',
                        scripts: {
                            start: 'node .'
                        },
                        dependencies: {
                            'discord.js': '^12.5.1',
                            'easy-json-database': '^1.3.0'
                        }
                    }));
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
