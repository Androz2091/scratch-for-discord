import * as Blockly from "blockly";
const blockName = "mute_ahq";
const blockData = {
    "message0": "timeout member %1 %2 for seconds %3 %4 reason %5",
    "args0": [{
        "type": "input_value",
        "name": "member",
        "check": "Member"
    },
    { "type": "input_dummy" },
    {
        "type": "input_value",
        "name": "time",
        "check": "Number"
    },
    { "type": "input_dummy" }, {
        "type": "input_value",
        "name": "reason",
        "check": "String"
    },],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function (block) {
    const member = Blockly.JavaScript.valueToCode(block, "member", Blockly.JavaScript.ORDER_NONE);
    const time = Blockly.JavaScript.valueToCode(block, "time", Blockly.JavaScript.ORDER_NONE);
    const reason = Blockly.JavaScript.valueToCode(block, "reason", Blockly.JavaScript.ORDER_NONE);
    const code = `${member.replace(".user", "").replace(".user", "")}.timeout((${time} * 1000), ${reason})
    `;
    return code;
};
