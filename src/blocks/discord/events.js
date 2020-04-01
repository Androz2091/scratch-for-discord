import * as Blockly from "blockly";

Blockly.Blocks["discord4stratch_on_message"] = {
    init: function() {
        this.appendDummyInput()
              .appendField("on message");
          this.appendStatementInput("statements")
              .setCheck(null);
          this.setColour(230);
          this.setTooltip("");
          this.setHelpUrl("");
    }
};

Blockly.JavaScript["discord4stratch_on_message"] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, 'statements');
    const code = `discord4stratch.client.on('message', (param1) => {\ndiscord4stratch.message = param1;\n${statements}discord4stratch.message = null\n});\n`;
    return code;
};

Blockly.Blocks["discord4stratch_on_connected"] = {
    init: function() {
        this.appendDummyInput()
              .appendField("on connected");
          this.appendStatementInput("statements")
              .setCheck(null);
          this.setColour(230);
          this.setTooltip("");
          this.setHelpUrl("");
    }
};

Blockly.JavaScript["discord4stratch_on_connected"] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, 'statements');
    const code = `discord4stratch.client.on('ready', () => {\n${statements}\n});\n`;
    return code;
};