        import Blockly from "blockly/core";

        const blockName = "deaf_member";
        
        const blockData = {
            "message0": "deaf member with id %1",
            "args0": [
                {
                    "type": "input_value",
                    "name": "id",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#4C97FF",
            "tooltip": "",
            "helpUrl": ""
        };
        
        Blockly.Blocks[blockName] = {
            init: function() {
                this.jsonInit(blockData);
            }
        };
        
        Blockly.JavaScript[blockName] = function(block) {
            const id = Blockly.JavaScript.valueToCode(block, "id", Blockly.JavaScript.ORDER_ATOMIC);
            const code = `
s4dmessage.channel.members.forEach(member => {if(member.id === ${id}){member.voice.setDeaf(true)}});`
            return code;
        };