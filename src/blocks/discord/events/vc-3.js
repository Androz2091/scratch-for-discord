import * as Blockly from "blockly";

const blockName = "s4d_on_vc_ud";

const blockData = {
    "message0": "When a user is %3 %1 %2",
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
                    "deaf",
                    "DEAF"
                ],
                [
                    "undeaf",
                    "UNDEAF"
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
    if(searchType === "DEAF"){
        const code = `s4d.client.on("voiceChannelDeaf", async (member, deafType) => {${statements}});\n`;
        return code;
    } else if(searchType === "UNDEAF"){
        const code = `s4d.client.on("voiceChannelUndeaf", (member, deafType) => {${statements}});\n`;
        return code;
    }
 };