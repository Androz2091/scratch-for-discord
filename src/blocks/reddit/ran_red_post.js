import * as Blockly from "blockly/core";

const blockName = "ran_red_post";

const blockData = {
    "message0": "Send random reddit post from r/%1",
    "args0": [
        {
            "type": "input_value",
            "name": "MESSAGE",
            "check": [ "Number", "String" ]
        }
    ],
    "colour": "#D14081",
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
    const message = Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC);
    return ` const got = require('got')
             var embed = new Discord.MessageEmbed();
            got('https://www.reddit.com/r/' + ${message} + '/random/.json').then(response => {
              var content = JSON.parse(response.body);
              var permalink = content[0].data.children[0].data.permalink;
              var memeUrl = 'https://reddit.com' + permalink;
              var memeImage = content[0].data.children[0].data.url;
              var memeTitle = content[0].data.children[0].data.title;
              embed.setTitle('Click here to go to the post')
              embed.setURL(memeUrl);
              embed.setDescription(memeTitle);
              embed.setImage(memeImage);
              embed.setColor('RANDOM');
              (s4dmessage.channel).send({
                embeds: [embed]
              });
            })`;
};
