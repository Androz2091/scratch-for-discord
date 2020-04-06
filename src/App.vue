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

import * as en from "blockly/msg/en";
import * as es from "blockly/msg/es";
import * as ru from "blockly/msg/ru";
import * as fr from "blockly/msg/fr";
import enCustom from "./locales/en";
//import * as esCustom from "./locales/es";
//import * as ruCustom from "./locales/ru";
import frCustom from "./locales/fr";

export default {
    name: "app",
    components: {
        BlocklyComponent,
        NavBarComponent
    },
    methods: {
        reloadWorkspace(){
            const workspace = this.$store.state.workspace;
            const dom = Blockly.Xml.workspaceToDom(workspace);
            workspace.dispose();
            const newWorkspace = Blockly.inject(document.getElementById("blocklyDiv"), this.options);
            Blockly.Xml.domToWorkspace(dom, newWorkspace);
            this.$store.commit("setWorkspace", {
                workspace: newWorkspace
            });
            return workspace;
        },
        changeLanguage(locale, reloadWorkspace = true){
            switch (locale) {
                case "en":
                    Blockly.setLocale(en);
                    this.$root.$i18n.locale = "en";
                    enCustom(Blockly);
                    break;
                case "es":
                    Blockly.setLocale(es);
                    //esCustom(Blockly);
                    break;
                case "ru":
                    Blockly.setLocale(ru);
                    //ruCustom(Blockly);
                    break;
                case "fr":
                    Blockly.setLocale(fr);
                    this.$root.$i18n.locale = "fr";
                    frCustom(Blockly);
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
