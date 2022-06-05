import Blockly from "blockly/core";

const blockName = "jg_roblox_get_user_thumbnail";

const blockData = {
    "message0": "get roblox user id %1 thumbnail with type %2 then %3 %4",
    "args0": [
        {
            "type": "input_value",
            "name": "USER",
            "check": ["Number", "var", "Env"]
        },
        {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
                [
                    "full body",
                    '720, "png", false, "Body"'
                ],
                [
                    "up close",
                    '720, "png", false, "Headshot"'
                ],
                [
                    "nearby",
                    '420, "png", false, "Bust"'
                ]
            ],
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "THEN"
        }

    ],
    "colour": 0,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Get the Roblox user with the ID and their thumbnail info then run the blocks below.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const user = Blockly.JavaScript.valueToCode(block, "USER", Blockly.JavaScript.ORDER_ATOMIC);
    const type = block.getFieldValue("TYPE");
    const then = Blockly.JavaScript.statementToCode(block, "THEN");
    // 720, "png", false, "Headshot"
    const code = `S4D_APP_NOBLOX.getPlayerThumbnail(${user}, ${type}).then(async (roblox_user_thumbnail) => {
  ${then}
})
    `;
    return code;
};