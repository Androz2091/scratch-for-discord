import * as Blockly from "blockly/core";

const blockName = "on_banner_add";

const blockData = {
    "message0": "When guild banner is added %1 %2",
    "colour": "#F5AB1A",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        }
    ]
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `s4d.client.on("guildBannerAdd", async (guild, bannerURL) => {\n${statements}\n});\n`;
    return code;
};
