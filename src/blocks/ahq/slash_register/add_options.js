import * as Blockly from "blockly/core";
const ahqcolor = ['#3366ff', '#6600cc', '#33cc00', '#ff6666'];
function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockName = "s4d_reg_slash_options";
//block working now working
const blockData = {
    "message0": "Set slash cmd options name %1 %2 set Description %3 %4 required? %5",
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
            "type": "input_value",
            "name": "ahq",
            "checl": "Boolean"
        },
        {
            "type": "input_space"
        },
        {
            "type": "field_dropdown",
            "name": "Label",
            "options": [
              [
                "Red",
                "DANGER"
              ],
              [
                "Purple",
                "PRIMARY"
              ],
              [
                "Grey",
                "SECONDARY"
              ],
              [
                "Green",
                "SUCCESS"
              ],
              [
                "Url",
                "LINK"
              ]
      
            ],
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
    const bl = Blockly.JavaScript.statementToCode(block, "ahq", Blockly.JavaScript.ORDER_ATOMIC);
  const server = Blockly.JavaScript.valueToCode(block, "Server", Blockly.JavaScript.ORDER_ATOMIC);
  const des = Blockly.JavaScript.valueToCode(block, "args", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `{
        name: ${server},
        description: ${des},
        required: ${bl},
        type: ${type}
    }`;
    return code;
};
