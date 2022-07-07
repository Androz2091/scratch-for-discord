import * as Blockly from "blockly/core";

const blockName = "embed_send_round";

const blockData = {
    "message0": "send embed %1",
    "args0": [{
        "type": "input_value",
        "name": "Label",
        "check": "String"
    }],
    "colour": "#54CF83",
    "output": "",
    "tooltip": "Send the named embed.",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function (block) {
    var name = Blockly.JavaScript.valueToCode(block, "Label", Blockly.JavaScript.ORDER_NONE)
    name = name.split(" ")
    name = name.join('_')
    name = name.toLowerCase()
    name = name.replace("'", "").replace("'", "")
    const code = [`embeds: [${name}]`, Blockly.JavaScript.ORDER_ATOMIC];
    return code;
};
