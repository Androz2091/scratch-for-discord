<template>
  <div>
    <div class="blocklyDiv" ref="blocklyDiv" id="blocklyDiv"></div>
    <xml ref="blocklyToolbox" style="font-family: sans-serif">
      <slot></slot>
    </xml>
  </div>
</template>
<!--<script src="./renderers/cwest.js"></script>-->

<script>
/* eslint-disable */
import Blockly from "blockly";
import swal from "sweetalert2";
const blocklyModule = require("../blocks/blocklyModule");
const customBlockModule = require("./NavigationBar/cbmodule");
import { disableUnapplicable } from "../restrictions";
import toolbox from "../toolbox";
var renderer = "zelos";
switch (String(window.location.pathname).replace(/\//gmi, "")) {
  case 'rge':
    renderer = "geras"
    break
  case 'rmi':
    renderer = "minimalist"
    break
  case 'rth':
    renderer = "thrasos"
    break
  case 'rsd':
    renderer = "sdeloz"
    break
}
import { Backpack } from "@blockly/workspace-backpack";
import { WorkspaceSearch } from "@blockly/plugin-workspace-search";
import theme from "@blockly/theme-dark";
import customBlockBuilderTheme from "@blockly/theme-dark";
import Load from "../backpack-save-load.js";
import localforage from "localforage";

// pre-define a bunch of stuff so the search load times are better
let coolbox = toolbox([]).split('\n')
let resbox = {}
let working = []
let commented = 0
coolbox.forEach(line => {
  if (line.includes('<!--')) commented++
  if (line.includes('-->')) commented--
  if (line.includes('-->') && line.includes('<!--')) commented++
  if (commented < 0) commented = 0
  if (commented < 1) {
    if (line.includes('<category name="') && !line.includes('"/>')) {
      let temp = line
        .replaceAll(' ', '%20')
        .replaceAll('"', '" ')
        .replaceAll('=" ', '"')
        .split('"')[1]
        .replaceAll('%20', ' ')
      working.push(temp)
    }
    if (line.includes('<block') && working.length > 0 && commented < 1) {
      let block = line.split('"')
      const path = '\'' + working.join('>') + '\''
      if (block == null) return
      block = block[1] 
      
      if (block == 'text') {
        resbox[block] = ['\'Text\'']
        return
      }
      if (block == 'math_number') {
        resbox[block] = ['\'Math\'']
        return
      }

      if (!resbox[block]) resbox[block] = []
      if (resbox[block].includes(path)) return
      resbox[block].push(path)
    }
    if (line.includes('</category>') && commented < 1) {
      working.pop()
    }
  }
  if (line.includes('-->') && line.includes('<!--')) commented--
})

const BlocklyB = Object.getOwnPropertyNames(Blockly.Blocks)
let blocks = Object.getOwnPropertyNames(resbox) // define blocks so pre search works imediatly
let HIDEN_BLOCKS = [
  "frost_image",
  "frost_drop1",
  "colour_picker",
  "frost_translate",
  "variables_get",
  "procedures_callnoreturn",
  "procedures_callreturn",
  "variables_get_dynamic",
  "variables_set_dynamic",
  "variables_set",
  "math_change",
  "procedures_ifreturn",
  "procedures_defreturn",
  "procedures_defnoreturn",
  "controls_ifelse",
  "jg_blocklyfp_load_workspace",
  "jg_blocklyfp_load_workspace_website",
  "lasercat_jg_case_default_INTERNAL_default",
  "lasercat_jg_case_default_INTERNAL_case4",
  "lasercat_jg_case_default_INTERNAL_case3",
  "lasercat_jg_case_default_INTERNAL_case2",
  "lasercat_jg_case_default_INTERNAL_case1",
  "jg_events_all_label",
  "jg_testing_urmother_epic_block_test_deez_mf_nuts"
];

let preadded = []
BlocklyB.filter(x => {
  if (Blockly.Blocks[x].isHiden || Blockly.JavaScript[x] == null) {
    HIDEN_BLOCKS.push(x)
    preadded.push(x)
  }
})

export default {
  name: "BlocklyComponent",
  props: ["options"],
  data() {
    return {
      toastLogin: false,
      toastDB: false,
      toastRegister: false,
      workspace: this.$store.state.workspace,
    };
  },
  async mounted() {
    const allow_toolbox_search = false;
    const isMobile = function () {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    };
    const validateForXML = function (text) {
      return String(text)
        .replaceAll("&", "&amp;")
        .replaceAll("\n", "&amp;#10;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
    };
    function prepToolbox(
      toolbox_content,
      searching,
      favorites,
      pooopewwweewwww,
      searchparameter
    ) {
      const default_max_length = 250;
      let CATEGORYCONTENT = `
        <label text="Error failed to get block(s)..." web-class="boldtext"></label>
      `

      if (searching == "baiuyfg8iu4ewf643o8ir") {
        blocks.forEach(x => {
          let xml = Blockly.Xml.textToDom(`<block type="${x}"/>`);
          let block = Blockly.Xml.domToBlock(xml, pooopewwweewwww);
          block.moveBy(
            Math.round(Math.random() * 5000),
            Math.round(Math.random() * 5000)
          );
        return;
        })
      }
      if (searching == "f9u42r8hg329rehsfhoiewgf37") {
        blocks.forEach(x => {
          const xml = Blockly.Xml.textToDom(`<xml><block type="${x}"/></xml>`);
          Blockly.Xml.appendDomToWorkspace(xml, pooopewwweewwww);
        })
        return;
      }
      if (searching) { // search category controler
        // why are so many blocks not defined before this all runs 😭
        const BlocklyB = Object.getOwnPropertyNames(Blockly.Blocks)
        blocks = BlocklyB.filter(x => Blockly.Blocks[x].init != null)

        let warnings = []

        BlocklyB.filter(x => {
          if (Blockly.Blocks[x].isHiden && !preadded.includes(x) && HIDEN_BLOCKS.includes(x)) {
            console.warn(`${x} is already registerd as hiden! either remove ${x} from "src/components/BlocklyComponent.vue > HIDEN_BLOCKS" or remove the "isHiden" tag from the block defnintion`)
            warnings.push(x)
          }
          if (Blockly.JavaScript[x] == null && !preadded.includes(x) && HIDEN_BLOCKS.includes(x)) {
            console.warn(`${x} doesnt have a export! and thus doesnt need to be in "src/components/BlocklyComponent.vue > HIDEN_BLOCKS"! please remove ${x} from "src/components/BlocklyComponent.vue > HIDEN_BLOCKS"!`)
            warnings.push(x)
          }
          if ((Blockly.Blocks[x].isHiden || Blockly.JavaScript[x] == null) && !HIDEN_BLOCKS.includes(x)) {
            HIDEN_BLOCKS.push(x)
            preadded.push(x)
          }
        })
        if (warnings.length > 0) {
          console.log(`please adress all warnings created!`)
          console.log(`warnings: [${warnings.map(x => {
              return `
              ${x}`
            })}
          ]`)
          console.log(`resulting hiden list: [
            "${HIDEN_BLOCKS.filter(x => !preadded.includes(x) && !warnings.includes(x)).join('",\n            "')}"
          ]`)
        }

        searchparameter = searchparameter.replaceAll(/[^qwertyuiopasdfghjklzxcvbnm1234567890_QWERTYUIOPASDFGHJKLZXCVBNM]/gm, "_").toLowerCase(); // long boi lmao
        let search_res = blocks.filter(x => x.includes(searchparameter) && !HIDEN_BLOCKS.includes(x) || searchparameter == "hidden" && HIDEN_BLOCKS.includes(x))

        if (search_res.length < 1) {
          CATEGORYCONTENT = `
            <label text="No blocks where found with ${searchparameter} in the name..." web-class="boldtext"></label>
          `
        }
        if (search_res.length > 0) {
          CATEGORYCONTENT = `
            <label text="Found ${search_res.length} blocks with ${searchparameter} in there name" web-class="boldtext"></label>
            <label text="ㅤ" web-class="boldtext"></label>
            ${search_res.map(x => {
            return `
              <label text="${x.replace(searchparameter, `${searchparameter.toUpperCase()}`)} ${resbox[x] == null ? ' isnt in the toolbox' : 'is in ' + resbox[x].join(' and ')}" web-class="boldtext"></label>
              <block type="${x}"/>
            `
            }).join('\n')}
          `
        }
      } else {
        const lessthan_350 = blocks.length < default_max_length;
        let newblocks = (lessthan_350 ? blocks : blocks.slice(0, default_max_length)).filter(x => !HIDEN_BLOCKS.includes(x))
        if (newblocks.length > 0) {
          CATEGORYCONTENT = `
            <label text="ㅤ" web-class="boldtext"></label>
            ${newblocks.map(x => `<block type="${x}"/>`).join('\n')}
            ${!lessthan_350 
            ? `
              <label text="${blocks.length - default_max_length} blocks left..." web-class="boldtext"></label>
            ` 
            : ''}
          `
        }
      }
      var returned_stuff = toolbox_content.replace(
        "<!-- CATEGORY_CONTENT_VARIABLE_GOES_HERE_897489712470376894703168263487623 -->",
        `
          <label text="There are currently ${blocks.length} blocks in S4D." web-class="boldtext"></label>
          <label text="ㅤ" web-class="boldtext"></label>
          ${CATEGORYCONTENT}
        `
      );

      // for custom categories
      let urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has("customXML")) {
        var custom_xml = urlParams.get("customXML");
        let temp1 = String(custom_xml).replaceAll("□", "\n");
        let temp2 = String(temp1).replaceAll("▣", "#");
        let appearances = temp2.split("※360※").length;
        for (let i = 0; i < appearances; i++) {
          temp2 = temp2.replace(
            "※360※",
            String(Math.round(Math.random() * 360))
          );
        }
        custom_xml = temp2;
        if (
          urlParams.has("no-base-category") &&
          urlParams.get("no-base-category") == "true"
        ) {
          returned_stuff = (
            `<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">` +
            custom_xml +
            `</xml>`
          ).replace(
            "<!-- CATEGORY_CONTENT_VARIABLE_GOES_HERE_897489712470376894703168263487623 -->",
            CATEGORYCONTENT
          );
        } else {
          returned_stuff = (
            returned_stuff.replace("</xml>", "") +
            custom_xml +
            "</xml>"
          ).replace(
            "<!-- CATEGORY_CONTENT_VARIABLE_GOES_HERE_897489712470376894703168263487623 -->",
            CATEGORYCONTENT
          );
        }
      }

      return String(returned_stuff);
    }
    window.loadtoolltovobocaopjsd9fuw4fpoewjoiphgf9ewpojndsfoihgew8ninjagoLOllioolo =
      prepToolbox;
    window.loadtoolltovobocaopjsd9fuw4fpoewjoiphgf9ewpojndsfoihgew8ninjagoLOllioolo2222222222222 =
      prepToolbox;
    async function reloadWorkspace2(workspace, abc) {
      Blockly.ContextMenuRegistry.registry.unregister("fav");
      Blockly.ContextMenuRegistry.registry.unregister("refav");

      let val =
        (await localforage.getItem("fav")) === null
          ? null
          : await localforage.getItem("fav");

      // Convert it to a dom string
      const dom = Blockly.Xml.workspaceToDom(workspace);
      // Delete the current workspace
      workspace.dispose();
      // Create a new workspace (with the good language)
      const newWorkspace = Blockly.inject(
        document.getElementById("blocklyDiv"),
        {
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
            scaleSpeed: 1.2,
          },
          move: {
            scrollbars: {
              horizontal: true,
              vertical: true,
            },
            drag: true,
            wheel: true,
          },
          toolbox: prepToolbox(toolbox(val), false, val),
        }
      );
      Blockly.ContextMenuRegistry.registry.register({
        displayText: "Add to favorite",
        preconditionFn: function (scope) {
          let type = scope.block.type;
          if (val === null) {
            return "enabled";
          }
          if (val.includes(type)) {
            return "disabled";
          } else {
            return "enabled";
          }
        },
        callback: async function (scope) {
          let type = scope.block.type;

          if (val === null) {
            await localforage.setItem("fav", [type]);
            val =
              (await localforage.getItem("fav")) === null
                ? null
                : await localforage.getItem("fav");

            var new_toolbox_xml = prepToolbox(
              toolbox(val),
              false,
              val
            );
            workspace.updateToolbox(new_toolbox_xml);
          } else {
            val.push(type);
            await localforage.setItem("fav", val);
            val =
              (await localforage.getItem("fav")) === null
                ? null
                : await localforage.getItem("fav");

            var new_toolbox_xml = prepToolbox(
              toolbox(val),
              false,
              val
            );
            workspace.updateToolbox(new_toolbox_xml);
          }
        },
        scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
        id: "fav",
        weight: 100,
      });
      Blockly.ContextMenuRegistry.registry.register({
        displayText: "Remove from favorite",
        preconditionFn: function (scope) {
          let type = scope.block.type;
          if (val === null) {
            return "disabled";
          }
          if (val.includes(type)) {
            return "enabled";
          } else {
            return "disabled";
          }
        },
        callback: async function (scope) {
          let type = scope.block.type;
          function arrayRemove(arr, value) {
            return arr.filter(function (ele) {
              return ele != value;
            });
          }
          if (
            arrayRemove(await localforage.getItem("fav"), type).length === 0
          ) {
            await localforage.setItem("fav", null);
            val =
              (await localforage.getItem("fav")) === null
                ? null
                : await localforage.getItem("fav");
            var new_toolbox_xml = prepToolbox(
              toolbox(val),
              false,
              val
            );
            workspace.updateToolbox(new_toolbox_xml);
          } else {
            await localforage.setItem(
              "fav",
              arrayRemove(await localforage.getItem("fav"), type)
            );
            val =
              (await localforage.getItem("fav")) === null
                ? null
                : await localforage.getItem("fav");
            var new_toolbox_xml = prepToolbox(
              toolbox(val),
              false,
              val
            );
            workspace.updateToolbox(new_toolbox_xml);
          }
        },
        scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
        id: "refav",
        weight: 100,
      });

      Blockly.Xml.domToWorkspace(dom, newWorkspace);
      // Update the workspace in the vuex store
      if (allow_toolbox_search) {
        try {
          Blockly.ContextMenuRegistry.registry.register({
            displayText: "Search for block",
            preconditionFn: function () {
              return "enabled";
            },
            callback: function () {
              //    reloadWorkspace2(newWorkspace, true)
              var new_toolbox_xml = prepToolbox(
                toolbox(val),
                true,
                val
              );
              workspace.updateToolbox(new_toolbox_xml);
            },
            scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
            id: "searchblock",
            weight: 99,
          });
        } catch {}
      }
    }
    async function logtoolblocks(remove_underscore) {
      const toolxml = toolbox([]);
      const toolboxArray = toolxml.split("\n");
      var blocks = [];
      var loop = 0;
      var pushed;
      var repeat_end = toolboxArray.length;
      for (var count = 0; count < repeat_end; count++) {
        if (toolboxArray[loop].includes('<block type="')) {
          pushed = toolboxArray[loop]
            .replaceAll(" ", "")
            .replaceAll('blocktype="', "")
            .replaceAll("/", "")
            .replaceAll("<", "")
            .replaceAll('"', "")
            .replaceAll("'", "")
            .replaceAll("\t", "");
          pushed = pushed.slice(0, pushed.indexOf(">"));
          if (remove_underscore) {
            pushed = pushed.replaceAll("_", " ");
          }
          blocks.push(pushed);
        }
        loop++;
      }
      console.log(blocks);
    }
    async function reloadWorkspace(workspace, abc) {
      Blockly.ContextMenuRegistry.registry.unregister("fav");
      Blockly.ContextMenuRegistry.registry.unregister("refav");

      let val =
        (await localforage.getItem("fav")) === null
          ? null
          : await localforage.getItem("fav");

      // Convert it to a dom string
      const dom = Blockly.Xml.workspaceToDom(workspace);
      // Delete the current workspace
      workspace.dispose();
      // Create a new workspace (with the good language)
      const newWorkspace = Blockly.inject(
        document.getElementById("blocklyDiv"),
        {
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
            scaleSpeed: 1.2,
          },
          move: {
            scrollbars: {
              horizontal: true,
              vertical: true,
            },
            drag: true,
            wheel: true,
          },
          toolbox: prepToolbox(toolbox(val), false, val),
        }
      );
      Blockly.ContextMenuRegistry.registry.register({
        displayText: "Add to favorite",
        preconditionFn: function (scope) {
          let type = scope.block.type;
          if (val === null) {
            return "enabled";
          }
          if (val.includes(type)) {
            return "disabled";
          } else {
            return "enabled";
          }
        },
        callback: async function (scope) {
          let type = scope.block.type;

          if (val === null) {
            await localforage.setItem("fav", [type]);
            val =
              (await localforage.getItem("fav")) === null
                ? null
                : await localforage.getItem("fav");

            var new_toolbox_xml = prepToolbox(
              toolbox(val),
              false,
              val
            );
            workspace.updateToolbox(new_toolbox_xml);
          } else {
            val.push(type);
            await localforage.setItem("fav", val);
            val =
              (await localforage.getItem("fav")) === null
                ? null
                : await localforage.getItem("fav");

            var new_toolbox_xml = prepToolbox(
              toolbox(val),
              false,
              val
            );
            workspace.updateToolbox(new_toolbox_xml);
          }
        },
        scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
        id: "fav",
        weight: 100,
      });
      Blockly.ContextMenuRegistry.registry.register({
        displayText: "Remove from favorite",
        preconditionFn: function (scope) {
          let type = scope.block.type;
          if (val === null) {
            return "disabled";
          }
          if (val.includes(type)) {
            return "enabled";
          } else {
            return "disabled";
          }
        },
        callback: async function (scope) {
          let type = scope.block.type;
          function arrayRemove(arr, value) {
            return arr.filter(function (ele) {
              return ele != value;
            });
          }
          if (
            arrayRemove(await localforage.getItem("fav"), type).length === 0
          ) {
            await localforage.setItem("fav", null);
            val =
              (await localforage.getItem("fav")) === null
                ? null
                : await localforage.getItem("fav");
            var new_toolbox_xml = prepToolbox(
              toolbox(val),
              false,
              val
            );
            workspace.updateToolbox(new_toolbox_xml);
          } else {
            await localforage.setItem(
              "fav",
              arrayRemove(await localforage.getItem("fav"), type)
            );
            val =
              (await localforage.getItem("fav")) === null
                ? null
                : await localforage.getItem("fav");
            var new_toolbox_xml = prepToolbox(
              toolbox(val),
              false,
              val
            );
            workspace.updateToolbox(new_toolbox_xml);
          }
        },
        scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
        id: "refav",
        weight: 100,
      });
      Blockly.Xml.domToWorkspace(dom, newWorkspace);
      // Update the workspace in the vuex store
      if (allow_toolbox_search) {
        try {
          Blockly.ContextMenuRegistry.registry.register({
            displayText: "Search for block",
            preconditionFn: function () {
              return "enabled";
            },
            callback: function () {
              //    reloadWorkspace2(newWorkspace, true)
              var new_toolbox_xml = prepToolbox(
                toolbox(val),
                true,
                val
              );
              workspace.updateToolbox(new_toolbox_xml);
            },
            scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
            id: "searchblock",
            weight: 99,
          });
        } catch {}
      }
    }

    if (allow_toolbox_search) {
      Blockly.ContextMenuRegistry.registry.register({
        displayText: "Search for block",
        preconditionFn: function () {
          return "enabled";
        },
        callback: function () {
          var new_toolbox_xml = prepToolbox(
            toolbox(val),
            true,
            val
          );
          workspace.updateToolbox(new_toolbox_xml);
        },
        scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
        id: "searchblock",
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
    localforage.getItem("utilitiesShortcuts").then((item) => {
      if (item != false) {
        window.addEventListener("keydown", (e) => {
          // console.log(e)
          // console.log(e.key)
          /*if (e.shiftKey) {
        if (e.key == "Y") {
            console.log(">")
            Blockly.getMaainWorkspace().getAllBlocks().forEach(block => {
                console.log("rendered:", block.rendered)
                console.log(">")
            })
        }
        if (e.key == "U") {
            Blockly.getMaainWorkspace().getAllBlocks().forEach(block => {
                block.rendered = !block.rendered
            })
        }
        if (e.key == "B") {
            Blockly.getMaainWorkspace().getAllBlocks().forEach(block => {
                console.log(block.width + ",", block.height)
            })
        }
    }*/
          if (e.altKey) {
            console.log(e.key);
            if (
              e.key == "t" ||
              e.key == "n" ||
              e.key == "m" ||
              e.key == "c" ||
              e.key == "e" ||
              e.key == "a" ||
              e.key == "w" ||
              e.key == "b" ||
              e.key == "i" ||
              e.key == "=" ||
              e.key == "n" ||
              e.key == "N" ||
              e.key == "A"
            ) {
              if (e.key == "t") {
                var blockToPlace = "text";
              } else if (e.key == "m") {
                var blockToPlace = "s4d_message_content";
              } else if (e.key == "c") {
                var blockToPlace = "colour_picker";
              } else if (e.key == "e") {
                var blockToPlace = "frost_other_err";
              } else if (e.key == "A" && e.shiftKey) {
                var blockToPlace = "logic_operation";
              } else if (e.key == "a") {
                var blockToPlace = "s4d_message_author";
              } else if (e.key == "w") {
                var blockToPlace = "s4d_on_message";
              } else if (e.key == "b") {
                var blockToPlace = "logic_boolean";
              } else if (e.key == "i") {
                var blockToPlace = "controls_if";
              } else if (e.key == "=") {
                var blockToPlace = "logic_compare";
              } else if (e.key == "N" && e.shiftKey) {
                var blockToPlace = "logic_negate";
              } else if (e.key == "n") {
                var blockToPlace = "math_number";
              }
              let workspace_xml = Blockly.Xml.domToPrettyText(
                Blockly.Xml.workspaceToDom(workspace)
              );
              let xml_blocks = workspace_xml.split("\n");
              var xpos = [];
              var ypos = [];
              for (var count = 0; count < xml_blocks.length; count++) {
                var current = xml_blocks[count];
                if (
                  current.includes('<block type="') &&
                  current.includes('x="') &&
                  current.includes('y="')
                ) {
                  xpos.push(
                    current.substring(
                      current.indexOf('x="') + 3,
                      current.indexOf(' y="') - 1
                    )
                  );
                  ypos.push(
                    current.substring(
                      current.indexOf('y="') + 3,
                      current.indexOf('">')
                    )
                  );
                }
              }
              if (xpos && ypos) {
                var dx = xpos.slice(-1)[0];
                var dy = ypos.slice(-1)[0];
              } else {
                var dx = 0;
                var dy = 0;
              }
              if (Blockly.selected) {
                let selected = Blockly.selected.toCopyData();
                var dx = selected.saveInfo.x;
                var dy = selected.saveInfo.y;
              }
              let xml = Blockly.Xml.textToDom(
                `<block type="${blockToPlace}"></block>`
              );
              let block = Blockly.Xml.domToBlock(xml, workspace);
              if (Number(dx) && Number(dy)) {
                block.moveBy(Number(dx), Number(dy));
              }
            } else if (e.ctrlKey) {
              if (Blockly.selected) {
                let xml = Blockly.Xml.blockToDom(Blockly.selected);
                let block = Blockly.Xml.domToBlock(xml, workspace);
                let selected = Blockly.selected.toCopyData();
                let dx = selected.saveInfo.x;
                let dy = selected.saveInfo.y;
                block.moveBy(Number(dx) + 5, Number(dy) + 5);
              }
            }
          }
        });
      }
    });

    window.s4dDebugEvents.push(() => {
      Blockly.ContextMenuRegistry.registry.register({
        displayText: "Spawn block via Internal name",
        preconditionFn: function () {
          return "enabled";
        },
        callback: function () {
          let input = prompt("Block Internal Name");
          if (!input) {
            return;
          }
          let xml = Blockly.Xml.textToDom(
            '<xml><block type="' + input + '"></block></xml>'
          );
          try {
            Blockly.Xml.appendDomToWorkspace(xml, workspace);
          } catch (err) {
            console.log("could not spawn block!", err);
            alert(
              `Block ${String(
                input
              )} does not exist or was not defined correctly`
            );
          }
        },
        scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
        id: "spawnblock",
        weight: 500,
      });
      Blockly.ContextMenuRegistry.registry.register({
        displayText: "Spawn all toolblocks",
        preconditionFn: function () {
          return "enabled";
        },
        callback: function () {
          prepToolbox(
            toolbox(val),
            "baiuyfg8iu4ewf643o8ir",
            null,
            workspace
          );
        },
        scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
        id: "spawnalltoolblocks",
        weight: 9990,
      });
      Blockly.ContextMenuRegistry.registry.register({
        displayText: "Spawn all toolblocks (ordered)",
        preconditionFn: function () {
          return "enabled";
        },
        callback: function () {
          prepToolbox(
            toolbox(val),
            "f9u42r8hg329rehsfhoiewgf37",
            null,
            workspace
          );
        },
        scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
        id: "spawnalltoolblocks2",
        weight: 9995,
      });
      Blockly.ContextMenuRegistry.registry.register({
        displayText: "Recolor all blocks",
        preconditionFn: function () {
          return "enabled";
        },
        callback: function () {
          let color = prompt("New color?");
          workspace.getAllBlocks().forEach((block) => {
            try {
              if (color == "random") {
                let array = [
                  "0",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "A",
                  "B",
                  "C",
                  "D",
                  "E",
                  "F",
                ];
                let random = "#";
                for (let i = 0; i < 6; i++) {
                  random += array[Math.floor(Math.random() * 15)];
                }
                block.setColour(random);
              } else block.setColour(color);
            } catch (err) {
              console.warn(err);
            }
          });
        },
        scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
        id: "recolorallblocks",
        weight: 10000,
      });
      Blockly.ContextMenuRegistry.registry.register({
        displayText: "Log Workspace XML",
        preconditionFn: function () {
          return "enabled";
        },
        callback: function () {
          console.log(
            Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(workspace))
          );
        },
        scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
        id: "logworkspacexml",
        weight: 10005,
      });
    });

    if (
      window.location.href.includes(
        "deploy-preview-469--scratch-for-discord.netlify.app"
      )
    ) {
      Blockly.ContextMenuRegistry.registry.register({
        displayText: "Go to Vercel",
        preconditionFn: function () {
          return "enabled";
        },
        callback: function () {
          window.location.href = "https://scratch-for-discord-469.vercel.app/";
        },
        scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
        id: "vercel",
        weight: 0,
      });

      Blockly.ContextMenuRegistry.registry.register({
        displayText: "Go to Vercel",
        preconditionFn: function () {
          return "enabled";
        },
        callback: function () {
          window.location.href = "https://scratch-for-discord-469.vercel.app/";
        },
        scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
        id: "vercel2",
        weight: 0,
      });
    }

    function blockCounter() {
      const ALLBLOCKS = workspace.getAllBlocks();
      let counter = document.getElementById("block-counter");
      let blocks = String(ALLBLOCKS.length);
      var rgb = "182, 182, 182";
      var bold = ["", ""];
      if (Number(blocks) >= 300) {
        rgb = "255, 125, 125";
        bold = ["<b>", "</b>"];
      }
      if (Number(blocks) >= 750) {
        rgb = "255, 60, 60";
        bold = ["<b><strong>", "</strong></b>"];
      }
      if (Number(blocks) >= 5000) {
        rgb = "255, 35, 35";
        bold = ['<b style="font-size: 110%"><strong>', "</strong></b>"];
      }
      if (Number(blocks) >= 10000) {
        rgb = "255, 20, 20";
        bold = ['<b style="font-size: 125%"><strong>', "</strong></b>"];
      }
      let s = "s";
      if (Number(blocks) == 1) {
        s = "";
      } else {
        s = "s";
      }
      let iagfbekjf = true;
      ALLBLOCKS.forEach((block) => {
        if (block.type == "jg_s4d_themes_set_navigation_bar_button_color_to") {
          counter.innerHTML =
            bold[0] +
            `<p id="block-counter-textParagraph">${blocks} block${s}</p>` +
            bold[1];
          iagfbekjf = false;
          return;
        }
      });
      if (iagfbekjf)
        counter.innerHTML =
          bold[0] +
          `<p id="block-counter-textParagraph" style="color:rgb(${rgb});">${blocks} block${s}</p>` +
          bold[1];
    }
    localforage.getItem("hide-blockcount").then((item) => {
      if (String(item) == "true") {
        let counter = document.getElementById("block-counter");
        counter.remove();
      }
    });
    window.addEventListener("click", () => {
      localforage.getItem("hide-blockcount").then((item) => {
        if (String(item) == "true") {
          return;
        }
        blockCounter();
      });
    });
    window.addEventListener("keydown", () => {
      localforage.getItem("hide-blockcount").then((item) => {
        if (String(item) == "true") {
          return;
        }
        blockCounter();
      });
    });
    // EPIC sdeloz renderer code
    const SDELOZRenderer = function (name) {
      SDELOZRenderer.superClass_.constructor.call(this, name);
    };
    Blockly.utils.object.inherits(SDELOZRenderer, Blockly.zelos.Renderer);
    Blockly.blockRendering.register("sdeloz", SDELOZRenderer);
    /*
Blockly.getMaainWorkspace().addChangeListener(blockCounter(Blockly.getMaainWorkspace()))
*/
    // Comment this context menu out later!
    // 👍
    // jk no!!

    window.s4dDebugEvents.push(() => {
      Blockly.ContextMenuRegistry.registry.register({
        displayText: "Log all Toolbox blocks",
        preconditionFn: function () {
          return "enabled";
        },
        callback: function () {
          logtoolblocks(true);
        },
        scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
        id: "logtoolblocks",
        weight: 500,
      });
    });

    let val =
      (await localforage.getItem("fav")) === null
        ? null
        : await localforage.getItem("fav");
    setInterval(async () => {
      val =
        (await localforage.getItem("fav")) === null
          ? null
          : await localforage.getItem("fav");
    }, 1000);

    function svgToPng_(data, width, height, callback) {
      var canvas = document.createElement("canvas");
      var context = canvas.getContext("2d");
      var img = new Image();

      var pixelDensity = 5;
      let maxScaleI = 4096;
      var highestCScale = 0;
      var newWidth = width * pixelDensity;
      var newHeight = height * pixelDensity;

      if (newWidth > maxScaleI || newHeight > maxScaleI) {
        if (newWidth > newHeight) {
          highestCScale = newWidth;
        } else {
          highestCScale = newHeight;
        }
        newWidth = Math.round((newWidth / highestCScale) * maxScaleI);
        newHeight = Math.round((newHeight / highestCScale) * maxScaleI);
      }

      // newWidth = 4096
      // newHeight = 4096

      canvas.width = newWidth;
      canvas.height = newHeight;
      img.onload = function () {
        context.drawImage(
          img,
          0,
          0,
          width,
          height,
          0,
          0,
          canvas.width,
          canvas.height
        );
        try {
          var dataUri = canvas.toDataURL("image/png");
          callback(dataUri);
        } catch (err) {
          console.warn("Error converting the workspace svg to a png");
          callback("");
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
      clone.removeAttribute("transform");

      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.appendChild(clone);
      svg.setAttribute("viewBox", x + " " + y + " " + width + " " + height);

      svg.setAttribute(
        "class",
        "blocklySvg " +
          (workspace.options.renderer || "geras") +
          "-renderer " +
          (workspace.getTheme ? workspace.getTheme().name + "-theme" : "")
      );
      svg.setAttribute("width", width);
      svg.setAttribute("height", height);
      svg.setAttribute("style", "background-color: transparent");

      var css = [].slice
        .call(document.head.querySelectorAll("style"))
        .filter(function (el) {
          return (
            /\.blocklySvg/.test(el.innerText) || el.id.indexOf("blockly-") === 0
          );
        })
        .map(function (el) {
          return el.innerText;
        })
        .join("\n");
      var style = document.createElement("style");
      style.innerHTML = css + "\n" + customCss;
      svg.insertBefore(style, svg.firstChild);

      var svgAsXML = new XMLSerializer().serializeToString(svg);
      svgAsXML = svgAsXML.replace(/&nbsp/g, "&#160");
      var data = "data:image/svg+xml," + encodeURIComponent(svgAsXML);

      svgToPng_(data, width, height, callback);
    }

    Blockly.downloadScreenshot = function (workspace) {
      workspaceToSvg_(workspace, function (datauri) {
        var a = document.createElement("a");
        a.download = "screenshot.png";
        a.target = "_self";
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
          scaleSpeed: 1.2,
        },
        move: {
          scrollbars: {
            horizontal: true,
            vertical: true,
          },
          drag: true,
          wheel: true,
        },
        toolbox: prepToolbox(toolbox(val), false, val),
      },
    });
    window.blocklyWorkspaceThatIneedtoUseForThingsLaigwef9o8wifnwp4e =
      workspace;
    /*
        let testCategoryXMLContents = `<button text="Create" callbackKey="CREATETESTVARIABLE"></button>`
        workspace.registerToolboxCategoryCallback("VARIABLETESTREMAKE", function () {
            const button = document.createElement("button")
            button.setAttribute("text", "Create")
            button.setAttribute("callbackKey", "CREATETESTVARIABLE")
            return [button]
        })
        let currentTestVariableName = 0
        let currentTestVariableNameLength = 1
        workspace.registerButtonCallback('CREATETESTVARIABLE', function () {
            const allowedCharacters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`.split("")
            let varName = ""
            for (let i = 0; i < currentTestVariableNameLength; i++) {
                varName += allowedCharacters[currentTestVariableName]
            }
            currentTestVariableName++
            if (currentTestVariableName > allowedCharacters.length - 1) {
                currentTestVariableName = 0
                currentTestVariableNameLength++
            }
            Blockly.Blocks["jg_test_variables_" + varName] = {
                init: function () {
                    this.jsonInit({
                        "message0": varName,
                        "inputsInline": true,
                        "tooltip": "",
                        "colour": "#ff0000",
                        "output": null,
                        "args0": []
                    });
                }
            }
            Blockly.JavaScript["jg_test_variables_" + varName] = function () {
                const code = `${varName}`
                return code;
            };
            const toolbox = workspace.toolbox_
            const category = toolbox.getToolboxItems()[10]
            testCategoryXMLContents += `<block type="jg_test_variables_${varName}"/>`
            console.log(category.getContents())
            category.flyoutItems_ = testCategoryXMLContents
            console.log(category.getContents())
            toolbox.refreshSelection()
        });
        */
    workspace.registerButtonCallback("LAUNCHCUSTOMBLOCKBUILDER", function () {
      const menu = blocklyModule.menus.createMenu({
        width: 1280,
        height: 720,
        title: "Custom Block Builder",
        zindex: 999,
      });
      const inlineDiv = document.createElement("div")
      inlineDiv.style.display = "flex"
      menu.content.append(inlineDiv)
      const blocklyDiv = document.createElement("div");
      blocklyDiv.style.flex = "0 0 85%"
      blocklyDiv.style.width = "85%";
      blocklyDiv.style.height = "720px";
      inlineDiv.append(blocklyDiv);
      const ntheme = customBlockBuilderTheme
      ntheme.setFontStyle({
        family: "monospace"
      })
      const customBlockWorkspace = Blockly.inject(blocklyDiv, {
        renderer: renderer,
        grid: {
          spacing: 25,
          length: 3,
          colour: "#ccc",
        },
        theme: ntheme,
        zoom: {
          controls: true,
          startScale: 0.9,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2,
        },
        move: {
          scrollbars: {
            horizontal: true,
            vertical: true,
          },
          drag: true,
          wheel: true,
        },
        disable: false,
        comments: false,
        toolbox: customBlockModule.toolbox,
      });
      const exportInitBlock = Blockly.Xml.domToBlock(Blockly.Xml.textToDom('<block type="jg_s4d_customBlocks_builder1_exportInit"/>'), customBlockWorkspace)
      exportInitBlock.setDeletable(false)
      const exportJavascriptBlock = Blockly.Xml.domToBlock(Blockly.Xml.textToDom('<block type="jg_s4d_customBlocks_builder1_exportJavascript"/>'), customBlockWorkspace)
      exportJavascriptBlock.setDeletable(false)
      exportInitBlock.moveBy(100, 100)
      exportJavascriptBlock.moveBy(600, 100)
      const buttonDiv = document.createElement("div")
      buttonDiv.style.flex = "1"
      const blockNameInput = document.createElement("input")
      blockNameInput.value = "MyBlock"
      blockNameInput.placeholder = "Block Name"
      blockNameInput.style.width = "100%"
      blockNameInput.type = "text"
      blockNameInput.oninput = () => {
        let a = String(customBlockModule.createCustomBlockID(blockNameInput.value))
        const name = a.substring(a.lastIndexOf("_") + 1, a.length)
        if (name != blockNameInput.value) blockNameInput.value = name
      };
      buttonDiv.append(blockNameInput);
      buttonDiv.append(document.createElement("br"));
      const createButton = menu.createDecoratedButton();
      createButton.style.margin = "0px"
      createButton.style.width = "100%"
      createButton.innerHTML = "Create Block";
      createButton.onclick = () => {
        customBlockModule.createCustomBlock(customBlockModule.createCustomBlockID(blockNameInput.value), customBlockModule.stringToCustomBlockData(Blockly.JavaScript.workspaceToCode(customBlockWorkspace)));
        console.log(Blockly.JavaScript.workspaceToCode(customBlockWorkspace))
      };
      buttonDiv.append(createButton);
      const customBlockDeletorDiv = document.createElement("div")
      customBlockDeletorDiv.classList.add("s4d_customblocks_manager_deletor")
      let customBlocksInMemory = 0
      const intv = setInterval(() => {
        if (customBlocksInMemory == window.customBlocks.length) return
        console.log("updated custom block list!")
        customBlockDeletorDiv.innerHTML = ""
        window.customBlocks.forEach(blockName => {
          const button = document.createElement("button")
          let a = blockName
          const name = String(a.substring(a.lastIndexOf("_") + 1, a.length)).replace(/[^a-zA-Z0-9]/gmi, "")
          button.innerHTML = name
          button.onclick = () => {
            const usurebro = confirm("Are you sure you want to delete " + name + "?")
            if (!usurebro) return
            let target
            window.saveCustomBlocksOutput.forEach(b => {
              if (b.name == blockName) target = b
            })
            if (!target) return alert("This block does not exist anymore!")
            window.blocklyWorkspaceThatIneedtoUseForThingsLaigwef9o8wifnwp4e.getAllBlocks().forEach(block => {
              if (block.type == blockName) block.dispose()
            })
            window.customBlocks.splice(window.customBlocks.indexOf(blockName), 1)
            window.saveCustomBlocksOutput.splice(window.saveCustomBlocksOutput.indexOf(target), 1)
            localforage.setItem(
              "autosave_customBlocks",
              JSON.stringify(window.saveCustomBlocksOutput)
            );
            window.loadtoolltovobocaopjsd9fuw4fpoewjoiphgf9ewpojndsfoihgew8ninjagoLOllioolo2222222222222();
            window.blocklyWorkspaceThatIneedtoUseForThingsLaigwef9o8wifnwp4e.toolbox_.clearSelection()
          }
          customBlockDeletorDiv.append(button)
        })
        customBlocksInMemory = window.customBlocks.length
      }, 100);
      menu.onclosed = () => {
        clearInterval(intv)
      }
      buttonDiv.append(customBlockDeletorDiv)
      inlineDiv.append(buttonDiv)
    });
    workspace.registerButtonCallback("FFMPEG", function () {
      swal.fire("Hey uhh..", "This isn't quite done yet...", "info");
    });
    workspace.registerButtonCallback("EMBED_GUI_POPUP", function () {
      swal
        .fire({
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
          confirmButtonText: "Import to Workspace",
        })
        .then(async (result) => {
          if (!result.isConfirmed) return;
          const edesc = validateForXML(
            document.getElementById("EmbedDescription").value
          );
          const etitle = validateForXML(
            document.getElementById("EmbedTitle").value
          );
          const etitleurl = validateForXML(
            document.getElementById("EmbedTitleURL").value
          );
          const ecolor = validateForXML(
            document.getElementById("EmbedColor").value
          );
          const eauthor = validateForXML(
            document.getElementById("EmbedAuthor").value
          );
          const eauthorpfp = validateForXML(
            document.getElementById("EmbedAuthorPFP").value
          );
          const eauthorurl = validateForXML(
            document.getElementById("EmbedAuthorURL").value
          );
          // blocks are placed even if they arent required because blockly is dumb and has a stupid method of placing multiple blocks inside of statement inputs
          let xml = Blockly.Xml.textToDom(`<block type="s4d_embed_create">
    <statement name="THEN">
        <block type="s4d_embed_set_title">
            <value name="TITLE">
                ${
                  etitle
                    ? `<block type="jg_text_remake_paragraph_quotes">
                    <field name="TEXT">${etitle}</field>
                </block>`
                    : ""
                }
            </value>
            <value name="HYPERLINK">
                ${
                  etitleurl
                    ? `<block type="jg_text_remake_paragraph_quotes">
                    <field name="TEXT">${etitleurl}</field>
                </block>`
                    : ""
                }
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
                                ${
                                  etitle
                                    ? `<block type="fz_color">
                                    <field name="COLOR">${ecolor}</field>
                                </block>`
                                    : ""
                                }
                            </value>
                            <next>
                                <block type="s4d_embed_set_author">
                                    <value name="AUTHOR">
                                        ${
                                          eauthor
                                            ? `<block type="jg_text_remake_paragraph_quotes">
                                            <field name="TEXT">${eauthor}</field>
                                        </block>`
                                            : ""
                                        }
                                    </value>
                                    <value name="PROFILE">
                                        ${
                                          eauthorpfp
                                            ? `<block type="jg_text_remake_paragraph_quotes">
                                            <field name="TEXT">${eauthorpfp}</field>
                                        </block>`
                                            : ""
                                        }
                                    </value>
                                    <value name="URL">
                                        ${
                                          eauthorurl
                                            ? `<block type="jg_text_remake_paragraph_quotes">
                                            <field name="TEXT">${eauthorurl}</field>
                                        </block>`
                                            : ""
                                        }
                                    </value>
                                </block>
                            </next>
                        </block>
                    </next>
                </block>
            </next>
        </block>
    </statement>
</block>`);
          let block = Blockly.Xml.domToBlock(xml, workspace);
          workspace.centerOnBlock(block.id);
        });
    });
    window.loadtoolltovobocaopjsd9fuw4fpoewjoiphgf9ewpojndsfoihgew8ninjagoLOllioolo2222222222222 =
      () => {
        let new_toolbox_xml = prepToolbox(
          toolbox(val),
          false,
          val,
          workspace,
          null
        );
        workspace.updateToolbox(new_toolbox_xml);
      };
    workspace.registerButtonCallback("SEARCH", function () {
      // const wrapper = document.createElement('div');
      // wrapper.innerHTML = `<input type="text" id="block">`
      if (isMobile()) {
        let res = String(prompt("Search for a block:"));
        let block = res
          .replaceAll(" ", "_")
          .replaceAll("<", "_")
          .replaceAll(">", "_")
          .replaceAll("/", "_");
        let new_toolbox_xml = prepToolbox(toolbox(val), true, val, workspace, block);
        workspace.toolbox_.clearSelection()
        workspace.updateToolbox(new_toolbox_xml);
        workspace.toolbox_.clearSelection()
        return;
      }
      swal
        .fire({
          title: "Search for a block",
          // html: wrapper,
          html: `<input type="text" id="block">`,
          showCancelButton: true,
          showConfirmButton: true,
          confirmButtonText: "Search",
        })
        .then(async (result) => {
          if (result) {
            let block = document
              .getElementById("block")
              .value.replaceAll(" ", "_")
              .replaceAll("<", "_")
              .replaceAll(">", "_")
              .replaceAll("/", "_");
            let new_toolbox_xml = prepToolbox(toolbox(val), true, val, workspace, block);
            workspace.toolbox_.clearSelection()
            workspace.updateToolbox(new_toolbox_xml);
            workspace.toolbox_.clearSelection()
          }
        });
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
        if (hex.indexOf("#") === 0) {
          hex = hex.slice(1);
        }
        // convert 3-digit hex to 6-digits.
        if (hex.length === 3) {
          hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        if (hex.length !== 6) {
          throw new Error("Invalid HEX color.");
        }
        // invert color components
        var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
          g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
          b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
        // pad each with zeros and return
        return "#" + padZero(r) + padZero(g) + padZero(b);
      }
      function padZero(str, len) {
        len = len || 2;
        var zeros = new Array(len).join("0");
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
      const eventBlockSVGRegex =
        / m 0,0  m 0,4 a 4 4 0 0,1 4,-4  h [0-9\.]* a 4 4 0 0,1 4,4  v 4  V 8  V 40  V 44 a 4 4 0 0,1 -4,4  H 64  c -2,0  -3,1  -4,2  l -4,4  c -1,1  -2,2  -4,2  h -12/gim;
      const outputBlockSVGRegex =
        / m [0-9]*,0  h [0-9\.]* a 20 20 0 0,1 20,20  v 0 a 20 20 0 0,1 -20,20  V 40  h [0-9\.-]* a 20 20 0 0,1 -20,-20  v 0 a 20 20 0 0,1 20,-20 z/gim;
      if (specialTag == "scratch-top") {
        const elem2ents = document.getElementsByClassName("blocklyDraggable");
        for (let i = 0; i < elem2ents.length; i++) {
          let current2 = elem2ents.item(i);
          if (current2 == null) continue;
          const elements = current2.getElementsByClassName("blocklyPath");
          for (let i = 0; i < elements.length; i++) {
            let current = elements.item(i);
            if (current == null) continue;
            if (current.getAttribute("d") == null) continue;
            if (current.getAttribute("d").match(eventBlockSVGRegex) != null) {
              const width = Number(
                current
                  .getAttribute("d")
                  .match(/h [0-9\.]*/im)[0]
                  .replace("h ", "")
              );
              current.setAttribute(
                "d",
                `m 0 0 c 25 -22 71 -22 96 0 H ${
                  width + 3.5
                } a 4 4 0 0 1 4 4 v 40 a 4 4 0 0 1 -4 4 H 48 c -2 0 -3 1 -4 2 l -4 4 c -1 1 -2 2 -4 2 h -12 c -2 0 -3 -1 -4 -2 l -4 -4 c -1 -1 -2 -2 -4 -2 H 4 a 4 4 0 0 1 -4 -4 z`
              );
              const asfcwsge =
                current2.getElementsByClassName("blocklyDraggable");
              if (asfcwsge.item(0) != null)
                asfcwsge
                  .item(0)
                  .setAttribute("transform", "translate(0,48.000000000000114)");
            } else {
              continue;
            }
          }
        }
      }
      if (specialTag == "text-only") {
        const elem2ents = document.getElementsByClassName("blocklyPath");
        for (let i = 0; i < elem2ents.length; i++) {
          let current = elem2ents.item(i);
          current.setAttribute("d", "");
        }
      }
      if (specialTag == "april-fools") {
        document.getElementById(
          "navSpace"
        ).style = `background-color: rgb(255, 0, 255);`;
        document
          .getElementsByClassName("blocklyMainBackground")
          .item(0).style = `fill:#00ff00;`;
        const text = document.getElementsByTagName("text");
        for (let i = 0; i < text.length; i++) {
          let current = text.item(i);
          if (
            String(current.style).includes(
              `font-family: Comic Sans MS!important;`
            )
          )
            return;
          current.style = `font-family: Comic Sans MS!important;`;
        }
        const images4d = document.getElementById("navigationBarS4DImage");
        images4d.setAttribute("width", "10");
        images4d.setAttribute("height", "45");
        const elem2ents = document.getElementsByClassName("blocklyDraggable");
        for (let i = 0; i < elem2ents.length; i++) {
          let current2 = elem2ents.item(i);
          if (current2 == null) continue;
          const elements = current2.getElementsByClassName("blocklyPath");
          for (let i = 0; i < elements.length; i++) {
            let current = elements.item(i);
            if (current == null) continue;
            if (current.getAttribute("d") == null) continue;
            if (current.getAttribute("d").match(outputBlockSVGRegex) != null) {
              let width =
                Number(
                  current
                    .getAttribute("d")
                    .match(/h [0-9\.]*/im)[0]
                    .replace("h ", "")
                ) - 55;
              const VISOR_WIDTH = width < 0 ? 0 : width;
              current.setAttribute(
                "d",
                `m 77 0 h ${VISOR_WIDTH} a 20 20 0 0 1 20 20 v 0 a 20 20 0 0 1 -20 20 V 40 H 77 V 112 A 1 1 0 0 1 42 111 A 1 1 0 0 0 16 111 A 1 1 0 0 1 -18 111 V 74 H -29 C -35 74 -36 73 -36 67 V 5 C -36 -1 -35 -2 -29 -2 H -18 A 1 1 0 0 1 76 0`
              );
            } else {
              continue;
            }
          }
        }
      }
      const elements = document.getElementsByTagName("path");
      for (let i = 0; i < elements.length; i++) {
        let current = elements.item(i);
        if (current.getAttribute("stroke") == null) continue;
        if (current.getAttribute("fill") == null) continue;
        if (specialTag == "invert") {
          if (current.getAttribute("strokeORG") == null)
            current.setAttribute("strokeORG", current.getAttribute("stroke"));
          if (current.getAttribute("fillORG") == null)
            current.setAttribute("fillORG", current.getAttribute("fill"));
          current.setAttribute(
            "stroke",
            invertColor(String(current.getAttribute("strokeORG")))
          );
          current.setAttribute(
            "fill",
            invertColor(String(current.getAttribute("fillORG")))
          );
        }
        if (specialTag == "pastel") {
          if (current.getAttribute("strokeORG") == null)
            current.setAttribute("strokeORG", current.getAttribute("stroke"));
          if (current.getAttribute("fillORG") == null)
            current.setAttribute("fillORG", current.getAttribute("fill"));
          let rgb = hexToRgb(current.getAttribute("fillORG").substring(1));
          let r = rgb[0] + 72 > 255 ? 255 : rgb[0] + 72;
          let g = rgb[1] + 72 > 255 ? 255 : rgb[1] + 72;
          let b = rgb[2] + 72 > 255 ? 255 : rgb[2] + 72;
          let newRgb = rgbToHex(r, g, b);
          current.setAttribute("fill", newRgb);
          rgb = hexToRgb(current.getAttribute("strokeORG").substring(1));
          r = rgb[0] + 72 > 255 ? 255 : rgb[0] + 72;
          g = rgb[1] + 72 > 255 ? 255 : rgb[1] + 72;
          b = rgb[2] + 72 > 255 ? 255 : rgb[2] + 72;
          newRgb = rgbToHex(r, g, b);
          current.setAttribute("stroke", newRgb);
        }
        if (specialTag == "textless") {
          let elements = document.getElementsByClassName("blocklyText");
          for (let i = 0; i < elements.length; i++) {
            let current = elements.item(i);
            current.remove();
          }
          elements = document.getElementsByClassName(
            "blocklyText blocklyDropdownText"
          );
          for (let i = 0; i < elements.length; i++) {
            let current = elements.item(i);
            current.remove();
          }
          elements = document.getElementsByClassName(
            "blocklyMenuItemContent goog-menuitem-content"
          );
          for (let i = 0; i < elements.length; i++) {
            let current = elements.item(i);
            current.remove();
          }
          elements = document.getElementsByClassName("blocklyFlyoutLabelText");
          for (let i = 0; i < elements.length; i++) {
            let current = elements.item(i);
            current.remove();
          }
          elements = document.getElementsByClassName(
            "blocklyMenuItemContent goog-menuitem-content"
          );
          for (let i = 0; i < elements.length; i++) {
            let current = elements.item(i);
            current.remove();
          }
          elements = document.getElementsByClassName("blocklyTreeLabel");
          for (let i = 0; i < elements.length; i++) {
            let current = elements.item(i);
            current.remove();
          }
        }
        if (specialTag == "toon") {
          let celements = document.getElementsByClassName(
            "blocklyFieldRect blocklyDropdownRect"
          );
          for (let i = 0; i < celements.length; i++) {
            let current = celements.item(i);
            if (strokeColor != null)
              current.setAttribute("stroke", strokeColor);
          }
        }
        if (specialTag == "neo") {
          current.setAttribute("stroke-width", "3");
          let celements = document.getElementsByClassName(
            "blocklyEditableText"
          );
          for (let i = 0; i < celements.length; i++) {
            let current = celements.item(i);
            let c2elements = current.getElementsByClassName("blocklyFieldRect");
            for (let i = 0; i < c2elements.length; i++) {
              let current = c2elements.item(i);
              current.setAttribute("style", `fill:${fillColor}`);
              current.setAttribute("stroke-width", "3");
            }
            c2elements = current.getElementsByClassName("blocklyText");
            for (let i = 0; i < c2elements.length; i++) {
              let current = c2elements.item(i);
              current.setAttribute("style", "fill:#ffffff");
            }
          }
          celements = document.getElementsByClassName(
            "blocklyFieldRect blocklyDropdownRect"
          );
          for (let i = 0; i < celements.length; i++) {
            let current = celements.item(i);
            current.setAttribute("stroke-width", "3");
          }
        }
        if (specialTag == "gray") {
          if (current.getAttribute("strokeORG") == null)
            current.setAttribute("strokeORG", current.getAttribute("stroke"));
          if (current.getAttribute("fillORG") == null)
            current.setAttribute("fillORG", current.getAttribute("fill"));
          let rgb = hexToRgb(current.getAttribute("fillORG").substring(1));
          let r = rgb[0];
          let newRgb = rgbToHex(r, r, r);
          current.setAttribute("fill", newRgb);
          rgb = hexToRgb(current.getAttribute("strokeORG").substring(1));
          r = rgb[0];
          newRgb = rgbToHex(r, r, r);
          current.setAttribute("stroke", newRgb);
          let elements = document.getElementsByClassName("blocklyText");
          for (let i = 0; i < elements.length; i++) {
            let current = elements.item(i);
            current.setAttribute("style", "fill:#ffffff");
            current.setAttribute("stroke", "#000000");
          }
          elements = document.getElementsByClassName("blocklyFieldRect");
          for (let i = 0; i < elements.length; i++) {
            let current = elements.item(i);
            current.setAttribute("stroke", newRgb);
          }
        }
        if (specialTag == "glow") {
          let celements = document.getElementsByClassName("blocklyText");
          for (let i = 0; i < celements.length; i++) {
            let current = celements.item(i);
            current.setAttribute("specializedCSS", "glow");
          }
          celements = document.getElementsByClassName("blocklyEditableText");
          for (let i = 0; i < celements.length; i++) {
            let current = celements.item(i);
            let celements2 = current.getElementsByClassName("blocklyText");
            for (let i = 0; i < celements2.length; i++) {
              let current = celements2.item(i);
              current.setAttribute("specializedCSS", "darkglow");
            }
          }
        }
        if (specialTag == "full-colors") {
          let rgb = hexToRgb(current.getAttribute("fill").substring(1));
          let r = rgb[0] >= 128 ? 255 : 0;
          let g = rgb[1] >= 128 ? 255 : 0;
          let b = rgb[2] >= 128 ? 255 : 0;
          let newRgb = rgbToHex(r, g, b);
          current.setAttribute("fill", newRgb);
          current.setAttribute("stroke", newRgb);
          let celements = document.getElementsByClassName(
            "blocklyFieldRect blocklyDropdownRect"
          );
          for (let i = 0; i < celements.length; i++) {
            let current = celements.item(i);
            current.setAttribute("stroke-width", "0");
          }
          celements = document.getElementsByClassName("blocklyFieldRect");
          for (let i = 0; i < celements.length; i++) {
            let current = celements.item(i);
            current.setAttribute("stroke-width", "0");
          }
          celements = document.getElementsByClassName("blocklyOutlinePath");
          for (let i = 0; i < celements.length; i++) {
            let current = celements.item(i);
            current.setAttribute("fill", newRgb);
          }
        }
        if (strokeColor != null) current.setAttribute("stroke", strokeColor);
        if (fillColor != null) current.setAttribute("fill", fillColor);
      }
    }
    setInterval(themeSwitchingHandler, 50);
    function themeSwitchingHandler() {
      localforage.getItem("utilitiesTheme").then((theme) => {
        switch (theme) {
          case "neo":
            themeBlocks(null, "#202020", "neo");
            break;
          case "toon":
            themeBlocks("#000000", null, "toon");
            break;
          case "invert":
            themeBlocks(null, null, "invert");
            break;
          case "pastel":
            themeBlocks(null, null, "pastel");
            break;
          case "textless":
            themeBlocks(null, null, "textless");
            break;
          case "gray":
            themeBlocks(null, null, "gray");
            break;
          case "glow":
            themeBlocks(null, null, "glow");
            break;
          case "scratch-top":
            themeBlocks(null, null, "scratch-top");
            break;
          case "full-colors":
            themeBlocks(null, null, "full-colors");
            break;
          case "text-only":
            themeBlocks(null, null, "text-only");
            break;
        }
      });
    }

    //month starts at 0, day starts at 1
    let check = new Date().getMonth() == 3 && new Date().getDate() == 1;
    if (check) {
      setInterval(aprilFoolsContent, 50);
      function aprilFoolsContent() {
        themeBlocks(null, null, "april-fools");
      }
    }

    try {
      Blockly.ContextMenuRegistry.registry.unregister("fav");
    } catch {}

    Blockly.ContextMenuRegistry.registry.register({
      displayText: "Add to favorite",
      preconditionFn: function (scope) {
        let type = scope.block.type;
        if (val === null) {
          return "enabled";
        }
        if (val.includes(type)) {
          return "disabled";
        } else {
          return "enabled";
        }
      },
      callback: async function (scope) {
        let type = scope.block.type;

        if (val === null) {
          await localforage.setItem("fav", [type]);
          val =
            (await localforage.getItem("fav")) === null
              ? null
              : await localforage.getItem("fav");

          var new_toolbox_xml = prepToolbox(
            toolbox(val),
            false,
            val
          );
          workspace.updateToolbox(new_toolbox_xml);
        } else {
          val.push(type);
          await localforage.setItem("fav", val);
          val =
            (await localforage.getItem("fav")) === null
              ? null
              : await localforage.getItem("fav");

          var new_toolbox_xml = prepToolbox(
            toolbox(val),
            false,
            val
          );
          workspace.updateToolbox(new_toolbox_xml);
        }
      },
      scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
      id: "fav",
      weight: 100,
    });
    Blockly.ContextMenuRegistry.registry.register({
      displayText: "Download Workspace Image",
      preconditionFn: function () {
        return "enabled";
      },
      callback: function () {
        Blockly.downloadScreenshot(workspace);
      },
      scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
      id: "image",
      weight: 100,
    });

    try {
      Blockly.ContextMenuRegistry.registry.unregister("refav");
    } catch {}

    Blockly.ContextMenuRegistry.registry.register({
      displayText: "Remove from favorite",
      preconditionFn: function (scope) {
        let type = scope.block.type;
        if (val === null) {
          return "disabled";
        }
        if (val.includes(type)) {
          return "enabled";
        } else {
          return "disabled";
        }
      },
      callback: async function (scope) {
        let type = scope.block.type;
        function arrayRemove(arr, value) {
          return arr.filter(function (ele) {
            return ele != value;
          });
        }
        if (arrayRemove(await localforage.getItem("fav"), type).length === 0) {
          await localforage.setItem("fav", null);
          val =
            (await localforage.getItem("fav")) === null
              ? null
              : await localforage.getItem("fav");
          var new_toolbox_xml = prepToolbox(
            toolbox(val),
            false,
            val
          );
          workspace.updateToolbox(new_toolbox_xml);
        } else {
          await localforage.setItem(
            "fav",
            arrayRemove(await localforage.getItem("fav"), type)
          );
          val =
            (await localforage.getItem("fav")) === null
              ? null
              : await localforage.getItem("fav");
          var new_toolbox_xml = prepToolbox(
            toolbox(val),
            false,
            val
          );
          workspace.updateToolbox(new_toolbox_xml);
        }
      },
      scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
      id: "refav",
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

    const backpack = new Backpack(workspace, defaultOptions);
    backpack.init();
    Load(backpack);
    this.$store.commit("setWorkspace", {
      workspace,
    });
    workspace.addChangeListener(Blockly.Events.disableOrphans);
    this.$nextTick(() => {
      window.setInterval(() => {
        disableUnapplicable(this.$store.state.workspace);
        const getAllBlocksInWorkspace =
          this.$store.state.workspace.getAllBlocks();
        const loginBlock = getAllBlocksInWorkspace.some(
          (block) => block.type === "s4d_login"
        );
        const db1 = getAllBlocksInWorkspace.some(
          (block) => block.type == "s4d_add_data_new"
        );
        const db2 = getAllBlocksInWorkspace.some(
          (block) => block.type == "s4d_database_create_new"
        );
        const db3 = getAllBlocksInWorkspace.some(
          (block) => block.type == "s4d_delete_all_data_new"
        );
        const db4 = getAllBlocksInWorkspace.some(
          (block) => block.type == "s4d_delete_data_new"
        );
        const db5 = getAllBlocksInWorkspace.some(
          (block) => block.type == "s4d_get_all_data_new"
        );
        const db6 = getAllBlocksInWorkspace.some(
          (block) => block.type == "s4d_get_data_new"
        );
        const db7 = getAllBlocksInWorkspace.some(
          (block) => block.type == "s4d_has_data_new"
        );
        const db8 = getAllBlocksInWorkspace.some(
          (block) => block.type == "s4d_set_data_new"
        );
        const db9 = getAllBlocksInWorkspace.some(
          (block) => block.type == "s4d_subtract_data_new"
        );
        let registerBlockCount = 0;
        getAllBlocksInWorkspace.some((block) => {
          if(block.type === "frost_slash_register") registerBlockCount++;
        });
        if (!loginBlock) {
          if (!this.toastLogin) {
            this.toastLogin = true;
            this.$toast.open({
              message: this.$t("warnings.login_block"),
              type: "warning",
              dismissible: false,
              duration: 1000000000,
            });
          }
        } else if (db1 || db3 || db4 || db5 || db6 || db7 || db8 || db9) {
          if (!db2) {
            if (!this.toastDB) {
              this.toastDB = true;
              this.$toast.open({
                message:
                  'The "Create a new database" block in the "Database" category is required.',
                type: "error",
                dismissible: false,
                duration: 1000000000,
              });
            }
          } else {
            this.toastDB = false;
            this.$toast.clear();
          }
        } else if (registerBlockCount > 1) {
          if (!this.toastRegister) {
              this.toastRegister = true;
              this.$toast.open({
                message:
                  'You may only use one "Create Slash Commands" block.',
                type: "error",
                dismissible: false,
                duration: 1000000000,
              });
            }
        } else if (this.toastLogin) {
          this.toastLogin = false;
          this.$toast.clear();
        } else if (this.toastRegister) {
          this.toastRegister = false;
          this.$toast.clear();
        } else {
          this.toastDB = false;
          this.$toast.clear();
        }
      }, 100);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.saturate {
  filter: saturate(3);
}
.grayscale {
  filter: grayscale(100%);
}
.contrast {
  filter: contrast(160%);
}
.brightness {
  filter: brightness(0.25);
}
.blur {
  filter: blur(3px);
}
.invert {
  filter: invert(100%);
}
.sepia {
  filter: sepia(100%);
}
.huerotate {
  filter: hue-rotate(180deg);
}
.rss.opacity {
  filter: opacity(50%);
}
.blocklyText,
.blocklyHtmlInput,
.blocklyTreeLabel {
  font-family: sans-serif !important;
}

.blocklyTreeIcon {
  filter: invert(100%) sepia(0%) saturate(2950%) hue-rotate(348deg)
    brightness(118%) contrast(96%) !important;
}
#blocklyTreeIcon {
  filter: invert(100%) sepia(0%) saturate(2950%) hue-rotate(348deg)
    brightness(118%) contrast(96%) !important;
}
.blocklyTreeIconClosed {
  filter: invert(100%) sepia(0%) saturate(2950%) hue-rotate(348deg)
    brightness(118%) contrast(96%) !important;
}
#blocklyTreeIconClosed {
  filter: invert(100%) sepia(0%) saturate(2950%) hue-rotate(348deg)
    brightness(118%) contrast(96%) !important;
}
body {
  font-family: sans-serif;
}
.blocklyDiv {
  font-family: sans-serif;
  height: 100%;
  width: 100%;
  text-align: left;
}
.blocklyToolboxCategory {
  font-family: sans-serif;
  color: rgb(204, 204, 204);
}
.s4d_customblocks_manager_deletor {
  background-color: #0F1011;
  width: 12em;
  height: 38em;
  overflow: auto;
}
.s4d_customblocks_manager_deletor > button {
  background-color: transparent;
  border-width: 0px;
  outline-width: 0px;
  color: white;
}
.s4d_customblocks_manager_deletor > button:hover {
  color: red;
  text-decoration: line-through;
}
</style>
