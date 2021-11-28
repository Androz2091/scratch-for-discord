import BaseBlockly from "blockly";
import Blockly from "blockly/core";

const truearr = [true, true, true, true, true, true, true, true, true, true]
const BORDER_FIELDS = [ "H_S_ERROR_MSG", "H_S_PREFIX", "H_S_DISABLED", "H_S_OWNER", "H_S_ID", "H_S_USERP", "H_S_BOTPERM", "H_S_GUILD_MSG", "H_S_NSFW", "H_S_COOLDOWN"];

const BORDER_TYPES = ["String",  "String", "String", "String", "String", "String", "String", "String", "String", "String"];
const mutator = 'h_settings_mutator'
const blockName = 'h_settings'
const s4d_message_row_block = {
    "message0": "Settings for command handler",
    "mutator": mutator,
    "tooltip": "",
    "helpUrl": "",
    "colour": "#40BF4A"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(s4d_message_row_block);
    }
};

Blockly.Blocks[mutator] = {
    init: function() {
        this.setColour("#CECDCE");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

const BORDER_MUTATOR_MIXIN = {
    inputs_: truearr,


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
        const containerBlock = workspace.newBlock(mutator);
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

Blockly.Extensions.registerMutator(mutator, BORDER_MUTATOR_MIXIN, null, [""]);
//[ "H_S_ERROR_MSG", "H_S_PREFIX", "H_S_DISABLED", "H_S_ID", "H_S_USERP", "H_S_BOTPERM", "H_S_GUILD_MSG", "H_S_NSFW", "H_S_COOLDOWN"]
Blockly.JavaScript[blockName] = function(block){
    let error = Blockly.JavaScript.valueToCode(block, "H_S_ERROR_MSG", Blockly.JavaScript.ORDER_ATOMIC) || "'Error has occured!'"
    let prefix = Blockly.JavaScript.valueToCode(block, "H_S_PREFIX", Blockly.JavaScript.ORDER_ATOMIC) || "'!'"
    let disabled = Blockly.JavaScript.valueToCode(block, "H_S_DISABLED", Blockly.JavaScript.ORDER_ATOMIC) || "'This command has been disabled!'"
    let owner = Blockly.JavaScript.valueToCode(block, "H_S_OWNER", Blockly.JavaScript.ORDER_ATOMIC) || "'This command is owner only!'"
    let id = Blockly.JavaScript.valueToCode(block, "H_S_ID", Blockly.JavaScript.ORDER_ATOMIC) || "'000000000000000'"
    let userperm = Blockly.JavaScript.valueToCode(block, "H_S_USERP", Blockly.JavaScript.ORDER_ATOMIC) || "'U dont have required permissions to run this command!'"
    let botperm = Blockly.JavaScript.valueToCode(block, "H_S_BOTPERM", Blockly.JavaScript.ORDER_ATOMIC) || "'I dont have required permissions for this command to work!'"
    let guild = Blockly.JavaScript.valueToCode(block, "H_S_GUILD_MSG", Blockly.JavaScript.ORDER_ATOMIC) || "'This command is Server only!'"
    let nsfw = Blockly.JavaScript.valueToCode(block, "H_S_NSFW", Blockly.JavaScript.ORDER_ATOMIC) || "'Mark the channel as NSFW, for this command to work!'"
    let cooldown = Blockly.JavaScript.valueToCode(block, "H_S_COOLDOWN", Blockly.JavaScript.ORDER_ATOMIC) || "'You are on a cooldown, please wait!'"
    let code = `fs.writeFileSync("./settingMessages.js", \`
    module.exports = {
        OWNER_ID: ${id},
        DEFAULT_PREFIX: ${prefix},
        ERROR_MSG: ${error},
        DISABLED_MSG: ${disabled},
        OWNER_MSG: ${owner},
        USERPERM_MSG: ${userperm},
        BOTPERM_MSG: ${botperm},
        GUILD_MSG: ${guild},
        NSFW_MSG: ${nsfw},
        COOLDOWN: ${cooldown}
    }\`);\n`
return code
};
