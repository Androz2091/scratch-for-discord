import Blockly from "blockly/core";

const blockName = "jg_do_not_use_this_block_you_poop_bruh_fard_lolololol_haha_poopoo";

const blockData = {
    "message0": "oops, do i really want to do this? %1",
    "args0": [
        {
            "type": "field_input",
            "name": "key"
        }
    ],
    "colour": "#ff0000",
    "tooltip": ":)",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    },
    onchange: function () {
        let oopsie = this.getFieldValue("key")
        if (String(oopsie) == "Y E S") {
            window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0"
        }
    }
};

Blockly.JavaScript[blockName] = function () {
    return ``;
}
