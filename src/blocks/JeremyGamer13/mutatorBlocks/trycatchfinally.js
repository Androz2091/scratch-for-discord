import Blockly from "blockly/core";
import BaseBlockly from "blockly";
const yourName = "jg"
const blockName = yourName + "_" + "other_try_catch_finally";
const menuName = blockName + "_checkboxMutatorMenu"

const BlockColor = "#D14081"
// menu customization
const menuUsesBlockColor = true
const menuTooltip = ''

// border fields is the name of the input when getting it for the exported code.
// they HAVE to be uppercase currently or it won't work since im too lazy to change the uppercase function uses
const BORDER_FIELDS = ["IFERROR", "FINALLY"];
// border types is the input type of every input in the block
//const BORDER_TYPES = ["STATEMENT_", "STATEMENT_"];
// names is the name of that input in the menu and in the final block
const names = ["if error", "finally"];
const amountOfInputs = names.length

const blockData = {
    "message0": "try %1 %2",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "TRY"
        }
    ],
    "colour": BlockColor,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
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
                .setAlign(Blockly.ALIGN_LEFT)
                .appendField(new Blockly.FieldCheckbox(this.inputs_[i] ? "TRUE" : "FALSE"), BORDER_FIELDS[i].toUpperCase())
                .appendField(names[i])
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
            if ((!this.inputs_[i]) && (this.getInput(BORDER_FIELDS[i].toUpperCase()))) {
                this.removeInput(BORDER_FIELDS[i].toUpperCase());
                this.removeInput(BORDER_FIELDS[i].toUpperCase() + "d");
            }
        }
        for (let i = 0; i < this.inputs_.length; i++) {
            if ((this.inputs_[i]) && (!(this.getInput(BORDER_FIELDS[i].toUpperCase())))) {
                BaseBlockly.Msg[BORDER_FIELDS[i]] = names[i];
                this.appendDummyInput(BORDER_FIELDS[i].toUpperCase() + "d")
                    .appendField(names[i]);
                this.appendStatementInput(BORDER_FIELDS[i].toUpperCase())
                    .setAlign(Blockly.ALIGN_RIGHT)
            }
        }
    }

};

Blockly.JavaScript[blockName] = function (block) {
    // code should be the first couple lines of your code before the inputs
    let code = `try {`
    code = code.split("\n")
    const TRY = Blockly.JavaScript.statementToCode(block, "TRY");
    code.push(TRY)
    const IFERROR = Blockly.JavaScript.statementToCode(block, "IFERROR");
    const FINALLY = Blockly.JavaScript.statementToCode(block, "FINALLY");
    // check if the inputs exist before adding them to the exported code
    if (IFERROR) {
        code.push(`} catch (err) {`)
        code.push(IFERROR)
    }
    if (FINALLY) {
        code.push(`} finally {`)
        code.push(FINALLY)
    }
    // the last line of code here, do another code.push(``) if you need to put more code
    code.push(`}`)
    return code.join("\n");
};
