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
/* eslint-disable */
import { disableUnapplicable } from "../restrictions";
import toolbox from "../toolbox";
var renderer = "zelos"
if (window.location.pathname == "/r/ge") {
    renderer = "geras"
}
//import toolbox from "../easter-toolbox";
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
        const allow_toolbox_search = true
        function prepToolbox(toolbox_content, searching, favorites) {
            // console.log(toolbox_content)

                // preparing variables for searching

    const default_max_length = 250
    var CATEGORYCONTENT;

// set default blocks from BlocklyComponent function code

const toolboxArray = toolbox_content.split('\n');
            var blocks = []
            var pushed
            var repeat_end = toolboxArray.length;
            for (var count = 0; count < repeat_end; count++) {
                if ((toolboxArray[count].includes('<block type="')) && !(toolboxArray[count].includes('LINE HIDDEN FROM SEARCH'))) {
                    pushed = (((toolboxArray[count].replaceAll(" ", "")).replaceAll('blocktype="', "")).replaceAll("/", "").replaceAll("<", "").replaceAll('"', "")).replaceAll("'", "").replaceAll("\t", "")
                    pushed = pushed.slice(0, pushed.indexOf('>'));
                    if (!(blocks.includes(pushed))) {
                        blocks.push(pushed)
                    }
                }
            }

// set the default blocks and run the searching code

const defaultblocks = blocks

    if (searching) {
        var newblocks = []
        var check;
        var searchparam = prompt("Search for a block with:")
        if (!(searchparam)) {
            searchparam = "null"
        }
        var searchparamFiltered = ((searchparam.replaceAll("<", "_")).replaceAll(">", "_")).replaceAll("\\", "_")
        searchparam = searchparam.replaceAll(" ", "_").toLowerCase()
        var repeat_end = defaultblocks.length;
        for (var count = 0; count < repeat_end; count++) {
            check = defaultblocks[count];
            if (String(check).includes(String(searchparam)) && !(String(check).includes("LINE HIDDEN FROM SEARCH"))) {
                newblocks.push(check);
            }
        }
        if (newblocks.length > 1) {
            var s = "s"
        } else {
            var s = ""
        }
        if (newblocks.length > 0) {
            var CATEGORYCONTENT = `<label text="ㅤ" web-class="boldtext"></label><label text="You searched for: ${searchparamFiltered}, found ${newblocks.length} block${s} that matched" web-class="boldtext"></label><block type="${newblocks.join("\"/>\n<block type=\"")}"/>`
        } else {
            var CATEGORYCONTENT = `<label text="ㅤ" web-class="boldtext"></label><label text="You searched for: ${searchparamFiltered}" web-class="boldtext"></label><label text="ㅤ" web-class="boldtext"></label><label text="ㅤ" web-class="boldtext"></label><label text="Hmm, nothing was found..." web-class="boldtext"></label>`
        }
    } else {
        var length_lessthan_350 = true
        if (defaultblocks.length < default_max_length) {
            var newblocks = defaultblocks
        } else {
            length_lessthan_350 = false
            var newblocks = defaultblocks.slice(0, default_max_length)
        }
        if (newblocks.length > 0) {
            var CATEGORYCONTENT = "<block type=\"" + newblocks.join("\"/>\n<block type=\"") + "\"/>"
            if (length_lessthan_350 == false) {
                CATEGORYCONTENT = CATEGORYCONTENT + `<label text="${defaultblocks.length - default_max_length} blocks left..." web-class="boldtext"></label>`
            }
        } else {
            var CATEGORYCONTENT = `<label text="ㅤ" web-class="boldtext"></label><label text="ㅤ" web-class="boldtext"></label><label text="Hmm, nothing was found..." web-class="boldtext"></label>`
        }
    }



    var returned_stuff = toolbox_content.replace("<!-- CATEGORY_CONTENT_VARIABLE_GOES_HERE_897489712470376894703168263487623 -->", CATEGORYCONTENT)

    // for custom categories
let urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('customXML')) {
    var custom_xml = urlParams.get("customXML")
    let temp1 = String(custom_xml).replaceAll("□", "\n")
    let temp2 = String(temp1).replaceAll("▣", "#")
    custom_xml = temp2
    if (urlParams.has('no-base-category') && (urlParams.get("no-base-category") == "true")) {
        returned_stuff = (`<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">` + custom_xml + `</xml>`).replace("<!-- CATEGORY_CONTENT_VARIABLE_GOES_HERE_897489712470376894703168263487623 -->", CATEGORYCONTENT)
    } else {
        returned_stuff = ((returned_stuff.replace("</xml>", "") + custom_xml) + "</xml>").replace("<!-- CATEGORY_CONTENT_VARIABLE_GOES_HERE_897489712470376894703168263487623 -->", CATEGORYCONTENT)
    }
}
    // .replace(/{{\s([A-z]{3,})\s}}/g, (x) => {
    //   return Blockly.Msg[x.replace("{{ ", "").replace(" }}", "")];
    // })
    // console.log(returned_stuff)
            
