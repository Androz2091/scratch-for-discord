import BaseBlockly from "blockly";
import Blockly from "blockly/core";


const BORDER_FIELDS = [ "MESSAGE", "COLOR", "TITLE", "IMAGE","FOOTER", "THUMBNAIL"];

const BORDER_TYPES = [ "String", "Colour", "String", "String","String", "String" ];


const s4d_message_embed = {
    "message0": "%{BKY_MESSAGE_EMBED}",
    "mutator": "s4d_message_embed_mutator",
    "output": "MessageEmbed",
    "helpUrl": "",
    "tooltip": "",
    "colour": "#40BF4A"
};

Blockly.Blocks["s4d_message_embed"] = {
    init: function() {
        this.jsonInit(s4d_message_embed);
    }
};

Blockly.Blocks["s4d_message_embed_mutator"] = {
    init: function() {
        this.setColour("#CECDCE");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

const BORDER_MUTATOR_MIXIN = {
    inputs_: [ true, false, false, false ,false,false],


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
        const containerBlock = workspace.newBlock("s4d_message_embed_mutator");
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

Blockly.Extensions.registerMutator("s4d_message_embed_mutator", BORDER_MUTATOR_MIXIN, null, [""]);

Blockly.JavaScript["s4d_message_embed"] = function(block){
    return [ `
        {
            embed: {
                title: ${Blockly.JavaScript.valueToCode(block, "TITLE", Blockly.JavaScript.ORDER_ATOMIC) || null},
                color: ${Blockly.JavaScript.valueToCode(block, "COLOR", Blockly.JavaScript.ORDER_ATOMIC) || null},
                image: { url: ${Blockly.JavaScript.valueToCode(block, "IMAGE", Blockly.JavaScript.ORDER_ATOMIC) || null} }, 

                description: ${Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC) || null},
                footer: { text: ${Blockly.JavaScript.valueToCode(block, "FOOTER", Blockly.JavaScript.ORDER_ATOMIC) || null} },
                thumbnail: { url: ${Blockly.JavaScript.valueToCode(block, "THUMBNAIL", Blockly.JavaScript.ORDER_ATOMIC) || null} }

            }
        }
    `, Blockly.JavaScript.ORDER_ATOMIC ];
};