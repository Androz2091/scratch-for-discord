import * as Blockly from "blockly";
import '@blockly/field-grid-dropdown';

const blockName = "new_image";

const blockData = {
    "message0": "new image URL of %1",
    "args0": [
        {
            "type": "field_grid_dropdown",
            "name": "INFO",
            "options": [
                [
                    "agree",
                    "agree"
                ],
                [
                    "angry",
                    "angry"
                ],
                [
                    "baka",
                    "baka"
                ],
                [
                    "bang",
                    "bang"
                ],
                [
                    "blush",
                    "blush"
                ],
                [
                    "bored",
                    "bored"
                ],
                [
                    "cold",
                    "cold"
                ],
                [
                    "confused",
                    "confused"
                ],
                [
                    "cry",
                    "cry"
                ],
                [
                    "dance",
                    "dance"
                ],
                [
                    "dizzy",
                    "dizzy"
                ],
                [
                    "evilPlan",
                    "evilPlan"
                ],
                [
                    "feed",
                    "feed"
                ],
                [
                    "greet",
                    "greet"
                ],
                [
                    "hero",
                    "hero"
                ],
                [
                    "highfive",
                    "highfive"
                ],
                [
                    "hug",
                    "hug"
                ],
                [
                    "laugh",
                    "laugh"
                ],
                [
                    "playingGames",
                    "playingGames"
                ],
                [
                    "playingMusic",
                    "playingMusic"
                ],
                [
                    "punch",
                    "punch"
                ],
                [
                    "read",
                    "read"
                ],
                [
                    "sad",
                    "sad"
                ],
                [
                    "scared",
                    "scared"
                ],
                [
                    "shrug",
                    "shrug"
                ],
                [
                    "sick",
                    "sick"
                ],
                [
                    "slap",
                    "slap"
                ],
                [
                    "sleepy",
                    "sleepy"
                ],
                [
                    "smile",
                    "smile"
                ],
                [
                    "smug",
                    "smug"
                ],
                [
                    "sport",
                    "sport"
                ],
                [
                    "stare",
                    "stare"
                ],
                [
                    "tickle",
                    "tickle"
                ],
                [
                    "wink",
                    "wink"
                ],
                [
                    "brawlstars",
                    "brawlstars"
                ],
                [
                    "clashofclans",
                    "clashofclans"
                ],
                [
                    "clashroyale",
                    "clashroyale"
                ],
            ]
        },
    ],
    "output": "String",
    "colour": "#5BA58C",
    "tooltip": "",
    "helpUrl": ""
}; 

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    },
    mutationToDom: function() {
        var container = document.createElement('mutation');
        var divisorInput = (this.getFieldValue('INFO') == 'DIVISIBLE_BY');
        container.setAttribute('divisor_input', divisorInput);
        return container;
      }
};

Blockly.JavaScript[blockName] = function(block) {
    const info2 = block.getFieldValue("INFO");
    let info1 = info2.replace("'",'')
    let info = info1.replace("'","")
    const code = [`await images.${info}()`, Blockly.JavaScript.ORDER_NONE];
    return code;
};

