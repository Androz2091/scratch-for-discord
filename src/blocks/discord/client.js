import * as Blockly from "blockly/core";

Blockly.Blocks["discord4stratch_client_set_game"] = {
    init: function() {
        this.appendValueInput("game")
            .setCheck("String")
            .appendField("set bot game to");
          this.setColour(230);
          this.setTooltip("");
          this.setHelpUrl("");
    }
};

Blockly.JavaScript["discord4stratch_client_set_game"] = function(block) {
    const value = Blockly.JavaScript.valueToCode(block, "game", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `discord4stratch.client.setActivity(${value});\n`;
    return code;
};