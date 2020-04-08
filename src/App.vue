<template>
    <div id="app">
        <NavBarComponent></NavBarComponent>
        <BlocklyComponent id="blocklySpace" :options="options"></BlocklyComponent>
    </div>
</template>

<script>

import Blockly from "blockly";
import NavBarComponent from "./components/NavigationBar/NavigationBar.vue";
import BlocklyComponent from "./components/BlocklyComponent.vue";

import toolbox from "./toolbox";

Blockly.Tooltip.HOVER_MS = 100;

// Load blocks
import "./blocks/discord/actions/";
import "./blocks/discord/base/";
import "./blocks/discord/joins";
import "./blocks/discord/message/";
import "./prompt";

export default {
    name: "app",
    components: {
        BlocklyComponent,
        NavBarComponent
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
