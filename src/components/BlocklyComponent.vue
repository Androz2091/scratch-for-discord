<template>
    <div>
        <div class="blocklyDiv" ref="blocklyDiv" id="blocklyDiv"></div>
        <xml ref="blocklyToolbox" style="display:none">
            <slot></slot>
        </xml>
    </div>
</template>

<script>
import Blockly from "blockly";
import * as enCustom from "../locales/en";
import * as esCustom from "../locales/es";
import * as ruCustom from "../locales/ru";
import * as frCustom from "../locales/fr";

export default {
    name: "BlocklyComponent",
    props: ["options"],
    data() {
        return {
            workspace: this.$store.workspace
        }
    },
    mounted() {
        switch (this.$store.state.locale) {
            case "en":
                enCustom(Blockly);
                break;
            case "es":
                esCustom(Blockly);
                break;
            case "ru":
                ruCustom(Blockly);
                break;
            case "fr":
                frCustom(Blockly);
                break;
            default:
                enCustom(Blockly);
                break;
        }
        const options = this.$props.options || {};
        if (!options.toolbox) {
            options.toolbox = this.$refs["blocklyToolbox"];
        }
        const workspace = Blockly.inject(this.$refs["blocklyDiv"], options);
        this.$store.commit("setWorkspace", {
            workspace
        });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blocklyDiv {
  height: 100%;
  width: 100%;
  text-align: left;
}
</style>
