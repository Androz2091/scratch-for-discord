import * as Blockly from "blockly/core";
import "@blockly/field-grid-dropdown";

const blockName = "jose_send_image_slash";

const blockData = {
    "message0": "send in slash command as hidden %1 with image %2",
    "args0": [
        {
            "type": "input_value",
            "name": "HIDDEN",
            "check": "Boolean"
        },
        {
            "type": "input_value",
            "name": "IMAGE",
            "check": "image"
        },
    ],
    "colour": "#4c88ff",
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const hidden = Blockly.JavaScript.valueToCode(block, "HIDDEN", Blockly.JavaScript.ORDER_ATOMIC);
    const image = Blockly.JavaScript.valueToCode(block, "IMAGE", Blockly.JavaScript.ORDER_ATOMIC);
    let code = `interaction.reply({ 
      files: [${image}],
      ephemeral: ${hidden}
    });
    `;
    return code
};