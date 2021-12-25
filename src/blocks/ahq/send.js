import * as Blockly from "blockly";
const blockName = "snd_ahq_choice";
const ahqcolor = ['#3366ff', '#6600cc', '#33cc00', '#ff6666'];
function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockData = {
    "message0": "Send %1 %2 channel %3 %4 %5 server %6 %7",
    "args0": [{
        "type": "input_value",
        "name": "files",
        "check": ["String", "MessageEmbed"]
    },
    {"type": "input_space"},
    {
        "type": "field_dropdown",
        "name": "id",
        "options": [
          [
            "Id",
            "id"
          ],
          [
            "Name",
            "name"
          ]
        ]
    },
    {
        "name" : "ch",
        "type": "input_value",
        "check": "String"
    },
    {"type": "input_space"},
    {
        "type": "field_dropdown",
        "name": "name",
        "options": [
          [
            "Id",
            "id"
          ],
          [
            "Name",
            "name"
          ]
        ]
    },
    {
        "name" : "sr",
        "type": "input_value",
        "check": "String"
    }
    ],
    "colour": listsGetRandomItem(ahqcolor, false),
    "previousStatement": null,
    "nextStatement": null,
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(block) {
    let final = ""
    const contentType = block.getInput("files").connection.targetConnection.getSourceBlock().outputConnection.check_ ?
        block.getInput("files").connection.targetConnection.getSourceBlock().outputConnection.check_[0] :
        null;
    if (contentType == "String") {
        final = `(String${(Blockly.JavaScript.valueToCode(block, "files", Blockly.JavaScript.ORDER_ATOMIC))})`;
    } else if (contentType == "MessageEmbed"){
        final = `${(Blockly.JavaScript.valueToCode(block, "files", Blockly.JavaScript.ORDER_ATOMIC))}`;
    } else {
        final = `String("No value")`;
    }
    const code = `s4d.client.guilds.cache.find(sr => sr.${block.getFieldValue("name")} == ${Blockly.JavaScript.valueToCode(block, "sr", Blockly.JavaScript.ORDER_ATOMIC)}).channels.cache.find(ch => ch.${block.getFieldValue("id")} == ${Blockly.JavaScript.valueToCode(block, "ch", Blockly.JavaScript.ORDER_ATOMIC)}).send(${final}).catch(err => {console.log(err)})`;
    return code;
};