import * as Blockly from "blockly/core";
import BaseBlockly from "blockly";

const blockName = "start_antispam";

const blockData = {
    "message0": "Start Antispam",
    "mutator": "start_antispam_mutator",
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};
const BORDER_FIELDS = [ "warnThreshold", "muteThreshold", "kickThreshold", "banThreshold","maxInterval", "warnMessage","kickMessage","muteMessage","banMessage","maxDuplicatesWarning","maxDuplicatesKick","maxDuplicatesBan","maxDuplicatesMute","ignoreBots","removeMessages","timeMute","muteRoleName"];

const BORDER_TYPES = [ "Number",          "Number",          "Number",      "Number",      "Number",     "String",      "String",     "String",      "String",   "Number" ,              "Number",         "Number",          "Number",            "Boolean",   "Boolean",    "Number","String"];



Blockly.Blocks["start_antispam_mutator"] = {
    init: function() {
        this.setColour("#CECDCE");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

const BORDER_MUTATOR_MIXIN = {
    inputs_: [ false, false, false, false ,false,false,false,false,false,false,false,false,false,false,false,false,false],


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
        const containerBlock = workspace.newBlock("start_antispam_mutator");
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

Blockly.Extensions.registerMutator("start_antispam_mutator", BORDER_MUTATOR_MIXIN, null, [""]);

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript["s4d_message_embed"] = function(block){
    let warnThreshold = Blockly.JavaScript.valueToCode(block, "warnThreshold", Blockly.JavaScript.ORDER_ATOMIC)||null
    let muteThreshold = Blockly.JavaScript.valueToCode(block, "muteThreshold", Blockly.JavaScript.ORDER_ATOMIC)||null
    let kickThreshold = Blockly.JavaScript.valueToCode(block, "kickThreshold", Blockly.JavaScript.ORDER_ATOMIC)||null
    let banThreshold = Blockly.JavaScript.valueToCode(block, "banThreshold", Blockly.JavaScript.ORDER_ATOMIC)||null
    let maxInterval = Blockly.JavaScript.valueToCode(block, "maxInterval", Blockly.JavaScript.ORDER_ATOMIC)||null
    let warnMessage = Blockly.JavaScript.valueToCode(block, "warnMessage", Blockly.JavaScript.ORDER_ATOMIC)||null
    let kickMessage = Blockly.JavaScript.valueToCode(block, "kickMessage", Blockly.JavaScript.ORDER_ATOMIC)||null
    let muteMessage = Blockly.JavaScript.valueToCode(block, "muteMessage", Blockly.JavaScript.ORDER_ATOMIC)||null
    let banMessage = Blockly.JavaScript.valueToCode(block, "banMessage", Blockly.JavaScript.ORDER_ATOMIC)||null
    let maxDuplicatesWarning = Blockly.JavaScript.valueToCode(block, "maxDuplicatesWarning", Blockly.JavaScript.ORDER_ATOMIC)||null
    let maxDuplicatesKick = Blockly.JavaScript.valueToCode(block, "maxDuplicatesKick", Blockly.JavaScript.ORDER_ATOMIC)||null
    let maxDuplicatesBan = Blockly.JavaScript.valueToCode(block, "maxDuplicatesBan", Blockly.JavaScript.ORDER_ATOMIC)||null
    let maxDuplicatesMute = Blockly.JavaScript.valueToCode(block, "maxDuplicatesMute", Blockly.JavaScript.ORDER_ATOMIC)||null
    let muteRoleName = Blockly.JavaScript.valueToCode(block, "muteRoleName", Blockly.JavaScript.ORDER_ATOMIC)||null
    let timeMute = Blockly.JavaScript.valueToCode(block, "timeMute", Blockly.JavaScript.ORDER_ATOMIC)||null
    let ignoreBots = Blockly.JavaScript.valueToCode(block, "ignoreBots", Blockly.JavaScript.ORDER_ATOMIC)||null
    let removeMessages = Blockly.JavaScript.valueToCode(block, "removeMessages", Blockly.JavaScript.ORDER_ATOMIC)||null
    return [ `s4d.antiSpam = new AntiSpam({
        ${warnThreshold === null ? "" : `warnThreshold: ${warnThreshold},`}
        ${muteThreshold === null ? "" : `muteThreshold: ${muteThreshold},`}
        ${kickThreshold === null ? "" : `kickThreshold: ${kickThreshold},`}
        ${banThreshold === null ? "" : `banThreshold: ${banThreshold},`}
        ${maxInterval === null ? "" : `maxInterval: ${maxInterval},`}
        ${warnMessage === null ? "" : `warnMessage: ${warnMessage},`}
        ${kickMessage === null ? "" : `kickMessage: ${kickMessage},`}
        ${muteMessage === null ? "" : `muteMessage: ${muteMessage},`}
        ${banMessage === null ? "" : `banMessage: ${banMessage},`}
        ${maxDuplicatesWarning === null ? "" : `maxDuplicatesWarning: ${maxDuplicatesWarning},`}
        ${maxDuplicatesKick === null ? "" : `maxDuplicatesKick: ${maxDuplicatesKick},`}
        ${maxDuplicatesBan === null ? "" : `maxDuplicatesBan: ${maxDuplicatesBan},`}
        ${maxDuplicatesMute === null ? "" : `maxDuplicatesMute: ${maxDuplicatesMute},`}
        ${muteRoleName === null ? "" : `muteRoleName: ${muteRoleName},`}
        ${timeMute === null ? "" : `timeMute: ${timeMute},`}
        ${ignoreBots === null ? "" : `ignoreBots: ${ignoreBots},`}
        ${removeMessages === null ? "" : `removeMessages: ${removeMessages},`}
      });
    `, Blockly.JavaScript.ORDER_ATOMIC ];
};