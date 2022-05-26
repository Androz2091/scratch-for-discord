import * as Blockly from "blockly";
import '@blockly/field-grid-dropdown';
import '@blockly/field-slider';
const blockName = "1imagepng";

const blockData = {
    "message0": "(image) new %1 of image %2 ",
    "args0": [
        {
            "type": "field_grid_dropdown",
            "name": "INFO",
            "options": [
                [
                    "Blur",
                    "Blur"
                ],
                [
                    "Gay",
                    "Gay"
                ],
                [
                    "Greyscale",
                    "Greyscale"
                ],
                [
                    "Invert",
                    "Invert"
                ],
                [
                    "Sepia",
                    "Sepia"
                ],
                [
                    "Ad",
                    "Ad"
                ],
                [
                    "Affect",
                    "Affect"
                ],
                [
                    "Beautiful",
                    "Beautiful"
                ],
                [
                    "Bobross",
                    "Bobross"
                ],
                [
                    "ConfusedStonk",
                    "ConfusedStonk"
                ],
                [
                    "Delete",
                    "Delete"
                ],
                [
                    "DiscordBlack",
                    "DiscordBlack"
                ],
                [
                    "DiscordBlue",
                    "DiscordBlue"
                ],
                [
                    "Facepalm",
                    "Facepalm"
                ],
                [
                    "Hitler",
                    "Hitler"
                ],
                [
                    "Jail",
                    "Jail"
                ],
                [
                    "Karaba",
                    "Karaba"
                ],
                [
                    "Mms",
                    "Mms"
                ],
                [
                    "NotStonk",
                    "NotStonk"
                ],
                [
                    "Poutine",
                    "Poutine"
                ],
                [
                    "Rip",
                    "Rip"
                ],
                [
                    "Stonk",
                    "Stonk"
                ],
                [
                    "Tatoo",
                    "Tatoo"
                ],
                [
                    "Thomas",
                    "Thomas"
                ],
                [
                    "Trash",
                    "Trash"
                ],
                [
                    "Circle",
                    "Circle"
                ],
            ]
        },
        {
            "type": "input_value",
            "name": "IMAGE",
            "check": [ "Number", "String" ]
          },
    ],
    "output": "ImageBuffPng",
    "colour": "#5BA58C",
    "tooltip": "",
    "helpUrl": "",
    "mutator": "2imagepng_mutator"
}; 

Blockly.constants.IS_DIVISIBLEBY_MUTATOR_MIXIN = {
    /**
     * Create XML to represent whether the 'divisorInput' should be present.
     * @return {!Element} XML storage element.
     * @this {Blockly.Block}
     */
    mutationToDom: function() {
      var container = Blockly.utils.xml.createElement('mutation');
      var divisorInput = (this.getFieldValue('INFO') == 'Blur');
      container.setAttribute('divisor_input', divisorInput);
      return container;
    },
    /**
     * Parse XML to restore the 'divisorInput'.
     * @param {!Element} xmlElement XML storage element.
     * @this {Blockly.Block}
     */
    domToMutation: function(xmlElement) {
      var divisorInput = (xmlElement.getAttribute('divisor_input') == 'true');
      this.updateShape_(divisorInput);
    },
    /**
     * Modify this block to have (or not have) an input for 'is divisible by'.
     * @param {boolean} divisorInput True if this block has a divisor input.
     * @private
     * @this {Blockly.Block}
     */
    updateShape_: function(divisorInput) {
      // Add or remove a Value Input.
      var inputExists = this.getInput('number');
      if (divisorInput) {
        if (!inputExists) {
          this.appendValueInput('number')
              .setCheck('Number');
        }
      } else if (inputExists) {
        this.removeInput('number');
      }
    }
  };
  Blockly.constants.IS_DIVISIBLE_MUTATOR_EXTENSION = function() {
    this.getField('INFO').setValidator(function(option) {
      var divisorInput = (option == 'Blur');
      this.getSourceBlock().updateShape_(divisorInput);
    });
  };
  
  Blockly.Extensions.registerMutator('2imagepng_mutator',
      Blockly.constants.IS_DIVISIBLEBY_MUTATOR_MIXIN,
      Blockly.constants.IS_DIVISIBLE_MUTATOR_EXTENSION);
Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    },
};

Blockly.JavaScript[blockName] = function(block) {
    const image = Blockly.JavaScript.valueToCode(block, "IMAGE", Blockly.JavaScript.ORDER_ATOMIC);
    const num = Blockly.JavaScript.valueToCode(block, "number", Blockly.JavaScript.ORDER_ATOMIC);
    const info2 = block.getFieldValue("INFO");
    let info1 = info2.replace("'",'')
    let info = info1.replace("'","")
    const code = [`await new DIG.${info}().getImage(${image}${num === "" ? "": ","+num})`, Blockly.JavaScript.ORDER_NONE];
    return code;
};

