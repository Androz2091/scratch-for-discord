const Blockly = require("blockly/core");
const BaseBlockly = require("blockly");
Math.lerp = (n1, n2, a) => {
    let lerped = n1
    lerped = lerped + ((n2 - n1) / (a / (a * a)))
    return lerped
}
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
const supportedMutators = ["checkbox"]
const experimentalMutators = []
module.exports.createMutatorBlock = (mutator_type, data, exportCodeCallback) => {
    if (!supportedMutators.includes(mutator_type) && !experimentalMutators.includes(mutator_type)) throw new Error(mutator_type + " is not a supported mutator type")
    if (experimentalMutators.includes(mutator_type)) console.warn(mutator_type, "is an experimental mutator type. Behavior & handling of this type may change in the future.")
    if (mutator_type == "checkbox") {
        const menuUsesBlockColor = data.menuUsesBlockColor == null ? false : data.menuUsesBlockColor
        const menuTooltip = data.menuTooltip
        const alignLeft = data.alignLeft == null ? true : data.alignLeft
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
}
module.exports.menus = {}
module.exports.menus.createMenu = (data) => {
    if (!data) throw new Error("Cannot create a menu with no data")
    if (!data.width) throw new Error("Cannot create a menu with no width")
    if (!data.height) throw new Error("Cannot create a menu with no height")
    const menu = document.createElement("div")
    menu.setAttribute("isS4DMenu", true)
    let mouseX = 0
    let mouseY = 0
    let currentX = 320
    let currentY = 180
    let targetX = 320
    let targetY = 180
    let mouseDown = false
    let movingMenu = false
    menu.style.width = Number(data.width) + "px"
    menu.style.height = Number(data.height) + "px"
    menu.style.position = "absolute"
    menu.style.left = targetX + "px"
    menu.style.top = targetY + "px"
    menu.style.backgroundColor = "#161719"
    menu.style.color = "white"
    menu.style.fontFamily = "monospace"
    menu.content = document.createElement("div")
    menu.append(menu.content)
    menu.topbar = document.createElement("div")
    menu.topbar.style.textAlign = "center"
    menu.topbar.style.width = "100%"
    menu.topbar.style.height = "32px"
    menu.topbar.style.transformOrigin = "bottom center"
    menu.topbar.style.backgroundColor = "#FEA918"
    menu.topbar.contentDiv = document.createElement("div")
    menu.topbar.contentDiv.style.verticalAlign = "center"
    menu.topbar.contentDiv.style.fontFamily = "monospace"
    const buttonDiv = document.createElement("div")
    buttonDiv.style.float = "right"
    const closeButton = document.createElement("button")
    closeButton.style.width = "32px"
    closeButton.style.height = "32px"
    closeButton.style.backgroundColor = "transparent"
    closeButton.style.borderWidth = "0px"
    closeButton.style.outlineWidth = "0px"
    closeButton.style.color = "white"
    closeButton.innerHTML = "X"
    const minimizeButton = document.createElement("button")
    minimizeButton.style.width = "32px"
    minimizeButton.style.height = "32px"
    minimizeButton.style.backgroundColor = "transparent"
    minimizeButton.style.borderWidth = "0px"
    minimizeButton.style.outlineWidth = "0px"
    minimizeButton.style.color = "white"
    minimizeButton.innerHTML = "-"
    buttonDiv.append(minimizeButton)
    buttonDiv.append(closeButton)
    if (data.canclose == false) closeButton.remove()
    if (data.canminimize == false) minimizeButton.remove()
    menu.topbar.contentDiv.append(buttonDiv)
    const label = document.createElement("p")
    label.innerHTML = data.title ? data.title : "Scratch For Discord"
    menu.topbar.contentDiv.append(label)
    menu.topbar.append(menu.topbar.contentDiv)
    menu.prepend(menu.topbar)
    document.body.append(menu)
    let canMoveMenu = true
    function handleMovingMouse(e) {
        mouseDown = (e.buttons != 0)
        if (!mouseDown) movingMenu = false
        mouseX = e.clientX
        mouseY = e.clientY
    }
    window.addEventListener("mousemove", handleMovingMouse)
    menu.topbar.onmousedown = () => {
        movingMenu = true
        mouseDown = true
    }
    menu.close = () => {
        window.removeEventListener("mousemove", handleMovingMouse)
        menu.topbar.remove()
        menu.remove()
        if (menu.onclosed) menu.onclosed()
    }
    menu.updatePosition = () => {
        menu.style.left = currentX + "px"
        menu.style.top = currentY + "px"
    }
    menu.setTargetPosition = (x, y) => {
        targetX = x
        targetY = y
    }
    menu.setSize = (width, height) => {
        menu.style.width = Number(width) + "px"
        menu.style.height = Number(height) + "px"
    }
    setInterval(() => {
        if (!canMoveMenu) movingMenu = false
        if (movingMenu) {
            targetX = (mouseX - (data.width / 2))
            targetY = (mouseY - 16)
        }
        currentX = Math.lerp(currentX, targetX, data.lerp ? data.lerp : 0.1)
        currentY = Math.lerp(currentY, targetY, data.lerp ? data.lerp : 0.1)
        menu.updatePosition()
    }, 10)
    closeButton.onmousedown = () => {
        if (data.animateCloseButton == false) {
            menu.close()
            return
        }
        canMoveMenu = false
        targetX = 0 - data.width
        targetY = 0 - data.height
        setTimeout(() => {
            menu.close()
        }, 1500);
    }
    let minimized = false
    let contentDisplayStyle = menu.content.style.display
    minimizeButton.onmousedown = () => {
        if (!canMoveMenu) return
        canMoveMenu = false
        setTimeout(() => {
            canMoveMenu = true
        }, 500);
        minimized = !minimized
        if (minimized) {
            menu.setSize(data.width, 0)
            contentDisplayStyle = menu.content.style.display
            menu.content.style.display = "none"
        } else {
            menu.setSize(data.width, data.height)
            menu.content.style.display = contentDisplayStyle
        }
    }
    menu.createDecoratedButton = () => {
        const button = document.createElement("button")
        button.style.backgroundColor = menu.topbar.style.backgroundColor
        button.style.borderWidth = "0px"
        button.style.outlineWidth = "0px"
        button.style.color = "white"
        button.style.textAlign = "center"
        return button
    }
    return menu
}