/* eslint-disable */
import Blockly from "blockly/core";

const blockName = "gsa_new_object_function_item_creator_empty_search_moment_searchMoment";

Blockly.Blocks[blockName + '_mutator_block_hat'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("add inputs")
        this.appendStatementInput("value")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("return")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "return");
        this.setInputsInline(false);
        this.setColour("#BA4A9A");
    }
}

Blockly.Blocks[blockName + '_mutator_block_input'] = {
    init: function() {
        this.appendDummyInput('text')
            .appendField("input")
            .appendField(new Blockly.FieldTextInput("", function(state) {
                return state.replaceAll(/[^A-z]/g, '_')
            }), "name")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(false);
        this.setColour("#BA4A9A");
        this.setTooltip("use the variable block in \"Expainded Variables\"");
    }
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.appendDummyInput("func")
            .appendField("to")
            .appendField(new Blockly.FieldTextInput("do something"), "name")
            .appendField(new Blockly.FieldLabelSerializable(''), 'vars')
        this.appendStatementInput("value")
            .setCheck(null);
        this.setPreviousStatement(true, "object");
        this.setNextStatement(true, "object");
        this.setColour("#BA4A9A");
        this.setTooltip("used in \"create new object with\" block add functions to it");
        this.setHelpUrl("");
        this.setMutator(new Blockly.Mutator([blockName + '_mutator_block_input']))
        this.inputs = []
        this.return = false
    },
    mutationToDom: function () {
        if (!this.inputs) {
            return null;
        }
        const container = document.createElement("mutation");
        container.setAttribute('inputs', this.inputs.join(', '))
        container.setAttribute('return', this.return ? 'true' : 'false')
        return container;
    },
    domToMutation: function (xmlElement) {
        this.inputs = xmlElement.getAttribute('inputs').split(', ')
        this.return = xmlElement.getAttribute('return') == 'true'
        this.updateShape_();
    },
    decompose: function (workspace) {
        // create the main block
        var containerBlock = workspace.newBlock(blockName + '_mutator_block_hat');
        containerBlock.initSvg();

        // define the connection point for the input blocks
        var connection = containerBlock.getInput('value').connection;

        // add every value in this.inputs into the block as a block
        this.inputs.forEach(i => {
            var elseifBlock = workspace.newBlock(blockName + '_mutator_block_input');
            elseifBlock.setFieldValue(i, 'name')
            elseifBlock.initSvg();
            connection.connect(elseifBlock.previousConnection);
            connection = elseifBlock.nextConnection;
        })
        return containerBlock;
    },
    compose: function (containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('value');

        // deconstruct block stack and generate a new inputs list with the name field value
        this.inputs = []
        while (itemBlock && !itemBlock.isInsertionMarker()) {
            this.inputs.push(itemBlock.getFieldValue('name'));
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }

        this.return = containerBlock.getFieldValue('return') == 'TRUE'

        this.updateShape_();
    },
    updateShape_: function () {
        let vars = this.getInput("func")
        this.inputs = this.inputs.filter(x => !this.inputs[0] == '')

        vars.removeField('vars')
        vars.appendField(new Blockly.FieldLabelSerializable(this.inputs.length > 0 ? "with " + this.inputs.join(', ') : ''), 'vars')

        if (this.return && !this.getInput("return")) {
            this.appendValueInput("return")
                .setCheck(null)
                .appendField("return");
        } else if (!this.return && this.getInput("return")) {
            this.removeInput("return")
        }
    }
};

Blockly.JavaScript[blockName] = function (block) {
  const value = Blockly.JavaScript.statementToCode(block, "value", Blockly.JavaScript.ORDER_ATOMIC)
  const name = block.getFieldValue("NAME")
  return `
"${name}": (${this.inputs.join(', ')}) => {
  ${value}
},`;
}
