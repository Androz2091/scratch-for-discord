import * as Blockly from "blockly/core";

const blockName = "tts-test";

const blockData = {
  "message0": "Play TTS %1 on channel %2 then %3 %4",
  "args0": [
    {
      "type": "input_value",
      "name": "ArtistName",
      "check": ["Number", "String"]
    },
    {
      "type": "input_value",
      "name": "SongName",
      "check": "VoiceChannel"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "THEN"
    },
  ],
  "colour": "#5153c2",
  "previousStatement": null,
  "nextStatement": null,
  "inputsInline": true,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const Artist = Blockly.JavaScript.valueToCode(block, "ArtistName", Blockly.JavaScript.ORDER_ATOMIC);
  const Song = Blockly.JavaScript.valueToCode(block, "SongName", Blockly.JavaScript.ORDER_ATOMIC);
  const statementThen = Blockly.JavaScript.statementToCode(block, "THEN");
  const code =  `(async function(artist, title) {
        let lyrics = await lyricsFinder(artist, title) || "Not Found!";\n
        ${statementThen}
    })(${Artist}, ${Song});`;
  return code;
};
