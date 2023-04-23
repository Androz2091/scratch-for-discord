import BaseBlockly from "blockly";
import Blockly from "blockly/core";


const BORDER_FIELDS = ["TITLE_LIME", "URL_EMBED", "DESCRIPTION_LIME", "AUTHORPFP", "THUMBNAIL_LIME", "FIELD_LIME", "IMAGE_LIME", "COLOR_LIME", "TIMESTAMP", "FOOTER_LIME", "SETAUTHOR"];

const BORDER_TYPES = [ "String", "String", "String", "String", "String", "Field", "String", "Colour", "", "String", "String"];

const s4d_message_embed_lime = {
    "message0": "Set Embed",
    "mutator": "s4d_message_embed_mutator_lime",
    "helpUrl": "",
    "tooltip": "",
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#54CF83"

};

Blockly.Blocks["s4d_message_embed_lime"] = {
    init: function() {
        this.jsonInit(s4d_message_embed_lime);
    }
};

Blockly.Blocks["s4d_message_embed_mutator_lime"] = {
    init: function() {
        this.setColour("#CECDCE");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

const BORDER_MUTATOR_MIXIN = {
    inputs_: [ true, false, false, false, false, false, false, false, false, false, false],


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
        const containerBlock = workspace.newBlock("s4d_message_embed_mutator_lime");
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

Blockly.Extensions.registerMutator("s4d_message_embed_mutator_lime", BORDER_MUTATOR_MIXIN, null, [""]);

Blockly.JavaScript["s4d_message_embed_lime"] = function(block){
    let title = "";
    let color = "";
    let image = "";
    let description = "";
    let footer = "";
    let thumbnail = "";
    let field = "";
    let timestamp = "";
    let author = "";
    let url = "";
    if ((Blockly.JavaScript.valueToCode(block, "TITLE_LIME", Blockly.JavaScript.ORDER_ATOMIC) || null) !== null) {
        title = `\n.setTitle(String(${Blockly.JavaScript.valueToCode(block, "TITLE_LIME", Blockly.JavaScript.ORDER_ATOMIC)}))`;
    }
    if ((Blockly.JavaScript.valueToCode(block, "COLOR_LIME", Blockly.JavaScript.ORDER_ATOMIC) || null) !== null) {
        color = `\n.setColor(String(${Blockly.JavaScript.valueToCode(block, "COLOR_LIME", Blockly.JavaScript.ORDER_ATOMIC)}))`;
    }
    if ((Blockly.JavaScript.valueToCode(block, "IMAGE_LIME", Blockly.JavaScript.ORDER_ATOMIC) || null) !== null) {
        image = `\n.setImage(String(${Blockly.JavaScript.valueToCode(block, "IMAGE_LIME", Blockly.JavaScript.ORDER_ATOMIC)}))`;
    }
    if ((Blockly.JavaScript.valueToCode(block, "DESCRIPTION_LIME", Blockly.JavaScript.ORDER_ATOMIC) || null) !== null) {
        description = `\n.setDescription(String(${Blockly.JavaScript.valueToCode(block, "DESCRIPTION_LIME", Blockly.JavaScript.ORDER_ATOMIC)}))`;
    }
    if ((Blockly.JavaScript.valueToCode(block, "FOOTER_LIME", Blockly.JavaScript.ORDER_ATOMIC) || null) !== null) {
        footer = `\n.setFooter(String(${Blockly.JavaScript.valueToCode(block, "FOOTER_LIME", Blockly.JavaScript.ORDER_ATOMIC)}))`;
    }
    if ((Blockly.JavaScript.valueToCode(block, "THUMBNAIL_LIME", Blockly.JavaScript.ORDER_ATOMIC) || null) !== null) {
        thumbnail = `\n.setThumbnail(String(${Blockly.JavaScript.valueToCode(block, "THUMBNAIL_LIME", Blockly.JavaScript.ORDER_ATOMIC)}))`;
    }
    if ((Blockly.JavaScript.statementToCode(block, "FIELD_LIME", Blockly.JavaScript.ORDER_ATOMIC) || null) !== null) {
        field = `\n.addFields(${Blockly.JavaScript.statementToCode(block, "FIELD_LIME")})`;
    }
    if ((Blockly.JavaScript.valueToCode(block, "TIMESTAMP", Blockly.JavaScript.ORDER_ATOMIC) || null) !== null) {
        timestamp = `\n.setTimestamp(new Date(${Blockly.JavaScript.valueToCode(block, "TIMESTAMP", Blockly.JavaScript.ORDER_ATOMIC)}))`;
        if (Blockly.JavaScript.valueToCode(block, "TIMESTAMP", Blockly.JavaScript.ORDER_ATOMIC) === "null"){
            timestamp = `\n.setTimestamp()`;}
    }
    if ((Blockly.JavaScript.valueToCode(block, "URL_EMBED", Blockly.JavaScript.ORDER_ATOMIC) || null) !== null) {
        url = `\n.setURL(String(${Blockly.JavaScript.valueToCode(block, "URL_EMBED", Blockly.JavaScript.ORDER_ATOMIC)}))`;
    }
    if ((Blockly.JavaScript.valueToCode(block, "SETAUTHOR", Blockly.JavaScript.ORDER_ATOMIC) || null) !== null) {
        author = `\n.setAuthor(String(${Blockly.JavaScript.valueToCode(block, "SETAUTHOR", Blockly.JavaScript.ORDER_ATOMIC)}))`;
        if ((Blockly.JavaScript.valueToCode(block, "AUTHORPFP", Blockly.JavaScript.ORDER_ATOMIC) || null) !== null) {
            author = `\n.setAuthor(String(${Blockly.JavaScript.valueToCode(block, "SETAUTHOR", Blockly.JavaScript.ORDER_ATOMIC)}),String(${Blockly.JavaScript.valueToCode(block, "AUTHORPFP", Blockly.JavaScript.ORDER_ATOMIC)}))`;
        }
    }
    let code = `${title}${color}${image}${description}${footer}${thumbnail}${field}${timestamp}${author}${url}\n`
    return code;
};

