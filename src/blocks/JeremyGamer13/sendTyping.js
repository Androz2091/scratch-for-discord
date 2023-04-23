import Blockly from "blockly/core";

const blockName = "jg_typing";

const blockData = {
    "message0": "Start typing in current channel",
    "args0": [],
    "colour": "#FF0000",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "⚠ This block has an updated version in the toolbox! Please replace this one with that one. ⚠ \n Makes the \"(name) is typing...\" pop-up appear. The pop-up disappears after around 10 seconds, or when the bot sends a new message.",
    "helpUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function () {
    return `// DEPRECATED BLOCK! Use "Start typing in channel ()" instead.
    s4dmessage.channel.sendTyping();
    `;
}