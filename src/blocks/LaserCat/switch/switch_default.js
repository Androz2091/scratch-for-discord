import Blockly from "blockly/core";

const blockName = "s4d_lasercat_switch_default";

const blockData = {
    "message0": "default %1 %2",
    "args0": [
        {
            "type": "input_dummy",
        },
        {
            "type": "input_statement",
            "name": "blocks"
        }
    ],
    "colour": "#8B48A3",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "The default case if the switched item doesn't match any of the other cases mentioned.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const blocks = Blockly.JavaScript.statementToCode(block, "blocks");

    return `
    default:
    ${blocks}    
    `;
};