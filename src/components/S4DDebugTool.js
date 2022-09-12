const Blockly = require("blockly")
const localforage = require("localforage")
const blocklyModule = require("../blocks/blocklyModule")
window.devBlocklyModule = blocklyModule
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
window.openS4DDebugMenu = () => {
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

        const mainWorkspaceCheckDiv = document.createElement("div")
        const refreshCheckMainWorkspace = menu.createDecoratedButton()
        refreshCheckMainWorkspace.innerHTML = "Refresh"
        refreshCheckMainWorkspace.onclick = () => {
            const mainWorkspace = blocklyModule.getWorkspace()
            const blocklysMainWorkspace = Blockly.getMainWorkspace()
            mainWorkspaceCheckDiv.innerHTML = '<p>Main workspace: <b>' + mainWorkspace.id + '</b></p><p>Blockly\'s main workspace: <b>' + blocklysMainWorkspace.id + '</b></p><p>Blockly is ' + (mainWorkspace.id == blocklysMainWorkspace.id ? '<b style="color:lime">Correct</b>' : '<b style="color:red">Incorrect</b>') + '!</p>'
        }
        refreshCheckMainWorkspace.click()
        blocklyDetails.append(refreshCheckMainWorkspace)
        blocklyDetails.append(mainWorkspaceCheckDiv)
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

            const renameVariableById = menu.createDecoratedButton()
            renameVariableById.innerHTML = "Rename Variable by ID "
            const renameVariableByIdId = document.createElement("input")
            renameVariableByIdId.placeholder = "Variable ID"
            renameVariableById.append(renameVariableByIdId)
            const renameVariableByIdNewName = document.createElement("input")
            renameVariableByIdNewName.placeholder = "New Name"
            renameVariableById.append(renameVariableByIdNewName)
            renameVariableById.onclick = () => {
                blocklyModule.getWorkspace().renameVariableById(renameVariableByIdId.value, renameVariableByIdNewName.value)
            }
            workspaceDetails.append(renameVariableById)

            const render = menu.createDecoratedButton()
            render.innerHTML = "Render All Blocks"
            render.onclick = () => {
                blocklyModule.getWorkspace().render()
            }
            workspaceDetails.append(render)

            const resizeContents = menu.createDecoratedButton()
            resizeContents.innerHTML = "Reposition & Resize Elements"
            resizeContents.onclick = () => {
                blocklyModule.getWorkspace().resize()
                blocklyModule.getWorkspace().resizeContents()
            }
            workspaceDetails.append(resizeContents)

            const scroll = menu.createDecoratedButton()
            scroll.innerHTML = "Scroll workspace "
            const scrollx = document.createElement("input")
            scrollx.placeholder = "X"
            scroll.append(scrollx)
            const scrolly = document.createElement("input")
            scrolly.placeholder = "Y"
            scroll.append(scrolly)
            scroll.onclick = () => {
                blocklyModule.getWorkspace().scroll(Number(scrollx.value) ? Number(scrollx.value) : 0, Number(scrolly.value) ? Number(scrolly.value) : 0)
            }
            workspaceDetails.append(scroll)

            const scrollCenter = menu.createDecoratedButton()
            scrollCenter.innerHTML = "Center Workspace"
            scrollCenter.onclick = () => {
                blocklyModule.getWorkspace().scrollCenter()
            }
            workspaceDetails.append(scrollCenter)

            const setScale = menu.createDecoratedButton()
            setScale.innerHTML = "Zoom Scale "
            const setScaleScale = document.createElement("input")
            setScaleScale.placeholder = "Scale"
            setScale.append(setScaleScale)
            setScale.onclick = () => {
                blocklyModule.getWorkspace().setScale(Number(setScaleScale.value) ? Number(setScaleScale.value) : 1)
            }
            workspaceDetails.append(setScale)

            const setTheme = menu.createDecoratedButton()
            setTheme.innerHTML = "Remove Theme"
            setTheme.onclick = () => {
                blocklyModule.getWorkspace().setTheme()
            }
            workspaceDetails.append(setTheme)

            const setVisible = menu.createDecoratedButton()
            setVisible.innerHTML = "Show workspace"
            setVisible.onclick = () => {
                blocklyModule.getWorkspace().setVisible(true)
            }
            workspaceDetails.append(setVisible)

            const setVisible2 = menu.createDecoratedButton()
            setVisible2.innerHTML = "Hide workspace"
            setVisible2.onclick = () => {
                blocklyModule.getWorkspace().setVisible(false)
            }
            workspaceDetails.append(setVisible2)

            const showContextMenu = menu.createDecoratedButton()
            showContextMenu.innerHTML = "Show context menu"
            showContextMenu.onclick = () => {
                blocklyModule.getWorkspace().showContextMenu(window.event)
            }
            workspaceDetails.append(showContextMenu)

            const translate = menu.createDecoratedButton()
            translate.innerHTML = "Translate workspace "
            const translatex = document.createElement("input")
            translatex.placeholder = "X"
            translate.append(translatex)
            const translatey = document.createElement("input")
            translatey.placeholder = "Y"
            translate.append(translatey)
            translate.onclick = () => {
                blocklyModule.getWorkspace().translate(Number(translatex.value) ? Number(translatex.value) : 0, Number(translatey.value) ? Number(translatey.value) : 0)
            }
            workspaceDetails.append(translate)

            const undo = menu.createDecoratedButton()
            undo.innerHTML = "Undo"
            undo.onclick = () => {
                blocklyModule.getWorkspace().undo(false)
            }
            workspaceDetails.append(undo)

            const redo = menu.createDecoratedButton()
            redo.innerHTML = "Redo"
            redo.onclick = () => {
                blocklyModule.getWorkspace().undo(true)
            }
            workspaceDetails.append(redo)

            const updateInverseScreenCTM = menu.createDecoratedButton()
            updateInverseScreenCTM.innerHTML = "Mark Inverse Screen CTM as dirty"
            updateInverseScreenCTM.onclick = () => {
                blocklyModule.getWorkspace().updateInverseScreenCTM()
            }
            workspaceDetails.append(updateInverseScreenCTM)

            const updateScreenCalculationsIfScrolled = menu.createDecoratedButton()
            updateScreenCalculationsIfScrolled.innerHTML = "updateScreenCalculationsIfScrolled"
            updateScreenCalculationsIfScrolled.onclick = () => {
                blocklyModule.getWorkspace().updateScreenCalculationsIfScrolled()
            }
            workspaceDetails.append(updateScreenCalculationsIfScrolled)

            const zoom = menu.createDecoratedButton()
            zoom.innerHTML = "Zoom workspace "
            const zoomx = document.createElement("input")
            zoomx.placeholder = "X"
            zoom.append(zoomx)
            const zoomy = document.createElement("input")
            zoomy.placeholder = "Y"
            zoom.append(zoomy)
            const zooma = document.createElement("input")
            zooma.placeholder = "Amount"
            zoom.append(zooma)
            zoom.onclick = () => {
                blocklyModule.getWorkspace().zoom(Number(zoomx.value) ? Number(zoomx.value) : 0, Number(zoomy.value) ? Number(zoomy.value) : 0, Number(zooma.value) ? Number(zooma.value) : 0)
            }
            workspaceDetails.append(zoom)

            const zoomCenter = menu.createDecoratedButton()
            zoomCenter.innerHTML = "Zoom Center Blocks In"
            zoomCenter.onclick = () => {
                blocklyModule.getWorkspace().zoomCenter(1)
            }
            workspaceDetails.append(zoomCenter)

            const zoomCenter2 = menu.createDecoratedButton()
            zoomCenter2.innerHTML = "Zoom Center Blocks Out"
            zoomCenter2.onclick = () => {
                blocklyModule.getWorkspace().zoomCenter(-1)
            }
            workspaceDetails.append(zoomCenter2)

            const zoomToFit = menu.createDecoratedButton()
            zoomToFit.innerHTML = "Zoom blocks to fit"
            zoomToFit.onclick = () => {
                blocklyModule.getWorkspace().zoomToFit()
            }
            workspaceDetails.append(zoomToFit)

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
            const toolboxDetails = document.createElement("details")
            const toolboxDetailsSummary = document.createElement("summary")
            toolboxDetailsSummary.innerHTML = "Toolbox"
            toolboxDetails.append(toolboxDetailsSummary)
            const toolboxInformation = document.createElement("div")
            toolboxInformation.style.width = "100%"
            toolboxInformation.style.height = "50em"
            toolboxInformation.style.overflow = "auto"
            const toolboxInformationDetails = document.createElement("details")
            const toolboxInformationDetailsSummary = document.createElement("summary")
            toolboxInformationDetailsSummary.innerHTML = "Toolbox Information Read-out"
            const refreshToolboxInformation = menu.createDecoratedButton()
            toolboxInformationDetails.append(toolboxInformationDetailsSummary)
            refreshToolboxInformation.innerHTML = "Refresh"
            toolboxInformationDetails.append(refreshToolboxInformation)
            refreshToolboxInformation.onclick = () => {
                const toolbox = blocklyModule.getToolbox()
                toolboxInformation.innerHTML = ""
                Object.getOwnPropertyNames(toolbox).forEach(property => {
                    const keyValue = document.createElement("p")
                    keyValue.style.height = "4em"
                    keyValue.style.overflow = "auto"
                    const data = valueToDisplayData(toolbox[property])
                    let appearAs = data.value
                    let valueColor = data.color
                    keyValue.innerHTML = "<b style=\"color:#ff8888\">" + String(property).replace(/</gmi, "&lt;") + "</b>: <b style=\"color:" + valueColor + "\">" + String(appearAs).replace(/</gmi, "&lt;") + "</b>"
                    toolboxInformation.append(keyValue)
                })
            }
            refreshToolboxInformation.click()
            toolboxInformationDetails.append(toolboxInformation)
            // function

            const addStyle = menu.createDecoratedButton()
            addStyle.innerHTML = "Add Style "
            const addStyleStyle = document.createElement("input")
            addStyleStyle.placeholder = "Class"
            addStyle.append(addStyleStyle)
            addStyle.onclick = () => {
                blocklyModule.getToolbox().addStyle(addStyleStyle.value)
            }
            toolboxDetails.append(addStyle)

            const clearSelection = menu.createDecoratedButton()
            clearSelection.innerHTML = "Clear Selection"
            clearSelection.onclick = () => {
                blocklyModule.getToolbox().clearSelection()
            }
            toolboxDetails.append(clearSelection)

            const dispose = menu.createDecoratedButton()
            dispose.innerHTML = "Dispose"
            dispose.onclick = () => {
                blocklyModule.getToolbox().dispose()
            }
            toolboxDetails.append(dispose)

            const handleToolboxItemResize = menu.createDecoratedButton()
            handleToolboxItemResize.innerHTML = "Handle Toolbox Item Resize"
            handleToolboxItemResize.onclick = () => {
                blocklyModule.getToolbox().handleToolboxItemResize()
            }
            toolboxDetails.append(handleToolboxItemResize)

            const init = menu.createDecoratedButton()
            init.innerHTML = "Initialize"
            init.onclick = () => {
                blocklyModule.getToolbox().init()
            }
            toolboxDetails.append(init)

            const position = menu.createDecoratedButton()
            position.innerHTML = "Refresh Position"
            position.onclick = () => {
                blocklyModule.getToolbox().position()
            }
            toolboxDetails.append(position)

            const refreshSelection = menu.createDecoratedButton()
            refreshSelection.innerHTML = "Refresh Current Category"
            refreshSelection.onclick = () => {
                blocklyModule.getToolbox().refreshSelection()
            }
            toolboxDetails.append(refreshSelection)

            const refreshTheme = menu.createDecoratedButton()
            refreshTheme.innerHTML = "Refresh Theme"
            refreshTheme.onclick = () => {
                blocklyModule.getToolbox().refreshTheme()
            }
            toolboxDetails.append(refreshTheme)

            const removeStyle = menu.createDecoratedButton()
            removeStyle.innerHTML = "Remove Style "
            const removeStyleStyle = document.createElement("input")
            removeStyleStyle.placeholder = "Class"
            removeStyle.append(removeStyleStyle)
            removeStyle.onclick = () => {
                blocklyModule.getToolbox().removeStyle(removeStyleStyle.value)
            }
            toolboxDetails.append(removeStyle)

            const selectItemByPosition = menu.createDecoratedButton()
            selectItemByPosition.innerHTML = "Select Item "
            const selectItemByPositionIndex = document.createElement("input")
            selectItemByPositionIndex.placeholder = "Index"
            selectItemByPosition.append(selectItemByPositionIndex)
            selectItemByPosition.onclick = () => {
                blocklyModule.getToolbox().selectItemByPosition(Number(selectItemByPositionIndex.value) ? Number(selectItemByPositionIndex.value) : 0)
            }
            toolboxDetails.append(selectItemByPosition)

            const setVisible = menu.createDecoratedButton()
            setVisible.innerHTML = "Show"
            setVisible.onclick = () => {
                blocklyModule.getToolbox().setVisible(true)
            }
            toolboxDetails.append(setVisible)

            const setVisible2 = menu.createDecoratedButton()
            setVisible2.innerHTML = "Hide"
            setVisible2.onclick = () => {
                blocklyModule.getToolbox().setVisible(false)
            }
            toolboxDetails.append(setVisible2)

            const updateCursorDeleteStyle_ = menu.createDecoratedButton()
            updateCursorDeleteStyle_.innerHTML = "addUpdateCursorDeleteStyle"
            updateCursorDeleteStyle_.onclick = () => {
                blocklyModule.getToolbox().updateCursorDeleteStyle_(true)
            }
            toolboxDetails.append(updateCursorDeleteStyle_)

            const updateCursorDeleteStyle_2 = menu.createDecoratedButton()
            updateCursorDeleteStyle_2.innerHTML = "removeUpdateCursorDeleteStyle"
            updateCursorDeleteStyle_2.onclick = () => {
                blocklyModule.getToolbox().updateCursorDeleteStyle_(false)
            }
            toolboxDetails.append(updateCursorDeleteStyle_2)

            const toolboxXMLTextarea = document.createElement("textarea")
            toolboxXMLTextarea.placeholder = "Toolbox XML"
            toolboxXMLTextarea.style.width = "100%"
            toolboxXMLTextarea.style.height = "10em"
            const updateToolboxXML = menu.createDecoratedButton()
            updateToolboxXML.innerHTML = "Update Toolbox XML"
            updateToolboxXML.onclick = () => {
                blocklyModule.getWorkspace().updateToolbox(toolboxXMLTextarea.value)
            }
            toolboxDetails.append(updateToolboxXML)
            toolboxDetails.append(toolboxXMLTextarea)

            // info
            toolboxDetails.append(document.createElement("br"))
            toolboxDetails.append(document.createElement("br"))
            toolboxDetails.append(document.createElement("br"))
            toolboxDetails.append(toolboxInformationDetails)
            blocklyDetails.append(toolboxDetails)
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

            const moveBy = menu.createDecoratedButton()
            moveBy.innerHTML = "Move By "
            const moveByX = document.createElement("input")
            moveByX.placeholder = "X"
            moveBy.append(moveByX)
            const moveByY = document.createElement("input")
            moveByY.placeholder = "Y"
            moveBy.append(moveByY)
            moveBy.onclick = () => {
                const x = moveByX.value == "" ? 0 : Number(moveByX.value)
                const y = moveByY.value == "" ? 0 : Number(moveByY.value)
                getBlock().moveBy(x, y)
            }
            blockDetails.append(moveBy)

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

            const setCommentText = menu.createDecoratedButton()
            setCommentText.innerHTML = "Set Comment Text "
            const setCommentTextText = document.createElement("input")
            setCommentTextText.placeholder = "Comment Text"
            setCommentText.append(setCommentTextText)
            setCommentText.onclick = () => {
                if (setCommentTextText.value == "") {
                    getBlock().setCommentText(null)
                    return
                }
                getBlock().setCommentText(setCommentTextText.value)
            }
            blockDetails.append(setCommentText)

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

            const setOutputTextarea = document.createElement("textarea")
            setOutputTextarea.style.width = "100%"
            setOutputTextarea.style.height = "5em"
            setOutputTextarea.placeholder = "Block Output Types (Array)"
            const setOutput = menu.createDecoratedButton()
            setOutput.innerHTML = "Set Block Output Array"
            setOutput.onclick = () => {
                const array = JSON.parse(setOutputTextarea.value)
                getBlock().setOutput(array.length > 0, (array.length > 0 ? array : null))
            }
            blockDetails.append(setOutput)
            blockDetails.append(setOutputTextarea)

            const setOutputShape = menu.createDecoratedButton()
            setOutputShape.innerHTML = "Set Output Shape "
            const setOutputShapeNum = document.createElement("input")
            setOutputShapeNum.placeholder = "Number"
            setOutputShape.append(setOutputShapeNum)
            setOutputShape.onclick = () => {
                getBlock().setOutputShape(Number(setOutputShapeNum.value) ? Number(setOutputShapeNum.value) : 0)
            }
            blockDetails.append(setOutputShape)

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

            const setPathToTextarea = document.createElement("textarea")
            setPathToTextarea.style.width = "100%"
            setPathToTextarea.style.height = "10em"
            setPathToTextarea.placeholder = "SVG Path"
            const setPathTo = menu.createDecoratedButton()
            setPathTo.innerHTML = "Set SVG Path"
            setPathTo.onclick = () => {
                getBlock().pathObject.svgPath.setAttribute("d", setPathToTextarea.value)
            }
            const getCurrentPath = menu.createDecoratedButton()
            getCurrentPath.innerHTML = "Fetch Current Block SVG Path"
            getCurrentPath.onclick = () => {
                setPathToTextarea.value = getBlock().pathObject.svgPath.getAttribute("d")
            }
            blockDetails.append(setPathTo)
            blockDetails.append(getCurrentPath)
            blockDetails.append(setPathToTextarea)
            const svgPathEditorDetails = document.createElement("details")
            const svgPathEditorDetailsSummary = document.createElement("summary")
            svgPathEditorDetailsSummary.innerHTML = "Visual SVG Path Editor (credits to Yqnn on GitHub!)"
            svgPathEditorDetails.append(svgPathEditorDetailsSummary)
            const svgPathEditorIframe = document.createElement("iframe")
            svgPathEditorIframe.src = "https://yqnn.github.io/svg-path-editor/"
            svgPathEditorIframe.style.width = "100%"
            svgPathEditorIframe.style.height = "40em"
            svgPathEditorDetails.append(svgPathEditorIframe)
            blockDetails.append(svgPathEditorDetails)

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
        setTimeout(() => {// keyvaluepairs
            const keyValuePairsDetails = document.createElement("details")
            const keyValuePairsDetailsSummary = document.createElement("summary")
            keyValuePairsDetailsSummary.innerHTML = "keyValuePairs"
            keyValuePairsDetails.append(keyValuePairsDetailsSummary)
            const refreshButton = menu.createDecoratedButton()
            refreshButton.innerHTML = "Refresh"
            keyValuePairsDetails.append(refreshButton)
            const valuePairsDiv = document.createElement("div")
            keyValuePairsDetails.append(valuePairsDiv)
            function resetKeyvaluepairs() {
                valuePairsDiv.innerHTML = ""
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
                            valuePairsDiv.append(keyValue)
                        })
                    })
                })
            }
            resetKeyvaluepairs()
            refreshButton.onclick = () => {
                resetKeyvaluepairs()
            }
            localforageDetails.append(keyValuePairsDetails)
        }, 0)
    }, 0)
    setTimeout(() => {//apis
        const apisDetails = document.createElement("details")
        const apisDetailsSummary = document.createElement("summary")
        apisDetailsSummary.innerHTML = "APIs"
        const apiDiv = document.createElement("div")
        function displayApi(name, url) {
            const waitingLabel = document.createElement("p")
            waitingLabel.innerHTML = '<small style="color:gray">Fetching ' + name + ' (' + url + '), please wait...</small>'
            apiDiv.append(waitingLabel)
            let reqStartTime = new Date().getTime()
            fetch(url).then(res => {
                waitingLabel.remove()
                const r = document.createElement("div")
                r.innerHTML = '<p>' + name + ' <small>(' + url + ')</small></p><h1 style="color:lime;font-size:300%">Online</h1><br><p>' + (new Date().getTime() - reqStartTime) + 'ms to respond; got status <b style="color:' + (res.status >= 200 && res.status < 400 ? "lime" : "red") + '">' + res.status + '</b></p>'
                apiDiv.append(r)
            }).catch(() => {
                waitingLabel.remove()
                const r = document.createElement("div")
                r.innerHTML = '<p>' + name + ' <small>(' + url + ')</small></p><h1 style="color:red;font-size:300%">Offline</h1><br><p>' + (new Date().getTime() - reqStartTime) + 'ms to error</p>'
                apiDiv.append(r)
            })
        }
        const refreshButton = menu.createDecoratedButton()
        refreshButton.innerHTML = "Refresh"
        apisDetails.append(refreshButton)
        apisDetails.append(apiDiv)
        refreshButton.onclick = () => {
            apiDiv.innerHTML = ""
            displayApi("RunButtonApi", "https://469runtest.jeremygamer13.repl.co")
            displayApi("UserExampleApi", "https://469exampletest.jeremygamer13.repl.co")
            displayApi("ForumsApi", "https://469-forumstest.jeremygamer13.repl.co")
            //displayApi("469MasterApi", "https://s4d469apis.scratch4discord.repl.co/")
        }
        refreshButton.click()
        apisDetails.append(apisDetailsSummary)
        menu.content.append(apisDetails)
    }, 0)
}
window.addEventListener("keypress", (e) => {
    if (!(e.key == "\u0015" && e.shiftKey && e.ctrlKey)) return
    window.openS4DDebugMenu()
})