import Blockly from "blockly/core";

const blockName = "s4d_loop";

const blockData = {
    "message0": "%{BKY_LOOP}",
    "args0": [
        {
            "type": "input_value",
            "name": "QUEUE",
            "check": "queue"
        },
        {
            "type": "input_value",
            "name": "LOOPING",
            "check": "Boolean"
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#4C97FF",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const queue = Blockly.JavaScript.valueToCode(block, "QUEUE", Blockly.JavaScript.ORDER_ATOMIC);
    const looping = Blockly.JavaScript.valueToCode(block, "LOOPING", Blockly.JavaScript.ORDER_ATOMIC);
    let code = ""
    if(looping === 'true'){
         code = `${queue}.setRepeatMode(QueueRepeatMode.QUEUE)\n`;   
    }else{
         code = `${queue}.setRepeatMode(QueueRepeatMode.OFF)\n`;
    }
    return code;
};
