import Blockly from "blockly/core";

const blockName = "s4d_unban_member";

const blockData = {
    "message0": "%{BKY_UNBAN_MEMBER}",
    "args0": [
        {
            "type": "input_value",
            "name": "SERVER",
            "check": "Server"
        },
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": ["String","Number"]
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#4C97FF",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    let data = ""
    const memberr = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    let member = memberr.replace(".user","").replace(".author", ".member");
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    if (member.includes("#")) {
        data = "tag"
    } else if (Number(member)) {
        data = "id"
    } else {
        data = "username"
    }
    const code = `${server}.fetchBans().then(bans=> {
        if(bans.size != 0) {
        let bUser = bans.find(b => b.user.${data} == ${member})
        if(bUser){
        ${server}.members.unban(bUser.user)
        }
    }
  })\n`;
    return code;
};
