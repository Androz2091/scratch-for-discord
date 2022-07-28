/* eslint-disable */
import Blockly from "blockly/core";

const mutatorNames = ['message', 'color', 'title', 'url', 'author', 'description', 'thumbnail', 'fields', 'image', 'timestamp', 'footer']

const mutatorArgs = {
    "message": [
      "message",
      {
        "type": "input_value",
        "name": "msg",
        "check": "String"
      }
    ],
    "color": [
      "color",
      {
      "type": "input_value",
      "name": "color", 
      "check": ["String", "Colour"]
      }],
    "title": [
      "title",
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      }],
    "url": [
      "title url",
      {
        "type": "input_value",
        "name": "url",
        "check": "String"
      }],
    "author": [
      "author:",
      {
        "type": "input_dummy",
        "name": "a"
      },
      "name",
      {
        "type": "input_value",
        "name": "aname",
        "check": "String"
      },
      "icon",
      {
        "type": "input_value",
        "name": "aicon_url",
        "check": "String"
      },
      " author url",
      {
        "type": "input_value",
        "name": "aurl",
        "check": "String"
      }],
    "description": [
      "description",
      {
        "type": "input_value",
        "name": "description",
        "check": "String"
      }],
    "thumbnail": [
      "thumbnail",
      {
        "type": "input_value",
        "name": "thumbnail",
        "check": "String"
      }],
    "fields": [
      "fields",
      {
        "type": "input_dummy",
        "name": "fi"
      },
      null,
      {
        "type": "input_statement",
        "name": "fields",
        "check": "simple_field"
      }],
    "image": [
      "image",
      {
        "type": "input_value",
        "name": "image",
        "check": "String"
      }],
    "timestamp": [
      "timestamp",
      {
        "type": "input_value",
        "name": "timestamp",
        "check": "String"
      }],
    "footer": [
      "footer:",
      {
        "type": "input_dummy",
        "name": "f"
      },
      "text",
      {
        "type": "input_value",
        "name": "ftext",
        "check": "String"
      },
      "icon url",
      {
        "type": "input_value",
        "name": "ficon_url",
        "check": "String"
      }]
};

const blockName = "gsa_simple_embed";

