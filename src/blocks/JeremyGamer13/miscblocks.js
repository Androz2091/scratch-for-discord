import Blockly from "blockly/core";
//lasercat_jg_case_default
Blockly.Blocks['lasercat_jg_case_default'] = {
    /**
     * Block for if/elseif/else condition.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl("");
        this.setColour("#8B48A3");
        this.appendValueInput('IF0')
            .setCheck(null)
            .appendField("case");
        this.appendStatementInput('DO0')
        //.appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setMutator(new Blockly.Mutator(['lasercat_jg_case_default_INTERNAL_case2',
            'lasercat_jg_case_default_INTERNAL_default']));
        // Assign 'this' to a variable for use in the tooltip closure below.
        //var thisBlock = this;
        this.setTooltip(function () {
            /*
            if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) {
                return Blockly.Msg.CONTROLS_IF_TOOLTIP_1;
            } else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) {
                return Blockly.Msg.CONTROLS_IF_TOOLTIP_2;
            } else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) {
                return Blockly.Msg.CONTROLS_IF_TOOLTIP_3;
            } else if (thisBlock.elseifCount_ && thisBlock.elseCount_) {
                return Blockly.Msg.CONTROLS_IF_TOOLTIP_4;
            }
            */
            return `Run the blocks inside if the switched item is equal to this case's value. The "default" case is if the switched item doesn't match any of the other cases mentioned.`;
        });
        this.elseifCount_ = 0;
        this.elseCount_ = 0;
    },
    /**
     * Create XML to represent the number of else-if and else inputs.
     * @return {Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function () {
        if (!this.elseifCount_ && !this.elseCount_) {
            return null;
        }
        var container = document.createElement('mutation');
        if (this.elseifCount_) {
            container.setAttribute('elseif', this.elseifCount_);
        }
        if (this.elseCount_) {
            container.setAttribute('else', 1);
        }
        return container;
    },
    /**
     * Parse XML to restore the else-if and else inputs.
    * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function (xmlElement) {
        this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10) || 0;
        this.elseCount_ = parseInt(xmlElement.getAttribute('else'), 10) || 0;
        this.updateShape_();
    },
    /**
     * Populate the mutator's dialog with this block's components.
 65    * @param {!Blockly.Workspace} workspace Mutator's workspace.
 66    * @return {!Blockly.Block} Root block in mutator.
 67    * @this Blockly.Block
 68    */
    decompose: function (workspace) {
        var containerBlock = workspace.newBlock('lasercat_jg_case_default_INTERNAL_case1');
        containerBlock.initSvg();
        var connection = containerBlock.nextConnection;
        for (var i = 1; i <= this.elseifCount_; i++) {
            var elseifBlock = workspace.newBlock('lasercat_jg_case_default_INTERNAL_case2');
            elseifBlock.initSvg();
            connection.connect(elseifBlock.previousConnection);
            connection = elseifBlock.nextConnection;
        }
        if (this.elseCount_) {
            var elseBlock = workspace.newBlock('lasercat_jg_case_default_INTERNAL_default');
            elseBlock.initSvg();
            connection.connect(elseBlock.previousConnection);
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
        this.elseifCount_ = 0;
        this.elseCount_ = 0;
        var valueConnections = [null];
        var statementConnections = [null];
        var elseStatementConnection = null;
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case 'lasercat_jg_case_default_INTERNAL_case2':
                    this.elseifCount_++;
                    valueConnections.push(clauseBlock.valueConnection_);
                    statementConnections.push(clauseBlock.statementConnection_);
                    break;
                case 'lasercat_jg_case_default_INTERNAL_default':
                    this.elseCount_++;
                    elseStatementConnection = clauseBlock.statementConnection_;
                    break;
                default:
                    throw 'Unknown block type.';
            }
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
                    var inputIf = this.getInput('IF' + i);
                    var inputDo = this.getInput('DO' + i);
                    clauseBlock.valueConnection_ =
                        inputIf && inputIf.connection.targetConnection;
                    clauseBlock.statementConnection_ =
                        inputDo && inputDo.connection.targetConnection;
                    i++;
                    break;
                case 'lasercat_jg_case_default_INTERNAL_default':
                    inputDo = this.getInput('ELSE');
                    clauseBlock.statementConnection_ =
                        inputDo && inputDo.connection.targetConnection;
                    break;
                default:
                    throw 'Unknown block type.';
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
        // Rebuild block.
        for (i = 1; i <= this.elseifCount_; i++) {
            this.appendValueInput('IF' + i)
                .setCheck(null)
                .appendField("case");
            this.appendStatementInput('DO' + i)
            //.appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        }
        if (this.elseCount_) {
            this.appendDummyInput("asvutdgyhebkf")
                .appendField("default");
            this.appendStatementInput('ELSE')
        }
    }
};

