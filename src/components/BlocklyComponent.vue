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
            ...{                renderer: "zelos",
                theme: Theme,
                grid: {
                    spacing: 25,
                    length: 3,
                    colour: "#ccc",
                },
								zoom: {
                    controls: true,
                    startScale: 0.9,
                    maxScale: 3,
                    minScale: 0.3,
                    scaleSpeed: 1.2
                     },
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
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #000;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
}
.dropdown-item {
    display: block;
    width: 100%;
    padding: 0.25rem 1.5rem;
    clear: both;
    font-weight: 400;
    color: #ffffff;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
}
</style>
