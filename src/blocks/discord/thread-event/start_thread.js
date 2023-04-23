import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_start_thread";

const blockData = {
    "message0": "%{BKY_CREATE_THREAD}",
    "args0": [
        {
            "type": "input_value",
            "name": "CHANNEL",
            "check": "Channel"
        },
        {
            "type": "input_value",
            "name": "NAME",
            "check": "String"
        },
        {
            "type": "field_dropdown",
            "name": "ARCHIVE",
            "options": [
                [
                    "%{BKY_THREAD_HOUR}",
                    "60"
                ],
                [
                    "%{BKY_THREAD_DAY}",
                    "1440"
                ],
                [
                    "%{BKY_THREAD_3DAY}",
                    "4320"
                ],
                [
                    "%{BKY_THREAD_WEEK}",
                    "10080"
                ],
            ]
        },
        {
            "type": "input_statement",
            "name": "CODE"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "NOTENOUGH"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": "#4C97FF",
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
    const name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
    const archiveAfter = block.getFieldValue("ARCHIVE");
    const code = Blockly.JavaScript.statementToCode(block, "CODE");
    const catchd = Blockly.JavaScript.statementToCode(block, "NOTENOUGH");
    return (`${channel}.threads.create({name: ${name}, autoArchiveDuration: ${archiveAfter}})
    .then(async s4dCreatedThread => {
        ${code}
    })
    .catch(async s4dThreadErr => {if (String(s4dThreadErr) === 'DiscordAPIError: Guild premium subscription level too low'){
        ${catchd}
    }});
    `)
}

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_CHANNEL",
        types: [
            "CHANNEL"
        ]
    }
]);
