<template>
    <div>
        <div class="blocklyDiv" ref="blocklyDiv" id="blocklyDiv"></div>
        <xml ref="blocklyToolbox" style=" font-family: 'Roboto Slab', serif;">
            <slot></slot>
        </xml>
    </div>
</template>

<script>
import Blockly from "blockly";

import { disableUnapplicable } from "../restrictions";
import toolbox from "../toolbox";
import {Backpack} from '@blockly/workspace-backpack';
import theme from '@blockly/theme-dark';
import Load from '../backpack-save-load.js';
import localforage from "localforage";
export default {
    name: "BlocklyComponent",
    props: ["options"],
    data() {
        return {
            toastLogin: false,
            workspace: this.$store.state.workspace
        }
    },
    async mounted() {
                async function reloadWorkspace2(workspace){
                                Blockly.ContextMenuRegistry.registry.unregister("fav")
            Blockly.ContextMenuRegistry.registry.unregister("refav")
            let val = await localforage.getItem("fav") === null ? null : await localforage.getItem("fav")
                        
            // Convert it to a dom string
            const dom = Blockly.Xml.workspaceToDom(workspace);
            // Delete the current workspace
            workspace.dispose();
            // Create a new workspace (with the good language)
            const newWorkspace = Blockly.inject(document.getElementById("blocklyDiv"), {
                grid: {
                    spacing: 25,
                    length: 3,
                    colour: "#ccc",
                },
                renderer: "zelos",
                theme: theme,
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
                toolbox: toolbox(Blockly,val)
            });
                           Blockly.ContextMenuRegistry.registry.register({
      displayText: 'Add to favorite',
      preconditionFn: function(scope) {
                  let type = scope.block.type
          if(val === null){
              return 'enabled'
          }
          if(val.includes(type)){
              return 'disabled'
          }else{
            return 'enabled'
          }
      },
      callback: async function(scope) {
          let type = scope.block.type

                              if(val === null){
                         await localforage.setItem("fav",[type])
                         val = await localforage.getItem("fav") === null ? null : await localforage.getItem("fav")

        reloadWorkspace(newWorkspace)
                    }else{
                        val.push(type)
                        await localforage.setItem("fav",val)
                        val = await localforage.getItem("fav") === null ? null : await localforage.getItem("fav")

        reloadWorkspace(newWorkspace)
                    }
      },
      scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
      id: 'fav',
      weight: 100,
    });
        Blockly.ContextMenuRegistry.registry.register({
      displayText: 'Remove from favorite',
      preconditionFn: function(scope) {
          let type = scope.block.type
          if(val === null){
              return 'disabled'
          }
          if(val.includes(type)){
              return 'enabled'
          }else{
            return 'disabled'
          }
      },
      callback: async function(scope) {
        let type = scope.block.type
                 function arrayRemove(arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }
    if(arrayRemove(await localforage.getItem("fav"),type).length === 0){
        await localforage.setItem("fav",null)
        val = await localforage.getItem("fav") === null ? null : await localforage.getItem("fav")
        reloadWorkspace(newWorkspace)
    }else{
        await localforage.setItem("fav",arrayRemove(await localforage.getItem("fav"),type))
        val = await localforage.getItem("fav") === null ? null : await localforage.getItem("fav")
        reloadWorkspace(newWorkspace)
    }
      },
      scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
      id: 'refav',
      weight: 100,
    });
   
            Blockly.Xml.domToWorkspace(dom, newWorkspace)
            // Update the workspace in the vuex store
            
;				
        }
        async function reloadWorkspace(workspace){
            Blockly.ContextMenuRegistry.registry.unregister("fav")
            Blockly.ContextMenuRegistry.registry.unregister("refav")
            let val = await localforage.getItem("fav") === null ? null : await localforage.getItem("fav")
                        
            // Convert it to a dom string
            const dom = Blockly.Xml.workspaceToDom(workspace);
            // Delete the current workspace
            workspace.dispose();
            // Create a new workspace (with the good language)
            const newWorkspace = Blockly.inject(document.getElementById("blocklyDiv"), {
                grid: {
                    spacing: 25,
                    length: 3,
                    colour: "#ccc",
                },
                renderer: "zelos",
                theme: theme,
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
                toolbox: toolbox(Blockly,val)
            });
               Blockly.ContextMenuRegistry.registry.register({
      displayText: 'Add to favorite',
      preconditionFn: function(scope) {
                  let type = scope.block.type
          if(val === null){
              return 'enabled'
          }
          if(val.includes(type)){
              return 'disabled'
          }else{
            return 'enabled'
          }
      },
      callback: async function(scope) {
          let type = scope.block.type

                              if(val === null){
                         await localforage.setItem("fav",[type])
                         val = await localforage.getItem("fav") === null ? null : await localforage.getItem("fav")

        reloadWorkspace2(newWorkspace)
                    }else{
                        val.push(type)
                        await localforage.setItem("fav",val)
                        val = await localforage.getItem("fav") === null ? null : await localforage.getItem("fav")

        reloadWorkspace2(newWorkspace)
                    }
      },
      scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
      id: 'fav',
      weight: 100,
    });
        Blockly.ContextMenuRegistry.registry.register({
      displayText: 'Remove from favorite',
      preconditionFn: function(scope) {
          let type = scope.block.type
          if(val === null){
              return 'disabled'
          }
          if(val.includes(type)){
              return 'enabled'
          }else{
            return 'disabled'
          }
      },
      callback: async function(scope) {
        let type = scope.block.type
                 function arrayRemove(arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }
    if(arrayRemove(await localforage.getItem("fav"),type).length === 0){
        await localforage.setItem("fav",null)
        val = await localforage.getItem("fav") === null ? null : await localforage.getItem("fav")
        reloadWorkspace2(newWorkspace)
    }else{
        await localforage.setItem("fav",arrayRemove(await localforage.getItem("fav"),type))
        val = await localforage.getItem("fav") === null ? null : await localforage.getItem("fav")
        reloadWorkspace2(newWorkspace)
    }
      },
      scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
      id: 'refav',
      weight: 100,
    });
            Blockly.Xml.domToWorkspace(dom, newWorkspace)
            // Update the workspace in the vuex store
            
;				
        }
        let val = await localforage.getItem("fav") === null ? null : await localforage.getItem("fav")
        setInterval(async()=>{
            val = await localforage.getItem("fav") === null ? null : await localforage.getItem("fav")
        },1000)


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
                theme: theme,
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
                toolbox: toolbox(Blockly,val),
            }
        });
            Blockly.ContextMenuRegistry.registry.register({
      displayText: 'Add to favorite',
      preconditionFn: function(scope) {
                  let type = scope.block.type
          if(val === null){
              return 'enabled'
          }
          if(val.includes(type)){
              return 'disabled'
          }else{
            return 'enabled'
          }
      },
      callback: async function(scope) {
          let type = scope.block.type

                              if(val === null){
                         await localforage.setItem("fav",[type])
                         val = await localforage.getItem("fav") === null ? null : await localforage.getItem("fav")

        reloadWorkspace(workspace)
                    }else{
                        val.push(type)
                        await localforage.setItem("fav",val)
                        val = await localforage.getItem("fav") === null ? null : await localforage.getItem("fav")

        reloadWorkspace(workspace)
                    }
      },
      scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
      id: 'fav',
      weight: 100,
    });
        Blockly.ContextMenuRegistry.registry.register({
      displayText: 'Remove from favorite',
      preconditionFn: function(scope) {
          let type = scope.block.type
          if(val === null){
              return 'disabled'
          }
          if(val.includes(type)){
              return 'enabled'
          }else{
            return 'disabled'
          }
      },
      callback: async function(scope) {
        let type = scope.block.type
                 function arrayRemove(arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }
    if(arrayRemove(await localforage.getItem("fav"),type).length === 0){
        await localforage.setItem("fav",null)
        val = await localforage.getItem("fav") === null ? null : await localforage.getItem("fav")
        reloadWorkspace(workspace)
    }else{
        await localforage.setItem("fav",arrayRemove(await localforage.getItem("fav"),type))
        val = await localforage.getItem("fav") === null ? null : await localforage.getItem("fav")
        reloadWorkspace(workspace)
    }
      },
      scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
      id: 'refav',
      weight: 100,
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
.saturate { filter: saturate(3); }
.grayscale { filter: grayscale(100%); }
.contrast { filter: contrast(160%); }
.brightness { filter: brightness(0.25); }
.blur { filter: blur(3px); }
.invert { filter: invert(100%); }
.sepia { filter: sepia(100%); }
.huerotate { filter: hue-rotate(180deg); }
.rss.opacity { filter: opacity(50%); }
.blocklyText, .blocklyHtmlInput, .blocklyTreeLabel {
  font-family: "lato", sans-serif !important;
}

                        .blocklyTreeIcon {
filter: invert(100%) sepia(0%) saturate(2950%) hue-rotate(348deg) brightness(118%) contrast(96%) !important;
}
#blocklyTreeIcon {
filter: invert(100%) sepia(0%) saturate(2950%) hue-rotate(348deg) brightness(118%) contrast(96%) !important;
}
.blocklyTreeIconClosed {
filter: invert(100%) sepia(0%) saturate(2950%) hue-rotate(348deg) brightness(118%) contrast(96%)!important;
}
#blocklyTreeIconClosed {
filter: invert(100%) sepia(0%) saturate(2950%) hue-rotate(348deg) brightness(118%) contrast(96%) !important;
}
body{
    font-family: "lato", sans-serif;
}
.blocklyDiv {
    font-family: 'lato', serif;
    height: 100%;
    width: 100%;
    text-align: left;
}
.blocklyToolboxCategory{
    font-family: 'lato', serif;
	color: rgb(204, 204, 204)
}
</style>
