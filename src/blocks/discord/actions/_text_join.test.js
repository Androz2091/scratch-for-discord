import Blockly from "blockly/core";

Blockly.defineBlocksWithJsonArray([
    {
        "type": "atext_join",
        "message0": "",
        "output": "String",
        "style": "text_blocks",
        "helpUrl": "%{BKY_TEXT_JOIN_HELPURL}",
        "tooltip": "%{BKY_TEXT_JOIN_TOOLTIP}",
        "mutator": "atext_join_mutator"
    },
    {
        "type": "atext_create_join_container",
        "message0": "%{BKY_TEXT_CREATE_JOIN_TITLE_JOIN} %1 %2",
        "args0": [{
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STACK"
        }],
        "style": "text_blocks",
        "tooltip": "%{BKY_TEXT_CREATE_JOIN_TOOLTIP}",
        "enableContextMenu": false
    },
    {
        "type": "atext_create_join_item",
        "message0": "%{BKY_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM}",
        "previousStatement": null,
        "nextStatement": null,
        "style": "text_blocks",
        "tooltip": "%{BKY_TEXT_CREATE_JOIN_ITEM_TOOLTIP}",
        "enableContextMenu": false
    }
]);

/**
 * Mixin for mutator functions in the 'text_join_mutator' extension.
 * @mixin
 * @augments Blockly.Block
 * @package
 */
Blockly.Constants.Text.ATEXT_JOIN_MUTATOR_MIXIN = {
    /**
     * Create XML to represent number of text inputs.
     * @return {!Element} XML storage element.
     * @this {Blockly.Block}
     */
    mutationToDom: function() {
      var container = Blockly.utils.xml.createElement('mutation');
      container.setAttribute('items', this.itemCount_);
      return container;
    },
    /**
     * Parse XML to restore the text inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this {Blockly.Block}
     */
    domToMutation: function(xmlElement) {
      this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
      this.updateShape_();
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this {Blockly.Block}
     */
    decompose: function(workspace) {
      var containerBlock = workspace.newBlock('text_create_join_container');
      containerBlock.initSvg();
      var connection = containerBlock.getInput('STACK').connection;
      for (var i = 0; i < this.itemCount_; i++) {
        var itemBlock = workspace.newBlock('text_create_join_item');
        itemBlock.initSvg();
        connection.connect(itemBlock.previousConnection);
        connection = itemBlock.nextConnection;
      }
      return containerBlock;
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this {Blockly.Block}
     */
    compose: function(containerBlock) {
      var itemBlock = containerBlock.getInputTargetBlock('STACK');
      // Count number of inputs.
      var connections = [];
      while (itemBlock) {
        connections.push(itemBlock.valueConnection_);
        itemBlock = itemBlock.nextConnection &&
            itemBlock.nextConnection.targetBlock();
      }
      // Disconnect any children that don't belong.
      for (var i = 0; i < this.itemCount_; i++) {
        var connection = this.getInput('ADD' + i).connection.targetConnection;
        if (connection && connections.indexOf(connection) == -1) {
          connection.disconnect();
        }
      }
      this.itemCount_ = connections.length;
      this.updateShape_();
      // Reconnect any child blocks.
      for (var ia = 0; ia < this.itemCount_; ia++) {
        Blockly.Mutator.reconnect(connections[ia], this, 'ADD' + i);
      }
    },
    /**
     * Store pointers to any connected child blocks.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this {Blockly.Block}
     */
    saveConnections: function(containerBlock) {
      var itemBlock = containerBlock.getInputTargetBlock('STACK');
      var i = 0;
      while (itemBlock) {
        var input = this.getInput('ADD' + i);
        itemBlock.valueConnection_ = input && input.connection.targetConnection;
        i++;
        itemBlock = itemBlock.nextConnection &&
            itemBlock.nextConnection.targetBlock();
      }
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this {Blockly.Block}
     */
    updateShape_: function() {
      if (this.itemCount_ && this.getInput('EMPTY')) {
        this.removeInput('EMPTY');
      } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
        this.appendDummyInput('EMPTY')
            .appendField(this.newQuote_(true))
            .appendField(this.newQuote_(false));
      }
      // Add new inputs.
      for (var i = 0; i < this.itemCount_; i++) {
        if (!this.getInput('ADD' + i)) {
          var input = this.appendValueInput('ADD' + i)
              .setAlign(Blockly.ALIGN_RIGHT);
          if (i == 0) {
            input.appendField(Blockly.Msg['ATEXT_JOIN_TITLE_CREATEWITH']);
          }
        }
      }
      // Remove deleted inputs.
      while (this.getInput('ADD' + i)) {
        this.removeInput('ADD' + i);
        i++;
      }
    }
  };
  
  /**
   * Performs final setup of a text_join block.
   * @this {Blockly.Block}
   */
  Blockly.Constants.Text.ATEXT_JOIN_EXTENSION = function() {
    // Add the quote mixin for the itemCount_ = 0 case.
    this.mixin(Blockly.Constants.Text.QUOTE_IMAGE_MIXIN);
    // Initialize the mutator values.
    this.itemCount_ = 2;
    this.updateShape_();
    // Configure the mutator UI.
    this.setMutator(new Blockly.Mutator(['atext_create_join_item']));
};

Blockly.Constants.Text.ATEXT_JOIN_EXTENSION = function() {
    // Add the quote mixin for the itemCount_ = 0 case.
    this.mixin(Blockly.Constants.Text.QUOTE_IMAGE_MIXIN);
    // Initialize the mutator values.
    this.itemCount_ = 2;
    this.updateShape_();
    // Configure the mutator UI.
    this.setMutator(new Blockly.Mutator(['atext_create_join_item']));
  };
  
  // Update the tooltip of 'text_append' block to reference the variable.
  Blockly.Extensions.register('atext_append_tooltip',
      Blockly.Extensions.buildTooltipWithFieldText(
          '%{BKY_TEXT_APPEND_TOOLTIP}', 'VAR'));
  
  /**
   * Update the tooltip of 'text_append' block to reference the variable.
   * @this {Blockly.Block}
   */
  Blockly.Constants.Text.TEXT_INDEXOF_TOOLTIP_EXTENSION = function() {
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      return Blockly.Msg['ATEXT_INDEXOF_TOOLTIP'].replace('%1',
          thisBlock.workspace.options.oneBasedIndex ? '0' : '-1');
    });
  };
  

Blockly.Extensions.registerMutator('atext_join_mutator',
    Blockly.Constants.Text.ATEXT_JOIN_MUTATOR_MIXIN,
    Blockly.Constants.Text.ATEXT_JOIN_EXTENSION);

    