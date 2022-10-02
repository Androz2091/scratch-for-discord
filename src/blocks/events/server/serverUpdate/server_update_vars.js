import * as Blockly from "blockly";

const blockName = "server_update_vars";

const blockData = {
    "message0": "%1",
    "args0": [{
        "type": "field_dropdown",
        "name": "SEARCH_TYPE",
        "options": [
            [
                "Old Server",
                "OLD"
            ],
            [
                "New Server",
                "NEW"
            ]
        ]
    }],
    "output": "String",
    "colour": "#52fc03",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const searchType = block.getFieldValue("SEARCH_TYPE");
    if (searchType === "OLD") {
        const code = ["oldGuild", Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if (searchType === "NEW") {
        const code = ["newGuild", Blockly.JavaScript.ORDER_NONE];
        return code;
    }
};