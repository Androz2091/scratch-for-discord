import * as Blockly from "blockly";

const blockName = "s4d_on_vc";

const blockData = {
    "message0": "When a user %3 a vc %1 %2",
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
                    "joins",
                    "JOIN"
                ],
                [
                    "leaves",
                    "LEAVE"
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
    if(searchType === "JOIN"){
        const code = `s4d.client.on("voiceChannelJoin", 
async (member, channel) => {${statements}})\n`;
        return code;
    } else if(searchType === "LEAVE"){
        const code = `s4d.client.on("voiceChannelLeave",  async (member, channel) => {${statements}})\n`;
        return code;
            }
};