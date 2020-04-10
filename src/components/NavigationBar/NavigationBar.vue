<template>
    <b-navbar toggleable="lg" type="dark" variant="info" id="navbar">
        <b-navbar-brand>
            <img src="scratch.png" width="40">
            Scratch For Discord
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <FileMenu></FileMenu>
                <EditMenu></EditMenu>
                <LanguageMenu></LanguageMenu>
                <ExamplesMenu></ExamplesMenu>
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

export default {
    name: "navbar",
    components: {
        FileMenu,
        EditMenu,
        LanguageMenu,
        RunModal,
        ExamplesMenu
    },
    computed: {
        configurationValidated: function () {
            return  this.$store.state.workspace &&
                    this.$store.state.workspace.getAllBlocks().some((block) => block.type === "s4d_login") &&
                    this.$store.state.workspace.getAllBlocks().every((block) => !block.disabled && !block.warning);
        }
    },
    mounted(){
        const element = document.querySelector("#docName");
        element.spellcheck = false;
        element.focus();
        element.blur();
    },
    methods: {
        showModal() {
            console.log(document.querySelector("#run-modal"))
            document.querySelector("#run-modal").show();
        },
        exportToCode(){
            const wrapper = document.createElement('div');
            wrapper.innerHTML = `<h6>${this.$t('download.content.title')}</h6><ul><li style='text-align:left'>${this.$t('download.content.unzipFile')}</li><li style='text-align:left'>${this.$t('download.content.start')}</li><li style='text-align:left'>${this.$t('download.content.done')}</li></ul>`;
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
                    zip.file("start.sh", `
                        if [ "$(npm list -g | grep yarn)" ]
                        then
                            yarn list | grep discord.js || yarn add discord.js --no-lockfile
                            node bot.js
                        else
                            npm list | grep discord.js || npm install discord.js --no-shrinkwrap
                            node bot.js
                        fi
                    `);
                    zip.file("start.bat", `
                        REM UNKNOWN: {"type":"If","clause":{"type":"CompoundList","commands":[{"type":"Command","name":{"text":"[","type":"Word"},"suffix":[{"text":"\\"$(npm list -g | grep yarn)\\"","expansion":[{"loc":{"start":1,"end":26},"command":"npm list -g | grep yarn","type":"CommandExpansion","commandAST":{"type":"Script","commands":[{"type":"Pipeline","commands":[{"type":"Command","name":{"text":"npm","type":"Word"},"suffix":[{"text":"list","type":"Word"},{"text":"-g","type":"Word"}]},{"type":"Command","name":{"text":"grep","type":"Word"},"suffix":[{"text":"yarn","type":"Word"}]}]}]}}],"type":"Word"},{"text":"]","type":"Word"}]}]},"then":{"type":"CompoundList","commands":[{"type":"LogicalExpression","op":"or","left":{"type":"Pipeline","commands":[{"type":"Command","name":{"text":"yarn","type":"Word"},"suffix":[{"text":"list","type":"Word"}]},{"type":"Command","name":{"text":"grep","type":"Word"},"suffix":[{"text":"discord.js","type":"Word"}]}]},"right":{"type":"Command","name":{"text":"yarn","type":"Word"},"suffix":[{"text":"add","type":"Word"},{"text":"discord.js","type":"Word"},{"text":"--no-lockfile","type":"Word"}]}},{"type":"Command","name":{"text":"node","type":"Word"},"suffix":[{"text":"bot.js","type":"Word"}]}]},"else":{"type":"CompoundList","commands":[{"type":"LogicalExpression","op":"or","left":{"type":"Pipeline","commands":[{"type":"Command","name":{"text":"npm","type":"Word"},"suffix":[{"text":"list","type":"Word"}]},{"type":"Command","name":{"text":"grep","type":"Word"},"suffix":[{"text":"discord.js","type":"Word"}]}]},"right":{"type":"Command","name":{"text":"npm","type":"Word"},"suffix":[{"text":"install","type":"Word"},{"text":"discord.js","type":"Word"},{"text":"--no-shrinkwrap","type":"Word"}]}},{"type":"Command","name":{"text":"node","type":"Word"},"suffix":[{"text":"bot.js","type":"Word"}]}]}}
                    `);
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
