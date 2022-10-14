import * as Blockly from "blockly";
const blockName = "stamp_ahq_embed";

const blockData = {
    "message0": "Set Timestamp to Embed %1",
    "args0": [
        {
            "type": "input_value",
            "name": "button name",
            "check": "String"
        },
    ],
    "colour": '#40BF4A',
    "previousStatement": null,
    "nextStatement": null,
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(block) {
    const name = (Blockly.JavaScript.valueToCode(block, "button name", Blockly.JavaScript.ORDER_NONE) || "embed");
    const finaln = name.replace("'", "").replace("'", "");
    const code = `${finaln}.setTimestamp();`;
    return code;
};