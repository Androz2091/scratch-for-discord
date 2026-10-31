import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";

const blockName = "s4d_bot_server_count";

const blockData = {
    "message0": "%{BKY_BOT_SERVER_COUNT}",
    "colour": "#5b67a5",
    "tooltip": "",
    "output": "Number",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function() {
    const code = ["s4d.client.guilds.cache.size", Order.NONE];
    return code;
};
