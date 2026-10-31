import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";

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
        // Each block needs its own copy, the mixin would share one array between all embeds
        this.inputs_ = [ true, false, false, false, false, false ];
        this.updateShape_();
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
    mutationToDom: function() {
        const container = Blockly.utils.xml.createElement("mutation");
        for (let i = 0; i < this.inputs_.length; i++) {
            if (this.inputs_[i]) container.setAttribute(BORDER_FIELDS[i].toLowerCase(), "true");
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
                .setAlign(Blockly.inputs.Align.RIGHT)
                .appendField(Blockly.Msg[BORDER_FIELDS[i]])
                .appendField(new Blockly.FieldCheckbox(this.inputs_[i] ? "TRUE" : "FALSE"), BORDER_FIELDS[i]);
        }
        containerBlock.initSvg();
        return containerBlock;
    },

    compose: function(containerBlock) {
        for (let i = 0; i < this.inputs_.length; i++) {
            this.inputs_[i] = (containerBlock.getFieldValue(BORDER_FIELDS[i]) == "TRUE");
        }
        this.updateShape_();
    },

    updateShape_: function() {
        for (let i = 0; i < this.inputs_.length; i++) {
            if (this.getInput(BORDER_FIELDS[i])) this.removeInput(BORDER_FIELDS[i]);
        }
        for (let i = 0; i < this.inputs_.length; i++) {
            if (this.inputs_[i]) {
                this.appendValueInput(BORDER_FIELDS[i])
                    .setCheck(BORDER_TYPES[i])
                    .setAlign(Blockly.inputs.Align.RIGHT)
                    .appendField(Blockly.Msg[BORDER_FIELDS[i]]);
            }
        }
    }
};

Blockly.Extensions.registerMutator("s4d_message_embed_mutator", BORDER_MUTATOR_MIXIN);

const EMBED_SETTERS = {
    TITLE: (value) => `.setTitle(String(${value}))`,
    COLOR: (value) => `.setColor(parseInt(String(${value}).replace("#", ""), 16))`,
    MESSAGE: (value) => `.setDescription(String(${value}))`,
    IMAGE: (value) => `.setImage(String(${value}))`,
    THUMBNAIL: (value) => `.setThumbnail(String(${value}))`,
    FOOTER: (value) => `.setFooter({ text: String(${value}) })`
};

javascriptGenerator.forBlock["s4d_message_embed"] = function(block){
    let embed = "new Discord.EmbedBuilder()";
    for (const [input, setter] of Object.entries(EMBED_SETTERS)) {
        const value = block.getInput(input) && javascriptGenerator.valueToCode(block, input, Order.NONE);
        if (value) embed += setter(value);
    }
    return [ `{ embeds: [${embed}] }`, Order.ATOMIC ];
};
