import * as Blockly from "blockly/core";


const blockName = "delete_sch_event"

const blockData = {
    "type": "delete_sch_event",
    "message0": "Delete event with ID %1",
    "args0": [
    {
        "type": "input_value",
        "name": "amongus",
        "check":"String"
    }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": '#ae81f7',
    "tooltip": "HEHEHA GRRRRR HEHEHEA GRRR",
    "helpUrl": "https://www.youtube.com/watch?v=xvFZjo5PgG0"
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};


Blockly.JavaScript['delete_sch_event'] = function(block) {
    var amongus = Blockly.JavaScript.valueToCode(block, 'amongus', Blockly.JavaScript.ORDER_ATOMIC);

    amongus = amongus.split(" ") // Splits Embed name by space so "Lime Nade" = ["Lime","Nade"]
    amongus = amongus.join('_') // Puts back together the separated parts but puts an underscore between them. ["Lime","Nade"] = Lime_Nade
    amongus = amongus.toLowerCase() // Puts to lower case Lime_Nade = lime_nade
    amongus = amongus.replace("'","").replace("'","") // Deletes the quotes so it's no longer a string but a varable!

    var code = `${amongus}.delete();\n`;
    return code;
};