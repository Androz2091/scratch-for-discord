import * as Blockly from "blockly";

Blockly.Blocks["discord4stratch_get_role"] = {
    init: function() {
        this.appendValueInput("VALUE")
        .setCheck("String")
        .appendField("Find role");
        this.appendValueInput("SERVER")
        .appendField("from server");
        this.appendDummyInput()
        .appendField("by")
        .appendField(new Blockly.FieldDropdown([
            ["name", "name"],
            ["id", "id"]
        ]), "SEARCH_TYPE");
        this.setInputsInline(true);
        this.setOutput(true, "Role");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript["discord4stratch_get_role"] = function(block) {
    const searchType = block.getFieldValue("SEARCH_TYPE");
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    const value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
    if(searchType === "name"){
        const code = [
            `${server}.roles.cache.find((role) => role.name === ${value})`,
            Blockly.JavaScript.ORDER_NONE
        ];
        return code;
    } else {
        const code = [
            `${server}.roles.cache.find((role) => role.id === ${value})`,
            Blockly.JavaScript.ORDER_NONE
        ];
        return code;
    }
};

Blockly.Blocks["discord4stratch_add_role"] = {
    init: function() {
        this.appendValueInput("ROLE")
        .setCheck("Role")
        .appendField("Add role");
        this.appendValueInput("MEMBER")
        .appendField("to member");
        this.setInputsInline(true);
        this.setOutput(true);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript["discord4stratch_add_role"] = function(block) {
    const searchType = block.getFieldValue("SEARCH_TYPE");
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    const value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
    if(searchType === "name"){
        const code = [
            `${server}.roles.cache.find((role) => role.name === ${value})`,
            Blockly.JavaScript.ORDER_NONE
        ];
        return code;
    } else {
        const code = [
            `${server}.roles.cache.find((role) => role.id === ${value})`,
            Blockly.JavaScript.ORDER_NONE
        ];
        return code;
    }
};
