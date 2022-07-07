import * as Blockly from "blockly";
const blockName = "snd_ahq_button";
const ahqcolor = ['#33cc00', '#33cc00', '#33cc00', '#33cc00'];
function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockData = {
    "message0": "send button on channel %1 %2 text %3 %4 button %5 %6 embed %7",
    "args0": [
        {
            "type": "input_value",
            "name": "Label",
            "check": ["Channel"]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "button name",
            "check": "String"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "button val",
            "check": "String"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "embed val",
            "check": ""
        },

    ],
    "colour": listsGetRandomItem(ahqcolor, false),
    "previousStatement": null,
    "nextStatement": null,
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function (block) {
    let extra = "";
    const name = Blockly.JavaScript.valueToCode(block, "Label", Blockly.JavaScript.ORDER_NONE);
    const data = Blockly.JavaScript.valueToCode(block, "button name", Blockly.JavaScript.ORDER_NONE);
    const embed = Blockly.JavaScript.valueToCode(block, "embed val", Blockly.JavaScript.ORDER_NONE);
    if (embed) {
        extra = `${embed}`;
    }
    const statementsThen = Blockly.JavaScript.valueToCode(block, "button val", Blockly.JavaScript.ORDER_NONE);
    const ahq = statementsThen.replace("'", "").replace("'", "");
    const code = `${name}.send({
        content: String(${data}),
        components: [new MessageActionRow().addComponents(${ahq})],
        ${extra.replace("`", "").replace("`", "").replace("'", "").replace("'", "")}
        });`;
    return code;
};
