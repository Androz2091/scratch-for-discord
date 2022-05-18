import * as Blockly from "blockly/core";

const blockName = "s4d_button_menu";

const blockData = {
    "message0": "%{BKY_BUTTON_MENU} %1 %2",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "OPTIONS"
        },
        
        {
            "type": "input_value",
            "name": "ID",
            "check": [ "String", "Number" ]  
        },
        {
            "type": "input_value",
            "name": "PLACEHOLDER",
            "check": [ "String", "Number" ]  
        },
        {
            "type": "input_value",
            "name": "DISABLED", 
            "check": "Boolean"
        },

    ],
    "colour": "#4C97FF",
    "output":"ButtonMenu"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    },
}

Blockly.JavaScript[blockName] = function(block){
    const id = Blockly.JavaScript.valueToCode(block, "ID", Blockly.JavaScript.ORDER_ATOMIC);
    const placeholder = Blockly.JavaScript.valueToCode(block, "PLACEHOLDER", Blockly.JavaScript.ORDER_ATOMIC);
    const statements = Blockly.JavaScript.statementToCode(block, "OPTIONS");
    const disabled = Blockly.JavaScript.valueToCode(block, "DISABLED", Blockly.JavaScript.ORDER_ATOMIC);
    var code = [`new MessageActionRow()
    .addComponents(
    new MessageSelectMenu()
    .setCustomId(${id})
    .setPlaceholder(${placeholder})
    .setMaxValues(1)
    .setMinValues(1)
    .setDisabled(${disabled === null ? false : disabled})

    
    .addOptions(${statements}))\n`, Blockly.JavaScript.ORDER_NONE];
    return code
};
