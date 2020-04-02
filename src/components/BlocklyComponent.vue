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

export default {
    name: "BlocklyComponent",
    props: ["options"],
    data() {
        return {
            workspace: this.$store.state.workspace
        }
    },
    mounted() {
        this.$parent.changeLanguage(this.$store.state.blocklyLocale, false);
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
