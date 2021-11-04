<template>
    <div>
        <div class="blocklyDiv" ref="blocklyDiv" id="blocklyDiv"></div>
        <xml ref="blocklyToolbox" style="display: none">
            <slot></slot>
        </xml>
    </div>
</template>

<script>
import Blockly from "blockly";
import { disableUnapplicable } from "../restrictions";
import toolbox, { getToolbox } from "../toolbox";
import loadBlock from "../loadBlock";

export default {
    name: "BlocklyComponent",
    props: ["options"],
    data() {
        return {
            toastLogin: false,
            workspace: this.$store.state.workspace
        };
    },
    async mounted() {
        this.setLanguage(this.$store.state.blocklyLocale);
        const options = this.$props.options || {};
        options.toolbox = this.$refs["blocklyToolbox"];
        // load extension
        const external = await (window.ScratchNative || window.parent?.ScratchNative)?.loadBlocklyExtensions(getToolbox());
        if (external) {
            loadBlock(external.blocks);
        }
        const workspace = Blockly.inject(this.$refs["blocklyDiv"], {
            ...options,
            ...{
                toolbox: toolbox(Blockly, external?.toolbox)
            }
        });
        this.$store.commit("setWorkspace", {
            workspace
        });
        workspace.addChangeListener(Blockly.Events.disableOrphans);
        this.$nextTick(() => {
            window.setInterval(() => {
                disableUnapplicable(this.$store.state.workspace);
                const loginBlock = this.$store.state.workspace.getAllBlocks().some((block) => block.type === "s4d_login");
                if (!loginBlock) {
                    if (!this.toastLogin) {
                        this.toastLogin = true;
                        this.$toast.open({
                            message: this.$t("warnings.login_block"),
                            type: "warning",
                            dismissible: false,
                            duration: 1000000000
                        });
                    }
                } else if (this.toastLogin) {
                    this.toastLogin = false;
                    this.$toast.clear();
                }
            }, 100);
        });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blocklyDiv {
    height: 100%;
    width: 100%;
    text-align: left;
}
</style>
