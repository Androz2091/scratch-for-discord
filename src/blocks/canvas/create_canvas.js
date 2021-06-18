import * as Blockly from "blockly/core";

const blockName = "s4d_create_canvas";

const blockData = {
    "message0": "%{BKY_CREATE_CANVAS}",
    "args0": [
        {
            "type": "input_value",
            "name": "WIDTH",
            "check": [ "String", "Number" ]
        },
        {
            "type": "input_value",
            "name": "HEIGHT",
            "check": [ "String", "Number" ]
        },
        {
            "type":"input_value",
            "name":"NAME",
            "check":["String","Number"]
        }

    ],
    "colour": "#40bfbf",
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
    const width = Blockly.JavaScript.valueToCode(block, "WIDTH", Blockly.JavaScript.ORDER_ATOMIC);
    const height = Blockly.JavaScript.valueToCode(block, "HEIGHT", Blockly.JavaScript.ORDER_ATOMIC);
    const nname = name.replace(`'`,'')
    const nnname = nname.replace(`'`,'')
    const code = `
let ${nnname}Canvas = canvas.createCanvas((${width}|1),(${height}|1));
let ${nnname}ctx = ${nnname}Canvas.getContext('2d');\n`;
    return code;
};
