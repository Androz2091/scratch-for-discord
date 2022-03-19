<template>
    <div>
        <div class="blocklyDiv" ref="blocklyDiv" id="blocklyDiv"></div>
        <xml ref="blocklyToolbox" style=" font-family: sans-serif;">
            <slot></slot>
        </xml>
    </div>
</template>

<script>
import Blockly from "blockly";

import { disableUnapplicable } from "../restrictions";
import toolbox from "../toolbox";
//import toolbox from "../easter-toolbox"
import {Backpack} from '@blockly/workspace-backpack';
import {WorkspaceSearch} from '@blockly/plugin-workspace-search';
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

function svgToPng_(data, width, height, callback) {
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    var img = new Image();
  
    var pixelDensity = 10;
    canvas.width = width * pixelDensity;
    canvas.height = height * pixelDensity;
    img.onload = function() {
      context.drawImage(
          img, 0, 0, width, height, 0, 0, canvas.width, canvas.height);
      try {
        var dataUri = canvas.toDataURL('image/png');
        callback(dataUri);
      } catch (err) {
        console.warn('Error converting the workspace svg to a png');
        callback('');
      }
    };
    img.src = data;
  }
  
  function workspaceToSvg_(workspace, callback, customCss) {
  
    // Go through all text areas and set their value.
    var textAreas = document.getElementsByTagName("textarea");
    for (var i = 0; i < textAreas.length; i++) {
      textAreas[i].innerHTML = textAreas[i].value;
    }
  
    var bBox = workspace.getBlocksBoundingBox();
    var x = bBox.x || bBox.left;
    var y = bBox.y || bBox.top;
    var width = bBox.width || bBox.right - x;
    var height = bBox.height || bBox.bottom - y;
  
    var blockCanvas = workspace.getCanvas();
    var clone = blockCanvas.cloneNode(true);
    clone.removeAttribute('transform');
  
    var svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.appendChild(clone);
    svg.setAttribute('viewBox',
        x + ' ' + y + ' ' + width + ' ' + height);
  
    svg.setAttribute('class', 'blocklySvg ' +
      (workspace.options.renderer || 'geras') + '-renderer ' +
      (workspace.getTheme ? workspace.getTheme().name + '-theme' : ''));
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);
    svg.setAttribute("style", 'background-color: transparent');
  
    var css = [].slice.call(document.head.querySelectorAll('style'))
        .filter(function(el) { return /\.blocklySvg/.test(el.innerText) ||
          (el.id.indexOf('blockly-') === 0); }).map(function(el) {
          return el.innerText; }).join('\n');
    var style = document.createElement('style');
    style.innerHTML = css + '\n' + customCss;
    svg.insertBefore(style, svg.firstChild);
  
    var svgAsXML = (new XMLSerializer).serializeToString(svg);
    svgAsXML = svgAsXML.replace(/&nbsp/g, '&#160');
    var data = 'data:image/svg+xml,' + encodeURIComponent(svgAsXML);
  
    svgToPng_(data, width, height, callback);
  }

  Blockly.downloadScreenshot = function(workspace) {
    workspaceToSvg_(workspace, function(datauri) {
      var a = document.createElement('a');
      a.download = 'screenshot.png';
      a.target = '_self';
      a.href = datauri;
      document.body.appendChild(a);
      a.click();
      a.parentNode.removeChild(a);
    });
  };
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
      displayText: 'Download Workspace Image',
      preconditionFn: function() {
         return "enabled"
      },
      callback: function() {
           Blockly.downloadScreenshot(workspace);
      },
      scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
      id: 'image',
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
        const workspaceSearch = new WorkspaceSearch(workspace);
        workspaceSearch.init();
        workspaceSearch.close();

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
  font-family: sans-serif !important;
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
    font-family: sans-serif;
}
.blocklyDiv {
    font-family: sans-serif;
    height: 100%;
    width: 100%;
    text-align: left;
}
.blocklyToolboxCategory{
    font-family: sans-serif;
	color: rgb(204, 204, 204)
}
</style>