const blockData = {
    "message0": "message embeds %1",
    "args0": [
        {
            "type": "input_dummy"
        }
    ],
    "mutator": "gsa_simple_embed_mutator",
    "inputsInline": false,
    "output": "MessageEmbed",
    "colour": "#40BF4A",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.Blocks["gsa_simple_embed_mutator"] = {
  init: function () {
      this.setColour("#CECDCE");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

const mutator = {
    inputs: [true, true, false, false, false, false, false, false, false, false],

    mutationToDom: function () {
        if (!this.inputs) {
            return null
        }
        const container = document.createElement("mutation");
        for (let i = 0; i < this.inputs.length; i++) {
            if (this.inputs[i]) container.setAttribute(mutatorNames[i], String(this.inputs[i]))
        }
        return container;
    },

    domToMutation: function (xmlElement) {
        for (let i = 0; i < this.inputs.length; i++) {
            this.inputs[i] = xmlElement.getAttribute(mutatorNames[i]) == "true";
        }
        this.updateShape_();
    },

    decompose: function (workspace) {
        const containerBlock = workspace.newBlock("gsa_simple_embed_mutator");
        for (let i = 0; i < this.inputs.length; i++) {
            containerBlock.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(mutatorNames[i])
                .appendField(new Blockly.FieldCheckbox(this.inputs[i] ? "TRUE" : "FALSE"), mutatorNames[i]);
        }
        containerBlock.initSvg();
        return containerBlock;
    },

    compose: function (containerBlock) {
        for (let i = 0; i < this.inputs.length; i++) {
            this.inputs[i] = (containerBlock.getFieldValue(mutatorNames[i]) == "TRUE");
        }
        this.updateShape_();
    },

    updateShape_: function () {
        for (let i = 0; i < this.inputs.length; i++) {
            let args = mutatorArgs[String(mutatorNames[i])]
            for (let i = 1; i < args.length; i = i + 2) {
              if (this.getInput(args[i]["name"]) !== null) {
                this.removeInput(args[i]["name"]);
              }
          }
        }
        for (let i = 0; i < this.inputs.length; i++) {
            if (this.inputs[i]) {
              let args = mutatorArgs[String(mutatorNames[i])]
                for (let i = 1; i < args.length; i = i + 2) {
                    let current = args[i]
                    let text = args[i-1]
                    if (current["type"] == 'input_dummy') {
                        this.appendDummyInput(String(current["name"]))
                            .setAlign(Blockly.ALIGN_CENTRE)
                            .appendField(text);
                    } else if (current["type"] == 'input_statement') {
                        this.appendStatementInput(String(current["name"]))
                            .setCheck(current["check"])
                            .setAlign(Blockly.ALIGN_RIGHT)
                            .appendField(text);
                    } else {
                        this.appendValueInput(String(current["name"]))
                            .setCheck(current["check"])
                            .setAlign(Blockly.ALIGN_RIGHT)
                            .appendField(text);
                    }
                }
            }
        }
    }
};

Blockly.Extensions.registerMutator("gsa_simple_embed_mutator", mutator, null, [""]);

Blockly.JavaScript[blockName] = function (block) {
    let message = '';
    let color = '';
    let title = '';
    let url = '';
    let author = '';
    let description = '';
    let thumbnail = '';
    let fields = '';
    let image = '';
    let timestamp = '';
    let footer = '';
    if (this.inputs[0]) {
        color = `color: String(${Blockly.JavaScript.valueToCode(block, "color", Blockly.JavaScript.ORDER_ATOMIC)}), \n`
    }
    if (this.inputs[1]) {
        title = `title: String(${Blockly.JavaScript.valueToCode(block, "title", Blockly.JavaScript.ORDER_ATOMIC)}), \n`
    }
    if (this.inputs[2]) {
        url = `url: String(${Blockly.JavaScript.valueToCode(block, "url", Blockly.JavaScript.ORDER_ATOMIC)}), \n`
    }
    if (this.inputs[3]) {
        author = `author: {
            name: String(${Blockly.JavaScript.valueToCode(block, "aname", Blockly.JavaScript.ORDER_ATOMIC)}),
            icon_url: String(${Blockly.JavaScript.valueToCode(block, "aicon_url", Blockly.JavaScript.ORDER_ATOMIC)}),
            url: String(${Blockly.JavaScript.valueToCode(block, "aurl", Blockly.JavaScript.ORDER_ATOMIC)})
        }, \n`
    }
    if (this.inputs[4]) {
        description = `description: String(${Blockly.JavaScript.valueToCode(block, "description", Blockly.JavaScript.ORDER_ATOMIC)}), \n`
    }
    if (this.inputs[5]) {
        thumbnail = `thumbnail: {
            url: String(${Blockly.JavaScript.valueToCode(block, "thumbnail", Blockly.JavaScript.ORDER_ATOMIC)})
        }, \n`
    }
    if (this.inputs[6]) {
        fields = `fields: [
            ${Blockly.JavaScript.statementToCode(block, 'fields')}
        ], \n`
    }
    if (this.inputs[7]) {
        image = `image: {
            url: String(${Blockly.JavaScript.valueToCode(block, "image", Blockly.JavaScript.ORDER_ATOMIC)})
        }, \n`
    }
    if (this.inputs[8]) {
        timestamp = `timestamp: new date(String(${Blockly.JavaScript.valueToCode(block, "timestamp", Blockly.JavaScript.ORDER_ATOMIC)})),`
    }
    if (this.inputs[9]) {
        footer = `footer: {
            text: String(${Blockly.JavaScript.valueToCode(block, "ftext", Blockly.JavaScript.ORDER_ATOMIC)}),
            icon_url: String(${Blockly.JavaScript.valueToCode(block, "ficon_url", Blockly.JavaScript.ORDER_ATOMIC)})
        } \n`
    }
    if (Blockly.JavaScript.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC)) {
      message = `content: ${Blockly.JavaScript.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC)}`
    }

    const code = `${message}embeds: [{
${color}${title}${url}${author}${description}${thumbnail}${fields}${image}${timestamp}${footer}}]`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };