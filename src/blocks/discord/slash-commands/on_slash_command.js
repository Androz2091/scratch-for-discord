import * as Blockly from "blockly/core";
import { javascriptGenerator } from "blockly/javascript";

const blockName = "s4d_on_slash_command";

// Discord only accepts lowercase names without spaces
const toCommandName = (text) => text.toLowerCase().replace(/[^\p{L}\p{N}_-]/gu, "").slice(0, 32);

const blockData = {
    "message0": "%{BKY_ON_SLASH_COMMAND}",
    "colour": "#5865F2",
    "args0": [
        {
            "type": "field_input",
            "name": "NAME",
            "text": "ping"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_input",
            "name": "DESCRIPTION",
            "text": "Replies with pong"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_input",
            "name": "OPTIONS",
            "text": ""
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        }
    ],
    "tooltip": "%{BKY_ON_SLASH_COMMAND_TOOLTIP}"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
        this.getField("NAME").setValidator((text) => toCommandName(text) || null);
    }
};

javascriptGenerator.forBlock[blockName] = function(block) {
    const name = block.getFieldValue("NAME");
    const description = (block.getFieldValue("DESCRIPTION") || name).slice(0, 100);
    const options = block.getFieldValue("OPTIONS").split(",").map(toCommandName).filter(Boolean)
        .map((option) => `{ type: Discord.ApplicationCommandOptionType.String, name: ${JSON.stringify(option)}, description: ${JSON.stringify(option)} }`);
    javascriptGenerator.definitions_["s4d_slash_commands"] = "s4d.client.once(Discord.Events.ClientReady, () => s4d.client.application.commands.set(s4d.slashCommands));";
    javascriptGenerator.definitions_[`s4d_slash_command_${name}`] = `s4d.slashCommands.push({ name: ${JSON.stringify(name)}, description: ${JSON.stringify(description)}, options: [${options.join(", ")}] });`;
    const statements = javascriptGenerator.statementToCode(block, "STATEMENTS");
    return `s4d.client.on(Discord.Events.InteractionCreate, async (s4dinteraction) => {\nif (!s4dinteraction.isChatInputCommand() || s4dinteraction.commandName !== ${JSON.stringify(name)}) return;\n${statements}});\n`;
};
