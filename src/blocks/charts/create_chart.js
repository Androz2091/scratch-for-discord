// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#84q32x

import Blockly from "blockly/core";

const blockName = "create_chart";

const blockData = {
  "type": "create_chart",
  "message0": "Create a new chart with %1 Type %2 %3 Label %4 Labels (X axis) %5 Data %6",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "typee",
      "options": [
        [
          "Bar",
          "bar"
        ],
        [
          "Line",
          "line"
        ],
        [
          "Radar",
          "radar"
        ],
        [
          "Pie",
          "pie"
        ],
        [
          "Horizontal Bar",
          "horizontalBar"
        ],
        [
          "Dough Nut",
          "doughnut"
        ],
        [
          "Polar Area",
          "polarArea"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "label",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "labels",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "data",
      "check": "Array"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 75,
  "tooltip": "Create a chart",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['create_chart'] = function(block) {
  var dropdown_typee = block.getFieldValue('typee');
  var value_label = Blockly.JavaScript.valueToCode(block, 'label', Blockly.JavaScript.ORDER_ATOMIC);
  var value_labels = Blockly.JavaScript.valueToCode(block, 'labels', Blockly.JavaScript.ORDER_ATOMIC);
  var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `const chart = ChartJSImage().chart({\n            type: '${dropdown_typee}',\n            data: {\n                labels: ${value_labels},\n                datasets: [{\n                    label: ${value_label},\n                    data: ${value_data}\n                }]\n            }\n        })\n`;
  return code;
};