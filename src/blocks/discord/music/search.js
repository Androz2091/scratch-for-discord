import Blockly from "blockly/core";

const blockName = "s4d_search";

const blockData = {
    "message0": "%{BKY_SEARCH}",
    "args0": [
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": "Member"
        },
        {
            "type": "input_value",
            "name": "STRING",
            "check": "String"
        },
    ],
    "output": "MusicSearch",
    "colour": "#a55b80",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const string = Blockly.JavaScript.valueToCode(block, "STRING", Blockly.JavaScript.ORDER_ATOMIC)
    const member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC)
    return [`await s4d.player.search(${string}, {requestedBy: ${member}}).then(x => x.tracks[0])`, Blockly.JavaScript.ORDER_NONE ];
};
