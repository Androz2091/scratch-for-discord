import Blockly from "blockly/core";

const blockName = "vcategory_channel";

const blockData = {
  "message0": "Create voice channel with name %1 %2 In category with ID %3 %4 In server %5",
  "args0": [
    {
      "type": "input_value",
      "name": "name",
      "check": "String"
    },
    {
      "type": "input_space"
    },
    {
      "type": "input_value",
      "name": "id",
      "check": [ "String", "Category" ]
    },
    {
      "type": "input_space"
    },
    {
      "type": "input_value",
      "name": "server",
      "check": "Server"
    }
  ],
  "previousStatement": null,
  "nextStatement": null, 
  "colour": "#0c97f0",
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
const name = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);
const cid = Blockly.JavaScript.valueToCode(block, "id", Blockly.JavaScript.ORDER_ATOMIC);
const server = Blockly.JavaScript.valueToCode(block, "server", Blockly.JavaScript.ORDER_ATOMIC);

    const code = `${server}.channels.create(${name}, { type: 'GUILD_VOICE', parent: ${cid} });
`;
    return code;
};
