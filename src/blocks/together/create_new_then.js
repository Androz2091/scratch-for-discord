import * as Blockly from "blockly/core";

const blockName = "create_together";

const blockData = {
    "message0": "create new together in voice channel %1 together type: %2 then %3 %4",
    "args0": [{
            "type": "input_value",
            "name": "VoiceChannel",
            "check": "VoiceChannel"
        },
        {
            "type": "field_grid_dropdown",
            "name": "INFO",
            "options": [
                [
                    "youtube",
                    "youtube"
                ],
                [
                    "poker",
                    "poker"
                ],
                [
                    "chess",
                    "chess"
                ],
                [
                    "checkers",
                    "checkers"
                ],
                [
                    "betrayal",
                    "betrayal"
                ],
                [
                    "fishing",
                    "fishing"
                ],
                [
                    "lettertile",
                    "lettertile"
                ],
                [
                    "wordsnack",
                    "wordsnack"
                ],
                [
                    "doodlecrew",
                    "doodlecrew"
                ],
                [
                    "spellcast",
                    "spellcast"
                ],
                [
                    "awkword",
                    "awkword"
                ],
                [
                    "puttparty",
                    "puttparty"
                ],
                [
                    "sketchheads",
                    "sketchheads"
                ],
                [
                    "ocho",
                    "ocho"
                ],
            ]
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
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "THEN");
    const voicechannel = Blockly.JavaScript.valueToCode(block, "VoiceChannel", Blockly.JavaScript.ORDER_ATOMIC);
    const info2 = block.getFieldValue("INFO");
    let info1 = info2.replace("'", '')
    let info = info1.replace("'", "")
    const code = `s4d.client.discordTogether.createTogetherCode(${voicechannel}, "${info}").then(async invite => {\n${statements}\n})`;
    return code;
};
