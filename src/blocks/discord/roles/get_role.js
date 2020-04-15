import * as Blockly from "blockly/core";
import BaseBlockly from "blockly";
import { registerRestrictions } from "../../../restrictions";

const BORDER_FIELDS = [ "GET_ROLE_SERVER" ];

const BORDER_TYPES = [ "Server" ];

const blockName = "s4d_get_role";

const blockData = {
    "message0": "%{BKY_GET_ROLE}",
    "args0": [
        {
            "type": "input_value",
            "name": "VALUE",
            "check": "String"
        },
        {
            "type": "field_dropdown",
            "name": "SEARCH_TYPE",
            "options": [
                [
                    "%{BKY_NAME}",
                    "NAME"
                ],
                [
                    "id",
                    "ID"
                ]
            ]
        }
    ],
    "colour": "#2EB66B",
    "output": "Role",
    "mutator": "s4d_get_role_mutator",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Blocks["s4d_get_role_mutator"] = {
    init: function() {
        this.setColour("#CECDCE");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

const BORDER_MUTATOR_MIXIN = {
    inputs_: [ false ],

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
            this.inputs_[i] = xmlElement.getAttribute(BORDER_FIELDS[i]) == "true";
        }
        this.updateShape_();
    },

    decompose: function(workspace) {
        const containerBlock = workspace.newBlock("s4d_get_role_mutator");
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

Blockly.Extensions.registerMutator("s4d_get_role_mutator", BORDER_MUTATOR_MIXIN, null, [""]);

Blockly.JavaScript[blockName] = function(block){
    const value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
    const searchType = block.getFieldValue("SEARCH_TYPE");
    const server = block.getFieldValue("GET_ROLE_SERVER");
    if(searchType === "NAME"){
        if(server){
            return [ `${server}.roles.cache.find((role) => role.name === ${value})`, Blockly.JavaScript.ORDER_NONE ];
        } else {
            return [ `Array.prototype.concat.apply([], s4d.client.guilds.cache.array().map((g) => g.roles.cache.array())).find((role) => role.name === ${value})`, Blockly.JavaScript.ORDER_NONE ];
        }
    } else {
        if(server){
            return [ `${server}.roles.get(${value})`, Blockly.JavaScript.ORDER_NONE ];
        } else {
            return [ `Array.prototype.concat.apply([], s4d.client.guilds.cache.array().map((g) => g.roles.cache.array())).get(${value})`, Blockly.JavaScript.ORDER_NONE ];
        }
    }
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_GET_ROLE_VALUE",
        types: [
            "VALUE"
        ]
    }
]);