// favorites category gets filled in using the value stored in the 3rd input

returned_stuff = returned_stuff.replace("<!-- FAVORITES_CATEGORY_CONTENT_GOES_HERE_89476138947230470923750327973490 -->", (favorites === null ? "" : favorites.map(c => `<block type="${c}"/>`)))



    return String(returned_stuff)
            
        }
                async function reloadWorkspace2(workspace, abc){
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
                renderer: renderer,
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
                toolbox: prepToolbox(toolbox(Blockly,val,false), false, val)
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

        var new_toolbox_xml = prepToolbox(toolbox(Blockly,val,false), false, val)
        workspace.updateToolbox(new_toolbox_xml)
                    }else{
                        val.push(type)
                        await localforage.setItem("fav",val)
                        val = await localforage.getItem("fav") === null ? null : await localforage.getItem("fav")

        var new_toolbox_xml = prepToolbox(toolbox(Blockly,val,false), false, val)
        workspace.updateToolbox(new_toolbox_xml)
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
        var new_toolbox_xml = prepToolbox(toolbox(Blockly,val,false), false, val)
        workspace.updateToolbox(new_toolbox_xml)
    }else{
        await localforage.setItem("fav",arrayRemove(await localforage.getItem("fav"),type))
        val = await localforage.getItem("fav") === null ? null : await localforage.getItem("fav")
        var new_toolbox_xml = prepToolbox(toolbox(Blockly,val,false), false, val)
        workspace.updateToolbox(new_toolbox_xml)
    }
      },
      scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
      id: 'refav',
      weight: 100,
    });
   
            Blockly.Xml.domToWorkspace(dom, newWorkspace)
            // Update the workspace in the vuex store
            
;				
if (allow_toolbox_search) {
try{

Blockly.ContextMenuRegistry.registry.register({
      displayText: 'Search for block',
      preconditionFn: function() {
         return "enabled"
      },
      callback: function() {
        //    reloadWorkspace2(newWorkspace, true)
        var new_toolbox_xml = prepToolbox(toolbox(Blockly,val,false), true, val)
        workspace.updateToolbox(new_toolbox_xml)
      },
      scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
      id: 'searchblock',
      weight: 99,
    });
}catch{}
}
        }
        async function logtoolblocks(remove_underscore) {
            const toolxml = toolbox(Blockly,null,false)
            const toolboxArray = toolxml.split('\n');
            var blocks = []
            var loop = 0
            var pushed
            var repeat_end = toolboxArray.length;
            for (var count = 0; count < repeat_end; count++) {
                if (toolboxArray[loop].includes('<block type="')) {
                    pushed = (((toolboxArray[loop].replaceAll(" ", "")).replaceAll('blocktype="', "")).replaceAll("/", "").replaceAll("<", "").replaceAll('"', "")).replaceAll("'", "").replaceAll("\t", "")
                    pushed = pushed.slice(0, pushed.indexOf('>'));
                    if (remove_underscore) {
                        pushed = pushed.replaceAll("_", " ")
                    }
                    blocks.push(pushed)
                }
                loop++
            }
            console.log(blocks)
        }
        async function reloadWorkspace(workspace, abc){
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
                renderer: renderer,
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
                toolbox: prepToolbox(toolbox(Blockly,val,false), false, val)
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

        var new_toolbox_xml = prepToolbox(toolbox(Blockly,val,false), false, val)
        workspace.updateToolbox(new_toolbox_xml)
                    }else{
                        val.push(type)
                        await localforage.setItem("fav",val)
                        val = await localforage.getItem("fav") === null ? null : await localforage.getItem("fav")

        var new_toolbox_xml = prepToolbox(toolbox(Blockly,val,false), false, val)
        workspace.updateToolbox(new_toolbox_xml)
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
        var new_toolbox_xml = prepToolbox(toolbox(Blockly,val,false), false, val)
        workspace.updateToolbox(new_toolbox_xml)
    }else{
        await localforage.setItem("fav",arrayRemove(await localforage.getItem("fav"),type))
        val = await localforage.getItem("fav") === null ? null : await localforage.getItem("fav")
        var new_toolbox_xml = prepToolbox(toolbox(Blockly,val,false), false, val)
        workspace.updateToolbox(new_toolbox_xml)
    }
      },
      scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
      id: 'refav',
      weight: 100,
    });
            Blockly.Xml.domToWorkspace(dom, newWorkspace)
            // Update the workspace in the vuex store
            
