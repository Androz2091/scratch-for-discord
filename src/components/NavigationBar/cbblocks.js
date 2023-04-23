module.exports.load = (Blockly, prefix, color) => {
    require('../../blocks/JeremyGamer13/Objects')
    require('../../blocks/godslayerakp/objects')
    require('../../blocks/frostzzone/useful/jsontostring')
    require('../../blocks/collections')
    require('../../blocks/frostzzone/useful/var')
    require('../../blocks/frostzzone/useful/color')
    require('../../blocks/regex')
    require('../../blocks/LaserCat/switch/switch_switch')
    require('../../blocks/text')
    require('../../blocks/JeremyGamer13/miscblocks')
    require('../../blocks/JeremyGamer13/messages_blocks.js')
    require('../../blocks/other')
    require('../../blocks/JeremyGamer13/other_err')
    require('../../blocks/frostzzone/useful/time')
    require('../../blocks/godslayerakp/index')
    Blockly.Blocks[prefix + "exportInit"] = {
        init: function () {
            this.jsonInit({
                "message0": "when block is created %1 do %2",
                "args0": [
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_statement",
                        "name": "STATEMENTS"
                    }
                ],
                "colour": color,
                "tooltip": "Runs the blocks inside whenever this block needs to load."
            })
        }
    }
    Blockly.JavaScript[prefix + "exportInit"] = (block) => {
        const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
        return `_ \\COPY_ABOVE FUNCTIONS and VARIABLES\\ _
_ \\INIT FUNC\\ _
let ___S4DCB_rALLOW_block_FROM_JS_FUNC___ = this;
${statements}
_ \\END INIT FUNC\\ _`
    }
    Blockly.Blocks[prefix + "exportJavascript"] = {
        init: function () {
            this.jsonInit({
                "message0": "when export code is being loaded %1 do %2",
                "args0": [
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_statement",
                        "name": "STATEMENTS"
                    }
                ],
                "colour": color,
                "tooltip": "Runs the blocks inside whenever S4D tries to get it's exported code. This will not only happen on the export buttons."
            })
        }
    }
    Blockly.JavaScript[prefix + "exportJavascript"] = (block) => {
        const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
        return `_ \\COPY_ABOVE FUNCTIONS and VARIABLES\\ _
_ \\JS FUNC\\ _
let ___S4DCB_rALLOW_block_FROM_JS_FUNC___ = block;
${statements}
_ \\END JS FUNC\\ _`
    }
    Blockly.Blocks[prefix + "setColour"] = {
        init: function () {
            this.jsonInit({
                "message0": "set block color to %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "COLOR",
                        "check": ["String", "Colour", "Number"]
                    }
                ],
                "colour": color,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Sets the color of the block to either an HSV number, #RRGGBB text, or Color."
            })
        }
    }
    Blockly.JavaScript[prefix + "setColour"] = (block) => {
        const color = Blockly.JavaScript.valueToCode(block, "COLOR", Blockly.JavaScript.ORDER_ATOMIC);
        return `this.setColour(${color});\n`
    }
    Blockly.Blocks[prefix + "setCommentText"] = {
        init: function () {
            this.jsonInit({
                "message0": "set block comment to %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "TEXT",
                        "check": "String"
                    }
                ],
                "colour": color,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Adds a comment on this block and sets it's text to the specified text."
            })
        }
    }
    Blockly.JavaScript[prefix + "setCommentText"] = (block) => {
        const TEXT = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
        return `this.setCommentText(${TEXT});\n`
    }
    Blockly.Blocks[prefix + "setHelpUrl"] = {
        init: function () {
            this.jsonInit({
                "message0": "set block help url to %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "TEXT",
                        "check": "String"
                    }
                ],
                "colour": color,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Sets the \"Help\" button on this block to go to this link."
            })
        }
    }
    Blockly.JavaScript[prefix + "setHelpUrl"] = (block) => {
        const TEXT = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
        return `this.setHelpUrl(${TEXT});\n`
    }
    Blockly.Blocks[prefix + "setInputsInline"] = {
        init: function () {
            this.jsonInit({
                "message0": "align block inputs %1",
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "ALIGN",
                        "options": [
                            ["horizontally", "true"],
                            ["vertically", "false"]
                        ]
                    }
                ],
                "colour": color,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "All inputs on this block can either be aligned vertically or horizontally."
            })
        }
    }
    Blockly.JavaScript[prefix + "setInputsInline"] = (block) => {
        const ALIGN = block.getFieldValue("ALIGN")
        return `this.setInputsInline(${ALIGN});\n`
    }
    Blockly.Blocks[prefix + "blockConnections"] = {
        init: function () {
            this.jsonInit({
                "message0": "allow %1 blocks",
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "ALIGN",
                        "options": [
                            ["top", "setPreviousStatement"],
                            ["bottom", "setNextStatement"]
                        ]
                    }
                ],
                "colour": color,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Allows blocks to chain to the top or bottom of this block."
            })
        }
    }
    Blockly.JavaScript[prefix + "blockConnections"] = (block) => {
        const ALIGN = block.getFieldValue("ALIGN")
        return `this.${ALIGN}(true, null);\n`
    }
    Blockly.Blocks[prefix + "blockConnectionsType"] = {
        init: function () {
            this.jsonInit({
                "message0": "allow %1 blocks of type %2",
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "ALIGN",
                        "options": [
                            ["top", "setPreviousStatement"],
                            ["bottom", "setNextStatement"]
                        ]
                    },
                    {
                        "type": "input_value",
                        "name": "TYPES",
                        "check": ["Array", "List"]
                    }
                ],
                "colour": color,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Allows blocks to chain to the top or bottom of this block, only if both connecting sides allow this type."
            })
        }
    }
    Blockly.JavaScript[prefix + "blockConnectionsType"] = (block) => {
        const ALIGN = block.getFieldValue("ALIGN")
        const TYPES = Blockly.JavaScript.valueToCode(block, "TYPES", Blockly.JavaScript.ORDER_ATOMIC);
        return `this.${ALIGN}(true, ${TYPES});\n`
    }
    Blockly.Blocks[prefix + "appendDummyInput"] = {
        init: function () {
            this.jsonInit({
                "message0": "append blank input",
                "args0": [],
                "colour": color,
                "output": "BlocklyInput",
                "tooltip": "Adds an input with no actual area to insert blocks."
            })
        }
    }
    Blockly.JavaScript[prefix + "appendDummyInput"] = () => {
        return [`this.appendDummyInput()`, Blockly.JavaScript.ORDER_NONE]
    }
    Blockly.Blocks[prefix + "setTooltip"] = {
        init: function () {
            this.jsonInit({
                "message0": "set block tooltip to %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "TEXT",
                        "check": "String"
                    }
                ],
                "colour": color,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "When the mouse is hovered over this block for 100ms, this text will appear where the mouse is."
            })
        }
    }
    Blockly.JavaScript[prefix + "setTooltip"] = (block) => {
        const TEXT = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
        return `this.setTooltip(${TEXT});\n`
    }
    Blockly.Blocks[prefix + "setOutput"] = {
        init: function () {
            this.jsonInit({
                "message0": "set block output types to %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "LIST",
                        "check": ["Array", "List"]
                    }
                ],
                "colour": color,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Reshapes the block to be an output block of this type. If null is in the list, the block will output any type."
            })
        }
    }
    Blockly.JavaScript[prefix + "setOutput"] = (block) => {
        const LIST = Blockly.JavaScript.valueToCode(block, "LIST", Blockly.JavaScript.ORDER_ATOMIC);
        return `this.setOutput(${LIST});\n`
    }
    Blockly.Blocks[prefix + "appendValueInput"] = {
        init: function () {
            this.jsonInit({
                "message0": "append value input with id %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "TEXT",
                        "check": "String"
                    }
                ],
                "colour": color,
                "output": "BlocklyInput",
                "tooltip": "Adds an input that allows output blocks to go inside."
            })
        }
    }
    Blockly.JavaScript[prefix + "appendValueInput"] = (block) => {
        const name = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
        return [`this.appendValueInput(${name})`, Blockly.JavaScript.ORDER_NONE]
    }
    Blockly.Blocks[prefix + "appendStatementInput"] = {
        init: function () {
            this.jsonInit({
                "message0": "append function input with id %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "TEXT",
                        "check": "String"
                    }
                ],
                "colour": color,
                "output": "BlocklyInput",
                "tooltip": "Adds an input that allows for functions."
            })
        }
    }
    Blockly.JavaScript[prefix + "appendStatementInput"] = (block) => {
        const name = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
        return [`this.appendStatementInput(${name})`, Blockly.JavaScript.ORDER_NONE]
    }
    Blockly.Blocks[prefix + "setInputCheck"] = {
        init: function () {
            this.jsonInit({
                "message0": "set input %1 allowed input types %2",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "INPUT",
                        "check": "BlocklyInput"
                    },
                    {
                        "type": "input_value",
                        "name": "CHECK",
                        "check": ["Array", "List"]
                    }
                ],
                "colour": color,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Sets the allowed input types to a list. If the list contains the null block, any input type is allowed."
            })
        }
    }
    Blockly.JavaScript[prefix + "setInputCheck"] = (block) => {
        const input = Blockly.JavaScript.valueToCode(block, "INPUT", Blockly.JavaScript.ORDER_ATOMIC);
        const check = Blockly.JavaScript.valueToCode(block, "CHECK", Blockly.JavaScript.ORDER_ATOMIC);
        return `${input}.setCheck(${check});\n`
    }
    Blockly.Blocks[prefix + "setInputFieldAlignment"] = {
        init: function () {
            this.jsonInit({
                "message0": "set input %1 field alignment %2",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "INPUT",
                        "check": "BlocklyInput"
                    },
                    {
                        "type": "field_dropdown",
                        "name": "ALIGN",
                        "options": [
                            ["left", "Blockly.ALIGN_LEFT"],
                            ["center", "Blockly.ALIGN_CENTRE"],
                            ["right", "Blockly.ALIGN_RIGHT"]
                        ]
                    }
                ],
                "colour": color,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Sets the alignment for fields in this input."
            })
        }
    }
    Blockly.JavaScript[prefix + "setInputFieldAlignment"] = (block) => {
        const input = Blockly.JavaScript.valueToCode(block, "INPUT", Blockly.JavaScript.ORDER_ATOMIC);
        const alignment = block.getFieldValue("ALIGN")
        return `${input}.setAlign(${alignment});\n`
    }
    Blockly.Blocks[prefix + "appendField"] = {
        init: function () {
            this.jsonInit({
                "message0": "append text %2 to input %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "INPUT",
                        "check": "BlocklyInput"
                    },
                    {
                        "type": "input_value",
                        "name": "TEXT",
                        "check": "String"
                    }
                ],
                "colour": color,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Adds text to an input. Recommended for blank inputs."
            })
        }
    }
    Blockly.JavaScript[prefix + "appendField"] = (block) => {
        const input = Blockly.JavaScript.valueToCode(block, "INPUT", Blockly.JavaScript.ORDER_ATOMIC);
        const text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
        return `${input}.appendField(${text});\n`
    }
    Blockly.Blocks[prefix + "appendFieldType"] = {
        init: function () {
            this.jsonInit({
                "message0": "append field item %2 with ID %3 to input %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "INPUT",
                        "check": "BlocklyInput"
                    },
                    {
                        "type": "input_value",
                        "name": "FIELD",
                        "check": "BlocklyField"
                    },
                    {
                        "type": "input_value",
                        "name": "ID",
                        "check": "String"
                    }
                ],
                "colour": color,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Adds a field item like a dropdown to an input. Recommended for blank inputs."
            })
        }
    }
    Blockly.JavaScript[prefix + "appendFieldType"] = (block) => {
        const input = Blockly.JavaScript.valueToCode(block, "INPUT", Blockly.JavaScript.ORDER_ATOMIC);
        const field = Blockly.JavaScript.valueToCode(block, "FIELD", Blockly.JavaScript.ORDER_ATOMIC);
        const id = Blockly.JavaScript.valueToCode(block, "ID", Blockly.JavaScript.ORDER_ATOMIC);
        return `${input}.appendField(${field}, ${id});\n`
    }
    Blockly.Blocks[prefix + "getInputById"] = {
        init: function () {
            this.jsonInit({
                "message0": "input with id %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "TEXT",
                        "check": "String"
                    }
                ],
                "colour": color,
                "output": "BlocklyInput",
                "tooltip": "Gets the input on this block with this ID. If the input does not exist, this will be null."
            })
        }
    }
    Blockly.JavaScript[prefix + "getInputById"] = (block) => {
        const name = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
        return [`___S4DCB_rALLOW_block_FROM_JS_FUNC___.getInput(${name})`, Blockly.JavaScript.ORDER_NONE]
    }
    Blockly.Blocks[prefix + "valueToCode"] = {
        init: function () {
            this.jsonInit({
                "message0": "export input ID %1 to code",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "FIELD",
                        "check": "String"
                    }
                ],
                "colour": color,
                "output": null,
                "tooltip": "Gets the input with this ID and exports the block inside of it to code."
            })
        }
    }
    Blockly.JavaScript[prefix + "valueToCode"] = (block) => {
        const field = Blockly.JavaScript.valueToCode(block, "FIELD", Blockly.JavaScript.ORDER_ATOMIC);
        return [`Blockly.JavaScript.valueToCode(___S4DCB_rALLOW_block_FROM_JS_FUNC___, ${field}, Blockly.JavaScript.ORDER_ATOMIC)`, Blockly.JavaScript.ORDER_NONE]
    }
    Blockly.Blocks[prefix + "statementToCode"] = {
        init: function () {
            this.jsonInit({
                "message0": "export function input ID %1 to code",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "FIELD",
                        "check": "String"
                    }
                ],
                "colour": color,
                "output": null,
                "tooltip": "Gets the function input with this ID and exports the blocks inside of it to code."
            })
        }
    }
    Blockly.JavaScript[prefix + "statementToCode"] = (block) => {
        const field = Blockly.JavaScript.valueToCode(block, "FIELD", Blockly.JavaScript.ORDER_ATOMIC);
        return [`Blockly.JavaScript.statementToCode(___S4DCB_rALLOW_block_FROM_JS_FUNC___, ${field})`, Blockly.JavaScript.ORDER_NONE]
    }
    Blockly.Blocks[prefix + "variableChoiceToCode"] = {
        init: function () {
            this.jsonInit({
                "message0": "export variable choice field ID %1 to code",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "FIELD",
                        "check": "String"
                    }
                ],
                "colour": color,
                "output": null,
                "tooltip": "Gets the variable choice field with this ID and exports the variable to code."
            })
        }
    }
    Blockly.JavaScript[prefix + "variableChoiceToCode"] = (block) => {
        const field = Blockly.JavaScript.valueToCode(block, "FIELD", Blockly.JavaScript.ORDER_ATOMIC);
        return [`Blockly.JavaScript.nameDB_.getName(___S4DCB_rALLOW_block_FROM_JS_FUNC___.getFieldValue(${field}), Blockly.Variables.NAME_TYPE)`, Blockly.JavaScript.ORDER_NONE]
    }
    Blockly.Blocks[prefix + "getFieldValue"] = {
        init: function () {
            this.jsonInit({
                "message0": "export field ID %1 to code",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "FIELD",
                        "check": "String"
                    }
                ],
                "colour": color,
                "output": null,
                "tooltip": "Gets the field with this ID and exports the value of it to code."
            })
        }
    }
    Blockly.JavaScript[prefix + "getFieldValue"] = (block) => {
        const field = Blockly.JavaScript.valueToCode(block, "FIELD", Blockly.JavaScript.ORDER_ATOMIC);
        return [`(___S4DCB_rALLOW_block_FROM_JS_FUNC___.getFieldValue(${field}) == "TRUE" || ___S4DCB_rALLOW_block_FROM_JS_FUNC___.getFieldValue(${field}) == "FALSE") ? ___S4DCB_rALLOW_block_FROM_JS_FUNC___.getFieldValue(${field}) == "TRUE" : ___S4DCB_rALLOW_block_FROM_JS_FUNC___.getFieldValue(${field})`, Blockly.JavaScript.ORDER_NONE]
    }
    Blockly.Blocks[prefix + "FieldFieldLabelSerializable"] = {
        init: function () {
            this.jsonInit({
                "message0": "text field with label %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "TEXT",
                        "check": "String"
                    }
                ],
                "colour": color,
                "output": "BlocklyField",
                "tooltip": "Creates a text field and uses this label."
            })
        }
    }
    Blockly.JavaScript[prefix + "FieldFieldLabelSerializable"] = (block) => {
        const text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
        return [`new Blockly.FieldLabelSerializable(${text})`, Blockly.JavaScript.ORDER_NONE]
    }
    Blockly.Blocks[prefix + "FieldFieldTextInput"] = {
        init: function () {
            this.jsonInit({
                "message0": "text input field with default text %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "TEXT",
                        "check": "String"
                    }
                ],
                "colour": color,
                "output": "BlocklyField",
                "tooltip": "Creates a text input field and fills it in with the default text."
            })
        }
    }
    Blockly.JavaScript[prefix + "FieldFieldTextInput"] = (block) => {
        const text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
        return [`new Blockly.FieldTextInput(${text})`, Blockly.JavaScript.ORDER_NONE]
    }
    Blockly.Blocks[prefix + "FieldFieldNumber"] = {
        init: function () {
            this.jsonInit({
                "message0": "number field with default number %1 minimum %2 maximum %3 precision %4",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "NUM",
                        "check": "Number"
                    },
                    {
                        "type": "input_value",
                        "name": "MIN",
                        "check": "Number"
                    },
                    {
                        "type": "input_value",
                        "name": "MAX",
                        "check": "Number"
                    },
                    {
                        "type": "input_value",
                        "name": "PRECISION",
                        "check": "Number"
                    }
                ],
                "colour": color,
                "output": "BlocklyField",
                "tooltip": "Creates a number field input and fills it in with the default number. Precision will round the input number to a multiple of the precision number."
            })
        }
    }
    Blockly.JavaScript[prefix + "FieldFieldNumber"] = (block) => {
        const number = Blockly.JavaScript.valueToCode(block, "NUM", Blockly.JavaScript.ORDER_ATOMIC);
        const min = Blockly.JavaScript.valueToCode(block, "MIN", Blockly.JavaScript.ORDER_ATOMIC);
        const max = Blockly.JavaScript.valueToCode(block, "MAX", Blockly.JavaScript.ORDER_ATOMIC);
        const prec = Blockly.JavaScript.valueToCode(block, "PRECISION", Blockly.JavaScript.ORDER_ATOMIC);
        return [`new Blockly.FieldNumber(${number}, ${min}, ${max}, ${prec})`, Blockly.JavaScript.ORDER_NONE]
    }
    Blockly.Blocks[prefix + "FieldFieldAngle"] = {
        init: function () {
            this.jsonInit({
                "message0": "angle field with default angle %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "NUM",
                        "check": "Number"
                    }
                ],
                "colour": color,
                "output": "BlocklyField",
                "tooltip": "Creates an angle input field where the user can select an angle using a wheel."
            })
        }
    }
    Blockly.JavaScript[prefix + "FieldFieldAngle"] = (block) => {
        const number = Blockly.JavaScript.valueToCode(block, "NUM", Blockly.JavaScript.ORDER_ATOMIC);
        return [`new Blockly.FieldAngle(${number})`, Blockly.JavaScript.ORDER_NONE]
    }
    Blockly.Blocks[prefix + "FieldFieldCheckbox"] = {
        init: function () {
            this.jsonInit({
                "message0": "checkbox field with check enabled? %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "BOOL",
                        "check": "Boolean"
                    }
                ],
                "colour": color,
                "output": "BlocklyField",
                "tooltip": "Creates a checkbox field where the user can click on it to show a checkmark, and click on it again to remove it."
            })
        }
    }
    Blockly.JavaScript[prefix + "FieldFieldCheckbox"] = (block) => {
        const bool = Blockly.JavaScript.valueToCode(block, "BOOL", Blockly.JavaScript.ORDER_ATOMIC);
        return [`new Blockly.FieldCheckbox(${bool} ? "TRUE" : "FALSE")`, Blockly.JavaScript.ORDER_NONE]
    }
    Blockly.Blocks[prefix + "FieldFieldColour"] = {
        init: function () {
            this.jsonInit({
                "message0": "color input field with default color %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "TEXT",
                        "check": "String"
                    }
                ],
                "colour": color,
                "output": "BlocklyField",
                "tooltip": "Creates a color input where a user can click to show a popup with colors they can choose."
            })
        }
    }
    Blockly.JavaScript[prefix + "FieldFieldColour"] = (block) => {
        const text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
        return [`new Blockly.FieldColour(${text})`, Blockly.JavaScript.ORDER_NONE]
    }
    Blockly.Blocks[prefix + "FieldFieldVariable"] = {
        init: function () {
            this.jsonInit({
                "message0": "variable choice dropdown with default variable %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "TEXT",
                        "check": "String"
                    }
                ],
                "colour": color,
                "output": "BlocklyField",
                "tooltip": "Creates a variable choice dropdown field where a user can pick a list of variables they have, and can choose one to use."
            })
        }
    }
    Blockly.JavaScript[prefix + "FieldFieldVariable"] = (block) => {
        const text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
        return [`new Blockly.FieldVariable(${text})`, Blockly.JavaScript.ORDER_NONE]
    }
    Blockly.Blocks[prefix + "FieldFieldImage"] = {
        init: function () {
            this.jsonInit({
                "message0": "image %1 width %2 height %3 alternate text %4",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "IMAGE",
                        "check": "String"
                    },
                    {
                        "type": "input_value",
                        "name": "WIDTH",
                        "check": "Number"
                    },
                    {
                        "type": "input_value",
                        "name": "HEIGHT",
                        "check": "Number"
                    },
                    {
                        "type": "input_value",
                        "name": "ALT",
                        "check": "String"
                    }
                ],
                "colour": color,
                "output": "BlocklyField",
                "tooltip": "Creates an image with all specified data."
            })
        }
    }
    Blockly.JavaScript[prefix + "FieldFieldImage"] = (block) => {
        const image = Blockly.JavaScript.valueToCode(block, "IMAGE", Blockly.JavaScript.ORDER_ATOMIC);
        const width = Blockly.JavaScript.valueToCode(block, "WIDTH", Blockly.JavaScript.ORDER_ATOMIC);
        const height = Blockly.JavaScript.valueToCode(block, "HEIGHT", Blockly.JavaScript.ORDER_ATOMIC);
        const alt = Blockly.JavaScript.valueToCode(block, "ALT", Blockly.JavaScript.ORDER_ATOMIC);
        return [`new Blockly.FieldImage(${image}, ${width}, ${height}, { alt: ${alt}, flipRtl: "FALSE" })`, Blockly.JavaScript.ORDER_NONE]
    }
    Blockly.Blocks[prefix + "setOutputCode"] = {
        init: function () {
            this.jsonInit({
                "message0": "set function output code to %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "CODE",
                        "check": "String"
                    }
                ],
                "colour": color,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Sets the function output code for this block. If the block is an output block, this will cause an error. Otherwise, if this is not set, the block will not output anything."
            })
        }
    }
    Blockly.JavaScript[prefix + "setOutputCode"] = (block) => {
        const code = Blockly.JavaScript.valueToCode(block, "CODE", Blockly.JavaScript.ORDER_ATOMIC);
        return `returning.value = (${code});\n`
    }
    Blockly.Blocks[prefix + "setOutputCode2"] = {
        init: function () {
            this.jsonInit({
                "message0": "set output block code to %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "CODE",
                        "check": "String"
                    }
                ],
                "colour": color,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Sets the output block code for this block. If the block is not an output block, this will cause an error. Otherwise, if this is not set, the block will not output anything."
            })
        }
    }
    Blockly.JavaScript[prefix + "setOutputCode2"] = (block) => {
        const code = Blockly.JavaScript.valueToCode(block, "CODE", Blockly.JavaScript.ORDER_ATOMIC);
        return `returning.value = [(${code}), Blockly.JavaScript.ORDER_NONE];\n`
    }
}