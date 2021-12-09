import * as Blockly from "blockly";


const blockName = "ps_os_stats";

const blockData = {
    "message0": "%1",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "INFO",
            "options": [
                [ "Operating System", "platform" ],
                [ "System Uptime", "sysUptime" ],
                [ "Free Memory", "freemem" ],
            ]
        },
    ],
    "output": "String",
    "colour": "#a5745b",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const info = block.getFieldValue("INFO");
    const code = [`os.${info}()`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
