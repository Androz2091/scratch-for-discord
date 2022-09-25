import Blockly from "blockly/core";

const blockName = "member_raw";

const blockData = {
    "message0": "%1 of member",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "SEARCH_TYPE",
            "options": [
                [
                    "name",
                    "NAME"
                ],
                [
                    "tag",
                    "TAG"
                ],
            ]
        }
    ],
    "output": "String",
    "colour": "#5BA58C",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const searchType = block.getFieldValue("SEARCH_TYPE");
    let code = ["member.user.id", Blockly.JavaScript.ORDER_NONE];
    if (searchType === "TAG") {
        code = ["member.user.tag", Blockly.JavaScript.ORDER_NONE];
    }
    return code;
};