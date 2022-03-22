import * as Blockly from "blockly";
const ahqcolor = ['#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A'];
function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockName = "disconnect_voice";
//block working now working
const blockData = {
    "message0": "Disconnect member %1 %2 reason: %3 %4 from voice channel",
    "args0": [
    {
        "type": "field_dropdown",
        "name": "test",
        "options": [
            [
                "Voice Member",
                "newState"
            ]
        ]
    },
    {
        "type": "input_dummy"
    },
    {
        "type": "input_value",
        "name": "r",
        "check": "String"
    },
    {
        "type": "input_space"
    }],
    "colour": listsGetRandomItem(ahqcolor, false),
    "tooltip": "Only Works with channel join & channel switch",
    "helpUrl": "",
    "previousStatement": null,
    "nextStatement": null
};


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(block){
    const code = `newState.disconnect(${Blockly.JavaScript.valueToCode(block, "r", Blockly.JavaScript.ORDER_ATOMIC || null)})`;
    return code;
};