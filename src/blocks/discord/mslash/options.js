import * as Blockly from "blockly";

const blockName = "options";

Blockly.Blocks[blockName] = {
    init: function() {
        var thisBlock = this;
        var dropdown = new Blockly.FieldDropdown(
            [
                [
                    "string",
                    "String"
                ],
                [
                    "integer",
                    "Integer"
                ],
                [
                    "boolean",
                    "Boolean"
                ],
                [
                    "user",
                    "User"
                ],
                [
                    "channel",
                    "Channel"
                ],
                [
                    "role",
                    "Role"
                ],
                [
                    "subcommand",
                    "Subcommand"
                ],
                [
                    "subcommand group",
                    "SubcommandGroup"
                ],
                [
                    "Attachment",
                    "Attachment"
                ],
            ],
            function(newMode) {
              thisBlock.updateType_(newMode);
              return newMode
            });
            this.appendDummyInput('SEARCH')
            .appendField('Get')
            .appendField(dropdown, 'SEARCH');
            this.appendValueInput('BOOLEAN')
            .setCheck('String')
            .appendField("option name");
            this.setInputsInline(true);
            this.setOutput(true, 'String');
            this.setColour("#4C97FF")
    },
    updateType_: function(newMode) {
        if(newMode === null) return
        if(newMode === undefined) return
        if(newMode === "null") return
        let a = newMode.toLowerCase()
        newMode = a
        if (newMode == 'string') {

          this.setOutput(true,'String');

        }else if (newMode == 'integer') {

            this.setOutput(true,'Number');

        }else if (newMode == 'boolean') {

            this.setOutput(true,'Boolean');

        } else if (newMode == 'user') {

            this.setOutput(true,'Member');

        } else if (newMode == 'channel') {

            this.setOutput(true,'Channel');

        } else if (newMode == 'role') {

            this.setOutput(true,'Role');

        } else if (newMode == 'subcommand') {

            this.setOutput(true,'String');

        } else if (newMode == 'subcommand group') {

            this.setOutput(true,'String');

        } else if (newMode == 'attachment') {
          this.setOutput(true,'Attachment');
        }
      },
      mutationToDom: function() {
        var container = Blockly.utils.xml.createElement('mutation');
        container.setAttribute('mode', this.getFieldValue('SEARCH'));
        return container;
      },
      domToMutation: function(xmlElement) {
        this.updateType_(xmlElement.getAttribute('mode'));
      }
};


Blockly.JavaScript[blockName] = function(block) {
    const string = Blockly.JavaScript.valueToCode(block, "BOOLEAN", Blockly.JavaScript.ORDER_ATOMIC);
    const searchType = block.getFieldValue("SEARCH");
console.log("return "+string + "\n" + searchType)
        const code = [`interaction.options.get${searchType}(${string})`, Blockly.JavaScript.ORDER_NONE];
        return code;

};