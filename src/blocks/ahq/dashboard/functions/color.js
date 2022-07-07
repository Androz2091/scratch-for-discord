import * as Blockly from "blockly/core";
const ahqcolor = ['#0EB22B', '#0EB22B', '#0EB22B', '#0EB22B'];
import { registerRestrictions } from "../../../../restrictions";

function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockName = "add_color_dash";
//block working now working
const blockData = {
    "type": "block_type",
    "message0": "add colour input %1 name %2 %3 description %4 %5 setter %6 %7 get %8",
    "args0": [{
        "type": "input_space"
    },
    {
        "type": "input_value",
        "name": "name",
        "check": "String"
    },
    {
        "type": "input_space"
    },
    {
        "type": "input_value",
        "name": "desc",
        "check": "String"
    },
    {
        "type": "input_space"
    },
    {
        "type": "input_statement",
        "name": "set"
    },
    {
        "type": "input_space"
    },
    {
        "type": "input_value",
        "name": "getter",
        "check": "String"
    }],
    "colour": listsGetRandomItem(ahqcolor, false),
    "tooltip": "Returns color in string",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function (block) {
    const code = `s4d.client.dashboard.addColorInput(${Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_NONE)}, ${Blockly.JavaScript.valueToCode(block, "desc", Blockly.JavaScript.ORDER_NONE)}, async function(client, guild, value) {${Blockly.JavaScript.statementToCode(block, "set")}}, async function(client, guild) {
        await delay(200);
        return (${Blockly.JavaScript.valueToCode(block, "getter", Blockly.JavaScript.ORDER_NONE)})
    });`
    return code;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_AHQ_CONTENT",
        types: [
            "name", "desc", "set", "length", "getter"
        ]
    }
]);