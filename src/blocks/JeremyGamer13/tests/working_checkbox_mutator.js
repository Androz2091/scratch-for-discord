// the current state of my checkbox mutator
// the goal is to have this checkbox mutator solve the following problems with existing checkbox mutators:

// 1. dont kick out any inputs when the mutator menu is opened
// 2. dont apply the same inputs as another mutator on the workspace
// 3. dont have any save & loading issues that will cause problems with the users blocks

// current goals achieved: none

import * as Blockly from "blockly";
import BaseBlockly from "blockly";
const blockName = "jg_tests_checkbox_mutator";

const BORDER_FIELDS = ["a", "b", "c"];
const BORDER_TYPES = ["String", "String", "String"];
const names = ["A", "B", "C"];

const blockData = {
    "message0": "Jeremy Checkbox Mutator %1",
    "args0": [{
        "type": "input_value",
        "name": "0",
        "check": "String"
    }],
    "colour": '#40BF4A',
    "mutator": "jg_tests_checkbox_mutator_cleanup_fix",
    "previousStatement": null,
    "nextStatement": null
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.Blocks["jg_tests_checkbox_mutator_cleanup_fix"] = {
    init: function () {
        this.setColour("#CECDCE");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Extensions.registerMutator("jg_tests_checkbox_mutator_cleanup_fix", {
    inputs_: [false, false, false],


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
        const containerBlock = workspace.newBlock("jg_tests_checkbox_mutator_cleanup_fix");
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
            if (this.getInput(BORDER_FIELDS[i].toUpperCase())) this.removeInput(BORDER_FIELDS[i].toUpperCase());
        }
        for (let i = 0; i < this.inputs_.length; i++) {
            if (this.inputs_[i]) {
                BaseBlockly.Msg[BORDER_FIELDS[i]] = names[i];
                this.appendValueInput(BORDER_FIELDS[i].toUpperCase())
                    .setCheck(BORDER_TYPES[i])
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(names[i]);
            }
        }
    }
}, null, [""]);

Blockly.JavaScript[blockName] = function (block) {
    let code = [`await i.reply({`];
    const Id = Blockly.JavaScript.valueToCode(block, "CONTENT", Blockly.JavaScript.ORDER_NONE);
    const Lavbel = Blockly.JavaScript.valueToCode(block, "EMBED", Blockly.JavaScript.ORDER_NONE);
    const Style = Blockly.JavaScript.valueToCode(block, "BUTTON", Blockly.JavaScript.ORDER_NONE);
    if (Id) {
        code.push(`content: String(${Id}),`)
    }
    if (Lavbel) {
        code.push(`embeds: [${Lavbel.replace("'", "").replace("'", "")}],`)
    }
    if (Style) {
        code.push(`components: [new MessageActionRow().addComponents(${Style.replace("'", "").replace("'", "").replace("(", "").replace(")", "")})],`)
    }
    code.push(`ephemeral: ${Blockly.JavaScript.valueToCode(block, "ephemeral", Blockly.JavaScript.ORDER_NONE)}\n})`)
    return code.join("\n");
};