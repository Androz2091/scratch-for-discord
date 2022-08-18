import Blockly from "blockly/core";
import BaseBlockly from "blockly";
import { registerRestrictions } from "../../../restrictions";
const blockName = "s4d_thread_archive"
const menuName = "s4d_thread_archive_mutator"

const BlockColor = "#2a97b8"
// menu customization
const menuUsesBlockColor = false
const menuTooltip = `Click the checkboxes to change add a reason.`

// border fields is the name of the input when getting it for the exported code.
// they HAVE to be uppercase currently or it won't work since im too lazy to change the uppercase function uses
const BORDER_FIELDS = ["REASON"];
// border types is the input type of every input in the block
const BORDER_TYPES = ["String"];
// names is the name of that input in the menu and in the final block
const names = ["with reason"];
const amountOfInputs = names.length

const blockData = {
    "message0": "%{BKY_THREAD_ARCHIVE}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
                [
                    "archive",
                    "true"
                ],
                [
                    "unarchive",
                    "false"
                ],
                [
                    "lock",
                    "lock"
                ],
                [
                    "unlock",
                    "unlock"
                ],
                [
                    "delete",
                    "delete"
                ]
            ]
        },
        {
            "type": "input_value",
            "name": "THREAD",
            "check": "Channel"
        },
      ],
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "helpUrl": "",
    "tooltip": "",
    "colour": BlockColor
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
            this.inputs_.push((false))
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

Blockly.JavaScript["s4d_thread_archive"] = function (block) {
    const type = block.getFieldValue("TYPE");
    const thread = Blockly.JavaScript.valueToCode(block, "THREAD", Blockly.JavaScript.ORDER_ATOMIC);
    const reason = Blockly.JavaScript.valueToCode(block, "REASON", Blockly.JavaScript.ORDER_ATOMIC);
     if ((reason.length) !== 0) {
      if(type === "true" || type === "false"){
        return(`${thread}.setArchived(${type}, ${reason});\n`);
      } else if (type == "lock") {
        return(`${thread}.setLocked(true, ${reason});\n`)
      } else if (type == "unlock") {
        return(`${thread}.setLocked(false, ${reason});\n`)
      } else {
        return(`${thread}.delete(${reason})`)
      } 
     } else {
       if(type === "true" || type === "false"){
        return(`${thread}.setArchived(${type});\n`);
      } else if (type == "lock") {
        return(`${thread}.setLocked(true);\n`)
      } else if (type == "unlock") {
        return(`${thread}.setLocked(false, ${reason});\n`)
      } else {
        return(`${thread}.delete(${reason})`)
      } 
     }
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_THREAD",
        types: [
          "THREAD"
        ]
    }
]);