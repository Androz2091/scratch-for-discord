import Blockly from "blockly/core";
import BaseBlockly from "blockly";
import { registerRestrictions } from "../../../restrictions";
const blockName = "s4d_embed_set_title"
const menuName = "s4d_embed_set_title_mutator"

const BlockColor = "#40BF4A"
// menu customization
const menuUsesBlockColor = false
const menuTooltip = `Click the checkboxes to change add a reason.`

// border fields is the name of the input when getting it for the exported code.
// they HAVE to be uppercase currently or it won't work since im too lazy to change the uppercase function uses
const BORDER_FIELDS = ["HYPERLINK"];
// border types is the input type of every input in the block
const BORDER_TYPES = ["String"];
// names is the name of that input in the menu and in the final block
const names = ["set url"];
const amountOfInputs = names.length

const blockData = {
    "message0": "set embed title %1",
    "args0": [
      {
        "type": "input_value",
        "name": "TITLE"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#40BF4A",
    "tooltip": "Set the title of an embed.",
    "helpUrl": ""
};
Blockly.Blocks[menuName] = {
    init: function () {
        this.setColour((menuUsesBlockColor ? BlockColor : "#CECDCE"));
        this.setTooltip(menuTooltip);
        this.setHelpUrl("");
    }
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
        this.setMutator(new Blockly.Mutator([]));
        this.inputs_ = []
        for (let i = 0; i < amountOfInputs; i++) {
            this.inputs_.push(false)
        }
    },


    mutationToDom: function () {
        if (!this.inputs_) {
            return null;
        }
        const container = document.createElement("mutation");
        for (let i = 0; i < this.inputs_.length; i++) {
            if (this.inputs_[i]) container.setAttribute(BORDER_FIELDS[i], this.inputs_[i])
        }
        return container;
    },

    domToMutation: function (xmlElement) {
        for (let i = 0; i < this.inputs_.length; i++) {
            this.inputs_[i] = xmlElement.getAttribute(BORDER_FIELDS[i].toLowerCase()) == "true";
        }
        this.updateShape_();
    },

    decompose: function (workspace) {
        const containerBlock = workspace.newBlock(menuName);
        for (let i = 0; i < this.inputs_.length; i++) {
            BaseBlockly.Msg[BORDER_FIELDS[i]] = names[i];
            containerBlock.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(names[i])
                .appendField(new Blockly.FieldCheckbox(this.inputs_[i] ? "TRUE" : "FALSE"), BORDER_FIELDS[i].toUpperCase());
        }
        containerBlock.initSvg();
        return containerBlock;
    },

    compose: function (containerBlock) {
        // Set states
        for (let i = 0; i < this.inputs_.length; i++) {
            this.inputs_[i] = (containerBlock.getFieldValue(BORDER_FIELDS[i].toUpperCase()) == "TRUE");
        }
        this.updateShape_();
    },

    updateShape_: function () {
        for (let i = 0; i < this.inputs_.length; i++) {
            if ((!this.inputs_[i]) && (this.getInput(BORDER_FIELDS[i].toUpperCase()))) this.removeInput(BORDER_FIELDS[i].toUpperCase());
        }
        for (let i = 0; i < this.inputs_.length; i++) {
            if ((this.inputs_[i]) && (!(this.getInput(BORDER_FIELDS[i].toUpperCase())))) {
                BaseBlockly.Msg[BORDER_FIELDS[i]] = names[i];
                this.appendValueInput(BORDER_FIELDS[i].toUpperCase())
                    .setCheck(BORDER_TYPES[i])
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(names[i]);
            }
        }
    }

};

Blockly.JavaScript[blockName] = function(block){
    const title = Blockly.JavaScript.valueToCode(block, "TITLE", Blockly.JavaScript.ORDER_ATOMIC);
    const hyperlink = Blockly.JavaScript.valueToCode(block, "HYPERLINK", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `embed.setTitle(String(${title})) \n embed.setURL(String(${hyperlink})); \n`; 
    return code;
};

registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "RES_MUST_BE_CREATE_EMBED_THEN",
        types: [
            "s4d_embed_create"
        ]
    }
]);

// import * as Blockly from "blockly/core";
// import { registerRestrictions } from "../../../restrictions";

// const blockName = "s4d_embed_set_title";

// const blockData = {
//     "message0": "set embed title %1 add url (optional) %2",
//     "args0": [
//       {
//         "type": "input_value",
//         "name": "TITLE"
//       },
//       {
//         "type": "input_value",
//         "name": "HYPERLINK"
//       }
//     ],
//     "previousStatement": null,
//     "nextStatement": null,
//     "colour": "#40BF4A",
//     "tooltip": "Set the title of an embed.",
//     "helpUrl": ""
// };

// Blockly.Blocks[blockName] = {
//     init: function() {
//         this.jsonInit(blockData);
//     }
// };

// Blockly.JavaScript[blockName] = function(block){
//     const title = Blockly.JavaScript.valueToCode(block, "TITLE", Blockly.JavaScript.ORDER_ATOMIC);
//     const hyperlink = Blockly.JavaScript.valueToCode(block, "HYPERLINK", Blockly.JavaScript.ORDER_ATOMIC);
//     if (hyperlink.length == 0) {
//       const code = `embed.setTitle(String(${title})) \n`; 
//     return code; 
//     }
//     const code = `embed.setTitle(String(${title})) \n embed.setURL(String(${hyperlink})); \n`; 
//     return code; 
// };

// registerRestrictions(blockName, [
//     {
//         type: "hasparent",
//         message: "RES_MUST_BE_CREATE_EMBED_THEN",
//         types: [
//             "s4d_embed_create"
//         ]
//     }
// ]);
