import * as Blockly from "blockly/core";
import { javascriptGenerator } from "blockly/javascript";

const blockName = "s4d_on_button_click";

const blockData = {
    "message0": "%{BKY_ON_BUTTON_CLICK}",
    "colour": "#5865F2",
    "args0": [
        {
            "type": "field_input",
            "name": "ID",
            "text": "my-button"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        }
    ],
    "tooltip": "%{BKY_ON_BUTTON_CLICK_TOOLTIP}"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

// Buttons and select menus share this event: both are found by their id
javascriptGenerator.forBlock[blockName] = function(block) {
    const id = block.getFieldValue("ID");
    const statements = javascriptGenerator.statementToCode(block, "STATEMENTS");
    return `s4d.client.on(Discord.Events.InteractionCreate, async (s4dinteraction) => {\nif (!(s4dinteraction.isButton() || s4dinteraction.isStringSelectMenu()) || s4dinteraction.customId !== ${JSON.stringify(id)}) return;\n${statements}});\n`;
};
