import Blockly from "blockly/core";
import BaseBlockly from "blockly";
const yourName = "jg"
const blockName = yourName + "_" + "express_start_website_then_using_port";
const menuName = blockName + "_checkboxMutatorMenu"

const BlockColor = "#4c8eff"
// menu customization
const menuUsesBlockColor = true
const menuTooltip = ''

// border fields is the name of the input when getting it for the exported code.
// they HAVE to be uppercase currently or it won't work since im too lazy to change the uppercase function uses
const BORDER_FIELDS = ["PORT"];
// border types is the input type of every input in the block
const BORDER_TYPES = [["Number", "Env"]];
// names is the name of that input in the menu and in the final block
const names = ["host on port"];
const amountOfInputs = names.length

const blockData = {
    "message0": "start website %1 then %2",
    "colour": BlockColor,
    "tooltip": "Start a website on whatever URL is used for localhost.",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        }
    ]
}
Blockly.Blocks[menuName] = {
    init: function () {
        this.setColour((menuUsesBlockColor ? BlockColor : "#CECDCE"));
        this.setTooltip(menuTooltip);
        this.setHelpUrl("");
    }
};
Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
        this.setMutator(new Blockly.Mutator([]));
        this.inputs_ = []
        for (let i = 0; i < amountOfInputs; i++) {
            this.inputs_.push(false)
        }
    },


    mutationToDom: function () {
        if (!this.inputs_) {
            return null;
        }
        const container = document.createElement("mutation");
        for (let i = 0; i < this.inputs_.length; i++) {
            if (this.inputs_[i]) container.setAttribute(BORDER_FIELDS[i], this.inputs_[i])
        }
        return container;
    },

    domToMutation: function (xmlElement) {
        for (let i = 0; i < this.inputs_.length; i++) {
            this.inputs_[i] = xmlElement.getAttribute(BORDER_FIELDS[i].toLowerCase()) == "true";
        }
        this.updateShape_();
    },

    decompose: function (workspace) {
        const containerBlock = workspace.newBlock(menuName);
        for (let i = 0; i < this.inputs_.length; i++) {
            BaseBlockly.Msg[BORDER_FIELDS[i]] = names[i];
            containerBlock.appendDummyInput()
                .setAlign(Blockly.ALIGN_LEFT)
                .appendField(new Blockly.FieldCheckbox(this.inputs_[i] ? "TRUE" : "FALSE"), BORDER_FIELDS[i].toUpperCase())
                .appendField(names[i])
        }
        containerBlock.initSvg();
        return containerBlock;
    },

    compose: function (containerBlock) {
        // Set states
        for (let i = 0; i < this.inputs_.length; i++) {
            this.inputs_[i] = (containerBlock.getFieldValue(BORDER_FIELDS[i].toUpperCase()) == "TRUE");
        }
        this.updateShape_();
    },

    updateShape_: function () {
        for (let i = 0; i < this.inputs_.length; i++) {
            if ((!this.inputs_[i]) && (this.getInput(BORDER_FIELDS[i].toUpperCase()))) this.removeInput(BORDER_FIELDS[i].toUpperCase());
        }
        for (let i = 0; i < this.inputs_.length; i++) {
            if ((this.inputs_[i]) && (!(this.getInput(BORDER_FIELDS[i].toUpperCase())))) {
                BaseBlockly.Msg[BORDER_FIELDS[i]] = names[i];
                this.appendValueInput(BORDER_FIELDS[i].toUpperCase())
                    .setCheck(BORDER_TYPES[i])
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(names[i]);
            }
        }
    }

};

Blockly.JavaScript[blockName] = function (block) {
    // code should be the first couple lines of your code before the inputs
    const STATEMENTS = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    let code = [`/* IMPORTED - S4D Website Hosting Dependencies */
let S4D_APP_WEBSITE_HOSTING_PORT = 8080

S4D_WEBSITECREATION_EXPRESS_app.use(S4D_WEBSITECREATION_cors());
S4D_WEBSITECREATION_EXPRESS_app.use(S4D_WEBSITECREATION_bodyParser.urlencoded({
    extended: false
}));
S4D_WEBSITECREATION_EXPRESS_app.use(S4D_WEBSITECREATION_bodyParser.json());

${STATEMENTS}
`]
    const PORT = Blockly.JavaScript.valueToCode(block, "PORT", Blockly.JavaScript.ORDER_NONE);
    // check if the inputs exist before adding them to the exported code
    if (PORT) {
        code.push(`S4D_APP_WEBSITE_HOSTING_PORT = ${PORT}`)
    }
    // the last line of code here, do another code.push(``) if you need to put more code
    code.push(`S4D_WEBSITECREATION_EXPRESS_app.listen(S4D_APP_WEBSITE_HOSTING_PORT);`)
    return code.join("\n");
};