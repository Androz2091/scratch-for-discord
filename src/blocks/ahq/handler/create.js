import * as Blockly from "blockly/core";

const blockName = "create_ahq_handler";
const blockData = {
    "type": "block_type",
    "message0": "Create command handler %1 Prefix %2 %3 OwnerId %4 %5 Owner Only Message %6 %7 Set NSFW channel only message %8 %9 Set not mod message %10",
    "args0": [
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "TOKEN",
            "check": "String"
        },
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "ownerId",
            "check": "String"
        },
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "notowner",
            "check": "String"
        },
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "ahq",
            "check": "String"
        },
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "notperms",
            "check": "String"
        },
    ],
    "colour": "#3333ff",
    "tooltip": "???",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const value = Blockly.JavaScript.valueToCode(block, "TOKEN", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `const ahqhandler = {
        "prefix": ${value},
        "owner": ${(Blockly.JavaScript.valueToCode(block, "ownerId", Blockly.JavaScript.ORDER_ATOMIC))},
        "not-owner": ${Blockly.JavaScript.valueToCode(block, "notowner", Blockly.JavaScript.ORDER_ATOMIC)},
        "nsfw": ${Blockly.JavaScript.valueToCode(block, "ahq", Blockly.JavaScript.ORDER_ATOMIC)},
        "not-perms": ${Blockly.JavaScript.valueToCode(block, "notperms", Blockly.JavaScript.ORDER_ATOMIC)}
    }`;
    return code;
};
