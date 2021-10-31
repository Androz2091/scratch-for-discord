import BaseBlockly from "blockly";
import Blockly from "blockly/core";


const BORDER_FIELDS = [ "LABEL", "STYLE", "EMOJI", "URL", "ID", "DISABLED"];

const BORDER_TYPES = ["String",  "bstyle", "String" ,"String", "String", "Boolean" ];


const s4d_message_row_block = {
    "message0": "%{BKY_B_CREATE}",
    "args0": [
        {
            "type": "input_value",
            "name": "B_NAME",
            "check": "String"
        },
    ],
    "mutator": "s4d_message_2row_block_mutator",
    "tooltip": "",
    "helpUrl": "",
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#40BF4A"
};

Blockly.Blocks["b_create"] = {
    init: function() {
        this.jsonInit(s4d_message_row_block);
    }
};

Blockly.Blocks["s4d_message_2row_block_mutator"] = {
    init: function() {
        this.setColour("#CECDCE");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

const BORDER_MUTATOR_MIXIN = {
    inputs_: [true, true, false, false, false, false],


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
        const containerBlock = workspace.newBlock("s4d_message_2row_block_mutator");
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

Blockly.Extensions.registerMutator("s4d_message_2row_block_mutator", BORDER_MUTATOR_MIXIN, null, [""]);

Blockly.JavaScript["b_create"] = function(block){

    let id = Blockly.JavaScript.valueToCode(block, "ID", Blockly.JavaScript.ORDER_ATOMIC) || null
    let url = Blockly.JavaScript.valueToCode(block, "URL", Blockly.JavaScript.ORDER_ATOMIC) || null
    let emoji = Blockly.JavaScript.valueToCode(block, "EMOJI", Blockly.JavaScript.ORDER_ATOMIC) || null
    let label = Blockly.JavaScript.valueToCode(block, "LABEL", Blockly.JavaScript.ORDER_ATOMIC) || null
    let style = Blockly.JavaScript.valueToCode(block, "STYLE", Blockly.JavaScript.ORDER_ATOMIC) || null
    let disabled = Blockly.JavaScript.valueToCode(block, "DISABLED", Blockly.JavaScript.ORDER_ATOMIC) || null
    let name = Blockly.JavaScript.valueToCode(block, "B_NAME", Blockly.JavaScript.ORDER_ATOMIC)
    let text1 = name.replace("'","")
    let text2 = text1.replace("'","")
    let code = `const ${text2} = new MessageButton()\n`
if(id !== null) code += `.setCustomId(${id})\n`
if(label !== null)code += `.setLabel(${label})\n`
if(style === null) code += ".setStyle('DANGER')\n"
if(style !== null) code += `.setStyle(${style})\n`
if(emoji !== null) code += `.setEmoji(${emoji})\n`
if(disabled !== null) code += `.setDisabled(${disabled})\n`
if(url !== null) code += `.setURL(${url})\n`
code +="\n"
return code
};
