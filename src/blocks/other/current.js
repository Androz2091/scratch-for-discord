import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";

const blockName = "s4d_current";

const blockData = {
    "message0": "%{BKY_CURRENT}",
    "args0": [
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
                [
                    "%{BKY_MONTH}",
                    "MONTH"
                ],
                [
                    "%{BKY_YEAR}",
                    "YEAR"
                ]
            ]
        }
    ],
    "output": "Number",
    "colour": "#D14081",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block) {
    const dataType = block.getFieldValue("DATA_TYPE");
    if(dataType === "SECOND"){
        return ["(new Date().getSeconds())", Order.NONE];
    } else if(dataType === "MINUTE"){
        return ["(new Date().getMinutes())", Order.NONE];
    } else if(dataType === "HOUR"){
        return ["(new Date().getHours())", Order.NONE];
    } else if(dataType === "DATE"){
        return ["(new Date().getDate())", Order.NONE];
    } else if(dataType === "DAY_OF_WEEK"){
        return ["(new Date().getDay())", Order.NONE];
    } else if(dataType === "MONTH"){
        return ["(new Date().getMonth() + 1)", Order.NONE];
    } else if(dataType === "YEAR"){
        return ["(new Date().getFullYear())", Order.NONE];
    }
};
