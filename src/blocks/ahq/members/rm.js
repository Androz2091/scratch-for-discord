import * as Blockly from "blockly/core";

const blockName = "s4d_get_rndmber";
//block working now working
const blockData = {
    "message0": "random member",
    "colour": '#40BF4A',
    "output": "Member",
    "tooltip": "Gets a random member from the server.",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function () {
    const code = ['randomUser.user', Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["ahq_members_get_random_member_in_server"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "random member in server %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "SERVER",
                        "check": "Server"
                    }
                ],
                "colour": "#187795",
                "output": "Member",
                "tooltip": "Get a random member from a server.",
                "helpUrl": ""
            }
        );
    }
};
Blockly.JavaScript["ahq_members_get_random_member_in_server"] = function (block) {
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${server}.members.cache.random().user`, Blockly.JavaScript.ORDER_NONE];
    return code;
};