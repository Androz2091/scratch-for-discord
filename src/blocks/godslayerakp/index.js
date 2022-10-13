import "./ytdl"
import "./discord"
import "./objects"

/* folderless blocks */
import Blockly from "blockly/core";

Blockly.Blocks["gsa_make_db_with_path_x"] = {
  init: function () {
    this.jsonInit({
      "message0": "create a new db with path %1 .json",
      "args0": [
        {
          "type": "input_value",
          "name": "path",
          "check": "String"
        }
      ],
      "output": null,
      "inputsInline": true,
      "colour": '#5ba58b',
      "tooltip": "creates a new database, put in a variable and then put the variable in the db blocks to use",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript["gsa_make_db_with_path_x"] = function (block) {
  const path = Blockly.JavaScript.valueToCode(block, "path", Blockly.JavaScript.ORDER_ATOMIC)
  return [`new Database(String(${path + '.json'}))`, Blockly.JavaScript.ORDER_ATOMIC];
}



Blockly.Blocks["gsa_bypass_type"] = {
  init: function () {
    this.jsonInit({
      "message0": "force %1",
      "args0": [
        {
          "type": "input_value",
          "name": "path"
        }
      ],
      "output": null,
      "inputsInline": true,
      "colour": '#D14081',
      "tooltip": "forces a block into where ever you want",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript["gsa_bypass_type"] = function (block) {
  return [Blockly.JavaScript.valueToCode(block, "path", Blockly.JavaScript.ORDER_ATOMIC), Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.Blocks["gsa_format_time"] = {
  init: function () {
    this.jsonInit({
      "message0": "make time stamp from %1 with format %2",
      "args0": [
        {
          "type": "input_value",
          "name": "time",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "format",
          "check": "String"
        }
      ],
      "output": "String",
      "inputsInline": true,
      "colour": '#D14081',
      "tooltip": "formats date as timestamp (like discords timestamps but with more configurable)",
      "helpUrl": "https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/"
    });
  }
};

Blockly.JavaScript["gsa_format_time"] = function (block) {
  return [`String(moment(${Blockly.JavaScript.valueToCode(block, "time", Blockly.JavaScript.ORDER_ATOMIC)}).format(${Blockly.JavaScript.valueToCode(block, "format", Blockly.JavaScript.ORDER_ATOMIC)}))`, Blockly.JavaScript.ORDER_ATOMIC];
}



Blockly.Blocks["gsa_async_async_troll"] = {
  init: function () {
    this.jsonInit({
      "type": "block_type",
      "message0": "async %1 %2",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "code"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "Asynchronously runs the code inside of it",
      "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"
    });
  }
};

Blockly.JavaScript['gsa_async_async_troll'] = function(block) {
  var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
  var code = `
(async () => {
  ${statements_code}
})
`;
  return code;
};