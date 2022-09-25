import Blockly from "blockly/core";
import BaseBlockly from "blockly";
const blockName = "lasercat_jg_case_plus_minus";
const menuName = blockName + "_plusminusMutatorMenu"

const BlockColor = "#8B48A3"
// menu customization
const menuUsesBlockColor = true
const menuTooltip = ''

// field name of the appending items
const APPEND_FIELD = "CASE"
// name that appears on the appended statement
const APPEND_NAME = "case"

const blockData = {
    "message0": "case %1 %2 %3",
    "args0": [
        {
            "type": "input_value",
            "name": "DEFAULTCASEITEM",
            "check": null
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "DEFAULTCASE"
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
        this.inputCount = 0
        this.defaultCaseEnabled = false
    },

    mutationToDom: function () {
        if (!this.inputCount) {
            return null;
        }
        const container = document.createElement("mutation");
        if (this.inputCount) container.setAttribute(APPEND_FIELD, this.inputCount)
        return container;
    },

    domToMutation: function (xmlElement) {
        this.inputCount = Number(xmlElement.getAttribute(APPEND_FIELD.toLowerCase()));
        this.updateShape_();
    },

    decompose: function (workspace) {
        const containerBlock = workspace.newBlock(menuName);
        BaseBlockly.Msg[APPEND_FIELD] = APPEND_NAME;
        containerBlock.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(APPEND_NAME + " ︱ -")
            .appendField(new Blockly.FieldCheckbox(false), "MINUS")
            .appendField("+")
            .appendField(new Blockly.FieldCheckbox(false), "PLUS")
            .appendField("Amount:")
            .appendField(new Blockly.FieldLabel("0"), "NUMBER")
        containerBlock.appendDummyInput()
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField(new Blockly.FieldCheckbox(false), "ALLOWDEFAULTCASE")
            .appendField("default case")
        containerBlock.initSvg();
        return containerBlock;
    },

    compose: function (containerBlock) {
        // Set states
        this.inputCount += (containerBlock.getFieldValue("PLUS") == "TRUE" ? 1 : 0);
        this.inputCount -= (containerBlock.getFieldValue("MINUS") == "TRUE" ? 1 : 0);
        this.defaultCaseEnabled = containerBlock.getFieldValue("ALLOWDEFAULTCASE") == "TRUE"
        if (this.inputCount < 0) this.inputCount = 0
        containerBlock.getField("PLUS").setValue(false)
        containerBlock.getField("MINUS").setValue(false)
        containerBlock.getField("NUMBER").setValue(String(this.inputCount))
        this.updateShape_();
    },

    updateShape_: function () {
        let a = 0
        while (this.getInput(APPEND_FIELD + a)) {
            if (this.inputCount <= a) this.removeInput(APPEND_FIELD + a);
            a += 1
        }
        for (let i = 0; i < this.inputCount; i++) {
            if (!this.getInput(APPEND_FIELD + i)) {
                BaseBlockly.Msg[APPEND_FIELD] = APPEND_NAME;
                this.appendValueInput(APPEND_FIELD + i)
                    .setAlign(Blockly.ALIGN_LEFT)
                    .appendField(APPEND_NAME);
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