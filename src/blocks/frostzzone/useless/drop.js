import * as Blockly from "blockly";

const blockName = "frost_drop1";

const blockData = {
    "message0": "%1 of video",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "SEARCH_TYPE",
            "options": [
                [
                    "channel name",
                    "channelName"
                ],
                [
                    "title",
                    "title"
                ],
                [
                    "publish Date",
                    "publishDate"
                ],
                [
                    "url",
                    "url"
                ],
                [
                    "id",
                    "id"
                ]
            ]
        }
    ],
    "output": "String",
    "colour": "#5BA58C",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    },
    mutationToDom: function() {
        var container = document.createElement('mutation');
        var divisorInput = (this.getFieldValue('INFO') == 'DIVISIBLE_BY');
        container.setAttribute('divisor_input', divisorInput);
        return container;
      }
};

Blockly.JavaScript[blockName] = function(block) {
    const info2 = block.getFieldValue("INFO");
    let info1 = info2.replace("'",'')
    let info = info1.replace("'","")
    const code = [`await images.${info}()`, Blockly.JavaScript.ORDER_NONE];
    return code;
};