;				
if (allow_toolbox_search) {
try{
Blockly.ContextMenuRegistry.registry.register({
      displayText: 'Search for block',
      preconditionFn: function() {
         return "enabled"
      },
      callback: function() {
        //    reloadWorkspace2(newWorkspace, true)
        var new_toolbox_xml = prepToolbox(toolbox(Blockly,val,false), true, val)
        workspace.updateToolbox(new_toolbox_xml)
      },
      scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
      id: 'searchblock',
      weight: 99,
    });

}catch{}
}
        }



if (allow_toolbox_search) {
Blockly.ContextMenuRegistry.registry.register({
      displayText: 'Search for block',
      preconditionFn: function() {
         return "enabled"
      },
      callback: function() {
        //    reloadWorkspace(workspace, true)
        var new_toolbox_xml = prepToolbox(toolbox(Blockly,val,false), true, val)
        workspace.updateToolbox(new_toolbox_xml)
      },
      scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
      id: 'searchblock',
      weight: 99,
    });
}

/*
Blockly.WorkspaceSvg.prototype.onMouseDown_ = function(e) {
  var point = Blockly.mouseToSvg(e, this.getParentSvg(),  this.getInverseScreenCTM());
  var rel = this.getOriginOffsetInPixels();
  this.mouseX = (point.x - rel.x) / this.scale;
  this.mouseY = (point.y - rel.y) / this.scale;
}
*/

window.addEventListener('keydown', (e) => {
    if ((e.altKey)) {
        console.log(e.key)
        if (
            (e.key == "t") ||
            (e.key == "n") ||
            (e.key == "m") ||
            (e.key == "c") ||
            (e.key == "e") ||
            (e.key == "a") ||
            (e.key == "w") ||
            (e.key == "b") ||
            (e.key == "i")
        ) {
            if (e.key == "t") {
                var blockToPlace = "text"
            } else if (e.key == "n") {
                var blockToPlace = "math_number"
            } else if (e.key == "m") {
                var blockToPlace = "s4d_message_content"
            } else if (e.key == "c") {
                var blockToPlace = "colour_picker"
            } else if (e.key == "e") {
                var blockToPlace = "frost_other_err"
            } else if (e.key == "a") {
                var blockToPlace = "s4d_message_author"
            } else if (e.key == "w") {
                var blockToPlace = "s4d_on_message"
            } else if (e.key == "b") {
                var blockToPlace = "logic_boolean"
            } else if (e.key == "i") {
                var blockToPlace = "controls_if"
            }
            
            let workspace_xml = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(workspace))
            let xml_blocks = workspace_xml.split('\n');
            var xpos = []
            var ypos = []
            for (var count = 0; count < xml_blocks.length; count++) {
                var current = xml_blocks[count]
                if ((current.includes('<block type="')) && (current.includes('x="')) && (current.includes('y="'))) {
                    xpos.push(current.substring(current.indexOf('x="') + 3, current.indexOf(' y="') - 1))
                    ypos.push(current.substring(current.indexOf('y="') + 3, current.indexOf('">')))
                }
            }
            if (xpos && ypos) {
                var dx = xpos.slice(-1)[0]
                var dy = ypos.slice(-1)[0]
            } else {
                var dx = 0
                var dy = 0
            }
            if (Blockly.selected) {
                let selected = Blockly.selected.toCopyData()
                var dx = selected.xml.attributes.getNamedItem("x").value
                var dy = selected.xml.attributes.getNamedItem("y").value
            }
            let xml = Blockly.Xml.textToDom(`<block type="${blockToPlace}"></block>`);
            let block = Blockly.Xml.domToBlock(xml, workspace)
            if (Number(dx) && Number(dy)) {
                block.moveBy(Number(dx), Number(dy))
            }
        } else if (e.key == "Enter") {
            if (Blockly.selected) {
                let xml = Blockly.Xml.blockToDom(Blockly.selected)
                let block = Blockly.Xml.domToBlock(xml, workspace)
                let selected = Blockly.selected.toCopyData()
                let dx = selected.xml.attributes.getNamedItem("x").value
                let dy = selected.xml.attributes.getNamedItem("y").value
                block.moveBy(Number(dx) + 5, Number(dy) + 5)
                
            }
        }
    }
});

