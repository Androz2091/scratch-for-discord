import "./ytdl"
import "./discord"
import "./objects"
import "./buffers"
import "./tests"
import "./functions"

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



Blockly.Blocks["gsa_async"] = {
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

Blockly.JavaScript['gsa_async'] = function(block) {
  var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
  var code = `
(async () => {
  ${statements_code}
})()
`;
  return code;
};


Blockly.Blocks['gsa_create_new_jimp_image_mutator_block_hat'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("has fill color")
          .appendField(new Blockly.FieldCheckbox("FALSE"), "check");
      this.setInputsInline(false);
      this.setColour("#BA4A9A");
  }
}

Blockly.Blocks["gsa_create_new_jimp_image"] = {
  init: function () {
    this.jsonInit({
      "type": "block_type",
      "message0": "create new jimp image with size %1 %2 then %3",
      "args0": [
        {
          "type": "input_value",
          "name": "sx",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "sy",
          "check": "Number"
        },
        {
          "type": "input_statement",
          "name": "code"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "inputsInline": true,
      "colour": 260,
      "tooltip": "Asynchronously runs the code inside of it",
      "helpUrl": ""
    });
    this.setMutator(new Blockly.Mutator([]))
    this.isFilled = false 
  },
  mutationToDom: function () {
    const container = document.createElement("mutation");
    container.setAttribute('return', this.isFilled ? 'true' : 'false')
    return container;
  },
  domToMutation: function (xmlElement) {
      this.isFilled = xmlElement.getAttribute('return') == 'true'
      this.updateShape_();
  },
  decompose: function (workspace) {
      // create the main block
      var containerBlock = workspace.newBlock('gsa_create_new_jimp_image_mutator_block_hat');
      containerBlock.setFieldValue(this.isFilled?'true':'false', 'check')
      containerBlock.initSvg();

      return containerBlock;
  },
  compose: function (containerBlock) {
      this.isFilled = containerBlock.getFieldValue('check') == 'TRUE'

      this.updateShape_();
  },
  updateShape_: function () {
      if (this.isFilled && !this.getInput("color")) {
        this.removeInput("code")
        this.appendValueInput("color")
          .setCheck('Colour')
          .appendField("with color");
        this.appendStatementInput("code")
          .appendField("then");
      } else if (!this.isFilled && this.getInput("color")) {
        this.removeInput("color")
      }
  }
};

Blockly.JavaScript['gsa_create_new_jimp_image'] = function(block) {
  var sizex = Blockly.JavaScript.valueToCode(block, 'sx', Blockly.JavaScript.ORDER_ATOMIC);
  var sizey = Blockly.JavaScript.valueToCode(block, 'sy' ,Blockly.JavaScript.ORDER_ATOMIC);
  var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
  var code = `
new jimp(${sizex}, ${sizey}, ${this.isFilled ? `${Blockly.JavaScript.valueToCode(block, 'color' ,Blockly.JavaScript.ORDER_ATOMIC)}, ` : ''}async (err, image) => {
  ${statements_code}
})
`;
  return code;
};



Blockly.Blocks["gsa_typeof"] = {
  init: function () {
    this.jsonInit({
      "message0": "type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "thing"
        }
      ],
      "output": "String",
      "inputsInline": true,
      "colour": '#D14081',
      "tooltip": "gets the type of a value",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript["gsa_typeof"] = function (block) {
  const thing = Blockly.JavaScript.valueToCode(block, "thing", Blockly.JavaScript.ORDER_ATOMIC)
  return [`typeof ${thing}`, Blockly.JavaScript.ORDER_ATOMIC];
}
