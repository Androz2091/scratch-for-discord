import Blockly from "blockly/core";

const blockName = "s4d_unban_member";

const blockData = {
    "message0": "%{BKY_UNBAN_MEMBER}",
    "args0": [
        {
            "type": "input_value",
            "name": "SERVER",
            "check": "Server"
        },
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": ["String","Number"]
        }
    ],
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

Blockly.JavaScript[blockName] = function(block) {

    const memberr = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${server}.members.unban(${memberr})\n`;
    return code;
};

