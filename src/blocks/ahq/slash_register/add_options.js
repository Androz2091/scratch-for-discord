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
const blockName = "s4d_reg_slash_options";
//block working now working
const blockData = {
    "message0": "Set slash cmd options name %1 %2 set Description %3 %4 required? %5 %6 type %7",
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
                "SUB_COMMAND",
                "1"
              ],
              [
                "SUB_COMMAND_GROUP",
                "2"
              ],
              [
                "STRING",
                "3"
              ],
              [
                "INTEGER",
                "4"
              ],
              [
                "BOOLEAN",
                "5"
              ],
              [
                "USER",
                "6"
              ],
              [
                "CHANNEL",
                "7"
              ],
              [
                "ROLE",
                "8"
              ],
              [
                "MENTIONABLE",
                "9"
              ],
              [
                "NUMBER",
                "10"
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
    const bl = Blockly.JavaScript.valueToCode(block, "ahq", Blockly.JavaScript.ORDER_ATOMIC);
  const server = Blockly.JavaScript.valueToCode(block, "Server", Blockly.JavaScript.ORDER_ATOMIC);
  const des = Blockly.JavaScript.valueToCode(block, "args", Blockly.JavaScript.ORDER_ATOMIC);
  const type = block.getFieldValue("Label");
    const code = `{
        name: ${server},
        description: ${des},
        required: ${bl},
        type: ${type.replace("\"", "").replace("\"", "")}
    }`;
    return code;
};
