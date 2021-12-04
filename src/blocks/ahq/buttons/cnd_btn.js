import * as Blockly from "blockly";
const blockName = "snd_ahq_button";
function colourRandom() {
    var num = Math.floor(Math.random() * Math.pow(2, 24));
    return '#' + ('00000' + num.toString(16)).substr(-6);
}
const blockData = {
    "message0": "Send button on channel %1 %2 text %3 %4 button %5",
    "args0": [
        {
            "type": "input_value",
            "name": "Label",
            "check": ["Channel"]
        },
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "button name",
            "check": "String"
        },
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "button val",
            "check": "String"
        },
    ],
    "colour": colourRandom(),
    "previousStatement": null,
    "nextStatement": null,
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(block) {
    const name = Blockly.JavaScript.valueToCode(block, "Label", Blockly.JavaScript.ORDER_NONE);
    const data = Blockly.JavaScript.valueToCode(block, "button name", Blockly.JavaScript.ORDER_NONE);
    const statementsThen = Blockly.JavaScript.valueToCode(block, "button val", Blockly.JavaScript.ORDER_NONE);
    const ahq = statementsThen.replace("'", "").replace("'", "");
    const code = `${name}.send({
        content: String(${data}),
        components: [new MessageActionRow().addComponents(${ahq}

        )]
        });`;
    return code;
};