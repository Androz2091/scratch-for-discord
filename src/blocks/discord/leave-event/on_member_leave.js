import * as Blockly from "blockly/core";
import { javascriptGenerator } from "blockly/javascript";

const blockName = "s4d_on_member_leave";

const blockData = {
    "message0": "%{BKY_ON_MEMBER_LEAVE} %1 %2",
    "tooltip": "%{BKY_ON_MEMBER_LEAVE_TOOLTIP}",
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

javascriptGenerator.forBlock[blockName] = function(block) {
    const statements = javascriptGenerator.statementToCode(block, "STATEMENTS");
    const code = `s4d.client.on('guildMemberRemove', async (param1) => {\ns4d.leavingMember = param1;\n${statements}s4d.leavingMember = null\n});\n`;
    return code;
};
