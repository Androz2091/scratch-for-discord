import * as Blockly from "blockly";

const blockName = "pagination_embed";

const blockData = {
    "message0": "%1 %2",
    "args0": [
        {
            "type": "input_value",
            "name": "EMBED1",
            "check": [ "Embed", "Embeds","MessageEmbed" ]
        },
        {
            "type": "input_value",
            "name": "EMBED2",
            "check": [ "Embed", "Embeds","MessageEmbed" ]
        },
    ],
    "output": "Embeds",
    "colour": "#5BA58C",
    "inputsInline": true,
    "tooltip": "",
    "helpUrl": "",
}; 

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    },
};

Blockly.JavaScript[blockName] = function(block) {
    const embed1 = Blockly.JavaScript.valueToCode(block, "EMBED1", Blockly.JavaScript.ORDER_ATOMIC);
    const embed2 = Blockly.JavaScript.valueToCode(block, "EMBED2", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${embed1},${embed2}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
