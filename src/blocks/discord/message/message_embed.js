import BaseBlockly from "blockly";
import Blockly from "blockly/core";

const BORDER_FIELDS = [ "MESSAGE", "COLOUR", "TITLE", "IMAGE" ];

const BORDER_TYPES = [ "String", "Colour", "String", "String" ];

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
    inputs_: [ true, false, false, false ],

    /**
     * Create XML to represent the number inputs.
     * @return {Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function() {
        if (!this.inputs_) {
            return null;
        }
        const container = document.createElement("mutation");
        for (let i = 0; i < this.inputs_.length; i++) {
            if (this.inputs_[i]) container.setAttribute(BaseBlockly.Msg[BORDER_FIELDS[i]], this.inputs_[i])
        }
        return container;
    },

    /**
     * Parse XML to restore the inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function(xmlElement) {
        for (let i = 0; i < this.inputs_.length; i++) {
            this.inputs_[i] = xmlElement.getAttribute(BaseBlockly.Msg[BORDER_FIELDS[i]]) == "true";
        }
        this.updateShape_();
    },

    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose: function(workspace) {
        var containerBlock = workspace.newBlock("s4d_message_embed_mutator");
        for (let i = 0; i < this.inputs_.length; i++) {
        containerBlock.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(BaseBlockly.Msg[BORDER_FIELDS[i]])
            .appendField(new Blockly.FieldCheckbox(this.inputs_[i] ? "TRUE" : "FALSE"), BaseBlockly.Msg[BORDER_FIELDS[i]].toUpperCase());
        }
        containerBlock.initSvg();
        return containerBlock;
    },

    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose: function(containerBlock) {
        // Set states
        for (let i = 0; i < this.inputs_.length; i++) {
        this.inputs_[i] = (containerBlock.getFieldValue(BaseBlockly.Msg[BORDER_FIELDS[i]].toUpperCase()) == "TRUE"); 
        }
        this.updateShape_();
    },

    /**
     * Modify this block to have the correct number of inputs.
     * @this Blockly.Block
     * @private
     */
    updateShape_: function() {
        // Delete everything.
        for (let i = 0; i < this.inputs_.length; i++) {
        if (this.getInput(BaseBlockly.Msg[BORDER_FIELDS[i]].toUpperCase())) this.removeInput(BaseBlockly.Msg[BORDER_FIELDS[i]].toUpperCase());
        }
        // Rebuild block.
        for (let i = 0; i < this.inputs_.length; i++) {
            if (this.inputs_[i]) {
                this.appendValueInput(BaseBlockly.Msg[BORDER_FIELDS[i]].toUpperCase())
                .setCheck(BORDER_TYPES[i])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(BaseBlockly.Msg[BORDER_FIELDS[i]]);
            }
        }
    }
};

Blockly.Extensions.registerMutator("s4d_message_embed_mutator", BORDER_MUTATOR_MIXIN, null, [""])