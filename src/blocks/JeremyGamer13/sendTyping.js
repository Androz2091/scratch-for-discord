import Blockly from "blockly/core";

const blockName = "jg_typing";

const blockData = {
    "message0": "Start typing in current channel",
    "args0": [],
    "colour": 210,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Makes the \"(name) is typing...\" pop-up appear. The pop-up disappears after around 10 seconds, or when the bot sends a new message.",
    "helpUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    return `s4dmessage.channel.sendTyping();
    `;
}
