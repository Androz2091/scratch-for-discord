import * as Blockly from "blockly/core";

const blockName = "s4d_date_value";

const blockData = {
    // "message0": "timestamp %2 to discord time%3with style %1",
    "message0": "get %1 of timestamp %2",
    "args0" : [
        {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
                [
                    "milliseconds",
                    "getMilliseconds"
                ],
                [
                    "seconds",
                    "getSeconds"
                ],
                [
                    "minutes",
                    "getMinutes"
                ],
                [
                    "hours",
                    "getHours"
                ],
                [
                    "day",
                    "getDate"
                ],
                [
                    "day of week",
                    "getDay"
                ],
                [
                    "month",
                    "getMonth"
                ],
                [
                    "year",
                    "getFullYear"
                ],
                [
                    "UTC hours",
                    "getUTCHours"
                ],
                [
                    "UTC day",
                    "getUTCDate"
                ],
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
    if(!(type ==='getMonth')) {
        return [`new Date(${date}).${type}()`, Blockly.JavaScript.ORDER_NONE];
    } else{
        return [`new Date(${date}).${type}() + 1`, Blockly.JavaScript.ORDER_NONE];
    }
    
};
