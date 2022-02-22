import Blockly from "blockly/core";
import BaseBlockly from "blockly";
const blockName = "make_ahq_modal_text";
const ahqcolor = ['#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A'];
function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const BORDER_FIELDS = ["Id" , "Label", "Style", "Minimum Length", "Maximum Length", "Place Holder", "Required"];

const BORDER_TYPES = ["String",  "String", "ahq_style" ,"Number", "Number", "String", "Boolean"];

const blockData = {
    "message0": "Add a text box",
    "colour": listsGetRandomItem(ahqcolor, false),
    "mutator": "s4d_ahq_mutator",
    "previousStatement": null,
    "nextStatement": null,
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.Blocks["s4d_message_row_block_mutator"] = {
    init: function() {
        this.setColour("#CECDCE");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
const BORDER_MUTATOR_MIXIN = {
    inputs_: [true, true, true, true, true, false, true],


    mutationToDom: function() {
        if (!this.inputs_) {
            return null;
        }
        const container = document.createElement("mutation");
        for (let i = 0; i < this.inputs_.length; i++) {
            if (this.inputs_[i]) container.setAttribute(BORDER_FIELDS[i], this.inputs_[i])
        }
        return container;
    },
    
    domToMutation: function(xmlElement) {
        for (let i = 0; i < this.inputs_.length; i++) {
            this.inputs_[i] = xmlElement.getAttribute(BORDER_FIELDS[i].toLowerCase()) == "true";
        }
        this.updateShape_();
    },

    decompose: function(workspace) {
        const containerBlock = workspace.newBlock("s4d_message_row_block_mutator");
        for (let i = 0; i < this.inputs_.length; i++) {
        containerBlock.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(BaseBlockly.Msg[BORDER_FIELDS[i]])
            .appendField(new Blockly.FieldCheckbox(this.inputs_[i] ? "TRUE" : "FALSE"), BORDER_FIELDS[i].toUpperCase());
        }
        containerBlock.initSvg();
        return containerBlock;
    },

    compose: function(containerBlock) {
        // Set states
        for (let i = 0; i < this.inputs_.length; i++) {
        this.inputs_[i] = (containerBlock.getFieldValue(BORDER_FIELDS[i].toUpperCase()) == "TRUE"); 
        }
        this.updateShape_();
    },

    updateShape_: function() {
        for (let i = 0; i < this.inputs_.length; i++) {
            if (this.getInput(BORDER_FIELDS[i].toUpperCase())) this.removeInput(BORDER_FIELDS[i].toUpperCase());
        }
        for (let i = 0; i < this.inputs_.length; i++) {
            if (this.inputs_[i]) {
                this.appendValueInput(BORDER_FIELDS[i].toUpperCase())
                .setCheck(BORDER_TYPES[i])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(BaseBlockly.Msg[BORDER_FIELDS[i]]);
            }
        }
    }
};

Blockly.Extensions.registerMutator("s4d_ahq_mutator", BORDER_MUTATOR_MIXIN, null, [""]);
Blockly.JavaScript["s4d_ahq_mutator"] = function(block) {
    let code = ``;
    const Id = Blockly.JavaScript.valueToCode(block, "Id", Blockly.JavaScript.ORDER_ATOMIC);
    const Lavbel = Blockly.JavaScript.valueToCode(block, "Label", Blockly.JavaScript.ORDER_ATOMIC);
    const Style = Blockly.JavaScript.valueToCode(block, "Style", Blockly.JavaScript.ORDER_ATOMIC);
    const min = Blockly.JavaScript.valueToCode(block, "Minimum Length", Blockly.JavaScript.ORDER_ATOMIC);
    const man = Blockly.JavaScript.valueToCode(block, "Maximum Length", Blockly.JavaScript.ORDER_ATOMIC);
    const place = Blockly.JavaScript.valueToCode(block, "Place Holder", Blockly.JavaScript.ORDER_ATOMIC);
    const re = Blockly.JavaScript.valueToCode(block, "Required", Blockly.JavaScript.ORDER_ATOMIC);
    if (!place) {
    code = `new TextInputComponent()
    .setCustomId(${Id})
    .setLabel(${Lavbel})
    .setStyle(${Style})
    .setMinLength(${min})
    .setMaxLength(${man})
    .setRequired(${re})`
    } else {
    code = `new TextInputComponent()
    .setCustomId(${Id})
    .setLabel(${Lavbel})
    .setStyle(${Style})
    .setMinLength(${min})
    .setMaxLength(${man})
    .setRequired(${re})
    .setPlaceholder(${place})`
    }
    return code;
};