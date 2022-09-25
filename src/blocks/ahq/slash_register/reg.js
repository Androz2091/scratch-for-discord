import * as Blockly from "blockly/core";
const ahqcolor = ['#33cc00', '#33cc00', '#33cc00', '#33cc00'];
function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockName = "s4d_reg_slash";
//block working now working
const blockData = {
    "message0": "Register slash command name %1 %2 set description %3 %4 then %5",
    "args0": [
        {
            "type": "input_value",
            "name": "Server",
            "check": "String"
        },
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "args",
            "check": "String"
        },
        {
            "type": "input_space"
        },
        {
            "type": "input_statement",
            "name": "THEN"
        }
    ],
    "colour": listsGetRandomItem(ahqcolor, false),
    "previousStatement": null,
    "nextStatement": null,
};


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(block){
    const statementThen = Blockly.JavaScript.statementToCode(block, "THEN");
  const server = Blockly.JavaScript.valueToCode(block, "Server", Blockly.JavaScript.ORDER_ATOMIC);
  const des = Blockly.JavaScript.valueToCode(block, "args", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `s4d.client.application?.commands.create({
        name: ${server},
        description: ${des},
        options: [${statementThen}]        
    });`;
    return code;
};
