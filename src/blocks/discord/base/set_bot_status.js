import * as Blockly from "blockly/core";
import { javascriptGenerator } from "blockly/javascript";

const blockName = "s4d_set_bot_status";

const blockData = {
    "message0": "%{BKY_SET_BOT_STATUS}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "STATUS",
            "options": [
                [
                    "%{BKY_STATUS_ONLINE}",
                    "online"
                ],
                [
                    "%{BKY_STATUS_IDLE}",
                    "idle"
                ],
                [
                    "%{BKY_STATUS_DND}",
                    "dnd"
                ],
                [
                    "%{BKY_STATUS_INVISIBLE}",
                    "invisible"
                ]
            ]
        }
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "%{BKY_SET_BOT_STATUS_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block){
    const status = block.getFieldValue("STATUS");
    return `s4d.client.user.setStatus("${status}");\n`;
};
