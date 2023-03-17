import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_message_start_thread";

const blockData = {
    "message0": "start thread on message %7 with name%1 auto archive after%2%9 of type%10 %4then%6%3if not enough server boost level%8%5",
    "args0": [
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
        },
        {
            "type": "input_dummy"
        },
									{
            "type": "input_dummy"
        },
			{
            "type": "field_dropdown",
            "name": "THREADTYPE",
            "options": [
                [
                    "Public",
                    "GUILD_PUBLIC_THREAD"
                ],
                [
                    "Private",
                    "GUILD_PRIVATE_THREAD"
                ]
            ]
        },
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
    const name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
    const archiveAfter = block.getFieldValue("ARCHIVE");
	const threadType = block.getFieldValue("THREADTYPE");
    const code = Blockly.JavaScript.statementToCode(block, "CODE");
    const catchd = Blockly.JavaScript.statementToCode(block, "NOTENOUGH");
    return (`s4dmessage.startThread({name: ${name}, autoArchiveDuration: ${archiveAfter}, type: '${threadType}'})\n.then(async s4dCreatedThread => {\n${code}\n})\n.catch(async s4dThreadErr => {if (String(s4dThreadErr) === 'DiscordAPIError: Guild premium subscription level too low'){\n${catchd}\n}});\n`)
}

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_MESSAGE",
        types: [
            "s4d_on_message"
        ]
    }
]);
