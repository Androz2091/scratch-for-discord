import * as Blockly from "blockly";


const blockName = "ps_stats";

const blockData = {
    "message0": "%1",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "INFO",
            "options": [
                [ "CPU Average Usage", "usage" ],
                [ "CPU Model", "model" ],
                [ "Uptime", "uptime" ],
                [ "Hostname", "hostname" ],
                [ "available", "available" ],
                [ "deletable", "deletable" ],
                [ "deleted", "deleted" ],
                [ "url", "url" ],
            ]
        },
    ],
    "output": "String",
    "colour": "#5BA58C",
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
    if (info == "uptime") {
        const code = [`os.uptime()`, Blockly.JavaScript.ORDER_NONE];
    } else if (info == "hostname") {
        const code = [`os.hostname()`, Blockly.JavaScript.ORDER_NONE];
    } else {
    const code = [`cpu.${info}()`, Blockly.JavaScript.ORDER_NONE];
    }
    return code;
};
