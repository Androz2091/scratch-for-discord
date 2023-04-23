import Blockly from "blockly/core";

const blockName = "get_reaction_member";

Blockly.Blocks[blockName] = {
  validate: function(newValue) {
  this.getSourceBlock().updateConnections(newValue);
  return newValue;
},
init: function() {
//this.jsonInit(blockData);
   var options = [
  [
          "first",
          "first"
        ],
        [
          "last",
          "last"
        ],
     [
       "all",
       "all"
     ],
        [
          "#",
          "custom"
        ]
  ];

  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(options, this.validate), 'type')

this.setOutput('Member')
      this.setInputsInline(true);
    this.setColour("#187795");
  },
  updateConnections: function(newValue) {

  this.removeInput('mtype', true);
    this.removeInput('ee', true);
  if (newValue == 'first') {
this.appendDummyInput('ee')
        .appendField("reacting member");
  } else if (newValue == 'last') {
this.appendDummyInput('ee')
        .appendField("reacting member");
  } else if (newValue == 'custom'){
    this.appendValueInput("mtype")
        .setCheck("Number");
       this.appendDummyInput('ee')
        .appendField("reacting member");
  }else if (newValue == 'all'){
         this.appendDummyInput('ee')
        .appendField("reacting members");
  }
}
};


Blockly.JavaScript[blockName] = function(block) {
  const type = block.getFieldValue("type");
  const cmem = Blockly.JavaScript.valueToCode(block, "mtype", Blockly.JavaScript.ORDER_ATOMIC);

  var code
if(type == 'first') {
  code = `reaction.users.cache.first()`
} else if(type == 'all') {
  code = `reaction.users.cache.map(rec => rec)`
} else if(type == 'last') {
  code = `reaction.users.cache.map(r => r)[reaction.users.cache.map(rr=>rr).length-1]`
} else {
  code = `m.users.cache.map(r => r)[${cmem}]`
}
const finalcode = [code, Blockly.JavaScript.ORDER_NONE];
  
  return finalcode;
};
