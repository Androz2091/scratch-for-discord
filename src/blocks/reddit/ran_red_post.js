import * as Blockly from "blockly/core";

const blockName = "ran_red_post";


const blockData = {
    "message0": "Get random reddit post from r/%1 then %2 %3",
    "args0": [
        {
            "type": "input_value",
            "name": "MESSAGE",
            "check": ["Number", "String"]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "THEN"
        }
    ],
    "colour": "#5ba58b",
    "previousStatement": null,
    "nextStatement": null,
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const message = Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC);
    const statementThen = Blockly.JavaScript.statementToCode(block, "THEN");
    return `
S4D_APP_REDDIT_musakui(${message}).then(async (result) => {
   ${statementThen}
}).catch(error => console.log(error));
`;
};
