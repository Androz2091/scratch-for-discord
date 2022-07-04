import * as Blockly from "blockly/core";

const blockName = "jg_file_foreachfile";

const blockData = {
    "message0": "for each file in folder %1 %2 do %3",
    "args0": [
        {
            "type": "input_value",
            "name": "fileName",
            "check": ["String", "var", "Env"]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "THEN"
        },
    ],
    "colour": 45,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Runs the blocks every time a file is found in the mentioned folder. You can do \"./\" to mention the folder the bot is in.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const fileName = Blockly.JavaScript.valueToCode(block, "fileName", Blockly.JavaScript.ORDER_ATOMIC);
    const statementThen = Blockly.JavaScript.statementToCode(block, "THEN");
    let code = `fs.readdir(${fileName}, async (err, files) => {
  files.forEach(async files4d => {
    ${statementThen}
  });
});
`;
    return code;
};
