// return guild_id || Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#q2wnse

import Blockly from "blockly/core";

const blockName = "dash_guild_id";

const blockData = {
    "type": "dash_guild_id",
    "message0": "Guild ID",
    "output": null,
    "colour": 300,
    "tooltip": "Returns the guild id of the input",
    "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['dash_guild_id'] = function () {
    // TODO: Assemble JavaScript into code variable.
    var code = 'guild.id';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};



// -----------  [ VALUE ] --------------

// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#qx4d4e

const blockName1 = "dash_value"

const blockData1 = {
    "type": "dash_value",
    "message0": "Value",
    "output": null,
    "colour": 300,
    "tooltip": "Returns the value of the input",
    "helpUrl": ""
}

Blockly.Blocks[blockName1] = {
    init: function () {
        this.jsonInit(blockData1);
    }
};

Blockly.JavaScript['dash_value'] = function () {
    // TODO: Assemble JavaScript into code variable.
    var code = 'value';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};