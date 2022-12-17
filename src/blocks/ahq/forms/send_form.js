import * as Blockly from "blockly";
import { registerRestrictions } from "../../../restrictions";
const blockName = "snd_ahq_modal";

const blockData = {
    "message0": "Send forms on reply type %1 %2 %3 form %4",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "Label",
            "options": [
                [
                    "Slash/AHQButtons",
                    "interaction"
                ],
                [
                    "Jose Buttons",
                    "i"
                ]
            ]
        },
        {
            "type": "input_space"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "form",
            "check": "ahq_modal_names"
        },

    ],
    "colour": '#33cc00',
    "previousStatement": null,
    "nextStatement": null,
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(block) {
    const name = block.getFieldValue("Label");
    const data = Blockly.JavaScript.valueToCode(block, "form", Blockly.JavaScript.ORDER_NONE);
    const ahq = data.replace("'", "").replace("'", "");
    const code = `showModal(${ahq}, {
        client: s4d.client,
        interaction: ${name}
    })`;
    return code;
};
registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_AHQ_CONTENT",
        types: [
          "Label",
          "form"
        ]
    }
]);