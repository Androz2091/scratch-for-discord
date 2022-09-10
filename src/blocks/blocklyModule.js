const Blockly = require("blockly/core");
const BaseBlockly = require("blockly");
module.exports.renderWarnings = (block) => {
    if (!block["___blockWarnings-blocklyModule"]) block["___blockWarnings-blocklyModule"] = []
    block.setWarningText((block["___blockWarnings-blocklyModule"].length > 0 ? block["___blockWarnings-blocklyModule"].join("\n") : null))
}
module.exports.addWarning = (text, block) => {
    if (!block["___blockWarnings-blocklyModule"]) block["___blockWarnings-blocklyModule"] = []
    block["___blockWarnings-blocklyModule"].push(text)
    module.exports.renderWarnings(block)
}
module.exports.removeWarning = (text, block) => {
    if (!block["___blockWarnings-blocklyModule"]) block["___blockWarnings-blocklyModule"] = []
    if (!block["___blockWarnings-blocklyModule"].includes(text)) return
    block["___blockWarnings-blocklyModule"].splice(block["___blockWarnings-blocklyModule"].indexOf(text), 1)
    module.exports.renderWarnings(block)
}
module.exports.clearWarnings = (block) => {
    block["___blockWarnings-blocklyModule"] = []
    module.exports.renderWarnings(block)
}
module.exports.getBlockHtmlElement = (block) => {
    if (!block.id) return null
    const gs = document.getElementsByTagName("g")
    for (let i = 0; i < gs.length; i++) {
        const c = gs.item(i)
        if (c.getAttribute("data-id") == block.id) return c
    }
    return null
}
module.exports.generateTextBasedOffOf = (name) => {
    const a = String(name).split("")
    let newname = ""
    a.forEach(letter => {
        newname = newname + String(String(letter).charCodeAt(0) * 16)
    })
    return newname
}
class BlockBuilderMutator {
    static encode = (text) => {
        const a = String(text).split("")
        let newname = []
        a.forEach(letter => {
            newname.push(String(String(letter).charCodeAt(0)))
        })
        return newname.join(";")
    }
    static decode = (text) => {
        const a = String(text).split(";")
        let newname = []
        a.forEach(letter => {
            newname.push(String.fromCharCode(Number(letter)))
        })
        return newname.join("")
    }
    constructor(data) {
        if (!data) throw new Error("Data was not provided when constructing a blocklyModule.BlockBuilderMutator")
        if (!Object.getOwnPropertyNames(data).includes("block")) throw new Error("block was not provided in data when constructing a blocklyModule.BlockBuilderMutator")
        if (!Object.getOwnPropertyNames(data).includes("data")) throw new Error("data was not provided in data when constructing a blocklyModule.BlockBuilderMutator")
        if (!Object.getOwnPropertyNames(data).includes("mutatorBeginningBlock")) throw new Error("mutatorBeginningBlock was not provided in data when constructing a blocklyModule.BlockBuilderMutator")
        if (!Object.getOwnPropertyNames(data).includes("mutatorBlocks")) throw new Error("mutatorBlocks was not provided in data when constructing a blocklyModule.BlockBuilderMutator")
        Blockly.Blocks[data.block] = {
            /**
             * Block for if/elseif/else condition.
             * @this Blockly.Block
             */
            init: function () {
                this.jsonInit(data.data)
                this.setMutator(new Blockly.Mutator(data.mutatorBlocks));
                this.m____amountCounts = []
            },
            /**
             * Create XML to represent the number of else-if and else inputs.
             * @return {Element} XML storage element.
             * @this Blockly.Block
             */
            mutationToDom: function () {
                if (!this.m____amountCounts) {
                    return null;
                }
                var container = document.createElement('mutation');
                container.setAttribute('m____amountCounts', BlockBuilderMutator.encode(JSON.stringify(this.m____amountCounts)));
                return container;
            },
            /**
             * Parse XML to restore the else-if and else inputs.
            * @param {!Element} xmlElement XML storage element.
             * @this Blockly.Block
             */
            domToMutation: function (xmlElement) {
                let menutypes = JSON.parse(BlockBuilderMutator.decode(xmlElement.getAttribute('m____amountCounts')))
                this.m____amountCounts = menutypes
                this.updateShape_();
            },
            /**
             * Populate the mutator's dialog with this block's components.
         65    * @param {!Blockly.Workspace} workspace Mutator's workspace.
         66    * @return {!Blockly.Block} Root block in mutator.
         67    * @this Blockly.Block
         68    */
            decompose: function (workspace) {
                var containerBlock = workspace.newBlock(data.mutatorBeginningBlock);
                containerBlock.initSvg();
                var connection = containerBlock.nextConnection;
                for (var i = 0; i < this.m____amountCounts.length; i++) {
                    var elseifBlock = workspace.newBlock(this.m____amountCounts[i]);
                    elseifBlock.initSvg();
                    connection.connect(elseifBlock.previousConnection);
                    connection = elseifBlock.nextConnection;
                }
                return containerBlock;
            },
            /**
         87    * Reconfigure this block based on the mutator dialog's components.
         88    * @param {!Blockly.Block} containerBlock Root block in mutator.
         89    * @this Blockly.Block
         90    */
            compose: function (containerBlock) {
                var clauseBlock = containerBlock.nextConnection.targetBlock();
                // Count number of inputs.
                this.m____amountCounts = []
                var valueConnections = [null];
                var statementConnections = [null];
                var elseStatementConnection = null;
                while (clauseBlock) {
                    this.m____amountCounts.push(clauseBlock.type)
                    valueConnections.push(clauseBlock.valueConnection_);
                    statementConnections.push(clauseBlock.statementConnection_);
                    clauseBlock = clauseBlock.nextConnection &&
                        clauseBlock.nextConnection.targetBlock();
                }
                this.updateShape_();
                // Reconnect any child blocks.
                for (var i = 1; i <= this.elseifCount_; i++) {
                    Blockly.Mutator.reconnect(valueConnections[i], this, 'IF' + i);
                    Blockly.Mutator.reconnect(statementConnections[i], this, 'DO' + i);
                }
                Blockly.Mutator.reconnect(elseStatementConnection, this, 'ELSE');
            },
            /**
          125    * Store pointers to any connected child blocks.
          126    * @param {!Blockly.Block} containerBlock Root block in mutator.
          127    * @this Blockly.Block
          128    */
            saveConnections: function (containerBlock) {
                var clauseBlock = containerBlock.nextConnection.targetBlock();
                var i = 1;
                while (clauseBlock) {
                    switch (clauseBlock.type) {
                        case 'lasercat_jg_case_default_INTERNAL_case2':
                        case 'lasercat_jg_case_default_INTERNAL_case3':
                        case 'lasercat_jg_case_default_INTERNAL_case4':
                            var inputIf = this.getInput('IF' + i);
                            var inputDo = this.getInput('DO' + i);
                            clauseBlock.valueConnection_ =
                                inputIf && inputIf.connection.targetConnection;
                            if (inputDo.connection) {
                                clauseBlock.statementConnection_ =
                                    inputDo && inputDo.connection.targetConnection;
                            }
                            i++;
                            break;
                        case 'lasercat_jg_case_default_INTERNAL_default':
                            inputDo = this.getInput('ELSE');
                            clauseBlock.statementConnection_ =
                                inputDo && inputDo.connection.targetConnection;
                            break;
                        //default:
                        //    throw 'Unknown block type.';
                    }
                    clauseBlock = clauseBlock.nextConnection &&
                        clauseBlock.nextConnection.targetBlock();
                }
            },
            /**
          156    * Modify this block to have the correct number of inputs.
          157    * @private
          158    * @this Blockly.Block
          159    */
            updateShape_: function () {
                // Delete everything.
                if (this.getInput('ELSE')) {
                    this.removeInput('asvutdgyhebkf');
                    this.removeInput('ELSE');
                }
                var i = 1;
                while (this.getInput('IF' + i)) {
                    this.removeInput('IF' + i);
                    this.removeInput('DO' + i);
                    i++;
                }
                this.mutatorMenuBlockTypes.slice(0, this.elseifCount_)
                for (i = 1; i <= this.elseifCount_ + this.mutatorMenuBlockTypes.length; i++) {
                    if (this.getInput('continueWithDisplayText' + i)) {
                        this.removeInput('continueWithDisplayText' + i);
                    }
                }
                // Rebuild block.
                for (i = 1; i <= this.elseifCount_; i++) {
                    this.appendValueInput('IF' + i)
                        .setCheck(null)
                        .appendField("case");
                    if (this.mutatorMenuBlockTypes[i - 1] == "case" || this.mutatorMenuBlockTypes[i - 1] == "continue") {
                        this.appendStatementInput('DO' + i)
                    } else {
                        this.appendDummyInput('DO' + i)
                            .appendField("or");
                    }
                    if (this.mutatorMenuBlockTypes[i - 1] == "continue") {
                        this.appendDummyInput('continueWithDisplayText' + i)
                            .appendField("continue with");
                    }
                    //.appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
                }
                if (this.elseCount_) {
                    this.appendDummyInput("asvutdgyhebkf")
                        .appendField("default");
                    this.appendStatementInput('ELSE')
                }
                if (this.mutatorMenuBlockTypes.length > 0) {
                    if ((this.mutatorMenuBlockTypes[this.mutatorMenuBlockTypes.length - 1] != "case") && (!this.elseCount_)) {
                        this.blockWarnings.push('You cannot end the block with a "case or" or "case continue with" block!')
                    }
                }
                if (this.blockWarnings.length > 0) {
                    this.setWarningText(this.blockWarnings.join("\n"))
                } else {
                    this.setWarningText(null)
                }
                this.blockWarnings = []
            }
        };
    }
}
module.exports.BlockBuilderMutator = BlockBuilderMutator
module.exports.createMutatorBlock = (mutator_type, data, exportCodeCallback) => {
    if (![
        "checkbox"
    ].includes(mutator_type)) throw new Error(mutator_type + " is not a supported mutator type")
    const menuUsesBlockColor = data.menuUsesBlockColor == null ? false : data.menuUsesBlockColor
    const menuTooltip = data.menuTooltip
    const alignLeft = data.alignLeft == null ? false : data.alignLeft
    // border fields is the name of the input when getting it for the exported code.
    // they HAVE to be uppercase currently or it won't work since im too lazy to change the uppercase function uses
    const BORDER_FIELDS = []
    data.fields.forEach(field => {
        if (BORDER_FIELDS.includes(String(field).toUpperCase())) {
            throw new Error("BlocklyModuleMutatorConfig.fields contains a field (" + field + ") with the same value as another field. Rename both fields and ensure they are not the same lowercase or uppercase.")
        }
        BORDER_FIELDS.push(String(field).toUpperCase())
    })
    // border types is the input type of every input in the block
    const BORDER_TYPES = data.types
    // names is the name of that input in the menu and in the final block
    const names = data.names
    const amountOfInputs = names.length
    const menuName = "BLOCKLY_MODULE_setMutator_" + module.exports.generateTextBasedOffOf(data.menuName) + "_checkboxMutatorMenu"
    if (!data.blockName) throw new Error("blockName not specified in BlocklyModuleMutatorConfig object")
    const blockName = data.blockName
    Blockly.Blocks[menuName] = {
        init: function () {
            this.setColour((menuUsesBlockColor ? data.blockData.colour : "#CECDCE"))
            this.setTooltip(menuTooltip)
        }
    };
    Blockly.Blocks[blockName] = {
        init: function () {
            this.jsonInit(data.blockData)
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
                const di = containerBlock.appendDummyInput()
                di.setAlign((alignLeft ? Blockly.ALIGN_LEFT : Blockly.ALIGN_RIGHT))
                if (alignLeft) {
                    di.appendField(new Blockly.FieldCheckbox(this.inputs_[i] ? "TRUE" : "FALSE"), BORDER_FIELDS[i].toUpperCase())
                    di.appendField(names[i])
                } else {
                    di.appendField(names[i])
                    di.appendField(new Blockly.FieldCheckbox(this.inputs_[i] ? "TRUE" : "FALSE"), BORDER_FIELDS[i].toUpperCase())
                }
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
    Blockly.JavaScript[blockName] = exportCodeCallback
}