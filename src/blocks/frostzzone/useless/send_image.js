import * as Blockly from "blockly/core";

const blockName = "frost_image";

const blockData = {
    "message0": "%{BKY_FSEND_IMAGE}",
    "args0": [
        {
            "type": "input_value",
            "name": "image",
            "check": "String"
        }
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
      const message = Blockly.JavaScript.valueToCode(block, "image", Blockly.JavaScript.ORDER_ATOMIC);
     const code = `
            let embed = new Discord.MessageEmbed()
        embed.setImage(${message});
        (s4dmessage.channel).send({
            embeds: [embed]
        });`;
    return code;
};