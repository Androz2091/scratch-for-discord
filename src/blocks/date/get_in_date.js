import Blockly from "blockly/core";

const blockName = "get_in_date";

const blockData = {
    "message0": "get in date %1 %2",
    "args0": [
        {
            "type": "input_value",
            "name": "DATE",
            "check": "Number"
        },
        {
            "type": "field_dropdown",
            "name": "DATA_TYPE",
            "options": [
                [
                    "%{BKY_SECOND}",
                    "SECOND"
                ],
                [
                    "%{BKY_MINUTE}",
                    "MINUTE"
                ],
                [
                    "%{BKY_HOUR}",
                    "HOUR"
                ],
                [
                    "%{BKY_DATE}",
                    "DATE"
                ],
                [
                    "%{BKY_DAY_OF_WEEK}",
                    "DAY_OF_WEEK"
                ],
            ]
        }
    ],
    "output": "Number",
    "colour": "#D14081",
    "tooltip": "Get a certain thing from a date.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const date = Blockly.JavaScript.valueToCode(block, "DATE", Blockly.JavaScript.ORDER_ATOMIC);
    const dataType = block.getFieldValue("DATA_TYPE");
    if (dataType === "SECOND") {
        return [`(${date}.getSeconds())`, Blockly.JavaScript.ORDER_NONE];
    } else if (dataType === "MINUTE") {
        return [`(${date}.getMinutes())`, Blockly.JavaScript.ORDER_NONE];
    } else if (dataType === "HOUR") {
        return [`(${date}.getHours())`, Blockly.JavaScript.ORDER_NONE];
    } else if (dataType === "DATE") {
        return [`(${date}.getDate())`, Blockly.JavaScript.ORDER_NONE];
    } else if (dataType === "DAY_OF_WEEK") {
        return [`(${date}.getDay())`, Blockly.JavaScript.ORDER_NONE];
    } else {
        return [`(${date}.getSeconds())`, Blockly.JavaScript.ORDER_NONE];
    }
};
