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
                    "member",
                    "Member"
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
        if (this.getInput('BOOLEAN') != null) {
          this.removeInput('BOOLEAN')
        }
        if (newMode == 'string') {
            this.appendValueInput('BOOLEAN')
            .setCheck('String')
            .appendField("option name");
          this.setOutput(true,'String');

        }else if (newMode == 'integer') {
            this.appendValueInput('BOOLEAN')
            .setCheck('String')
            .appendField("option name");
            this.setOutput(true,'Number');

        }else if (newMode == 'boolean') {
            this.appendValueInput('BOOLEAN')
            .setCheck('String')
            .appendField("option name");
            this.setOutput(true,'Boolean');

        } else if (newMode == 'user') {
            this.appendValueInput('BOOLEAN')
            .setCheck('String')
            .appendField("option name");
            this.setOutput(true,'User');

        } else if (newMode == 'member') {
            this.appendValueInput('BOOLEAN')
            .setCheck('String')
            .appendField("option name");
            this.setOutput(true,'Member');

        }else if (newMode == 'channel') {
            this.appendValueInput('BOOLEAN')
            .setCheck('String')
            .appendField("option name");
            this.setOutput(true,'Channel');

        } else if (newMode == 'role') {
            this.appendValueInput('BOOLEAN')
            .setCheck('String')
            .appendField("option name");
            this.setOutput(true,'Role');

        } else if (newMode == 'subcommand') {
            this.setOutput(true,'String');

        } else if (newMode == 'subcommand group') {
            this.setOutput(true,'String');
          
        } else if (newMode == 'attachment') {
            this.appendValueInput('BOOLEAN')
            .setCheck('String')
            .appendField("option name");
            this.setOutput(true,'Attachment');
          
        }
      },
      mutationToDom: function() {
        var container = Blockly.utils.xml.createElement('mutation');
        container.setAttribute('mode', this.getFieldValue('SEARCH'));
        container.setAttribute('type', this.getFieldValue('TYPE'));
        return container;
      },
      domToMutation: function(xmlElement) {
        this.updateType_(xmlElement.getAttribute('mode'));
      }
};


Blockly.JavaScript[blockName] = function(block) {
    const searchType = block.getFieldValue("SEARCH");
    const string = Blockly.JavaScript.valueToCode(block, "BOOLEAN", Blockly.JavaScript.ORDER_ATOMIC).toLowerCase()
console.log("return "+string + "\n" + searchType)
        const code = [`interaction.options.get${searchType}(${string})`, Blockly.JavaScript.ORDER_NONE];
        return code;

};
