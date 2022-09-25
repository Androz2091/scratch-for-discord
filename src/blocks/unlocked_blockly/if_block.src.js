// Source of this block comes from https://www.kidscoding8.com/5646.html
// The Blockly github uses a module named "goog" so I used this source instead, since it had everything in the format we use.
// Note that you might see random numbers in code comments, thats because the site made me have to copy everything including the line index.
// If this website is down or shutdown, you can find an archive I made here:
// https://drive.google.com/drive/folders/1G2Lg11s8ds3Ug_LmL_2OIieTAg5Fu1QC?usp=sharing

import Blockly from "blockly/core";

Blockly.Blocks['controls_if'] = {
     /**
      * Block for if/elseif/else condition.
      * @this Blockly.Block
      */
     init: function() {
       this.setHelpUrl(Blockly.Msg.CONTROLS_IF_HELPURL);
       this.setColour('%{BKY_LOGIC_HUE}');
       this.appendValueInput('IF0')
         .setCheck('Boolean')
          .appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);
      this.appendStatementInput('DO0')
          .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setMutator(new Blockly.Mutator(['controls_if_elseif',
                                           'controls_if_else']));
      // Assign 'this' to a variable for use in the tooltip closure below.
      var thisBlock = this;
      this.setTooltip(function() {
        if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) {
          return Blockly.Msg.CONTROLS_IF_TOOLTIP_1;
        } else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) {
          return Blockly.Msg.CONTROLS_IF_TOOLTIP_2;
        } else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) {
          return Blockly.Msg.CONTROLS_IF_TOOLTIP_3;
        } else if (thisBlock.elseifCount_ && thisBlock.elseCount_) {
         return Blockly.Msg.CONTROLS_IF_TOOLTIP_4;
       }
       return '';
      });
      this.elseifCount_ = 0;
      this.elseCount_ = 0;
    },
    /**
     * Create XML to represent the number of else-if and else inputs.
     * @return {Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function() {
     if (!this.elseifCount_ && !this.elseCount_) {
        return null;
      }
      var container = document.createElement('mutation');
      if (this.elseifCount_) {
        container.setAttribute('elseif', this.elseifCount_);
      }
      if (this.elseCount_) {
        container.setAttribute('else', 1);
      }
      return container;
    },
    /**
     * Parse XML to restore the else-if and else inputs.
    * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function(xmlElement) {
      this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10) || 0;
      this.elseCount_ = parseInt(xmlElement.getAttribute('else'), 10) || 0;
      this.updateShape_();
    },
    /**
     * Populate the mutator's dialog with this block's components.
 65    * @param {!Blockly.Workspace} workspace Mutator's workspace.
 66    * @return {!Blockly.Block} Root block in mutator.
 67    * @this Blockly.Block
 68    */
    decompose: function(workspace) {
      var containerBlock = workspace.newBlock('controls_if_if');
      containerBlock.initSvg();
      var connection = containerBlock.nextConnection;
      for (var i = 1; i <= this.elseifCount_; i++) {
        var elseifBlock = workspace.newBlock('controls_if_elseif');
        elseifBlock.initSvg();
        connection.connect(elseifBlock.previousConnection);
        connection = elseifBlock.nextConnection;
      }
      if (this.elseCount_) {
        var elseBlock = workspace.newBlock('controls_if_else');
        elseBlock.initSvg();
        connection.connect(elseBlock.previousConnection);
      }
      return containerBlock;
    },
    /**
 87    * Reconfigure this block based on the mutator dialog's components.
 88    * @param {!Blockly.Block} containerBlock Root block in mutator.
 89    * @this Blockly.Block
 90    */
    compose: function(containerBlock) {
      var clauseBlock = containerBlock.nextConnection.targetBlock();
      // Count number of inputs.
      this.elseifCount_ = 0;
      this.elseCount_ = 0;
      var valueConnections = [null];
      var statementConnections = [null];
      var elseStatementConnection = null;
      while (clauseBlock) {
       switch (clauseBlock.type) {
         case 'controls_if_elseif':
           this.elseifCount_++;
           valueConnections.push(clauseBlock.valueConnection_);
           statementConnections.push(clauseBlock.statementConnection_);
           break;
         case 'controls_if_else':
           this.elseCount_++;
           elseStatementConnection = clauseBlock.statementConnection_;
           break;
         default:
           throw 'Unknown block type.';
       }
       clauseBlock = clauseBlock.nextConnection &&
           clauseBlock.nextConnection.targetBlock();
     }
     this.updateShape_();
     // Reconnect any child blocks.
     for (var i = 1; i <= this.elseifCount_; i++) {
       Blockly.Mutator.reconnect(valueConnections[i], this, 'IF' + i);
       Blockly.Mutator.reconnect(statementConnections[i], this, 'DO' + i);
     }
     Blockly.Mutator.reconnect(elseStatementConnection, this, 'ELSE');
   },
   /**
125    * Store pointers to any connected child blocks.
126    * @param {!Blockly.Block} containerBlock Root block in mutator.
127    * @this Blockly.Block
128    */
   saveConnections: function(containerBlock) {
     var clauseBlock = containerBlock.nextConnection.targetBlock();
     var i = 1;
     while (clauseBlock) {
       switch (clauseBlock.type) {
         case 'controls_if_elseif':
           var inputIf = this.getInput('IF' + i);
           var inputDo = this.getInput('DO' + i);
           clauseBlock.valueConnection_ =
               inputIf && inputIf.connection.targetConnection;
           clauseBlock.statementConnection_ =
               inputDo && inputDo.connection.targetConnection;
           i++;
           break;
         case 'controls_if_else':
           inputDo = this.getInput('ELSE');
           clauseBlock.statementConnection_ =
               inputDo && inputDo.connection.targetConnection;
           break;
         default:
           throw 'Unknown block type.';
       }
       clauseBlock = clauseBlock.nextConnection &&
           clauseBlock.nextConnection.targetBlock();
     }
   },
   /**
156    * Modify this block to have the correct number of inputs.
157    * @private
158    * @this Blockly.Block
159    */
   updateShape_: function() {
     // Delete everything.
     if (this.getInput('ELSE')) {
       this.removeInput('ELSE');
     }
     var i = 1;
     while (this.getInput('IF' + i)) {
       this.removeInput('IF' + i);
       this.removeInput('DO' + i);
       i++;
     }
     // Rebuild block.
     for (i = 1; i <= this.elseifCount_; i++) {
       this.appendValueInput('IF' + i)
           .setCheck('Boolean')
           .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF);
       this.appendStatementInput('DO' + i)
           .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
     }
     if (this.elseCount_) {
       this.appendStatementInput('ELSE')
           .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
     }
   }
 };
 
 Blockly.JavaScript['controls_if'] = function(block) {
   // If/elseif/else condition.
   var n = 0;
   var code = '', branchCode, conditionCode;
   do {
     conditionCode = Blockly.JavaScript.valueToCode(block, 'IF' + n,
       Blockly.JavaScript.ORDER_NONE) || 'false';
     branchCode = Blockly.JavaScript.statementToCode(block, 'DO' + n);
     code += (n > 0 ? ' else ' : '') +
         'if (' + conditionCode + ') {\n' + branchCode + '}';
 
     ++n;
   } while (block.getInput('IF' + n));
 
   if (block.getInput('ELSE')) {
     branchCode = Blockly.JavaScript.statementToCode(block, 'ELSE');
     code += ' else {\n' + branchCode + '}';
   }
   return code + '\n';
 };