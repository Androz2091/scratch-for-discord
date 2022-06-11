import * as Blockly from "blockly/core";
import BaseBlockly from "blockly";
import { registerRestrictions } from "../../../../restrictions"
const blockName = "send_ahq_converted";
//block working now working

const BORDER_FIELDS = ["AHQ_EE", "AHQ_E", "AHQ_B"];

const BORDER_TYPES = ["String", "AHQEmbeds", "AHQButton"];
const names = ["Text", "Send ahq embed", "Send ahq button (max 5)"];

const blockData = {
    "message0": "Send Attachment %1 File (filename) %2 %3 Display Name %4 %5 in channel %6",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "Label",
            "check": "String"
        },
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "name",
            "check": "String"
        },

        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "ch",
            "check": "Channel"
        }],
    "colour": '#40BF4A',
    "tooltip": "Send the converted file to a channel.",
    "helpUrl": "",
    mutator: "ahq_send_mutator",
    previousStatement: null,
    nextStatement: null
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.Blocks["ahq_send_mutator"] = {
    init: function () {
        this.setColour("#CECDCE");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
const BORDER_MUTATOR_MIXIN = {
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
        const containerBlock = workspace.newBlock("ahq_send_mutator");
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
                    .setAlign(Blockly.ALIGN_LEFT)
                    .appendField(names[i]);
            }
        }
    }
};

Blockly.Extensions.registerMutator("ahq_send_mutator", BORDER_MUTATOR_MIXIN, null, [""]);
Blockly.JavaScript[blockName] = function (block) {
    const a = Blockly.JavaScript.valueToCode(block, "AHQ_E", Blockly.JavaScript.ORDER_NONE);
    const b = Blockly.JavaScript.valueToCode(block, "AHQ_B", Blockly.JavaScript.ORDER_NONE);
    const code = [`${Blockly.JavaScript.valueToCode(block, "ch", Blockly.JavaScript.ORDER_NONE)}.send({
        files: [{
            attachment: \`${Blockly.JavaScript.valueToCode(block, "Label", Blockly.JavaScript.ORDER_NONE).replace("'", "").replace("'", "").replace("file.filename", "${file.filename}")}\`,
            name: \`${Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_NONE).replace("'", "").replace("'", "").replace("file.filename", "${file.filename}")}\`
        }]`];
    if (a) {
        code.push(`,\nembeds: [${a.replace("'", "").replace("'", "")}]`);
    }
    if (b) {
        code.push(`,\ncomponents: [new MessageActionRow().addComponents(${b.replace("'", "").replace("'", "")})]`)
    }
    code.push(`});`)
    return code.join("\n");
};
registerRestrictions(blockName, [
    {
        "message": "RES_MISSING_AHQ_CONTENT",
        "type": "notempty",
        types: [
            "Label",
            "name",
            "ch"
        ]
    }
]);