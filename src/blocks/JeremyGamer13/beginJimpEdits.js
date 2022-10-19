import Blockly from "blockly/core";

const blockName = "jg_beginJimp";

const blockData = {
    "message0": "Begin image edits on URL, buffer or File %2 using effects %3 %1",
    "args0": [
        {
            "type": "input_statement",
            "name": "beginJimp"
        },
        {
            "type": "input_value",
            "name": "JimpURL",
            "check": ["String", "var", "buffer"]
        },
        {
            "type": "input_dummy"
        }

    ],
    "colour": 260,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Place this before placing any other Jimp editing block.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const JimpURL = Blockly.JavaScript.valueToCode(block, "JimpURL", Blockly.JavaScript.ORDER_ATOMIC);
    const JimpCode = Blockly.JavaScript.statementToCode(block, "beginJimp");
    const code = `var JimpImageBlock = ` + JimpURL + `;
await jimp.read(${JimpURL}, async (err, image) => {
    if (err) throw err;
    ${JimpCode}
});
`;
    return code;
};