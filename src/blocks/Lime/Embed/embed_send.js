import Blockly from "blockly/core";

const blockName = "lime_s4d_embed_send";

const blockData = {
    "type": "s4d_embed_send",
    "message0": "Call Embed With name %1 and text %2",
    "args0": [
        {
            "type": "input_value",
            "name": "NAME"
        },
        {
            "type": "input_value",
            "name": "TEXT",
            "check": "String"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#54CF83",
    "tooltip": "",
    "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['s4d_embed_send'] = function (block) {
    let name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    let text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
    name = name.split(" ")
    name = name.join('_')
    name = name.toLowerCase()
    name = name.replace("'", "").replace("'", "")
    let code = `s4dmessage.channel.send({content:${text}, embeds : [${name}]})`;
    return code;
};
