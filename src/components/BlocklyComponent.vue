<template>
    <div>
        <div class="blocklyDiv" ref="blocklyDiv"></div>
        <xml ref="blocklyToolbox" style="display:none">
            <slot></slot>
        </xml>
    </div>
</template>

<script>

import Blockly from 'blockly';

export default {
    name: "BlocklyComponent",
    props: ["options"],
    data() {
        return {
            workspace: this.$store.workspace
        }
  },
  mounted() {
    const options = this.$props.options || {};
    if (!options.toolbox) {
        options.toolbox = this.$refs["blocklyToolbox"];
    }
    this.$store.commit("setWorkspace", {
        workspace: Blockly.inject(this.$refs["blocklyDiv"], options)
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
