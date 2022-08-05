import Blockly from "blockly/core";
import BaseBlockly from "blockly";
const yourName = "yournamehere"
const blockName = yourName + "_" + "blocknamehere";
const menuName = blockName + "_checkboxMutatorMenu"

const BlockColor = "#40BF4A"
// menu customization
const menuUsesBlockColor = true
const menuTooltip = ''

// border fields is the name of the input when getting it for the exported code.
// they HAVE to be uppercase currently or it won't work since im too lazy to change the uppercase function uses
const BORDER_FIELDS = ["A", "B", "C", "D"];
// border types is the input type of every input in the block
const BORDER_TYPES = ["String", "Boolean", "Colour", "Number"];
// names is the name of that input in the menu and in the final block
const names = ["Text", "Question", "Color", "Number"];
const amountOfInputs = names.length

const blockData = {
    "message0": "Block Name Here %1",
    "args0": [
        {
            "type": "input_value",
            "name": "0",
            "check": "String"
        }
    ],
    "colour": BlockColor,
    "previousStatement": null,
    "nextStatement": null
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

Blockly.JavaScript[blockName] = function (block) {
    // code should be the first couple lines of your code before the inputs
    let code = `/*`
    code = code.split("\n")
    const A = Blockly.JavaScript.valueToCode(block, "A", Blockly.JavaScript.ORDER_NONE);
    const B = Blockly.JavaScript.valueToCode(block, "B", Blockly.JavaScript.ORDER_NONE);
    const C = Blockly.JavaScript.valueToCode(block, "C", Blockly.JavaScript.ORDER_NONE);
    const D = Blockly.JavaScript.valueToCode(block, "D", Blockly.JavaScript.ORDER_NONE);
    // check if the inputs exist before adding them to the exported code
    if (A) {
        code.push(`wow: ${A}`)
    }
    if (B) {
        code.push(`wow: ${B}`)
    }
    if (C) {
        code.push(`wow: ${C}`)
    }
    if (D) {
        code.push(`wow: ${D}`)
    }
    // the last line of code here, do another code.push(``) if you need to put more code
    code.push(`*/`)
    return code.join("\n");
};