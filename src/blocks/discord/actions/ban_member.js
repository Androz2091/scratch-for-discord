import Blockly from "blockly/core";
import BaseBlockly from "blockly";

const blockName = "s4d_ban_member";

const BORDER_FIELDS = [ "HOURS", "REASON" ];
//const BORDER_FIELDS_ADDED = [ "DURING_HOURS", "WITH_REASON" ];

const BORDER_TYPES = [ "Number", "String" ];

const blockData = {
    "message0": "%{BKY_BAN_MEMBER}",
    "args0": [
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": "Member"
        }
    ],
    "mutator": "s4d_ban_member_mutator",
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#4C97FF",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Blocks["s4d_ban_member_mutator"] = {
    init: function() {
        this.setColour("#CECDCE");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

const BORDER_MUTATOR_MIXIN = {
    inputs_: [ true, false ],

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
    
    domToMutation: function(xmlElement) {
        for (let i = 0; i < this.inputs_.length; i++) {
            this.inputs_[i] = xmlElement.getAttribute(BaseBlockly.Msg[BORDER_FIELDS[i]]) == "true";
        }
        this.updateShape_();
    },

    decompose: function(workspace) {
        const containerBlock = workspace.newBlock("s4d_ban_member_mutator");
        for (let i = 0; i < this.inputs_.length; i++) {
        containerBlock.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(BaseBlockly.Msg[BORDER_FIELDS[i]])
            .appendField(new Blockly.FieldCheckbox(this.inputs_[i] ? "TRUE" : "FALSE"), BaseBlockly.Msg[BORDER_FIELDS[i]].toUpperCase());
        }
        containerBlock.initSvg();
        return containerBlock;
    },

    compose: function(containerBlock) {
        for (let i = 0; i < this.inputs_.length; i++) {
            this.inputs_[i] = (containerBlock.getFieldValue(BaseBlockly.Msg[BORDER_FIELDS[i]].toUpperCase()) == "TRUE"); 
        }
        this.updateShape_();
    },

    updateShape_: function() {
        for (let i = 0; i < this.inputs_.length; i++) {
            if (this.getInput(BaseBlockly.Msg[BORDER_FIELDS[i]].toUpperCase())) this.removeInput(BaseBlockly.Msg[BORDER_FIELDS[i]].toUpperCase());
            if (this.getInput("h")) this.removeInput("h");
        }
        for (let i = 0; i < this.inputs_.length; i++) {
            if (this.inputs_[i]) {
                this.appendValueInput(BaseBlockly.Msg[BORDER_FIELDS[i]].toUpperCase())
                .setCheck(BORDER_TYPES[i])
                .appendField("coucou %1 h")
                .appendField("ok");
                if(i === 0){
                    this.setInputsInline(false);
                    this.appendDummyInput("h")
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField("heures");
                }
            }
        }
    }
};

Blockly.Extensions.registerMutator("s4d_ban_member_mutator", BORDER_MUTATOR_MIXIN, null, [""]);

Blockly.JavaScript[blockName] = function(block) {
    const hours = Blockly.JavaScript.valueToCode(block, "HOURS", Blockly.JavaScript.ORDER_ATOMIC) || null;
    const reason = Blockly.JavaScript.valueToCode(block, "REASON", Blockly.JavaScript.ORDER_ATOMIC) || null;
    console.log(hours, reason);
    const member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${member}.ban();\n`;
    return code;
};
