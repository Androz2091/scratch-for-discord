<template>
    <div id="app">
        <NavBarComponent></NavBarComponent>
        <BlocklyComponent id="blocklySpace" :options="options"></BlocklyComponent>
    </div>
</template>

<script>

import Blockly from "blockly";
import NavBarComponent from "./components/NavigationBar.vue";
import BlocklyComponent from "./components/BlocklyComponent.vue";

import toolbox from "./toolbox";

Blockly.Tooltip.HOVER_MS = 100;

// Load blocks
import "./blocks/discord/actions/";
import "./blocks/discord/base/";
import "./blocks/discord/joins";
import "./blocks/discord/message/";
import "./prompt";

// Load Blockly locales
import * as en from "blockly/msg/en";
import * as fr from "blockly/msg/fr";
// Load custom locales
import * as enLocale from "./locales/fr";
import * as frLocale from "./locales/en";

export default {
    name: "app",
    components: {
        BlocklyComponent,
        NavBarComponent
    },
    methods: {
        reloadWorkspace(){
            // Get current workspace
            const workspace = this.$store.state.workspace;
            // Convert it to a dom string
            const dom = Blockly.Xml.workspaceToDom(workspace);
            // Delete the current workspace
            workspace.dispose();
            // Create a new workspace (with the good language)
            const newWorkspace = Blockly.inject(document.getElementById("blocklyDiv"), this.options);
            // And restore the blocks
            Blockly.Xml.domToWorkspace(dom, newWorkspace);
            // Update the workspace in the vuex store
            this.$store.commit("setWorkspace", {
                workspace: newWorkspace
            });
            // Return the workspace
            return workspace;
        },
        changeLanguage(locale, reloadWorkspace = true){
            switch (locale) {
                case "en":
                    Blockly.setLocale(en);
                    this.$root.$i18n.locale = "en";
                    enLocale.applyBlocklyLocale();
                    break;
                case "fr":
                    Blockly.setLocale(fr);
                    this.$root.$i18n.locale = "fr";
                    frLocale.applyBlocklyLocale();
                    break;
                default:
                    break;
            }
            if(reloadWorkspace) this.reloadWorkspace();
        }
    },
    data() {
        return {
            options: {
                renderer: "zelos",
                grid: {
                    spacing: 25,
                    length: 3,
                    colour: "#ccc",
                    snap: true
                },
                zoom: {
                    controls: true,
                    startScale: 0.9,
                    maxScale: 3,
                    minScale: 0.3,
                    scaleSpeed: 1.2
                },
                toolbox
            }
        }
    }
}

</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

#blocklySpace {
    position: absolute;
    width: 100%;
    height: 100%;
}

.boldtext {
    font-weight: bolder;
}

.testopa {
    opacity: 0.1;
}
</style>
