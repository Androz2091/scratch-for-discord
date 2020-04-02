import * as Blockly from "blockly";

Blockly.Blocks["discord4stratch_get_guild"] = {
    init: function() {
        this.appendValueInput("VALUE")
        .appendField("Find server");
        this.appendDummyInput()
        .appendField("by")
        .appendField(new Blockly.FieldDropdown([
            ["name", "name"],
            ["id", "id"]
        ]), "SEARCH_TYPE")
        this.setInputsInline(true);
        this.setOutput(true, "Guild");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript["discord4stratch_get_guild"] = function(block) {
    const searchType = block.getFieldValue("SEARCH_TYPE");
    const value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
    if(searchType === "name"){
        const code = [
            `discord4stratch.client.guilds.find((guild) => guild.name === ${value})`,
            Blockly.JavaScript.ORDER_NONE
        ];
        return code;
    } else {
        const code = [
            `discord4stratch.client.guilds.find((guild) => guild.id === ${value})`,
            Blockly.JavaScript.ORDER_NONE
        ];
        return code;
    }
};
