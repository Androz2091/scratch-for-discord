import * as Blockly from "blockly/core";

const blockName = "s4d_date_string";

const blockData = {
    // "message0": "timestamp %2 to discord time%3with style %1",
    "message0": "make text from timestamp %2 with style %1",
    "args0" : [
        {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
                [
                    "full date",
                    "toDateString"
                ],
                [
                    "UTC",
                    "toUTCString"
                ],
                [
                    "ISO",
                    "toISOString"
                ],
                [
                    "short date",
                    "toLocaleDateString"
                ],
                [
                    "short time",
                    "toLocaleTimeString"
                ],
                [
                    "short date and time",
                    "toLocaleString"
                ],
                [
                    "full date, time and timezone",
                    "toString"
                ]
            ]
        },
        {
            "type": "input_value",
            "name": "DATE",
            "check": "Number"
        }
    ],
    "colour": "#6f92bf",
    "tooltip": "",
    "inputsInline":false,
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
    const type = block.getFieldValue("TYPE");
    if(!isNaN(Number(date)) && date.length > 0){
        date += '.'
    }
    return [`new Date(${date}).${type}()`, Blockly.JavaScript.ORDER_NONE];
};
