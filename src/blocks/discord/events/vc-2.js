import * as Blockly from "blockly";

const blockName = "s4d_on_vc_um";

const blockData = {
    "message0": "When a user is %3 in a vc %1 %2",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        },
        {
            "type": "field_dropdown",
            "name": "SEARCH_TYPE",
            "options": [
                [
                    "mute",
                    "MUTE"
                ],
                [
                    "unmute",
                    "UNMUTE"
                ]
            ]
        }
    ],
    "colour": "#F5AB1A",
    "tooltip": "Voice Channel updates",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};


Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const searchType = block.getFieldValue("SEARCH_TYPE");
    if(searchType === "MUTE"){
        const code = `s4d.client.on("voiceChannelMute", 
async (member, muteType) => {${statements}});\n`;
        return code;
    } else if(searchType === "UNMUTE"){
        const code = `s4d.client.on("voiceChannelUnmute", async (member, oldMuteType) => {${statements}});\n`;
        return code;
    }
 };