import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
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
        // Each block needs its own copy, the mixin would share one array between all blocks
        this.inputs_ = [ false ];
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
    // Attributes are lowercase: that is how the browser wrote them in saved projects
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
        const containerBlock = workspace.newBlock("s4d_get_role_mutator");
        for (let i = 0; i < this.inputs_.length; i++) {
        containerBlock.appendDummyInput()
            .setAlign(Blockly.inputs.Align.RIGHT)
            .appendField(Blockly.Msg[BORDER_FIELDS[i]])
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
                .setAlign(Blockly.inputs.Align.RIGHT)
                .appendField(Blockly.Msg[BORDER_FIELDS[i]]);
            }
        }
    }
};

Blockly.Extensions.registerMutator("s4d_get_role_mutator", BORDER_MUTATOR_MIXIN);

javascriptGenerator.forBlock[blockName] = function(block){
    const value = javascriptGenerator.valueToCode(block, "VALUE", Order.ATOMIC);
    const searchType = block.getFieldValue("SEARCH_TYPE");
    const server = block.getInput("GET_ROLE_SERVER") ? javascriptGenerator.valueToCode(block, "GET_ROLE_SERVER", Order.ATOMIC) : "";
    if(searchType === "NAME"){
        if(server){
            return [ `${server}.roles.cache.find((role) => role.name === ${value})`, Order.NONE ];
        } else {
            return [ `s4d.client.guilds.cache.flatMap((g) => g.roles.cache).find((role) => role.name === ${value})`, Order.NONE ];
        }
    } else {
        if(server){
            return [ `${server}.roles.cache.get(${value})`, Order.NONE ];
        } else {
            return [ `s4d.client.guilds.cache.flatMap((g) => g.roles.cache).get(${value})`, Order.NONE ];
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
