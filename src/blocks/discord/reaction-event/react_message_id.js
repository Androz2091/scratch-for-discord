import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_react_message_id";

const blockData = {
    "message0": "%{BKY_REACT_MESSAGE_ID}",
    "tooltip": "%{BKY_REACT_MESSAGE_ID_TOOLTIP}",
    "colour": "#5BA58C",
    "output": "String"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function() {
    const code = ["rMessage.id", Order.NONE];
    return code;
};

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_REACT",
        types: [
            "s4d_on_react_added",
            "s4d_on_react_removed"
        ]
    }
]);
