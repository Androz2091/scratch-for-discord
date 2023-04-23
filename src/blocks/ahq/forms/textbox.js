import * as Blockly from "blockly";
import { registerRestrictions } from "../../../restrictions";
import BaseBlockly from "blockly";
const blockName = "make_ahq_modal_text";
const BORDER_FIELDS = ["ID_A", "LABEL_A", "STYLE_A", "MINIMUM_SIZE", "MAXIMUM_SIZE", "PLACE_HOLDER", "REQUIRED"];

const BORDER_TYPES = ["String", "String", "ahq_style", "Number", "Number", "String", "Boolean"];
const names = ["id", "label", "style", "minimum size", "maximum size", "place holder", "required"];

const blockData = {
    "message0": "Add a text box",
    "colour": '#40BF4A',
    "mutator": "s4d_ahq_mutator",
    "tooltip": "Add a text box to the form to be filled in.",
    "helpUrl": "",
    "previousStatement": null,
    "nextStatement": null
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.Blocks["s4d_ahq_mutator"] = {
    init: function () {
        this.setColour("#CECDCE");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
const BORDER_MUTATOR_MIXIN = {
    inputs_: [true, true, true, true, true, false, true],


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
        const containerBlock = workspace.newBlock("s4d_ahq_mutator");
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
};

Blockly.Extensions.registerMutator("s4d_ahq_mutator", BORDER_MUTATOR_MIXIN, null, [""]);
Blockly.JavaScript[blockName] = function (block) {
    let code = ``;
    const Id = Blockly.JavaScript.valueToCode(block, "ID_A", Blockly.JavaScript.ORDER_ATOMIC);
    const Lavbel = Blockly.JavaScript.valueToCode(block, "LABEL_A", Blockly.JavaScript.ORDER_ATOMIC);
    const Style = Blockly.JavaScript.valueToCode(block, "STYLE_A", Blockly.JavaScript.ORDER_ATOMIC) || "'SHORT'";
    const min = Blockly.JavaScript.valueToCode(block, "MINIMUM_SIZE", Blockly.JavaScript.ORDER_ATOMIC);
    const man = Blockly.JavaScript.valueToCode(block, "MAXIMUM_SIZE", Blockly.JavaScript.ORDER_ATOMIC);
    const place = Blockly.JavaScript.valueToCode(block, "PLACE_HOLDER", Blockly.JavaScript.ORDER_ATOMIC);
    const re = Blockly.JavaScript.valueToCode(block, "REQUIRED", Blockly.JavaScript.ORDER_ATOMIC);
    if (!place) {
        code = `new TextInputComponent()
    .setCustomId(${Id})
    .setLabel(${Lavbel})
    .setStyle(${Style})
    .setMinLength(${min})
    .setMaxLength(${man})
    .setRequired(${re}),\n`
    } else {
        code = `new TextInputComponent()
    .setCustomId(${Id})
    .setLabel(${Lavbel})
    .setStyle(${Style})
    .setMinLength(${min})
    .setMaxLength(${man})
    .setRequired(${re})
    .setPlaceholder(${place}),\n`
    }
    return code;
};
registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_AHQ_CONTENT",
        types: [
            "ID_A",
            "LABEL_A",
            "STYLE_A",
            "MINIMUM_SIZE",
            "MAXIMUM_SIZE",
            "REQUIRED"
        ]
    }
]);