if (window.location.pathname == "/debug") {
Blockly.ContextMenuRegistry.registry.register({
      displayText: 'Spawn block via Internal name',
      preconditionFn: function() {
         return "enabled"
      },
      callback: function() {
        let input = prompt("Block Internal Name")
        if (!input) {
            return
        }
        let xml = Blockly.Xml.textToDom('<xml><block type="' + input + '"></block></xml>');
        try {
            Blockly.Xml.appendDomToWorkspace(xml, workspace)
        } catch {
            console.log("could not spawn block!")
            alert(`Block ${String(input)} does not exist or was not defined`)
        }
      },
      scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
      id: 'spawnblock',
      weight: 500,
    });
}

if (window.location.href.includes("deploy-preview-469--scratch-for-discord.netlify.app")) {
Blockly.ContextMenuRegistry.registry.register({
      displayText: 'Go to Vercel',
      preconditionFn: function() {
         return "enabled"
      },
      callback: function() {
        window.location.href = "https://scratch-for-discord-469.vercel.app/"
      },
      scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
      id: 'vercel',
      weight: 0,
    });

Blockly.ContextMenuRegistry.registry.register({
      displayText: 'Go to Vercel',
      preconditionFn: function() {
         return "enabled"
      },
      callback: function() {
        window.location.href = "https://scratch-for-discord-469.vercel.app/"
      },
      scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
      id: 'vercel2',
      weight: 0,
    });

}

// Comment this context menu out later!
// 👍
// jk no!!
if (window.location.pathname == "/debug") {
    Blockly.ContextMenuRegistry.registry.register({
          displayText: 'Log all Toolbox blocks',
          preconditionFn: function() {
             return "enabled"
          },
          callback: function() {
               logtoolblocks(true)
          },
          scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
          id: 'logtoolblocks',
          weight: 500,
        });
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
                                renderer: renderer,
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
                toolbox: prepToolbox(toolbox(Blockly,val,false), false, val),
            }
        });
        try{Blockly.ContextMenuRegistry.registry.unregister("fav")}catch{}
                                
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

        var new_toolbox_xml = prepToolbox(toolbox(Blockly,val,false), false, val)
        workspace.updateToolbox(new_toolbox_xml)
                    }else{
                        val.push(type)
                        await localforage.setItem("fav",val)
                        val = await localforage.getItem("fav") === null ? null : await localforage.getItem("fav")

        var new_toolbox_xml = prepToolbox(toolbox(Blockly,val,false), false, val)
        workspace.updateToolbox(new_toolbox_xml)
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
    
    
        try{Blockly.ContextMenuRegistry.registry.unregister("refav")}catch{}
    
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
        var new_toolbox_xml = prepToolbox(toolbox(Blockly,val,false), false, val)
        workspace.updateToolbox(new_toolbox_xml)
    }else{
        await localforage.setItem("fav",arrayRemove(await localforage.getItem("fav"),type))
        val = await localforage.getItem("fav") === null ? null : await localforage.getItem("fav")
        var new_toolbox_xml = prepToolbox(toolbox(Blockly,val,false), false, val)
        workspace.updateToolbox(new_toolbox_xml)
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
