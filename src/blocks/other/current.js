import Blockly from "blockly/core";

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

Blockly.JavaScript[blockName] = function(block) {
    const dataType = block.getFieldValue("DATA_TYPE");
    if(dataType === "SECOND"){
        return ["(Date.now().getSeconds())", Blockly.JavaScript.ORDER_NONE];
    } else if(dataType === "MINUTE"){
        return ["(Date.now().getMinutes())", Blockly.JavaScript.ORDER_NONE];
    } else if(dataType === "HOUR"){
        return ["(Date.now().getHours())", Blockly.JavaScript.ORDER_NONE];
    } else if(dataType === "DATE"){
        return ["(Date.now().getDate())", Blockly.JavaScript.ORDER_NONE];
    } else if(dataType === "DAY_OF_WEEK"){
        return ["(Date.now().getDay())", Blockly.JavaScript.ORDER_NONE];
    }
};
