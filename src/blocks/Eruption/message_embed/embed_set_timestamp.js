import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_embed_set_timestamp";

const blockData = {
  "message0": "set embed timestamp %1 to %2 date %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "MODE",
      "options": [
        ["current", "CURRENT"],
        ["custom", "CUSTOM"]
      ]
    },
    {
      "type": "input_dummy",
      "name": "test",
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#40BF4A",
  "tooltip": "Set the timestamp of an embed.",
  "helpUrl": "",
  "mutator": "embed_set_timestamp_mutator"
};

Blockly.constants.IS_DIVISIBLEBY_MUTATOR_MIXIN = {
  /**
   * Create XML to represent whether the 'divisorInput' should be present.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function () {
    var container = Blockly.utils.xml.createElement('mutation');
    var divisorInput = (this.getFieldValue('MODE') == 'CUSTOM');
    container.setAttribute('divisor_input', divisorInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function (xmlElement) {
    var divisorInput = (xmlElement.getAttribute('divisor_input') == 'true');
    this.updateShape_(divisorInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'is divisible by'.
   * @param {boolean} divisorInput True if this block has a divisor input.
   * @private
   * @this {Blockly.Block}
   */
  updateShape_: function (divisorInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('DATE');
    if (divisorInput) {
      if (!inputExists) {
        this.appendValueInput('DATE')
          .setCheck('String')

      }
    } else if (inputExists) {
      this.removeInput('DATE');
    }
  }
};
Blockly.constants.IS_DIVISIBLE_MUTATOR_EXTENSION = function () {
  this.getField('MODE').setValidator(function (option) {
    var divisorInput = (option == 'CUSTOM');
    this.getSourceBlock().updateShape_(divisorInput);
  });
};

Blockly.Extensions.registerMutator('embed_set_timestamp_mutator',
  Blockly.constants.IS_DIVISIBLEBY_MUTATOR_MIXIN,
  Blockly.constants.IS_DIVISIBLE_MUTATOR_EXTENSION);
Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  },
};



Blockly.JavaScript[blockName] = function (block) {
  const date = Blockly.JavaScript.valueToCode(block, "DATE", Blockly.JavaScript.ORDER_ATOMIC);
  const code = `embed.setTimestamp(new Date(${date})); \n`
  return code;
};


registerRestrictions(blockName, [
  {
    type: "hasparent",
    message: "RES_MUST_BE_CREATE_EMBED_THEN",
    types: [
      "s4d_embed_create"
    ]
  }
]);

// Eruption is cool;
