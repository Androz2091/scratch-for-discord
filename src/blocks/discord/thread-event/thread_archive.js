import * as Blockly from "blockly";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_thread_archive";

const blockData = {
    "message0": "%{BKY_THREAD_ARCHIVE}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
                [
                    "archive",
                    "true"
                ],
                [
                    "unarchive",
                    "false"
                ],
                [
                    "delete",
                    "delete"
                ]
            ]
        },
        {
            "type": "input_value",
            "name": "THREAD",
            "check": "Thread"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#2a97b8",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const type = block.getFieldValue("TYPE");
    const thread = Blockly.JavaScript.valueToCode(block, "THREAD", Blockly.JavaScript.ORDER_ATOMIC);
    if(type === "true" || type === "false"){
        return(`${thread}.setArchived(${type});\n`);
    }else{
        return(`${thread}.delete()`)
    }
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_THREAD",
        types: [
          "THREAD"
        ]
    }
]);
