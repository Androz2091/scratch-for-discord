
import Blockly from "blockly/core";

const blockName = "s4d_timezone%1";


const blockData = {
    "message0": "%{BKY_TIMEZONE}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "DATA_TYPE",
            "options": [
                [
                    "%{UTCp1}",
                    "UTC+1"
                ],
                [
                    "%{UTCp2}",
                    "UTC+2"
                ],
                [
                    "%{UTCp3}",
                    "UTC+3"
                ],
                [
                    "%{UTCp4}",
                    "UTC+4"
                ],
                [
                    "%{UTCp5}",
                    "UTC+5"
                ],
                [
                    "%{UTCp6}",
                    "UTC+6"
                ],
              [
                    "%{UTCp7}",
                    "UTC+7"
                ],
              [
                    "%{UTCp8}",
                    "UTC+8"
                ],
              [
                    "%{UTCp9}",
                    "UTC+9"
                ],
              [
                    "%{UTCp10}",
                    "UTC+10"
                ],
              [
                    "%{UTCp11}",
                    "UTC+11"
                ],
              [
                    "%{UTCp12}",
                    "UTC+12"
                ],
               [
                    "%{UTC}",
                    "UTC"
                ],
               [
                    "%{UTCm}",
                    "UTC-"
                ],
              [
                    "%{UTCm1}",
                    "UTC-1"
                ],
              [
                    "%{UTCm2}",
                    "UTC-2"
                ],
              [
                    "%{UTCm3}",
                    "UTC-3"
                ],
              [
                    "%{UTCm4}",
                    "UTC-4"
                ],
              [
                    "%{UTCm5}",
                    "UTC-5"
                ],
              [
                    "%{UTCm6}",
                    "UTC-6"
                ],
              [
                    "%{UTCm7}",
                    "UTC-7"
                ],
              [
                    "%{UTCm8}",
                    "UTC-8"
                ],
              [
                    "%{UTCm9}",
                    "UTC-9"
                ],
              [
                    "%{UTCm}",
                    "UTC-10"
                ],
              [
                    "%{UTCm11}",
                    "UTC-11"
                ],
              [
                    "%{UTCm12}",
                    "UTC-12"
                ],
            ]
        }
    ],
    "output": "Number",
    "colour": "#5ba58b",
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
    if(dataType === "UTC+1"){
        return ["(new Date().toLocaleString('en-US', { timeZone: 'Etc/GMT+1' }))", Blockly.JavaScript.ORDER_NONE];
    } else if(dataType === "UTC+2"){
        return ["(new Date().toLocaleString('en-US', { timeZone: 'Etc/GMT+2' }))", Blockly.JavaScript.ORDER_NONE];
    } else if(dataType === "UTC+3"){
        return ["(new Date().toLocaleString('en-US', { timeZone: 'Etc/GMT+3' }))", Blockly.JavaScript.ORDER_NONE];
    } else if(dataType === "UTC+4"){
        return ["(new Date().toLocaleString('en-US', { timeZone: 'Etc/GMT+4' }))", Blockly.JavaScript.ORDER_NONE];
    } else if(dataType === "UTC+6"){
        return ["(new Date().toLocaleString('en-US', { timeZone: 'Etc/GMT+6' }))", Blockly.JavaScript.ORDER_NONE];
    }else if(dataType === "UTC+7"){
        return ["(new Date().toLocaleString('en-US', { timeZone: 'Etc/GMT+7' }))", Blockly.JavaScript.ORDER_NONE];
    }else if(dataType === "UTC+8"){
        return ["(new Date().toLocaleString('en-US', { timeZone: 'Etc/GMT+8' }))", Blockly.JavaScript.ORDER_NONE];
    }else if(dataType === "UTC+9"){
        return ["(new Date().toLocaleString('en-US', { timeZone: 'Etc/GMT+9' }))", Blockly.JavaScript.ORDER_NONE];
    }else if(dataType === "UTC+10"){
        return ["(new Date().toLocaleString('en-US', { timeZone: 'Etc/GMT+10' }))", Blockly.JavaScript.ORDER_NONE];
    }else if(dataType === "UTC"){
        return ["(new Date().toLocaleString('en-US', { timeZone: 'Etc/UTC' }))", Blockly.JavaScript.ORDER_NONE];
    }else if(dataType === "UTC-1"){
        return ["(new Date().toLocaleString('en-US', { timeZone: 'Etc/GMT-1' }))", Blockly.JavaScript.ORDER_NONE];
    }else if(dataType === "UTC-2"){
        return ["(new Date().toLocaleString('en-US', { timeZone: 'Etc/GMT-2' }))", Blockly.JavaScript.ORDER_NONE];
    }else if(dataType === "UTC-3"){
        return ["(new Date().toLocaleString('en-US', { timeZone: 'Etc/GMT-3' }))", Blockly.JavaScript.ORDER_NONE];
    }else if(dataType === "UTC-4"){
        return ["(new Date().toLocaleString('en-US', { timeZone: 'Etc/GMT-4' }))", Blockly.JavaScript.ORDER_NONE];
    }else if(dataType === "UTC-5"){
        return ["(new Date().toLocaleString('en-US', { timeZone: 'Etc/GMT-5' }))", Blockly.JavaScript.ORDER_NONE];
    }else if(dataType === "UTC-6"){
        return ["(new Date().toLocaleString('en-US', { timeZone: 'Etc/GMT-6' }))", Blockly.JavaScript.ORDER_NONE];
    }else if(dataType === "UTC-7"){
        return ["(new Date().toLocaleString('en-US', { timeZone: 'Etc/GMT-7' }))", Blockly.JavaScript.ORDER_NONE];
    }else if(dataType === "UTC-8"){
        return ["(new Date().toLocaleString('en-US', { timeZone: 'Etc/GMT-8' }))", Blockly.JavaScript.ORDER_NONE];
    }else if(dataType === "UTC-9"){
        return ["(new Date().toLocaleString('en-US', { timeZone: 'Etc/GMT-9' }))", Blockly.JavaScript.ORDER_NONE];
    }else if(dataType === "UTC-10"){
        return ["(new Date().toLocaleString('en-US', { timeZone: 'Etc/GMT-10' }))", Blockly.JavaScript.ORDER_NONE];
    }else if(dataType === "UTC-11"){
        return ["(new Date().toLocaleString('en-US', { timeZone: 'Etc/GMT-11' }))", Blockly.JavaScript.ORDER_NONE];
    }else if(dataType === "UTC-12"){
        return ["(new Date().toLocaleString('en-US', { timeZone: 'Etc/GMT-12' }))", Blockly.JavaScript.ORDER_NONE];
    }else if(dataType === "UTC+11"){
        return ["(new Date().toLocaleString('en-US', { timeZone: 'Etc/GMT+11' }))", Blockly.JavaScript.ORDER_NONE];
    }else if(dataType === "UTC+12"){
        return ["(new Date().toLocaleString('en-US', { timeZone: 'Etc/GMT+12' }))", Blockly.JavaScript.ORDER_NONE];
    }else if(dataType === "UTC+5"){
        return ["(new Date().toLocaleString('en-US', { timeZone: 'Etc/GMT+5' }))", Blockly.JavaScript.ORDER_NONE];
    }
};
