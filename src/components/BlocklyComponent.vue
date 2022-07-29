<template>
    <div>
        <div class="blocklyDiv" ref="blocklyDiv" id="blocklyDiv"></div>
        <xml ref="blocklyToolbox" style=" font-family: sans-serif;">
            <slot></slot>
        </xml>
    </div>
</template>
<!--<script src="./renderers/cwest.js"></script>-->

<script>
/* eslint-disable */
import Blockly from "blockly";
import swal from "sweetalert2";
import { disableUnapplicable } from "../restrictions";
import toolbox from "../toolbox";
var renderer = "zelos"
if (window.location.pathname == "/r/ge") {
    renderer = "geras"
}
else if (window.location.pathname == "/r/mi") {
    renderer = "minimalist"
}
else if (window.location.pathname == "/r/th") {
    renderer = "thrasos"
}/*
else if (window.location.pathname == "/r/cw") {
    renderer = "cwest"
}*/
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
        const allow_toolbox_search = false
        const isMobile = function () {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        }
        const validateForXML = function (text) {
            return String(text).replaceAll("&", "&amp;").replaceAll("\n", "&amp;#10;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
        }
        function prepToolbox(toolbox_content, searching, favorites, pooopewwweewwww, searchparameter) {
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
            if (searching == "baiuyfg8iu4ewf643o8ir") {
                let newblocks = []
                let check
                if (prompt("u sure bro? (ye/na)") != "ye") return
                for (let count = 0; count < defaultblocks.length; count++) {
                    check = defaultblocks[count]
                    if (!(String(check).includes("LINE HIDDEN FROM SEARCH"))) {
                        newblocks.push(check)
                    }
                }
                for (let i = 0; i < newblocks.length; i++) {
                    let xml = Blockly.Xml.textToDom(`<block type="${newblocks[i]}"/>`);
                    let block = Blockly.Xml.domToBlock(xml, pooopewwweewwww)
                    block.moveBy(Math.round(Math.random() * 5000), Math.round(Math.random() * 5000))
                }
                return
            }
            if (searching == "f9u42r8hg329rehsfhoiewgf37") {
                let newblocks = []
                let check
                if (prompt("u sure bro? (ye/na)") != "ye") return
                for (let count = 0; count < defaultblocks.length; count++) {
                    check = defaultblocks[count]
                    if (!(String(check).includes("LINE HIDDEN FROM SEARCH"))) {
                        newblocks.push(check)
                    }
                }
                for (let i = 0; i < newblocks.length; i++) {
                    let xml = Blockly.Xml.textToDom(`<xml><block type="${newblocks[i]}"/></xml>`);
                    Blockly.Xml.appendDomToWorkspace(xml, pooopewwweewwww)
                }
                return
            }
    if (searching) {
        var newblocks = []
        var check;
        // var searchparam = prompt("Search for a block with:")
        let searchparam = searchparameter
        if (!(searchparam)) {
            searchparam = ""
        }
        var searchparamFiltered = ((searchparam.replaceAll("<", "_")).replaceAll(">", "_")).replaceAll("\\", "_").replaceAll("\"", "_")
        if (searchparam == "") searchparamFiltered = "nothing (aka, no filter)"
        searchparam = searchparam.replaceAll(" ", "_").toLowerCase()
        let repeat_end = defaultblocks.length;
        for (let count = 0; count < repeat_end; count++) {
            check = defaultblocks[count];
            if (String(check).includes(String(searchparam)) && !(String(check).includes("LINE HIDDEN FROM SEARCH"))) {
                newblocks.push(check);
            }
        }
        // labels (bruhf mnvm :skull:)
        /*
        let labels = []
        let pushed
        for (let count = 0; count < toolboxArray.length; count++) {
            if (toolboxArray[count].includes('<searchcategory label="')) {
                pushed = `<label text="${toolboxArray[count].match(/(?<=")\S*(?=")/gmi)[0]}"></label>`
                labels.push(pushed)
            }
        }
        */
        // end of labels
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


            let count_of_blocks = defaultblocks.length
            var returned_stuff = toolbox_content.replace("<!-- CATEGORY_CONTENT_VARIABLE_GOES_HERE_897489712470376894703168263487623 -->", `<label text="There are currently ${String(count_of_blocks)} blocks in S4D." web-class="boldtext"></label>` + CATEGORYCONTENT)

    // for custom categories
let urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('customXML')) {
    var custom_xml = urlParams.get("customXML")
    let temp1 = String(custom_xml).replaceAll("□", "\n")
    let temp2 = String(temp1).replaceAll("▣", "#")
    let appearances = temp2.split("※360※").length
    for (let i = 0; i < appearances; i++) {
        temp2 = temp2.replace("※360※", String(Math.round(Math.random() * 360)))
    }
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
        localforage.getItem("utilitiesShortcuts").then(item => {
            if (item != false) {
window.addEventListener('keydown', (e) => {
    // console.log(e)
    // console.log(e.key)
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
            (e.key == "i") ||
            (e.key == "=") ||
            (e.key == "n") ||
            (e.key == "N") ||
            (e.key == "A")
        ) {
            if (e.key == "t") {
                var blockToPlace = "text"
            } else if (e.key == "m") {
                var blockToPlace = "s4d_message_content"
            } else if (e.key == "c") {
                var blockToPlace = "colour_picker"
            } else if (e.key == "e") {
                var blockToPlace = "frost_other_err"
            } else if ((e.key == "A") && (e.shiftKey)) {
                var blockToPlace = "logic_operation"
            } else if (e.key == "a") {
                var blockToPlace = "s4d_message_author"
            } else if (e.key == "w") {
                var blockToPlace = "s4d_on_message"
            } else if (e.key == "b") {
                var blockToPlace = "logic_boolean"
            } else if (e.key == "i") {
                var blockToPlace = "controls_if"
            } else if (e.key == "=") {
                var blockToPlace = "logic_compare"
            } else if ((e.key == "N") && (e.shiftKey)) {
                var blockToPlace = "logic_negate"
            } else if (e.key == "n") {
                var blockToPlace = "math_number"
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
                var dx = selected.saveInfo.x
                var dy = selected.saveInfo.y
            }
            let xml = Blockly.Xml.textToDom(`<block type="${blockToPlace}"></block>`);
            let block = Blockly.Xml.domToBlock(xml, workspace)
            if (Number(dx) && Number(dy)) {
                block.moveBy(Number(dx), Number(dy))
            }
        } else if (e.ctrlKey) {
            if (Blockly.selected) {
                let xml = Blockly.Xml.blockToDom(Blockly.selected)
                let block = Blockly.Xml.domToBlock(xml, workspace)
                let selected = Blockly.selected.toCopyData()
                let dx = selected.saveInfo.x
                let dy = selected.saveInfo.y
                block.moveBy(Number(dx) + 5, Number(dy) + 5)
                
            }
        }
    }
});
            }
        })

if (window.location.pathname == "/debug" && (!window.location.href.includes("scratch-for-discord-469.vercel.app") && !window.location.href.includes("deploy-preview-469--scratch-for-discord.netlify.app"))) {
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
    Blockly.ContextMenuRegistry.registry.register({
        displayText: 'Spawn all toolblocks',
        preconditionFn: function () {
            return "enabled"
        },
        callback: function () {
            prepToolbox(toolbox(Blockly, val, false), "baiuyfg8iu4ewf643o8ir", null, workspace)
        },
        scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
        id: 'spawnalltoolblocks',
        weight: 9990,
    });
    Blockly.ContextMenuRegistry.registry.register({
        displayText: 'Spawn all toolblocks (ordered)',
        preconditionFn: function () {
            return "enabled"
        },
        callback: function () {
            prepToolbox(toolbox(Blockly, val, false), "f9u42r8hg329rehsfhoiewgf37", null, workspace)
        },
        scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
        id: 'spawnalltoolblocks2',
        weight: 9995,
    });
    Blockly.ContextMenuRegistry.registry.register({
        displayText: 'Recolor all blocks',
        preconditionFn: function () {
            return "enabled"
        },
        callback: function () {
            let color = prompt("New color?")
            workspace.getAllBlocks().forEach((block) => {
                try {
                    if (color == "random") {
                        let array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
                        let random = "#"
                        for (let i = 0; i < 6; i++) {
                            random += array[Math.floor(Math.random() * 15)]
                        }
                        block.setColour(random)
                    } else block.setColour(color)
                } catch (err) {
                    console.warn(err)
                }
            })
        },
        scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
        id: 'recolorallblocks',
        weight: 10000,
    });
    Blockly.ContextMenuRegistry.registry.register({
        displayText: 'Log Workspace XML',
        preconditionFn: function () {
            return "enabled"
        },
        callback: function () {
            console.log(Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(workspace)))
        },
        scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
        id: 'logworkspacexml',
        weight: 10005,
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

function blockCounter() {
    const ALLBLOCKS = workspace.getAllBlocks()
    let counter = document.getElementById("block-counter")
    let blocks = String(ALLBLOCKS.length)
    var rgb = "182, 182, 182"
    var bold = ["",""]
    if (Number(blocks) >= 300) {
        rgb = "255, 125, 125"
        bold = ["<b>","</b>"]
    }
    if (Number(blocks) >= 750) {
        rgb = "255, 60, 60"
        bold = ["<b><strong>","</strong></b>"]
    }
    if (Number(blocks) >= 5000) {
        rgb = "255, 35, 35"
        bold = ["<b style=\"font-size: 110%\"><strong>","</strong></b>"]
    }
    if (Number(blocks) >= 10000) {
        rgb = "255, 20, 20"
        bold = ["<b style=\"font-size: 125%\"><strong>","</strong></b>"]
    }
    let s = "s"
    if (Number(blocks) == 1) {
        s = ""
    } else {
        s = "s"
    }
    let iagfbekjf = true
    ALLBLOCKS.forEach(block => {
        if (block.type == "jg_s4d_themes_set_navigation_bar_button_color_to") {
            counter.innerHTML = bold[0] + `<p id="block-counter-textParagraph">${blocks} block${s}</p>` + bold[1]
            iagfbekjf = false
            return
        }
    })
    if (iagfbekjf) counter.innerHTML = bold[0] + `<p id="block-counter-textParagraph" style="color:rgb(${rgb});">${blocks} block${s}</p>` + bold[1]
}
localforage.getItem("hide-blockcount").then((item) => {
    if (String(item) == "true") {
        let counter = document.getElementById("block-counter")
        counter.remove()
    }
})
window.addEventListener("click", () => {
    localforage.getItem("hide-blockcount").then((item) => {
        if (String(item) == "true") {
            return
        }
        blockCounter()
    })
})
window.addEventListener('keydown', () => {
    localforage.getItem("hide-blockcount").then((item) => {
        if (String(item) == "true") {
            return
        }
        blockCounter()
    })
})
/*
Blockly.getMainWorkspace().addChangeListener(blockCounter(Blockly.getMainWorkspace()))
*/
// Comment this context menu out later!
// 👍
// jk no!!
if (window.location.pathname == "/debug" && (!window.location.href.includes("scratch-for-discord-469.vercel.app") && !window.location.href.includes("deploy-preview-469--scratch-for-discord.netlify.app"))) {
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
  
    var pixelDensity = 5;
    let maxScaleI = 4096
    var highestCScale = 0
    var newWidth = width * pixelDensity
    var newHeight = height * pixelDensity

    if ((newWidth > maxScaleI) || (newHeight > maxScaleI)) {
        if (newWidth > newHeight) {
            highestCScale = newWidth
        } else {
            highestCScale = newHeight
        }
        newWidth = Math.round((newWidth / highestCScale) * maxScaleI)
        newHeight = Math.round((newHeight / highestCScale) * maxScaleI)
    }

    // newWidth = 4096
    // newHeight = 4096

    canvas.width = newWidth;
    canvas.height = newHeight;
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
        workspace.registerButtonCallback('FFMPEG', function () {
            swal.fire("Hey uhh..", "This isn't quite done yet...", "info")
        });
        workspace.registerButtonCallback('EMBED_GUI_POPUP', function () {
            swal.fire({
                title: "Create an embed!",
                html: `
<b>Required:</b><br><br>
Description:<br>
<textarea id="EmbedDescription" rows="4" cols="50"></textarea>
<br><br><b>Extras:</b><br>
<em>
    (?): Completely optional
</em><br><br>
Title: <input type="text" id="EmbedTitle"> URL (?): <input type="text" id="EmbedTitleURL"><br>
Color: <input type="color" id="EmbedColor" value="#ff0000"><br>
Author: <input type="text" id="EmbedAuthor"> PFP: <input type="text" id="EmbedAuthorPFP"> URL (?): <input type="text" id="EmbedAuthorURL"><br>
`,
                width: "1000px",
                showCancelButton: true,
                showConfirmButton: true,
                confirmButtonText: "Import to Workspace"
            }).then(async (result) => {
                if (!result.isConfirmed) return
                const edesc = validateForXML(document.getElementById("EmbedDescription").value)
                const etitle = validateForXML(document.getElementById("EmbedTitle").value)
                const etitleurl = validateForXML(document.getElementById("EmbedTitleURL").value)
                const ecolor = validateForXML(document.getElementById("EmbedColor").value)
                const eauthor = validateForXML(document.getElementById("EmbedAuthor").value)
                const eauthorpfp = validateForXML(document.getElementById("EmbedAuthorPFP").value)
                const eauthorurl = validateForXML(document.getElementById("EmbedAuthorURL").value)
                // blocks are placed even if they arent required because blockly is dumb and has a stupid method of placing multiple blocks inside of statement inputs
                let xml = Blockly.Xml.textToDom(`<block type="s4d_embed_create">
    <statement name="THEN">
        <block type="s4d_embed_set_title">
            <value name="TITLE">
                ${etitle ? `<block type="jg_text_remake_paragraph_quotes">
                    <field name="TEXT">${etitle}</field>
                </block>` : ""}
            </value>
            <value name="HYPERLINK">
                ${etitleurl ? `<block type="jg_text_remake_paragraph_quotes">
                    <field name="TEXT">${etitleurl}</field>
                </block>` : ""}
            </value>
            <next>
                <block type="s4d_embed_set_desc">
                    <value name="DESC">
                        <block type="jg_text_remake_paragraph_quotes">
                            <field name="TEXT">${edesc ? edesc : "⠀"}</field>
                        </block>
                    </value>
                    <next>
                        <block type="s4d_embed_set_color">
                            <value name="COLOUR">
                                ${etitle ? `<block type="fz_color">
                                    <field name="COLOR">${ecolor}</field>
                                </block>` : ""}
                            </value>
                            <next>
                                <block type="s4d_embed_set_author">
                                    <value name="AUTHOR">
                                        ${eauthor ? `<block type="jg_text_remake_paragraph_quotes">
                                            <field name="TEXT">${eauthor}</field>
                                        </block>` : ""}
                                    </value>
                                    <value name="PROFILE">
                                        ${eauthorpfp ? `<block type="jg_text_remake_paragraph_quotes">
                                            <field name="TEXT">${eauthorpfp}</field>
                                        </block>` : ""}
                                    </value>
                                    <value name="URL">
                                        ${eauthorurl ? `<block type="jg_text_remake_paragraph_quotes">
                                            <field name="TEXT">${eauthorurl}</field>
                                        </block>` : ""}
                                    </value>
                                </block>
                            </next>
                        </block>
                    </next>
                </block>
            </next>
        </block>
    </statement>
</block>`)
                let block = Blockly.Xml.domToBlock(xml, workspace)
                workspace.centerOnBlock(block.id)
            })
        });
        workspace.registerButtonCallback('SEARCH', function () {
            // const wrapper = document.createElement('div');
            // wrapper.innerHTML = `<input type="text" id="block">`
            if (isMobile()) {
                let res = String(prompt("Search for a block:"))
                let block = res.replaceAll(" ", "_").replaceAll("<", "_").replaceAll(">", "_").replaceAll("/", "_")
                let new_toolbox_xml = prepToolbox(toolbox(Blockly, val, false), true, val, workspace, block)
                workspace.updateToolbox(new_toolbox_xml)
                return
            }
            swal.fire({
                title: "Search for a block",
                // html: wrapper,
                html: `<input type="text" id="block">`,
                showCancelButton: true,
                showConfirmButton: true,
                confirmButtonText: "Search"
            }).then(async (result) => {
                if (result) {
                    let block = document.getElementById("block").value.replaceAll(" ", "_").replaceAll("<", "_").replaceAll(">", "_").replaceAll("/", "_")
                    let new_toolbox_xml = prepToolbox(toolbox(Blockly, val, false), true, val, workspace, block)
                    workspace.updateToolbox(new_toolbox_xml)
                }
            })
        });
/*
        let xml = Blockly.Xml.textToDom(`
<block type="s4d_login">
    <value name="TOKEN">
        <shadow type="text">
            <field name="TEXT">Your bot token</field>
        </shadow>
    </value>
</block>
`);
        let block = Blockly.Xml.domToBlock(xml, workspace)
        block.setDeletable(false)
*/

        // the best addition to s4d

        /*
        function corrupt(amount, charArray) {
            String.prototype.replaceAt = function (index, replacement) {
                return this.substring(0, index) + String(replacement) + this.substring(index + String(replacement).length);
            }
            const elements = document.getElementsByTagName("path")
            for (let i = 0; i < elements.length; i++) {
                let current = elements.item(i)
                let css = current.getAttribute("d")
                for (let j = 0; j < amount; j++) {
                    css = String(css).replaceAt(Math.round(Math.random() * String(css).length - 1), charArray[Math.round(Math.random() * charArray.length - 1)])
                }
                try {
                    current.setAttribute("d", css)
                } catch {
                    continue
                }
            }
        }
        window.addEventListener("click", () => {
            if (Math.round(Math.random() * 10) <= 3) return
            corrupt(20, ["0","1","2","3","4","5","6","7","8","9"])
        })
        */

        // uncomment the code and watch it all unfold
        // it is great
        //trust me\

        function themeBlocks(strokeColor, fillColor, specialTag) {
            // thanks Onur Yıldırım and Martin Delille for spoonfeed (real)
            function invertColor(hex) {
                if (hex.indexOf('#') === 0) {
                    hex = hex.slice(1);
                }
                // convert 3-digit hex to 6-digits.
                if (hex.length === 3) {
                    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
                }
                if (hex.length !== 6) {
                    throw new Error('Invalid HEX color.');
                }
                // invert color components
                var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
                    g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
                    b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
                // pad each with zeros and return
                return '#' + padZero(r) + padZero(g) + padZero(b);
            }
            function padZero(str, len) {
                len = len || 2;
                var zeros = new Array(len).join('0');
                return (zeros + str).slice(-len);
            }
            function hexToRgb(hex) {
                let arrBuff = new ArrayBuffer(4);
                let vw = new DataView(arrBuff);
                vw.setUint32(0, parseInt(hex, 16), false);
                let arrByte = new Uint8Array(arrBuff);
                return [arrByte[1], arrByte[2], arrByte[3]];
            }
            function componentToHex(c) {
                var hex = c.toString(16);
                return hex.length == 1 ? "0" + hex : hex;
            }
            function rgbToHex(r, g, b) {
                return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
            }
            const eventBlockSVGRegex = / m 0,0  m 0,4 a 4 4 0 0,1 4,-4  h [0-9\.]* a 4 4 0 0,1 4,4  v 4  V 8  V 40  V 44 a 4 4 0 0,1 -4,4  H 64  c -2,0  -3,1  -4,2  l -4,4  c -1,1  -2,2  -4,2  h -12/gmi
            const outputBlockSVGRegex = / m [0-9]*,0  h [0-9\.]* a 20 20 0 0,1 20,20  v 0 a 20 20 0 0,1 -20,20  V 40  h [0-9\.-]* a 20 20 0 0,1 -20,-20  v 0 a 20 20 0 0,1 20,-20 z/gmi
            if (specialTag == "scratch-top") {
                const elem2ents = document.getElementsByClassName("blocklyDraggable")
                for (let i = 0; i < elem2ents.length; i++) {
                    let current2 = elem2ents.item(i)
                    if (current2 == null) continue
                    const elements = current2.getElementsByClassName("blocklyPath")
                    for (let i = 0; i < elements.length; i++) {
                        let current = elements.item(i)
                        if (current == null) continue
                        if (current.getAttribute("d") == null) continue
                        if (current.getAttribute("d").match(eventBlockSVGRegex) != null) {
                            const width = Number(current.getAttribute("d").match(/h [0-9\.]*/mi)[0].replace("h ", ""))
                            current.setAttribute("d", `m 0 0 c 25 -22 71 -22 96 0 H ${width + 3.5} a 4 4 0 0 1 4 4 v 40 a 4 4 0 0 1 -4 4 H 48 c -2 0 -3 1 -4 2 l -4 4 c -1 1 -2 2 -4 2 h -12 c -2 0 -3 -1 -4 -2 l -4 -4 c -1 -1 -2 -2 -4 -2 H 4 a 4 4 0 0 1 -4 -4 z`)
                            const asfcwsge = current2.getElementsByClassName("blocklyDraggable")
                            if (asfcwsge.item(0) != null) asfcwsge.item(0).setAttribute("transform", "translate(0,48.000000000000114)")
                        } else {
                            continue
                        }
                    }
                }
            }
            if (specialTag == "april-fools") {
                document.getElementById("navSpace").style = `background-color: rgb(255, 0, 255);`
                document.getElementsByClassName("blocklyMainBackground").item(0).style = `fill:#00ff00;`
                const text = document.getElementsByTagName("text")
                for (let i = 0; i < text.length; i++) {
                    let current = text.item(i)
                    if (String(current.style).includes(`font-family: Comic Sans MS!important;`)) return
                    current.style = `font-family: Comic Sans MS!important;`
                }
                const images4d = document.getElementById("navigationBarS4DImage")
                images4d.setAttribute("width", "10")
                images4d.setAttribute("height", "45")
                const elem2ents = document.getElementsByClassName("blocklyDraggable")
                for (let i = 0; i < elem2ents.length; i++) {
                    let current2 = elem2ents.item(i)
                    if (current2 == null) continue
                    const elements = current2.getElementsByClassName("blocklyPath")
                    for (let i = 0; i < elements.length; i++) {
                        let current = elements.item(i)
                        if (current == null) continue
                        if (current.getAttribute("d") == null) continue
                        if (current.getAttribute("d").match(outputBlockSVGRegex) != null) {
                            let width = Number(current.getAttribute("d").match(/h [0-9\.]*/mi)[0].replace("h ", "")) - 55
                            const VISOR_WIDTH = (width < 0 ? 0 : width)
                            current.setAttribute("d", `m 77 0 h ${VISOR_WIDTH} a 20 20 0 0 1 20 20 v 0 a 20 20 0 0 1 -20 20 V 40 H 77 V 112 A 1 1 0 0 1 42 111 A 1 1 0 0 0 16 111 A 1 1 0 0 1 -18 111 V 74 H -29 C -35 74 -36 73 -36 67 V 5 C -36 -1 -35 -2 -29 -2 H -18 A 1 1 0 0 1 76 0`)
                        } else {
                            continue
                        }
                    }
                }
            }
            const elements = document.getElementsByTagName("path")
            for (let i = 0; i < elements.length; i++) {
                let current = elements.item(i)
                if (current.getAttribute("stroke") == null) continue
                if (current.getAttribute("fill") == null) continue
                if (specialTag == "invert") {
                    if (current.getAttribute("strokeORG") == null) current.setAttribute("strokeORG", current.getAttribute("stroke"))
                    if (current.getAttribute("fillORG") == null) current.setAttribute("fillORG", current.getAttribute("fill"))
                    current.setAttribute("stroke", invertColor(String(current.getAttribute("strokeORG"))))
                    current.setAttribute("fill", invertColor(String(current.getAttribute("fillORG"))))
                }
                if (specialTag == "pastel") {
                    if (current.getAttribute("strokeORG") == null) current.setAttribute("strokeORG", current.getAttribute("stroke"))
                    if (current.getAttribute("fillORG") == null) current.setAttribute("fillORG", current.getAttribute("fill"))
                    let rgb = hexToRgb(current.getAttribute("fillORG").substring(1))
                    let r = ((rgb[0] + 72) > 255 ? 255 : (rgb[0] + 72))
                    let g = ((rgb[1] + 72) > 255 ? 255 : (rgb[1] + 72))
                    let b = ((rgb[2] + 72) > 255 ? 255 : (rgb[2] + 72))
                    let newRgb = rgbToHex(r, g, b)
                    current.setAttribute("fill", newRgb)
                    rgb = hexToRgb(current.getAttribute("strokeORG").substring(1))
                    r = ((rgb[0] + 72) > 255 ? 255 : (rgb[0] + 72))
                    g = ((rgb[1] + 72) > 255 ? 255 : (rgb[1] + 72))
                    b = ((rgb[2] + 72) > 255 ? 255 : (rgb[2] + 72))
                    newRgb = rgbToHex(r, g, b)
                    current.setAttribute("stroke", newRgb)
                }
                if (specialTag == "textless") {
                    let elements = document.getElementsByClassName("blocklyText")
                    for (let i = 0; i < elements.length; i++) {
                        let current = elements.item(i)
                        current.remove()
                    }
                    elements = document.getElementsByClassName("blocklyText blocklyDropdownText")
                    for (let i = 0; i < elements.length; i++) {
                        let current = elements.item(i)
                        current.remove()
                    }
                    elements = document.getElementsByClassName("blocklyMenuItemContent goog-menuitem-content")
                    for (let i = 0; i < elements.length; i++) {
                        let current = elements.item(i)
                        current.remove()
                    }
                    elements = document.getElementsByClassName("blocklyFlyoutLabelText")
                    for (let i = 0; i < elements.length; i++) {
                        let current = elements.item(i)
                        current.remove()
                    }
                    elements = document.getElementsByClassName("blocklyMenuItemContent goog-menuitem-content")
                    for (let i = 0; i < elements.length; i++) {
                        let current = elements.item(i)
                        current.remove()
                    }
                    elements = document.getElementsByClassName("blocklyTreeLabel")
                    for (let i = 0; i < elements.length; i++) {
                        let current = elements.item(i)
                        current.remove()
                    }
                }
                if (specialTag == "toon") {
                    let celements = document.getElementsByClassName("blocklyFieldRect blocklyDropdownRect")
                    for (let i = 0; i < celements.length; i++) {
                        let current = celements.item(i)
                        if (strokeColor != null) current.setAttribute("stroke", strokeColor)
                    }
                }
                if (specialTag == "neo") {
                    current.setAttribute("stroke-width", "3")
                    let celements = document.getElementsByClassName("blocklyEditableText")
                    for (let i = 0; i < celements.length; i++) {
                        let current = celements.item(i)
                        let c2elements = current.getElementsByClassName("blocklyFieldRect")
                        for (let i = 0; i < c2elements.length; i++) {
                            let current = c2elements.item(i)
                            current.setAttribute("style", `fill:${fillColor}`)
                            current.setAttribute("stroke-width", "3")
                        }
                        c2elements = current.getElementsByClassName("blocklyText")
                        for (let i = 0; i < c2elements.length; i++) {
                            let current = c2elements.item(i)
                            current.setAttribute("style", "fill:#ffffff")
                        }
                    }
                    celements = document.getElementsByClassName("blocklyFieldRect blocklyDropdownRect")
                    for (let i = 0; i < celements.length; i++) {
                        let current = celements.item(i)
                        current.setAttribute("stroke-width", "3")
                    }
                }
                if (specialTag == "gray") {
                    if (current.getAttribute("strokeORG") == null) current.setAttribute("strokeORG", current.getAttribute("stroke"))
                    if (current.getAttribute("fillORG") == null) current.setAttribute("fillORG", current.getAttribute("fill"))
                    let rgb = hexToRgb(current.getAttribute("fillORG").substring(1))
                    let r = rgb[0]
                    let newRgb = rgbToHex(r, r, r)
                    current.setAttribute("fill", newRgb)
                    rgb = hexToRgb(current.getAttribute("strokeORG").substring(1))
                    r = rgb[0]
                    newRgb = rgbToHex(r, r, r)
                    current.setAttribute("stroke", newRgb)
                    let elements = document.getElementsByClassName("blocklyText")
                    for (let i = 0; i < elements.length; i++) {
                        let current = elements.item(i)
                        current.setAttribute("style", "fill:#ffffff")
                        current.setAttribute("stroke", "#000000")
                    }
                    elements = document.getElementsByClassName("blocklyFieldRect")
                    for (let i = 0; i < elements.length; i++) {
                        let current = elements.item(i)
                        current.setAttribute("stroke", newRgb)
                    }
                }
                if (specialTag == "glow") {
                    let celements = document.getElementsByClassName("blocklyText")
                    for (let i = 0; i < celements.length; i++) {
                        let current = celements.item(i)
                        current.setAttribute("specializedCSS", "glow")
                    }
                    celements = document.getElementsByClassName("blocklyEditableText")
                    for (let i = 0; i < celements.length; i++) {
                        let current = celements.item(i)
                        let celements2 = current.getElementsByClassName("blocklyText")
                        for (let i = 0; i < celements2.length; i++) {
                            let current = celements2.item(i)
                            current.setAttribute("specializedCSS", "darkglow")
                        }
                    }
                }
                if (specialTag == "full-colors") {
                    let rgb = hexToRgb(current.getAttribute("fill").substring(1))
                    let r = rgb[0] >= 128 ? 255 : 0
                    let g = rgb[1] >= 128 ? 255 : 0
                    let b = rgb[2] >= 128 ? 255 : 0
                    let newRgb = rgbToHex(r, g, b)
                    current.setAttribute("fill", newRgb)
                    current.setAttribute("stroke", newRgb)
                    let celements = document.getElementsByClassName("blocklyFieldRect blocklyDropdownRect")
                    for (let i = 0; i < celements.length; i++) {
                        let current = celements.item(i)
                        current.setAttribute("stroke-width", "0")
                    }
                    celements = document.getElementsByClassName("blocklyFieldRect")
                    for (let i = 0; i < celements.length; i++) {
                        let current = celements.item(i)
                        current.setAttribute("stroke-width", "0")
                    }
                    celements = document.getElementsByClassName("blocklyOutlinePath")
                    for (let i = 0; i < celements.length; i++) {
                        let current = celements.item(i)
                        current.setAttribute("fill", newRgb)
                    }
                }
                if (strokeColor != null) current.setAttribute("stroke", strokeColor)
                if (fillColor != null) current.setAttribute("fill", fillColor)
            }
        }
        setInterval(themeSwitchingHandler, 50)
        function themeSwitchingHandler() {
            localforage.getItem("utilitiesTheme").then((theme) => {
                switch (theme) {
                    case "neo":
                        themeBlocks(null, "#202020", "neo")
                        break
                    case "toon":
                        themeBlocks("#000000", null, "toon")
                        break
                    case "invert":
                        themeBlocks(null, null, "invert")
                        break
                    case "pastel":
                        themeBlocks(null, null, "pastel")
                        break
                    case "textless":
                        themeBlocks(null, null, "textless")
                        break
                    case "gray":
                        themeBlocks(null, null, "gray")
                        break
                    case "glow":
                        themeBlocks(null, null, "glow")
                        break
                    case "scratch-top":
                        themeBlocks(null, null, "scratch-top")
                        break
                    case "full-colors":
                        themeBlocks(null, null, "full-colors")
                        break
                }
            })
        }

        //month starts at 0, day starts at 1
        let check = (new Date().getMonth()) == 3 && ((new Date().getDate())) == 1
        if (check) {
            setInterval(aprilFoolsContent, 50)
            function aprilFoolsContent() {
                themeBlocks(null, null, "april-fools")
            }
        }

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
