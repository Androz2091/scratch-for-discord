import * as Blockly from "blockly/core";

const blockName = "send_m_embed_string";

const blockData = {
    "message0": "Send Embed",
    "colour": "#40BF4A",
    "tooltip": null,
    "output": "Embed",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["embed\n", Blockly.JavaScript.ORDER_NONE];
    return code;
};
