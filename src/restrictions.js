import Blockly from "blockly";

export const restrictions = {};

export function registerRestrictions(blockName, blockRestrictions) {
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
            if (!(Blockly.Msg[restriction.message])) {
                if (restriction.message == "RES_MISSING_AHQ_CONTENT") {
                    Blockly.Msg[restriction.message] = "All the blocks should be filled!"
                } else if (restriction.message == "RES_MISSING_AHQ_SUPER_CONTENT") {
                    Blockly.Msg[restriction.message] = "You should place it in the block \"Make a convert task\""
                } else if (restriction.message == "RES_MISSING_AHQ_BLOCK") {
                    Blockly.Msg[restriction.message] = "The block \"Save Converted File\" must be used"
                } else if (restriction.message == "RES_MISSING_AHQ_DASH_CONTENT") {
                    Blockly.Msg[restriction.message] = "The block \"Make Cookie...\" must be used"
                } else if (restriction.message == "RES_MISSING_AHQ_DASH_C_CONTENT") {
                    Blockly.Msg[restriction.message] = "The block(s) \"Add ... (dashboard blocks)\" must be used"
                } else if (restriction.message == 'RES_MUST_BE_IN_BANNED_EVENT') {
                    Blockly.Msg[restriction.message] = 'Must be inside the "When a member is banned" event!'
                } else if (restriction.message == 'RES_MUST_BE_IN_UNBANNED_EVENT') {
                    Blockly.Msg[restriction.message] = 'Must be inside the "When a member is unbanned" event!'
                } else if (restriction.message == 'RES_MUST_BE_IN_KICK_EVENT') {
                    Blockly.Msg[restriction.message] = 'Must be inside the "When a member is kicked/removed" event!'
                } else if (restriction.message == 'RES_MUST_BE_IN_EVENT_EVENT') {
                    Blockly.Msg[restriction.message] = 'Must be inside the Scheduled events event block!'
                } else if ((restriction.message) && (restriction.message.startsWith("$"))) {
                    Blockly.Msg[restriction.message] = restriction.message.substring(1)
                }
            }
            if (!validateRestriction(block, blocks, restriction)) {
                if (restriction.message) {
                    if (Blockly.Msg[restriction.message]) {
                        messages.push(Blockly.Msg[restriction.message]);
                    } else {
                        window.alert("KEY NOT FOUND: " + restriction.message);
                        messages.push(decode(restriction.message));
                    }
                }
                issues++;
            }
        }

        if (issues < 1) {
            block.setWarningText(null);
        } else {
            if (messages.length > 0) {
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
        case "notblockexists":
            return (blocks.filter(b => restriction.types.includes(b.type) && !b.disabled).length > 0) !== reverse;
        case "parent":
            return (restriction.types.includes(block.getParent().type)) !== reverse;
        case "hasparent":
            return (hasParentOfType(block, restriction.types)) !== reverse;
        case "notempty":
            for (let type of restriction.types) {
                try {
                    if (!block.getInput(type).connection.targetBlock()) return false;
                } catch (e) {
                    console.log("error happened with restriction (notempty) on", block.type);
                }
            }
            return true;
        case "dropdownofparent":
            if (block.getParent() == null) return false
            if (block.getParent().getFieldValue(restriction.option) == null) return false
            return (String(block.getParent().getFieldValue(restriction.option)) == String(restriction.equals)) !== reverse;
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
        case "notblockexists":
        case "custom":
        case "notempty":
            return true;
        case "dropdownofparent":
            return true
        case "!dropdownofparent":
            return true
        default:
            return false;
    }
}

function hasParentOfType(block, types) {
    let hasParent = false;
    while (block.getParent()) {
        if (types.includes(block.getParent().type)) {
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
