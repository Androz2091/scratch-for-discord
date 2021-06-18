//const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
import * as Blockly from "blockly/core";

const blockName = "s4d_to_buffer";

const blockData = {
    "message0": "%{BKY_TO_BUFFER}",
    "args0": [
        {
            "type":"input_value",
            "name":"CANVAS_NAME",
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
    const name = Blockly.JavaScript.valueToCode(block, "CANVAS_NAME", Blockly.JavaScript.ORDER_ATOMIC);
    const nname = name.replace(`'`,'')
    const nnname = nname.replace(`'`,'')
    const code = `const attachment = new Discord.MessageAttachment(${nnname}Canvas.toBuffer(), 's4d.png');
s4dmessage.channel.send(attachment);\n`;
    return code;
};
