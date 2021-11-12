import * as Blockly from "blockly/core";

const blockName = "ran_red_post";


const blockData = {
    "message0": "Get random Reddit post from r/%1",
    "args0": [
        {
            "type": "input_value",
            "name": "MESSAGE",
            "check":  ["Number","String"]
        },
       
    ],
    "output": "regex",
    "colour": "#5ba58b",
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
              var postUrl = 'https://reddit.com' + permalink;
              var postImage = content[0].data.children[0].data.url;
              var postTitle = content[0].data.children[0].data.title;
            })`;
};
