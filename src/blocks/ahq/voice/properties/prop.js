import * as Blockly from "blockly/core";
const ahqcolor = ['#33cc00', '#33cc00', '#33cc00', '#33cc00'];
function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockName = "prop_voice";
//block working now working;


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit({
            "message0": "%1 %2",
            "args0": [{
                "type": "field_dropdown",
                "name": "a",
                "options": [
                    [
                    "Old State",
                    "oldState"
                    ],
                    [
                        "New State",
                        "newState"
                    ]
                ]
            },
            {
                "type": "field_dropdown",
                "name": "b",
                "options": [
                    [
                        "Channel",
                        "channel"
                    ],
                    [
                        "server",
                        "guild"
                    ],
                    [
                        "Member",
                        "member"
                    ],
                    [
                        "Muted (self mute/server mute)",
                        "mute"
                    ],
                    [
                        "Self Mute",
                        "selfMute"
                    ],
                    [
                        "Self Deafened",
                        "seldDeaf"
                    ],
                    [
                        "Video On",
                        "selfVideo"
                    ],
                    [
                        "Server Deafened",
                        "serverDeaf"
                    ],
                    [
                        "Server Muted",
                        "serverMute"
                    ],
                    [
                        "Suppressed",
                        "suppress"
                    ]
                ]
            }],
            "colour": listsGetRandomItem(ahqcolor, false),
            "tooltip": "",
            "helpUrl": "",
            "output": ["Boolean", "VoiceChannel", "Server", "Member"]
        });
    }
};
Blockly.JavaScript[blockName] = function(block) {
    const code = [`${block.getFieldValue("a")}.${block.getFieldValue("b")}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
