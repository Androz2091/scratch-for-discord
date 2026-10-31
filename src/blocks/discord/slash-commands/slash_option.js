import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_slash_option";

const blockData = {
    "message0": "%{BKY_SLASH_OPTION}",
    "args0": [
        {
            "type": "field_input",
            "name": "NAME",
            "text": "text"
        }
    ],
    "colour": "#5865F2",
    "output": "String",
    "tooltip": "%{BKY_SLASH_OPTION_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block) {
    const name = block.getFieldValue("NAME").toLowerCase().trim();
    return [ `(s4dinteraction.options.getString(${JSON.stringify(name)}) ?? "")`, Order.ATOMIC ];
};

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_SLASH_COMMAND",
        types: [
            "s4d_on_slash_command"
        ]
    }
]);
