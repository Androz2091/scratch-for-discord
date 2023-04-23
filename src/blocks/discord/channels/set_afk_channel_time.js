import * as Blockly from "blockly";

const blockName = "set_afk_channel_time"

const blockData = {
    "type": "set_afk_channel_time",
    "message0": "Set afk time of %1 seconds on server %2 with reason %3",
    "args0": [
    {
        "type": "input_value",
        "name": "time"
    },
    {
        "type": "input_value",
        "name": "server"
    },
    {
        "type": "input_value",
        "name": "reason"
    }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#14bde3",
    "tooltip": "The time can only be 60, 300, 900, 1800 or 3600 seconds!",
    "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['set_afk_channel_time'] = function(block) {
    var time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
    var server = Blockly.JavaScript.valueToCode(block, 'server', Blockly.JavaScript.ORDER_ATOMIC);
    var reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);

    var code = `${server}.setAFKTimeout(${time},${reason});\n`;
    return code;
};
