import * as Blockly from "blockly/core";

const blockName = "s4d_text_canvas";

const blockData = {
    "message0": "%{BKY_TEXT_CANVAS}",
    "args0": [
        {
            "type": "input_value",
            "name": "CANVAS_NAME",
            "check": [ "String", "Number" ]
        },
        {
            "type": "input_value",
            "name": "NAME",
            "check": [ "String", "Number" ]
        },
        {
            "type": "input_value",
            "name": "X",
            "check": [ "String", "Number" ]
        },
        {
            "type":"input_value",
            "name":"Y",
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
    const x = Blockly.JavaScript.valueToCode(block, "X", Blockly.JavaScript.ORDER_ATOMIC);
    const y = Blockly.JavaScript.valueToCode(block, "Y", Blockly.JavaScript.ORDER_ATOMIC);
    const canvasname = Blockly.JavaScript.valueToCode(block, "CANVAS_NAME", Blockly.JavaScript.ORDER_ATOMIC);
    const nname = canvasname.replace(`'`,'')
    const nnname = nname.replace(`'`,'')
    const code = `${nnname}ctx.fillText((${name}|"cool"),(${x}|1),(${y}|1));\n`
    return code;
};
