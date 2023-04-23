import Blockly from "blockly/core";
import BaseBlockly from "blockly";
const blockName = "s4d_message_embed"
const menuName = "s4d_message_embed_mutator"

const BlockColor = "#40BF4A"
// menu customization
const menuUsesBlockColor = false
const menuTooltip = `Click the checkboxes to change the embed's contents.`

// border fields is the name of the input when getting it for the exported code.
// they HAVE to be uppercase currently or it won't work since im too lazy to change the uppercase function uses
const BORDER_FIELDS = ["MESSAGE", "COLOR", "TITLE", "IMAGE", "FOOTER", "THUMBNAIL", "FIELD"];
// border types is the input type of every input in the block
const BORDER_TYPES = ["String", "Colour", "String", "String", "String", "String", "Field"];
// names is the name of that input in the menu and in the final block
const names = ["message", "color", "title", "image", "footer", "thumbnail", "field"];
const amountOfInputs = names.length

const blockData = {
    "message0": "Message Embed",
    "output": ["MessageEmbed", "AndrozS4DEmbed"],
    "helpUrl": "",
    "tooltip": "",
    "colour": BlockColor
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
            this.inputs_.push(i == 0)
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
            if ((!this.inputs_[i]) && (this.getInput(BORDER_FIELDS[i].toUpperCase()))) this.removeInput(BORDER_FIELDS[i].toUpperCase());
        }
        for (let i = 0; i < this.inputs_.length; i++) {
            if ((this.inputs_[i]) && (!(this.getInput(BORDER_FIELDS[i].toUpperCase())))) {
                BaseBlockly.Msg[BORDER_FIELDS[i]] = names[i];
                this.appendValueInput(BORDER_FIELDS[i].toUpperCase())
                    .setCheck(BORDER_TYPES[i])
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(names[i]);
            }
        }
    }

};

Blockly.JavaScript["s4d_message_embed"] = function (block) {
    let title = "";
    let color = "";
    let image = "";
    let description = "";
    let footer = "";
    let thumbnail = "";
    let field = "";
    if ((Blockly.JavaScript.valueToCode(block, "TITLE", Blockly.JavaScript.ORDER_ATOMIC) || null) !== null) {
        title = `\n.setTitle(String(${Blockly.JavaScript.valueToCode(block, "TITLE", Blockly.JavaScript.ORDER_ATOMIC)}))`;
    }
    if ((Blockly.JavaScript.valueToCode(block, "COLOR", Blockly.JavaScript.ORDER_ATOMIC) || null) !== null) {
        color = `\n.setColor(String(${Blockly.JavaScript.valueToCode(block, "COLOR", Blockly.JavaScript.ORDER_ATOMIC)}))`;
    }
    if ((Blockly.JavaScript.valueToCode(block, "IMAGE", Blockly.JavaScript.ORDER_ATOMIC) || null) !== null) {
        image = `\n.setImage(String(${Blockly.JavaScript.valueToCode(block, "IMAGE", Blockly.JavaScript.ORDER_ATOMIC)}))`;
    }
    if ((Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC) || null) !== null) {
        description = `\n.setDescription(String(${Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC)}))`;
    }
    if ((Blockly.JavaScript.valueToCode(block, "FOOTER", Blockly.JavaScript.ORDER_ATOMIC) || null) !== null) {
        footer = `\n.setFooter(String(${Blockly.JavaScript.valueToCode(block, "FOOTER", Blockly.JavaScript.ORDER_ATOMIC)}))`;
    }
    if ((Blockly.JavaScript.valueToCode(block, "THUMBNAIL", Blockly.JavaScript.ORDER_ATOMIC) || null) !== null) {
        thumbnail = `\n.setThumbnail(String(${Blockly.JavaScript.valueToCode(block, "THUMBNAIL", Blockly.JavaScript.ORDER_ATOMIC)}))`;
    }
    if ((Blockly.JavaScript.statementToCode(block, "FIELD", Blockly.JavaScript.ORDER_ATOMIC) || null) !== null) {
        field = `\n.addFields(${Blockly.JavaScript.statementToCode(block, "FIELD")})`;
    }
    return [`
            embeds: [new MessageEmbed()${title}${color}${image}${description}${footer}${thumbnail}${field}
            ]
    `, Blockly.JavaScript.ORDER_ATOMIC];
};