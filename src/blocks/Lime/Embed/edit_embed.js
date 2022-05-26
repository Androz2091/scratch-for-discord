import * as Blockly from "blockly/core";

const blockName = "s4d_embed_edit"

const blockData ={
    "type": "s4d_embed_edit",
    "message0": "Edit message with text %1 and new embed name %2",
    "args0": [
    {
        "type": "input_value",
        "name": "message",
        "check": "String"
    },
    {
        "type": "input_value",
        "name": "embed",
        "check": "String"
        
    }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#54CF83",
    "tooltip": "",
    "helpUrl": ""
}


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};


Blockly.JavaScript['s4d_embed_edit'] = function(block) {
    var new_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
    var new_embed = Blockly.JavaScript.valueToCode(block, 'embed', Blockly.JavaScript.ORDER_ATOMIC);
    // For the embed name to have no error, I do this so there is no space in the embed title!
    new_embed = new_embed.split(" ") // Splits Embed name by space so "Lime Nade" = ["Lime","Nade"]
    new_embed = new_embed.join('_') // Puts back together the separated parts but puts an underscore between them. ["Lime","Nade"] = Lime_Nade
    new_embed = new_embed.toLowerCase() // Puts to lower case Lime_Nade = lime_nade
    new_embed = new_embed.replace("'","") // Deletes the quotes so it's no longer a string but a varable!
    new_embed = new_embed.replace("'","") // Same here
    var code = `s4dmessage.edit({content: ${new_message},embeds:[${new_embed}]});\n`;
    return code;
};