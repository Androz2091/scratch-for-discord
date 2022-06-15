import Blockly from "blockly/core";

const blockName = 'lime_s4d_pin'

const blockData = {
    "type": "lime_s4d_pin",
    "message0": " %1 message %2",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "choise",
            "options": [
                [
                    "pin",
                    "PIN"
                ],
                [
                    "unpin",
                    "UNPIN"
                ]
            ]
        },
        {
            "type": "input_value",
            "name": "value"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": '#4C97FF',
    "tooltip": "",
    "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['lime_s4d_pin'] = function (block) {
    var dropdown = block.getFieldValue('choise')
    var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC)
    var code = ``

    if (value == '') {

        value = 's4dmessage'

    }

    if (dropdown == 'PIN') {

        code = `${value}.pin()`

    } else {

        code = `${value}.unpin()`

    }
    return code
};