import * as Blockly from "blockly";
const ahqcolor = ['#3366ff', '#6600cc', '#33cc00', '#ff6666'];
function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockName = "chat_ahq";
const blockData = {
    "message0": "Chat Message %1 %2 Bot Name %3 %4 UserId %5 %6 Owner Name %7 %8 Channel %9",
    "args0": [
        {
            "type": "input_value",
            "name": "Label",
            "check": "String"
        },
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "button name",
            "check": "String"
        },
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "user",
            "check": "String"
        },
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "channel",
            "check": "Channel"
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
    const name = Blockly.JavaScript.valueToCode(block, "button name", Blockly.JavaScript.ORDER_NONE);
    const finaln = name.replace("'", "").replace("'", "");
    const statementsThen = Blockly.JavaScript.valueToCode(block, "Label", Blockly.JavaScript.ORDER_NONE);
    const code = `client.chat({message:"Hello, How are you?", name:"SmartestChatbot", owner:"CoolOwnerName", user: Cooluniqueuserid-in-number, language:"CoolLanguage"}).then(reply => {
        ${Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_NONE)}.send(String(reply));
        });`;
    return code;
};