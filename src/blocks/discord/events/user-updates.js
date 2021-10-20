import * as Blockly from "blockly";

const blockName = "s4d_on_useru";

const blockData = {
    "message0": "When a user's %3 updates %1 %2",
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
                    "username",
                    "NAME"
                ],

                                [
                    "discriminator",
                    "DISCRIM"
                ],
              ["avatar",
              "AV"]
            ]
        }
    ],
    "colour": "#F5AB1A",
    "tooltip": "User updates",
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
  if(searchType === "NAME"){
        const code = `s4d.client.on("userUsernameUpdate", 
    async (user, oldUsername, newUsername) => {${statements}});\n`;
        return code;
            } else if(searchType === "DISCRIM"){
        const code = `s4d.client.on("userDiscriminatorUpdate", async (user, oldDiscriminator, newDiscriminator) => {${statements}});\n`;
        return code;
    } else if(searchType === "AV"){
        const code = `s4d.client.on("userAvatarUpdate", 
    async (user, oldAvatarURL, newAvatarURL) => {${statements}});\n`;
        return code;
    }
};