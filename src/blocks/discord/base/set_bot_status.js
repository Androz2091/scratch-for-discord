import * as Blockly from "blockly/core";

const blockName = "s4d_set_bot_status";

const blockData = {
    "message0": "%{BKY_SET_BOT_STATUS}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
                [
                    "%{BKY_ONLINE}",
                    "online"
                ],
                [
                    "%{BKY_OFFLINE}",
                    "offline"
                ],
                [
                    "%{BKY_IDLE}",
                    "idle"
                ],
                [
                    "%{BKY_DND}",
                    "dnd"
                ]
            ]
        },
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const type = block.getFieldValue("TYPE");
    const code = `s4d.client.user.setActivity({status: '${type}'});\n`;
    return code;
};
 