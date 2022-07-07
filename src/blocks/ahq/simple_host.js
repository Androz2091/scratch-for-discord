import * as Blockly from "blockly/core";
const ahqcolor = ['#993399', '#993399', '#993399', '#993399'];
function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockName = "simple_host_auth";
//block working now working
const blockData = {
    "type": "block_type",
    "message0": "load Simple Host auth %1 core config ID %2",
    "args0": [
        {
            "type": "input_dummy"
        }, {
            "type": "input_value",
            "name": "member",
            "check": "String"
        },],
    "colour": listsGetRandomItem(ahqcolor, false),
    "tooltip": "Login to access Simple Host Auth",
    "helpUrl": "https://discord.gg/nJhYCSddVy"
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function (block) {
    const a = Blockly.JavaScript.valueToCode(block, "member", Blockly.JavaScript.ORDER_ATOMIC).replace(".user", "").replace(".author", ".member");
    const code = `
    //simple host
    const {error} = require("../../err.js");
    await error({
        id: ${a},
        error: String("Alert: Bot turned on!")
    });
    process.on("uncaughtException", async function(err) {
        await error({
            "id": ${a},
            "error": String(err)
        });
    });
    s4d.client.on("ready", async() => {
    while (s4d.client && s4d.client.token) {
        await delay(2000)
        const {
            stop
        } = require("../../power.js");
        if (await (stop(${a}))) {
            s4d.client.destroy()
        }
    }
});`
    return code;
};
