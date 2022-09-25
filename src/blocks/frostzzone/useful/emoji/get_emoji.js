import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../../restrictions";

const blockName = "fz_get_emoji";

const blockData = {
    "message0": "Get emoji with the %2 equal to %1 on server (optional) %3",
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
                    "Name",
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
    "colour": "#187795",
    "output": "Emoji",
    "tooltip": "Leave server blank to find emojis in every server the bot is in",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
    const searchType = block.getFieldValue("SEARCH_TYPE");
    let server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
  if ((server || null) == null)
  {
    server = `(s4d.client)`
  }
    if(searchType === "USERNAME"){
        return [ `${server}.emojis.cache.find(emoji => emoji.name === ${value})`, Blockly.JavaScript.ORDER_NONE ];
    } else {
        return [ `${server}.emojis.cache.find(emoji => emoji.id === ${value})`, Blockly.JavaScript.ORDER_NONE ];
    }
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_GET_EMOJI_VALUE",
        types: [
            "VALUE"
        ]
    }
]);