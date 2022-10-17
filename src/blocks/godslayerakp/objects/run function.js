/* eslint-disable */
import Blockly from "blockly/core";

const blockName = "gsa_new_object_function_item_runer";

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
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(false);
        this.setColour("#BA4A9A");
        this.setTooltip("use the variable block in \"Expainded Variables\"");
    }
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.appendValueInput("function")
            .appendField("run function")
        this.setInputsInline(true);
        this.setColour("#BA4A9A");
        this.setTooltip("");
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
            this.inputs.push("dummy");
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }

        this.return = containerBlock.getFieldValue('return') == 'TRUE'

        this.updateShape_();
    },
    updateShape_: function () {
        if (this.inputs[0] != 'dummy') this.inputs = []

        let i = 0
        while (this.getInput(String(i)) || this.inputs[i]){
            if (this.inputs[i] && !this.getInput(String(i))) {
                let input = this.appendValueInput(String(i))
                if (i == 0) input.appendField("with")
            }

            if (!this.inputs[i] && this.getInput(String(i))) this.removeInput(String(i))
            i++
        }

        this.setOutput(this.return, null);
        this.setPreviousStatement(!this.return, null);
        this.setNextStatement(!this.return, null);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const josh = Blockly.JavaScript.valueToCode(block, 'function', Blockly.JavaScript.ORDER_ATOMIC)
    let ecport = []
    for (let i = 0; i < this.inputs.length; i++) {
        ecport.push(Blockly.JavaScript.valueToCode(block, String(i), Blockly.JavaScript.ORDER_ATOMIC))
    }
    let code = `${josh}(${ecport.join(', ')})`
    if (this.return) code = [code, Blockly.JavaScript.ORDER_ATOMIC]
    return code;
}