Blockly.JavaScript['lasercat_jg_case_default'] = function (block) {
    // If/elseif/else condition.
    var n = 0;
    var code = '', branchCode, conditionCode;
    do {
        conditionCode = Blockly.JavaScript.valueToCode(block, 'IF' + n,
            Blockly.JavaScript.ORDER_NONE) || 'false';
        branchCode = Blockly.JavaScript.statementToCode(block, 'DO' + n);
        code += `case ${conditionCode}: 
    ${branchCode}
    break;`

        ++n;
    } while (block.getInput('IF' + n));

    if (block.getInput('ELSE')) {
        branchCode = Blockly.JavaScript.statementToCode(block, 'ELSE');
        code += ` default:
    ${branchCode}
    break;`;
    }
    return code + '\n';
};
// "previousStatement": null,
// "nextStatement": null,
Blockly.Blocks["lasercat_jg_case_default_INTERNAL_case1"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "case",
                "args0": [],
                "colour": "#8B48A3",
                "nextStatement": null,
                "tooltip": "The first case, checking if the switched item is equal to this cases value."
            }
        );
    }
};
Blockly.Blocks["lasercat_jg_case_default_INTERNAL_case2"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "case",
                "args0": [],
                "colour": "#8B48A3",
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "The next case, checking if the switched item is equal to this cases value."
            }
        );
    }
};
Blockly.Blocks["lasercat_jg_case_default_INTERNAL_default"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "default",
                "args0": [],
                "colour": "#8B48A3",
                "previousStatement": null,
                "tooltip": "The \"default\" case, checking if the switched item is not equal to any of the previous cases values."
            }
        );
    }
};
Blockly.JavaScript['lasercat_jg_case_default_INTERNAL_case1'] = function () {
    return ''
}
Blockly.JavaScript['lasercat_jg_case_default_INTERNAL_case2'] = function () {
    return ''
}
Blockly.JavaScript['lasercat_jg_case_default_INTERNAL_default'] = function () {
    return ''
}
let rainbow_color = 0
let loaded_workspace_state = 0
let loaded_workspace_state2 = 0
Blockly.Blocks["jg_blocklyfp_load_workspace"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "workspace %1 %2 load? %3",
                "inputsInline": false,
                "args0": [
                    {
                        "type": "field_multilinetext",
                        "name": "WORKSPACE"
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "field_checkbox",
                        "name": "LOAD",
                        "checked": false
                    }
                ],
                "colour": 0,
                "tooltip": "Load a workspace XML.",
                "helpUrl": ""
            }
        );
    },
    onchange: function () {
        let work = this.getFieldValue("WORKSPACE")
        let bool = this.getFieldValue("LOAD")
        if (String(bool) == "TRUE" && loaded_workspace_state != 2) loaded_workspace_state = 1; else if (String(bool) == "FALSE") loaded_workspace_state = 0
        rainbow_color += 1.5
        if (rainbow_color > 360) rainbow_color = 0
        this.setColour(Math.round(rainbow_color))
        if (loaded_workspace_state == 1) {
            try {
                let xml = Blockly.Xml.textToDom(work);
                Blockly.Xml.appendDomToWorkspace(xml, Blockly.getMainWorkspace())
            } catch (err) {
                window.alert(err)
                console.log(err)
            }
            loaded_workspace_state = 2
        }
    }
}
Blockly.Blocks["jg_blocklyfp_load_workspace_website"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "workspace URL %1 %2 load? %3",
                "inputsInline": false,
                "args0": [
                    {
                        "type": "field_input",
                        "name": "WORKSPACE"
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "field_checkbox",
                        "name": "LOAD",
                        "checked": false
                    }
                ],
                "colour": 0,
                "tooltip": "Load a workspace XML from a URL.",
                "helpUrl": ""
            }
        );
    },
    onchange: function () {
        let work = this.getFieldValue("WORKSPACE")
        let bool = this.getFieldValue("LOAD")
        if (String(bool) == "TRUE" && loaded_workspace_state2 != 2) loaded_workspace_state2 = 1; else if (String(bool) == "FALSE") loaded_workspace_state2 = 0
        rainbow_color += 1.5
        if (rainbow_color > 360) rainbow_color = 0
        this.setColour(Math.round(rainbow_color))
        if (loaded_workspace_state2 == 1) {
            let requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Origin': "*"
                }
            };
            try {
                fetch(work, requestOptions).then((response) => {
                    let xml = Blockly.Xml.textToDom(response);
                    Blockly.Xml.appendDomToWorkspace(xml, Blockly.getMainWorkspace())
                }).catch((err) => {
                    window.alert(err)
                    console.log(err)
                })
            } catch (err) {
                window.alert(err)
                console.log(err)
            }
            loaded_workspace_state2 = 2
        }
    }
}
Blockly.JavaScript["jg_blocklyfp_load_workspace"] = function () {
    return ""
};
Blockly.JavaScript["jg_blocklyfp_load_workspace_website"] = function () {
    return ""
};
