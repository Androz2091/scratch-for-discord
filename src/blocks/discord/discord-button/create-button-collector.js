import * as Blockly from "blockly";

const blockName = "s4d_on_click";

const blockData = {
    "message0": "%{BKY_ON_CLICK}",
    "colour": "#F5AB1A",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        },
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": "Member"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Run the blocks inside when a button is clicked by a member. Leave the member input empty if any member is allowed to press the button."
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const memberr = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    let member = memberr.replace(".user", "")
    if (String(member) == null || String(member) == "") member = "i.user"
    const code = `let collector = m.createMessageComponentCollector({filter: i=>i.user.id === ${member}.id ,time:60000});
    collector.on('collect',async i=>{
        ${statements}
    })\n`;
    return code;
};

