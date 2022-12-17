import * as Blockly from "blockly/core";

const blockName = "edit_s_event"

const blockData = {
    "type": "edit_s_event",
    "message0": "Edit event with ID  %1 and %2",
    "args0": [
    {
        "type": "input_value",
        "name": "event_id",
        "check":"String"
    },
    {
        "type": "input_statement",
        "name": "options"
    }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#ae81f7",
    "tooltip": "",
    "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['edit_s_event'] = function(block) {
    var statements = Blockly.JavaScript.statementToCode(block, 'options');
    var event_id = Blockly.JavaScript.valueToCode(block, 'event_id', Blockly.JavaScript.ORDER_ATOMIC);

    
    event_id = event_id.split(" ") // Splits Embed name by space so "Lime Nade" = ["Lime","Nade"]
    event_id = event_id.join('_') // Puts back together the separated parts but puts an underscore between them. ["Lime","Nade"] = Lime_Nade
    event_id = event_id.toLowerCase() // Puts to lower case Lime_Nade = lime_nade
    event_id = event_id.replace("'","") // Deletes the quotes so it's no longer a string but a varable!
    event_id = event_id.replace("'","") // Same here

    var code = `${event_id}.edit({${statements}})\n`;
    return code;
};
