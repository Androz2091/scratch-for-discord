import * as Blockly from "blockly/core";

const blockName = "find_lyric_than";

const blockData = {
  "message0": "Get lyric with the artist name %1 song name %2 then %3 %4",
  "args0": [
    {
      "type": "input_value",
      "name": "ArtistName",
      "check": ["Number", "String"]
    },
    {
      "type": "input_value",
      "name": "SongName",
      "check": ["Number", "String"]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "THEN"
    },
  ],
  "colour": "#4C97FF",
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
