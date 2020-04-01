import * as Blockly from "blockly";

Blockly.Blocks["discord4stratch_message_content"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("message content");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript["discord4stratch_message_content"] = function() {
    const code = [`discord4stratch.message.content`, Blockly.JavaScript.ORDER_NONE];
    return code;
};

Blockly.Blocks["discord4stratch_message_author_id"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("message author id");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript["discord4stratch_message_author_id"] = function() {
    const code = [`discord4stratch.message.author.id`, Blockly.JavaScript.ORDER_NONE];
    return code;
};

Blockly.Blocks["discord4stratch_message_author_username"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("message author username");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript["discord4stratch_message_author_username"] = function() {
    const code = [`discord4stratch.message.author.username`, Blockly.JavaScript.ORDER_NONE];
    return code;
};