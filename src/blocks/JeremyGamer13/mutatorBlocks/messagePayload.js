import Blockly from "blockly/core";
import BaseBlockly from "blockly";
const yourName = "jg"
const blockName = yourName + "_" + "messages_new_message_payload";
const menuName = blockName + "_checkboxMutatorMenu"

const BlockColor = "#4C97FF"
// menu customization
const menuUsesBlockColor = true
const menuTooltip = ''

// border fields is the name of the input when getting it for the exported code.
// they HAVE to be uppercase currently or it won't work since im too lazy to change the uppercase function uses
const BORDER_FIELDS = ["CONTENT", "TTS", "REPLYING_TO_MESSAGE"];
// border types is the input type of every input in the block
const BORDER_TYPES = ["String", "Boolean", "Message"];
// names is the name of that input in the menu and in the final block
const names = ["content", "text to speech?", "replying to message"];
const amountOfInputs = names.length

const blockData = {
    "message0": "new message for target %1",
    "args0": [
        {
            "type": "input_value",
            "name": "TARGET",
            "check": ["Message", "Channel", "User", "Member"]
        }
    ],
    "colour": BlockColor,
    "tooltip": "Create a message to be sent later. The target can be any Channel, any Member, any User, etc.",
    "output": "MessagePayload"
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

Blockly.JavaScript[blockName] = function (block) {
    // code should be the first couple lines of your code before the inputs
    const TARGET = Blockly.JavaScript.valueToCode(block, "TARGET", Blockly.JavaScript.ORDER_NONE);
    let code = [`new Discord.MessagePayload(${TARGET}, {`]
    const CONTENT = Blockly.JavaScript.valueToCode(block, "CONTENT", Blockly.JavaScript.ORDER_NONE);
    const TTS = Blockly.JavaScript.valueToCode(block, "TTS", Blockly.JavaScript.ORDER_NONE);
    const REPLYINGTOMESSAGE = Blockly.JavaScript.valueToCode(block, "REPLYING_TO_MESSAGE", Blockly.JavaScript.ORDER_NONE);
    // check if the inputs exist before adding them to the exported code
    if (CONTENT) {
        code.push(`content: ${CONTENT},`)
    }
    if (TTS) {
        code.push(`tts: ${TTS},`)
    }
    if (REPLYINGTOMESSAGE) {
        code.push(`reply: {messageReference: ${REPLYINGTOMESSAGE}},`)
    }
    // the last line of code here, do another code.push(``) if you need to put more code
    code.push(`})`)
    return [code.join("\n"), Blockly.JavaScript.ORDER_ATOMIC];
};