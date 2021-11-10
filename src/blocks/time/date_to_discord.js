import * as Blockly from "blockly/core";

const blockName = "s4d_date_discord_string";

const blockData = {
    // "message0": "timestamp %2 to discord time%3with style %1",
    "message0": "%{BKY_TIMESTAMP_DISCORD}",
    "args0" : [
        {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
                [
                    "%{BKY_SHORT_TIME}",
                    "t"
                ],
                [
                    "%{BKY_LONG_TIME}",
                    "T"
                ],
                [
                    "%{BKY_SHORT_DATE}",
                    "d"
                ],
                [
                    "%{BKY_LONG_DATE}",
                    "D"
                ],
                [
                    "%{BKY_SHORT_DATE_TIME}",
                    "f"
                ],
                [
                    "%{BKY_LONG_DATE_TIME}",
                    "F"
                ],
                [
                    "%{BKY_TIMESTAMP_RELATIVE}",
                    "R"
                ]
            ]
        },
        {
            "type": "input_value",
            "name": "DATE",
            "check": "Number"
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": "#6f92bf",
    "tooltip": "",
    "output": null,
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    var date = Blockly.JavaScript.valueToCode(block, "DATE", Blockly.JavaScript.ORDER_ATOMIC);
    console.log(date)
    const type = block.getFieldValue("TYPE");
    // console.log(type)
    if(!isNaN(Number(date)) && date.length > 0){
        date += '.'
    }
    return [`s4d.Discord.Formatters.time(Number(${date}.toString().substr(0, ${date}.toString().length - 3)), '${type}')`, Blockly.JavaScript.ORDER_NONE];
};
