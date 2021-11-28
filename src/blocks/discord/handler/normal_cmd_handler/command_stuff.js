import * as Blockly from "blockly";


const blockName = "h_command";
  //   name: "name",
  //   description: "description",
  //   aliases: [],
  //   botPerms: [],
  //   userPerms: [],
  //   expectedArgs: null,
  //   minArgs: 1,
  //   maxArgs: 2,
  //   ownerOnly: true,
  //   guildOnly: true,
  //   enabled: true,
  //   nsfw: false,
  //   userPermError: null,
  //   botPermError: null,
  //   cooldown: 10,
const blockData = {
    "message0": "get command %1",
    "args0": [
        {
                "type": "field_dropdown",
                "name": "INFO",
                "options": [
                    ["name", "name"],
                    ["description", "description"],
                    ["aliases", "aliases"],
                    ["bot permissions", "botPerms"],
                    ["user permissions", "userPerms"],
                    ["owner only?", "ownerOnly"],
                    ["guild only?", "guildOnly"],
                    ["nsfw only?", "nsfwOnly"],
                    ["timeleft for cooldown", "cooldown"],
                    ["enabled", "enabled"],
            ]
        }
    ],
    "output": "String",
    "colour": "#5BA58C",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const string = block.getFieldValue("INFO")
    let code = `command.${string}` 
    return [ code, Blockly.JavaScript.ORDER_ATOMIC ] 
};
