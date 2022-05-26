import * as Blockly from "blockly";

const blockName = "set_afk_channel"

const blockData = {
    "type": "set_afk_channel",
    "message0": "Set afk channel to %1 with the reason %2 on the server %3",
    "args0": [
    {
        "type": "input_value",
        "name": "channel"
    },
    {
        "type": "input_value",
        "name": "reason"
    },
    {
        "type": "input_value",
        "name": "server"
    }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#14bde3",
    "tooltip": "",
    "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['set_afk_channel'] = function(block) {
    var server = Blockly.JavaScript.valueToCode(block, 'server', Blockly.JavaScript.ORDER_ATOMIC);
    var channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
    var reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);

    var code = `${server}.setAFKChannel(${channel},${reason});\n`;
    return code;
};
