import * as Blockly from "blockly";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_thread_archive";

const blockData = {
    "message0": "%{BKY_THREAD_ARCHIVE} with reason %3",
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
                    "lock",
                    "lock"
                ],
                [
                    "unlock",
                    "unlock"
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
        },
        {
            "type": "input_value",
            "name": "REASON",
            "check": "String"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
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
    const reason = Blockly.JavaScript.valueToCode(block, "REason", Blockly.JavaScript.ORDER_ATOMIC);
    if(type === "true" || type === "false"){
        return(`${thread}.setArchived(${type}, ${reason});\n`);
    } else if (type == "lock") {
        return(`${thread}.setLocked(true, ${reason});\n`)
    } else if (type == "unlock") {
        return(`${thread}.setLocked(false, ${reason});\n`)
    } else {
        return(`${thread}.delete(${reason})`)
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
