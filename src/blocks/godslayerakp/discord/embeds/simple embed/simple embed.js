// the current state of my checkbox mutator
// the goal is to have this checkbox mutator solve the following problems with existing checkbox mutators:

// 1. dont kick out any inputs when the mutator menu is opened
// 2. dont apply the same inputs as another mutator on the workspace
// 3. dont have any save & loading issues that will cause problems with the users blocks

// current goals achieved: 1, 2, 3(?)!!!!

import Blockly from "blockly/core";
import BaseBlockly from "blockly";
const blockName = "gsa_simple_embed";
const menuName = blockName + "_checkboxMutatorMenu"

const BlockColor = '#40BF4A'
// menu customization
const menuUsesBlockColor = true
const menuTooltip = ''

// border fields is the name of the input when getting it for the exported code.
// they HAVE to be uppercase currently or it won't work since im too lazy to change the uppercase function uses
const BORDER_FIELDS = ['message', 'color', 'title', 'url', 'author', 'description', 'thumbnail', 'fields', 'image', 'timestamp', 'footer'];
// border types is the input type of every input in the block
const BORDER_TYPES = ['String', ['String', 'Colour'], 'String', 'String', 'gsa_set_simple_embed_author', 'String', 'String', 'gsa_create_simple_embed_fields', 'String', 'String', 'gsa_set_simple_embed_footer'];
// names is the name of that input in the menu and in the final block
const names = ['message', 'color', 'title', 'url', 'author:', 'description', 'thumbnail', 'fields:', 'image', 'timestamp', 'footer:'];
const amountOfInputs = names.length

const blockData = {
    "message0": "simple embed %1",
    "args0": [
        {
            "type": "input_dummy",
        }
    ],
    "colour": BlockColor,
    "output": 'MessageEmbed',
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
            this.inputs_.push(i < 3)
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

Blockly.JavaScript[blockName] = function (block) {
    // code should be the first couple lines of your code before the inputs
    let message = '';
    let color = '';
    let title = '';
    let url = '';
    let author = '';
    let description = '';
    let thumbnail = '';
    let fields = '';
    let image = '';
    let timestamp = '';
    let footer = '';
    // check if the inputs exist before adding them to the exported code
    if (this.inputs_[1]) {
        color = `color: String(${Blockly.JavaScript.valueToCode(block, "color", Blockly.JavaScript.ORDER_NONE)}), \n`
    }
    if (this.inputs_[2]) {
        title = `title: String(${Blockly.JavaScript.valueToCode(block, "title", Blockly.JavaScript.ORDER_NONE)}), \n`
    }
    if (this.inputs_[3]) {
        url = `url: String(${Blockly.JavaScript.valueToCode(block, "url", Blockly.JavaScript.ORDER_NONE)}), \n`
    }
    if (this.inputs_[4]) {
        author = Blockly.JavaScript.valueToCode(block, "author", Blockly.JavaScript.ORDER_ATOMIC)
    }
    if (this.inputs_[5]) {
        description = `description: String(${Blockly.JavaScript.valueToCode(block, "description", Blockly.JavaScript.ORDER_NONE)}), \n`
    }
    if (this.inputs_[6]) {
        thumbnail = `thumbnail: {
            url: String(${Blockly.JavaScript.valueToCode(block, "thumbnail", Blockly.JavaScript.ORDER_NONE)})
        }, \n`
    }
    if (this.inputs_[7]) {
        fields = Blockly.JavaScript.valueToCode(block, "fields", Blockly.JavaScript.ORDER_ATOMIC)
    }
    if (this.inputs_[8]) {
        image = `image: {
            url: String(${Blockly.JavaScript.valueToCode(block, "image", Blockly.JavaScript.ORDER_NONE)})
        }, \n`
    }
    if (this.inputs_[9]) {
        timestamp = `timestamp: new date(String(${Blockly.JavaScript.valueToCode(block, "timestamp", Blockly.JavaScript.ORDER_NONE)})),`
    }
    if (this.inputs_[10]) {
        footer = Blockly.JavaScript.valueToCode(block, "footer", Blockly.JavaScript.ORDER_ATOMIC)
    }
    if (this.inputs_[0]) {
      message = `content: String(${Blockly.JavaScript.valueToCode(block, "message", Blockly.JavaScript.ORDER_NONE)})`
    }
    // the last line of code here, do another code.push(``) if you need to put more code
    const code = `${message}embeds: [{
${color}${title}${url}${author}${description}${thumbnail}${fields}${image}${timestamp}${footer}}]`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};



