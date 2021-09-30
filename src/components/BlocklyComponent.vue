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
import { disableUnapplicable } from "../restrictions";
import toolbox from "../toolbox";
import {Backpack} from '@blockly/workspace-backpack';
import Theme from '@blockly/theme-dark';
import Load from '../backpack-save-load.js';
export default {
    name: "BlocklyComponent",
    props: ["options"],
    data() {
        return {
            toastLogin: false,
            workspace: this.$store.state.workspace
        }
    },
    mounted() {
        this.setLanguage(this.$store.state.blocklyLocale);
        const options = this.$props.options || {};
        options.toolbox = this.$refs["blocklyToolbox"];
        const workspace = Blockly.inject(this.$refs["blocklyDiv"], {
            ...options,
            ...{
                                renderer: "zelos",
                                                grid: {
                    spacing: 25,
                    length: 3,
                    colour: "#ccc",
                },
                theme: Theme,
                zoom: {
                    controls: true,
                    startScale: 0.9,
                    maxScale: 3,
                    minScale: 0.3,
                    scaleSpeed: 1.2
                },
            move:{
        scrollbars: {
          horizontal: true,
          vertical: true
        },
        drag: true,
        wheel: true},
                toolbox: toolbox(Blockly)
            }
        });

				const defaultOptions = {
					contextMenu: {
						emptyBackpack: true,
						removeFromBackpack: true,
						copyToBackpack: true,
						copyAllToBackpack: true,
						pasteAllToBackpack: true,
						disablePreconditionChecks: true,
					},
				};
				const backpack = new Backpack(workspace,defaultOptions);
				backpack.init();
                Load(backpack)
        this.$store.commit("setWorkspace", {
            workspace
        });
        workspace.addChangeListener(Blockly.Events.disableOrphans);
        this.$nextTick(() => {
            window.setInterval(() => {
                disableUnapplicable(this.$store.state.workspace);
                const loginBlock = this.$store.state.workspace.getAllBlocks().some((block) => block.type === "s4d_login");
                if(!loginBlock){
                    if(!this.toastLogin){
                        this.toastLogin = true;
                        this.$toast.open({
                            message: this.$t('warnings.login_block'),
                            type: "warning",
                            dismissible: false,
                            duration: 1000000000
                        });
                    }
                } else if(this.toastLogin){
                    this.toastLogin = false;
                    this.$toast.clear();
                }
            }, 100);
        });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.blocklyDiv {
    height: 100%;
    width: 100%;
    text-align: left;
}
.blocklyToolboxCategory{
	color: rgb(204, 204, 204)
}
</style>
