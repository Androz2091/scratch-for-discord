import * as Blockly from "blockly";
const blockName = "style_ahq_button";
const ahqcolor = ['#33cc00', '#33cc00', '#33cc00', '#33cc00'];
function listsGetRandomItem(list, remove) {
  var x = Math.floor(Math.random() * list.length);
  if (remove) {
    return list.splice(x, 1)[0];
  } else {
    return list[x];
  }
}
const blockData = {
  "message0": "set style %1 %2 %3 to button %4",
  "inputsInline": true,
  "args0": [
    {
      "type": "field_dropdown",
      "name": "Label",
      "options": [
        [
          "Red",
          "DANGER"
        ],
        [
          "Purple",
          "PRIMARY"
        ],
        [
          "Grey",
          "SECONDARY"
        ],
        [
          "Green",
          "SUCCESS"
        ],
        [
          "Url",
          "LINK"
        ]

      ],
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "button name",
      "check": "String"
    },
  ],
  "colour": listsGetRandomItem(ahqcolor, false),
  "previousStatement": null,
  "nextStatement": null,
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
Blockly.JavaScript[blockName] = function (block) {
  const name = Blockly.JavaScript.valueToCode(block, "button name", Blockly.JavaScript.ORDER_NONE);
  const finaln = name.replace("'", "").replace("'", "");
  const statementsThen = block.getFieldValue("Label");
  const code = `${finaln}.setStyle("${statementsThen}");`;
  return code;
};