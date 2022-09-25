import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../../restrictions";

const blockName = "frost_category_get";

const blockData = {
  "message0": "Get category/channel with %2 equal to %1 on server %3",
  "args0": [
    {
      "type": "input_value",
      "name": "VALUE",
      "check": "String"
    },
    {
      "type": "field_dropdown",
      "name": "SEARCH_TYPE",
      "options": [
        [
          "%{BKY_NAME}",
          "NAME"
        ],
        [
          "id",
          "ID"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "SERVER",
      "check": "Server"
    }
  ],
  "colour": "#a55b80",
  "output": ["Category", "Channel"],
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
  const searchType = block.getFieldValue("SEARCH_TYPE");
  const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
  if (server == null) {
    if (searchType === "NAME") {
      return [`s4d.client.channels.cache.find((category) => category.name === ${value})`, Blockly.JavaScript.ORDER_ATOMIC];
    } else {
      return [`s4d.client.channels.cache.get((category) => category.id === ${value})`, Blockly.JavaScript.ORDER_ATOMIC];
    }
  } else {
    if (searchType === "NAME") {
      return [`${server}.channels.cache.find((category) => category.name === ${value})`, Blockly.JavaScript.ORDER_ATOMIC];
    } else {
      return [`${server}.channels.cache.get((category) => category.id === ${value})`, Blockly.JavaScript.ORDER_ATOMIC];
    }
  }
};

registerRestrictions(blockName, [
  {
    type: "notempty",
    message: "RES_MISSING_CHANNEL_VALUE",
    types: [
      "VALUE"
    ]
  }
]);
