const Blockly = require("blockly")
const localforage = require("localforage")
const blocklyModule = require("../blocks/blocklyModule")
function valueToDisplayData(value) {
    let appearAs
    try {
        appearAs = String(value)
    } catch (err) {
        appearAs = "EXCEPTION! " + err + "; (String)"
    }
    let valueColor = "#8c8c8c"
    if (typeof value === "string") valueColor = "#ffc35c"
    if (typeof value === "number") valueColor = "#6bc1ff"
    if (typeof value === "boolean") valueColor = "#77ff6b"
    if (typeof value === "function") {
        appearAs = "function (...) {...}"
        valueColor = "#6b75ff"
    }
    if (typeof value === "object" && value != null) {
        valueColor = "#b06bff"
        try {
            appearAs = JSON.stringify(value)
        } catch (err) {
            valueColor = "#ff0000"
            appearAs = "EXCEPTION! " + err + "; (Object)"
        }
    }
    if (Array.isArray(value)) {
        valueColor = "#ff6bf0"
        try {
            appearAs = JSON.stringify(value)
        } catch (err) {
            valueColor = "#ff0000"
            appearAs = "EXCEPTION! " + err + "; (Array)"
        }
    }
    return { value: appearAs, color: valueColor }
}
window.addEventListener("keypress", (e) => {
    if (!(e.key == "\u0015" && e.shiftKey && e.ctrlKey)) return
    const menu = blocklyModule.menus.createMenu({
        width: 640,
        height: 720,
        title: "S4D Developer Tools"
    })
    menu.content.style.overflow = "auto"
    menu.content.style.height = "720px"
    setTimeout(() => {//blockly
        const blocklyDetails = document.createElement("details")
        const blocklyDetailsSummary = document.createElement("summary")
        blocklyDetailsSummary.innerHTML = "Blockly"
        blocklyDetails.append(blocklyDetailsSummary)
        menu.content.append(blocklyDetails)
        setTimeout(() => {// workspace
            const workspaceDetails = document.createElement("details")
            const workspaceDetailsSummary = document.createElement("summary")
            workspaceDetailsSummary.innerHTML = "Workspace"
            const workspaceInformation = document.createElement("div")
            workspaceInformation.style.width = "100%"
            workspaceInformation.style.height = "50em"
            workspaceInformation.style.overflow = "auto"
            const refreshWorkspaceInformation = menu.createDecoratedButton()
            refreshWorkspaceInformation.onclick = () => {
                const workspace = blocklyModule.getWorkspace()
                workspaceInformation.innerHTML = ""
                Object.getOwnPropertyNames(workspace).forEach(property => {
                    const keyValue = document.createElement("p")
                    keyValue.style.height = "4em"
                    keyValue.style.overflow = "auto"
                    const data = valueToDisplayData(workspace[property])
                    let appearAs = data.value
                    let valueColor = data.color
                    keyValue.innerHTML = "<b style=\"color:#ff8888\">" + String(property).replace(/</gmi, "&lt;") + "</b>: <b style=\"color:" + valueColor + "\">" + String(appearAs).replace(/</gmi, "&lt;") + "</b>"
                    workspaceInformation.append(keyValue)
                })
            }
            refreshWorkspaceInformation.innerHTML = "Refresh"
            const refreshWorkspaceXml = menu.createDecoratedButton()
            refreshWorkspaceXml.innerHTML = "Refresh"
            const replaceWorkspaceXml = menu.createDecoratedButton()
            replaceWorkspaceXml.innerHTML = "Replace workspace XML"
            const addToWorkspaceXml = menu.createDecoratedButton()
            addToWorkspaceXml.innerHTML = "Add to workspace XML"
            const clearWorkspace = menu.createDecoratedButton()
            clearWorkspace.innerHTML = "Clear workspace"
            const workspaceXmlTextarea = document.createElement("textarea")
            refreshWorkspaceXml.onclick = () => {
                workspaceXmlTextarea.value = blocklyModule.workspaceToXml(blocklyModule.getWorkspace())
            }
            replaceWorkspaceXml.onclick = () => {
                blocklyModule.getWorkspace().clear()
                blocklyModule.xmlToWorkspace(workspaceXmlTextarea.value, blocklyModule.getWorkspace())
            }
            addToWorkspaceXml.onclick = () => {
                blocklyModule.xmlToWorkspace(workspaceXmlTextarea.value, blocklyModule.getWorkspace())
            }
            clearWorkspace.onclick = () => {
                blocklyModule.getWorkspace().clear()
            }
            workspaceXmlTextarea.style.width = "100%"
            workspaceXmlTextarea.style.height = "15em"
            workspaceDetails.append(refreshWorkspaceXml)
            workspaceDetails.append(replaceWorkspaceXml)
            workspaceDetails.append(addToWorkspaceXml)
            workspaceDetails.append(clearWorkspace)
            workspaceDetails.append(workspaceXmlTextarea)
            workspaceDetails.append(workspaceDetailsSummary)
            const spawnBlockToWorkspace = menu.createDecoratedButton()
            spawnBlockToWorkspace.innerHTML = "Spawn blocks"
            const spawnBlockToWorkspaceTextArea = document.createElement("textarea")
            spawnBlockToWorkspaceTextArea.style.width = "100%"
            spawnBlockToWorkspaceTextArea.style.height = "5em"
            spawnBlockToWorkspace.onclick = () => {
                const input = spawnBlockToWorkspaceTextArea.value.split("\n")
                input.forEach(block => {
                    let xml = Blockly.Xml.textToDom('<xml><block type="' + block + '"></block></xml>');
                    try {
                        Blockly.Xml.appendDomToWorkspace(xml, blocklyModule.getWorkspace())
                    } catch (err) {
                        console.error("could not spawn block!", err)
                        alert(`Block ${String(block)} does not exist or was not defined correctly`)
                    }
                })
            }
            workspaceDetails.append(spawnBlockToWorkspace)
            workspaceDetails.append(spawnBlockToWorkspaceTextArea)
            workspaceDetails.append(document.createElement("br"))
            workspaceDetails.append(document.createElement("br"))
            workspaceDetails.append(document.createElement("br"))
            // workspace functions

            const centerOnBlock = menu.createDecoratedButton()
            centerOnBlock.innerHTML = "Center on block "
            const centerOnBlockId = document.createElement("input")
            centerOnBlockId.placeholder = "Workspace Block ID"
            centerOnBlock.append(centerOnBlockId)
            centerOnBlock.onclick = () => {
                blocklyModule.getWorkspace().centerOnBlock(centerOnBlockId.value)
            }
            workspaceDetails.append(centerOnBlock)

            const cleanUp = menu.createDecoratedButton()
            cleanUp.innerHTML = "Clean Up Workspace"
            cleanUp.onclick = () => {
                blocklyModule.getWorkspace().cleanUp()
            }
            workspaceDetails.append(cleanUp)

            const clear = menu.createDecoratedButton()
            clear.innerHTML = "Clear"
            clear.onclick = () => {
                blocklyModule.getWorkspace().clear()
            }
            workspaceDetails.append(clear)

            const clearUndo = menu.createDecoratedButton()
            clearUndo.innerHTML = "Clear Undo/Redo stacks"
            clearUndo.onclick = () => {
                blocklyModule.getWorkspace().clearUndo()
            }
            workspaceDetails.append(clearUndo)

            const createVariable = menu.createDecoratedButton()
            createVariable.innerHTML = "Create variable "
            const createVariableName = document.createElement("input")
            createVariableName.placeholder = "Variable Name"
            createVariable.append(createVariableName)
            createVariable.onclick = () => {
                blocklyModule.getWorkspace().createVariable(createVariableName.value)
            }
            workspaceDetails.append(createVariable)

            const deleteVariableById = menu.createDecoratedButton()
            deleteVariableById.innerHTML = "Delete variable "
            const deleteVariableByIdId = document.createElement("input")
            deleteVariableByIdId.placeholder = "Variable ID"
            deleteVariableById.append(deleteVariableByIdId)
            deleteVariableById.onclick = () => {
                blocklyModule.getWorkspace().deleteVariableById(deleteVariableByIdId.value)
            }
            workspaceDetails.append(deleteVariableById)

            const dispose = menu.createDecoratedButton()
            dispose.innerHTML = "Dispose of Workspace"
            dispose.onclick = () => {
                blocklyModule.getWorkspace().dispose()
            }
            workspaceDetails.append(dispose)

            const getButtonCallback = menu.createDecoratedButton()
            getButtonCallback.innerHTML = "Call Button Callback "
            const getButtonCallbackKey = document.createElement("input")
            getButtonCallbackKey.placeholder = "Callback Key"
            getButtonCallback.append(getButtonCallbackKey)
            getButtonCallback.onclick = () => {
                blocklyModule.getWorkspace().getButtonCallback(getButtonCallbackKey.value)({})
            }
            workspaceDetails.append(getButtonCallback)

            const refreshTheme = menu.createDecoratedButton()
            refreshTheme.innerHTML = "Refresh Theme"
            refreshTheme.onclick = () => {
                blocklyModule.getWorkspace().refreshTheme()
            }
            workspaceDetails.append(refreshTheme)

            const refreshToolboxSelection = menu.createDecoratedButton()
            refreshToolboxSelection.innerHTML = "Refresh Toolbox Selection"
            refreshToolboxSelection.onclick = () => {
                blocklyModule.getWorkspace().refreshToolboxSelection()
            }
            workspaceDetails.append(refreshToolboxSelection)

            const removeBlockById = menu.createDecoratedButton()
            removeBlockById.innerHTML = "Remove block "
            const removeBlockByIdId = document.createElement("input")
            removeBlockByIdId.placeholder = "Block ID"
            removeBlockById.append(removeBlockByIdId)
            removeBlockById.onclick = () => {
                blocklyModule.getWorkspace().removeBlockById(removeBlockByIdId.value)
            }
            workspaceDetails.append(removeBlockById)

            const removeButtonCallback = menu.createDecoratedButton()
            removeButtonCallback.innerHTML = "Remove button callback "
            const removeButtonCallbackKey = document.createElement("input")
            removeButtonCallbackKey.placeholder = "Callback Key"
            removeButtonCallback.append(removeButtonCallbackKey)
            removeButtonCallback.onclick = () => {
                blocklyModule.getWorkspace().removeButtonCallback(removeButtonCallbackKey.value)
            }
            workspaceDetails.append(removeButtonCallback)

            const removeToolboxCategoryCallback = menu.createDecoratedButton()
            removeToolboxCategoryCallback.innerHTML = "Remove Toolbox Category Callback "
            const removeToolboxCategoryCallbackKey = document.createElement("input")
            removeToolboxCategoryCallbackKey.placeholder = "Callback Key"
            removeToolboxCategoryCallback.append(removeToolboxCategoryCallbackKey)
            removeToolboxCategoryCallback.onclick = () => {
                blocklyModule.getWorkspace().removeToolboxCategoryCallback(removeToolboxCategoryCallbackKey.value)
            }
            workspaceDetails.append(removeToolboxCategoryCallback)

            // workspace readout
            workspaceDetails.append(document.createElement("br"))
            workspaceDetails.append(document.createElement("br"))
            workspaceDetails.append(document.createElement("br"))
            const workspaceInformationDetails = document.createElement("details")
            const workspaceInformationDetailsSummary = document.createElement("summary")
            workspaceInformationDetailsSummary.innerHTML = "Workspace Information Read-out"
            workspaceInformationDetails.append(workspaceInformationDetailsSummary)
            workspaceInformationDetails.append(refreshWorkspaceInformation)
            refreshWorkspaceInformation.click()
            workspaceInformationDetails.append(workspaceInformation)
            workspaceDetails.append(workspaceInformationDetails)
            blocklyDetails.append(workspaceDetails)
        }, 0)
        setTimeout(() => {// toolbox
        }, 0)
        setTimeout(() => {// blocks
            const blockDetails = document.createElement("details")
            const blockDetailsSummary = document.createElement("summary")
            blockDetailsSummary.innerHTML = "Blocks"
            blockDetails.append(blockDetailsSummary)
            const blockTargetBlockId = document.createElement("input")
            blockTargetBlockId.placeholder = "Target Block ID"
            blockDetails.append(blockTargetBlockId)
            const blockTargetBlockUseSelected = menu.createDecoratedButton()
            blockTargetBlockUseSelected.innerHTML = "Use Selected Block"
            blockTargetBlockUseSelected.onclick = () => {
                blockTargetBlockId.value = Blockly.selected.id
            }
            blockDetails.append(blockTargetBlockUseSelected)
            blockDetails.append(document.createElement("br"))
            blockDetails.append(document.createElement("br"))
            blockDetails.append(document.createElement("br"))
            function getBlock() {
                return blocklyModule.getWorkspace().getBlockById(blockTargetBlockId.value)
            }
            // function

            const bumpNeighbours = menu.createDecoratedButton()
            bumpNeighbours.innerHTML = "Bump Neighbours"
            bumpNeighbours.onclick = () => {
                getBlock().bumpNeighbours()
            }
            blockDetails.append(bumpNeighbours)

            const disposeStack = menu.createDecoratedButton()
            disposeStack.innerHTML = "Dispose of Stack"
            disposeStack.onclick = () => {
                getBlock().dispose(false)
            }
            blockDetails.append(disposeStack)

            const dispose = menu.createDecoratedButton()
            dispose.innerHTML = "Dispose"
            dispose.onclick = () => {
                getBlock().dispose(true)
            }
            blockDetails.append(dispose)

            const doInit = menu.createDecoratedButton()
            doInit.innerHTML = "Initialize"
            doInit.onclick = () => {
                getBlock().doInit_()
            }
            blockDetails.append(doInit)

            const initModel = menu.createDecoratedButton()
            initModel.innerHTML = "initModel"
            initModel.onclick = () => {
                getBlock().initModel()
            }
            blockDetails.append(initModel)

            const jsonInitTextarea = document.createElement("textarea")
            jsonInitTextarea.style.width = "100%"
            jsonInitTextarea.style.height = "10em"
            jsonInitTextarea.placeholder = "Block JSON"
            const jsonInit = menu.createDecoratedButton()
            jsonInit.innerHTML = "Load JSON"
            jsonInit.onclick = () => {
                getBlock().jsonInit(JSON.parse(jsonInitTextarea.value))
            }
            blockDetails.append(jsonInit)
            blockDetails.append(jsonInitTextarea)

            const setCollapsedTrue = menu.createDecoratedButton()
            setCollapsedTrue.innerHTML = "Collapse"
            setCollapsedTrue.onclick = () => {
                getBlock().setCollapsed(true)
            }
            blockDetails.append(setCollapsedTrue)

            const setCollapsedFalse = menu.createDecoratedButton()
            setCollapsedFalse.innerHTML = "Uncollapse"
            setCollapsedFalse.onclick = () => {
                getBlock().setCollapsed(false)
            }
            blockDetails.append(setCollapsedFalse)

            const setColour = menu.createDecoratedButton()
            setColour.innerHTML = "Set Color "
            const setColourColor = document.createElement("input")
            setColourColor.placeholder = "Color"
            setColour.append(setColourColor)
            setColour.onclick = () => {
                getBlock().setColour(setColourColor.value)
            }
            blockDetails.append(setColour)

            const setEnabled = menu.createDecoratedButton()
            setEnabled.innerHTML = "Enable"
            setEnabled.onclick = () => {
                getBlock().setEnabled(true)
            }
            blockDetails.append(setEnabled)

            const setEnabled2 = menu.createDecoratedButton()
            setEnabled2.innerHTML = "Disable"
            setEnabled2.onclick = () => {
                getBlock().setEnabled(false)
            }
            blockDetails.append(setEnabled2)

            const setDeletable = menu.createDecoratedButton()
            setDeletable.innerHTML = "Allow deleting"
            setDeletable.onclick = () => {
                getBlock().setDeletable(true)
            }
            blockDetails.append(setDeletable)

            const setDeletable2 = menu.createDecoratedButton()
            setDeletable2.innerHTML = "Disallow Deleting"
            setDeletable2.onclick = () => {
                getBlock().setDeletable(false)
            }
            blockDetails.append(setDeletable2)

            const setEditable = menu.createDecoratedButton()
            setEditable.innerHTML = "Allow editing"
            setEditable.onclick = () => {
                getBlock().setEditable(true)
            }
            blockDetails.append(setEditable)

            const setEditable2 = menu.createDecoratedButton()
            setEditable2.innerHTML = "Disallow editing"
            setEditable2.onclick = () => {
                getBlock().setEditable(false)
            }
            blockDetails.append(setEditable2)

            const setHelpUrl = menu.createDecoratedButton()
            setHelpUrl.innerHTML = "Set Help URL "
            const setHelpUrlUrl = document.createElement("input")
            setHelpUrlUrl.placeholder = "URL"
            setHelpUrl.append(setHelpUrlUrl)
            setHelpUrl.onclick = () => {
                getBlock().setHelpUrl(setHelpUrlUrl.value)
            }
            blockDetails.append(setHelpUrl)

            const setInputsInline = menu.createDecoratedButton()
            setInputsInline.innerHTML = "Inline inputs"
            setInputsInline.onclick = () => {
                getBlock().setInputsInline(true)
            }
            blockDetails.append(setInputsInline)

            const setInputsInline2 = menu.createDecoratedButton()
            setInputsInline2.innerHTML = "External Inputs"
            setInputsInline2.onclick = () => {
                getBlock().setInputsInline(false)
            }
            blockDetails.append(setInputsInline2)

            const setMovable = menu.createDecoratedButton()
            setMovable.innerHTML = "Allow moving"
            setMovable.onclick = () => {
                getBlock().setMovable(true)
            }
            blockDetails.append(setMovable)

            const setMovable2 = menu.createDecoratedButton()
            setMovable2.innerHTML = "Disallow moving"
            setMovable2.onclick = () => {
                getBlock().setMovable(false)
            }
            blockDetails.append(setMovable2)

            const setNextStatement = menu.createDecoratedButton()
            setNextStatement.innerHTML = "Allow bottom blocks"
            setNextStatement.onclick = () => {
                getBlock().setNextStatement(true)
            }
            blockDetails.append(setNextStatement)

            const setNextStatement2 = menu.createDecoratedButton()
            setNextStatement2.innerHTML = "Disallow bottom blocks"
            setNextStatement2.onclick = () => {
                getBlock().setNextStatement(false)
            }
            blockDetails.append(setNextStatement2)

            const setPreviousStatement = menu.createDecoratedButton()
            setPreviousStatement.innerHTML = "Allow top blocks"
            setPreviousStatement.onclick = () => {
                getBlock().setPreviousStatement(true)
            }
            blockDetails.append(setPreviousStatement)

            const setPreviousStatement2 = menu.createDecoratedButton()
            setPreviousStatement2.innerHTML = "Disallow top blocks"
            setPreviousStatement2.onclick = () => {
                getBlock().setPreviousStatement(false)
            }
            blockDetails.append(setPreviousStatement2)

            const setShadow = menu.createDecoratedButton()
            setShadow.innerHTML = "Is Shadow Block"
            setShadow.onclick = () => {
                getBlock().setShadow(true)
            }
            blockDetails.append(setShadow)

            const setShadow2 = menu.createDecoratedButton()
            setShadow2.innerHTML = "Is not Shadow Block"
            setShadow2.onclick = () => {
                getBlock().setShadow(false)
            }
            blockDetails.append(setShadow2)

            const setTooltip = menu.createDecoratedButton()
            setTooltip.innerHTML = "Set Tooltip "
            const setTooltipTip = document.createElement("input")
            setTooltipTip.placeholder = "Tooltip"
            setTooltip.append(setTooltipTip)
            setTooltip.onclick = () => {
                getBlock().setTooltip(setTooltipTip.value)
            }
            blockDetails.append(setTooltip)

            const setWarningText = menu.createDecoratedButton()
            setWarningText.innerHTML = "Set Warning Text "
            const setWarningTextWarning = document.createElement("input")
            setWarningTextWarning.placeholder = "Warning text"
            setWarningText.append(setWarningTextWarning)
            setWarningText.onclick = () => {
                if (setWarningTextWarning.value == "") {
                    getBlock()["___blockWarnings-blocklyModule"] = []
                    getBlock().setWarningText(null)
                    return
                }
                getBlock()["___blockWarnings-blocklyModule"] = String(setWarningTextWarning.value).split("\n")
                getBlock().setWarningText(setWarningTextWarning.value)
            }
            blockDetails.append(setWarningText)

            const unplug = menu.createDecoratedButton()
            unplug.innerHTML = "Unplug Stack"
            unplug.onclick = () => {
                getBlock().unplug()
            }
            blockDetails.append(unplug)

            const unplug2 = menu.createDecoratedButton()
            unplug2.innerHTML = "Unplug"
            unplug2.onclick = () => {
                getBlock().unplug(true)
            }
            blockDetails.append(unplug2)

            // info
            blockDetails.append(document.createElement("br"))
            blockDetails.append(document.createElement("br"))
            blockDetails.append(document.createElement("br"))
            const blockInformation = document.createElement("div")
            blockInformation.style.width = "100%"
            blockInformation.style.height = "50em"
            blockInformation.style.overflow = "auto"
            const refreshBlockInformation = menu.createDecoratedButton()
            refreshBlockInformation.onclick = () => {
                const block = getBlock()
                blockInformation.innerHTML = ""
                Object.getOwnPropertyNames(block).forEach(property => {
                    const keyValue = document.createElement("p")
                    keyValue.style.height = "4em"
                    keyValue.style.overflow = "auto"
                    const data = valueToDisplayData(block[property])
                    let appearAs = data.value
                    let valueColor = data.color
                    keyValue.innerHTML = "<b style=\"color:#ff8888\">" + String(property).replace(/</gmi, "&lt;") + "</b>: <b style=\"color:" + valueColor + "\">" + String(appearAs).replace(/</gmi, "&lt;") + "</b>"
                    blockInformation.append(keyValue)
                })
            }
            refreshBlockInformation.innerHTML = "Refresh"
            const blockInformationDetails = document.createElement("details")
            const blockInformationDetailsSummary = document.createElement("summary")
            blockInformationDetailsSummary.innerHTML = "Block Information Read-out"
            blockInformationDetails.append(blockInformationDetailsSummary)
            blockInformationDetails.append(refreshBlockInformation)
            refreshBlockInformation.click()
            blockInformationDetails.append(blockInformation)
            blockDetails.append(blockInformationDetails)
            blocklyDetails.append(blockDetails)
        }, 0)
    }, 0)
    setTimeout(() => {//localforage
        const localforageDetails = document.createElement("details")
        const localforageDetailsSummary = document.createElement("summary")
        localforageDetailsSummary.innerHTML = "localforage"
        localforageDetails.append(localforageDetailsSummary)
        menu.content.append(localforageDetails)
        const localforageWarning = document.createElement("h1")
        localforageWarning.innerHTML = "Warning!<br><h5>It's possible that sensitive information is saved here uncensored! Be careful when opening this tab.</h5>"
        localforageWarning.style.color = "#ffff00"
        localforageDetails.append(localforageWarning)
        setTimeout(() => {// localforage
            const keyValuePairsDetails = document.createElement("details")
            const keyValuePairsDetailsSummary = document.createElement("summary")
            keyValuePairsDetailsSummary.innerHTML = "keyValuePairs"
            keyValuePairsDetails.append(keyValuePairsDetailsSummary)
            localforage.keys().then((keys) => {
                keys.forEach(key => {
                    localforage.getItem(key).then((value) => {
                        const keyValue = document.createElement("p")
                        keyValue.style.height = "2em"
                        keyValue.style.overflow = "auto"
                        const data = valueToDisplayData(value)
                        let appearAs = data.value
                        let valueColor = data.color
                        keyValue.innerHTML = "<b style=\"color:#ff8888\">" + String(key).replace(/</gmi, "&lt;") + "</b>: <b style=\"color:" + valueColor + "\">" + String(appearAs).replace(/</gmi, "&lt;") + "</b>"
                        keyValuePairsDetails.append(keyValue)
                    })
                })
            })
            localforageDetails.append(keyValuePairsDetails)
        }, 0)
    }, 0)
})