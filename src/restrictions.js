import Blockly from "blockly";

export const restrictions = {};

export function registerRestrictions (blockName, blockRestrictions) {
    restrictions[blockName] = blockRestrictions;
    return;
}

const decode = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

export const disableUnapplicable = (workspace) => {

    // Gets all blocks in the workspace
    const blocks = workspace.getAllBlocks(false);
  
    // For each block of the workspace
    for (let block of blocks) {

        // Checks
        if (!block) continue;
        if (!restrictions[block.type]) restrictions[block.type] = [];

        const messages = [];
        let issues = 0;
  
        for (let restriction of restrictions[block.type]) {
            if (!validateConfiguration(block, restriction)) continue;
    
            if (!validateRestriction(block, blocks, restriction)) {
                if (restriction.message){
                    if(Blockly.Msg[restriction.message]){
                        messages.push(Blockly.Msg[restriction.message]);
                    } else {
                        window.alert("KEY NOT FOUND: "+restriction.message);
                        messages.push(decode(restriction.message));
                    }
                }
                issues++;
            }
        }

        if (issues < 1) {
            block.setWarningText(null);
        } else {
            if (messages.length > 0){
                block.setWarningText(messages.join("\n"));
            }
        }
    }
}
  
function validateRestriction(block, blocks, restriction) {
    let reverse = false;
    let type = restriction.type;
    if (type !== "custom" && type.startsWith("!")) {
        type = type.substring(1);
        reverse = true;
    }
    switch (type) {
        case "toplevelparent":
            return (restriction.types.includes(getTopLevelParent(block).type)) !== reverse;
        case "blockexists":
            return (blocks.filter(b => restriction.types.includes(b.type) && !b.disabled).length > 0) !== reverse;
        case "parent":
            return (restriction.types.includes(block.getParent().type)) !== reverse;
        case "hasparent":
            return (hasParentOfType(block, restriction.types)) !== reverse;
        case "notempty":
            for (let type of restriction.types){
                try {
                    if (!block.getInput(type).connection.targetBlock()) return false;
                } catch(e){
                    console.log(block.type);
                }
            }
            return true;
        default:
            return true;
    }
}
  
function validateConfiguration(block, restriction) {
    switch (restriction.type) {
        case "toplevelparent":
        case "!toplevelparent":
            return getTopLevelParent(block) && !getTopLevelParent(block).disabled;
        case "blockexists":
        case "!blockexists":
            return true;
        case "parent":
        case "!parent":
            return block.getParent() && !block.getParent().disabled;
        case "hasparent":
        case "custom":
        case "notempty":
            return true;
        default:
            return false;
    }
}

function hasParentOfType(block, types){
    let hasParent = false;
    while(block.getParent()){
        if(types.includes(block.getParent().type)){
            hasParent = true;
        }
        block = block.getParent();
    }
    return hasParent;
}

function getTopLevelParent(block) {
    if (!block) return null;
    if (!block.getParent()) return block;
    return getTopLevelParent(block.getParent());
}
