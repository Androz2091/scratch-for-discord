
import BaseBlockly from "blockly";
import Blockly from "blockly/core";


const BORDER_FIELDS = [ "H_F_NAME", "H_NAME", "H_ALIASES", "H_BOTPERM", "H_USERPERM", "H_OWNER", "H_GUILD", "H_ENABLED", "H_NSFW", "H_COOLDOWN"];
const BORDER_TYPES =  ["String",  "String", "Array" ,"Array", "Array", "Boolean",  "Boolean", "Boolean" ,"Boolean", "Number"];

const blockName = 'h_createFile'
const mutator = 'mutator_createFile'
const s4d_message_row_block = {
    "message0": "put code in here %1 %2",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        }
    ],
    "mutator": mutator,
    "tooltip": "",
    "helpUrl": "",
    "colour": "#40BF4A"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(s4d_message_row_block);
    }
};

Blockly.Blocks[mutator] = {
    init: function() {
        this.setColour("#CECDCE");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

const BORDER_MUTATOR_MIXIN = {
    inputs_: [true, true, false, false, false, false, false, false, false, false ],


    mutationToDom: function() {
        if (!this.inputs_) {
            return null;
        }
        const container = document.createElement("mutation");
        for (let i = 0; i < this.inputs_.length; i++) {
            if (this.inputs_[i]) container.setAttribute(BORDER_FIELDS[i], this.inputs_[i])
        }
        return container;
    },

    domToMutation: function(xmlElement) {
        for (let i = 0; i < this.inputs_.length; i++) {
            this.inputs_[i] = xmlElement.getAttribute(BORDER_FIELDS[i].toLowerCase()) == "true";
        }
        this.updateShape_();
    },

    decompose: function(workspace) {
        const containerBlock = workspace.newBlock(mutator);
        for (let i = 0; i < this.inputs_.length; i++) {
        containerBlock.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(BaseBlockly.Msg[BORDER_FIELDS[i]])
            .appendField(new Blockly.FieldCheckbox(this.inputs_[i] ? "TRUE" : "FALSE"), BORDER_FIELDS[i].toUpperCase());
        }
        containerBlock.initSvg();
        return containerBlock;
    },

    compose: function(containerBlock) {
        // Set states
        for (let i = 0; i < this.inputs_.length; i++) {
        this.inputs_[i] = (containerBlock.getFieldValue(BORDER_FIELDS[i].toUpperCase()) == "TRUE"); 
        }
        this.updateShape_();
    },

    updateShape_: function() {
        for (let i = 0; i < this.inputs_.length; i++) {
            if (this.getInput(BORDER_FIELDS[i].toUpperCase())) this.removeInput(BORDER_FIELDS[i].toUpperCase());
        }
        for (let i = 0; i < this.inputs_.length; i++) {
            if (this.inputs_[i]) {
                this.appendValueInput(BORDER_FIELDS[i].toUpperCase())
                .setCheck(BORDER_TYPES[i])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(BaseBlockly.Msg[BORDER_FIELDS[i]]);
            }
        }
    }
};

Blockly.Extensions.registerMutator(mutator, BORDER_MUTATOR_MIXIN, null, [""]);

Blockly.JavaScript[blockName] = function(block){
    let r = (Math.random() + 1).toString(36).substring(5);
    const statement = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    let fileName = Blockly.JavaScript.valueToCode(block, "H_F_NAME", Blockly.JavaScript.ORDER_ATOMIC) || r
    let aliases = Blockly.JavaScript.valueToCode(block, "H_ALIASES", Blockly.JavaScript.ORDER_ATOMIC) || 'null'
    let name = Blockly.JavaScript.valueToCode(block, "H_NAME", Blockly.JavaScript.ORDER_ATOMIC) || 'null'
    let botperm = Blockly.JavaScript.valueToCode(block, "H_BOTPERM", Blockly.JavaScript.ORDER_ATOMIC) || 'null'
    let userperm = Blockly.JavaScript.valueToCode(block, "H_USERPERM", Blockly.JavaScript.ORDER_ATOMIC) || '[]'
    let owner = Blockly.JavaScript.valueToCode(block, "H_OWNER", Blockly.JavaScript.ORDER_ATOMIC) || 'null'
    let guild = Blockly.JavaScript.valueToCode(block, "H_GUILD", Blockly.JavaScript.ORDER_ATOMIC) || 'null'
    let enabled = Blockly.JavaScript.valueToCode(block, "H_ENABLED", Blockly.JavaScript.ORDER_ATOMIC) || 'null'
    let nsfw = Blockly.JavaScript.valueToCode(block, "H_NSFW", Blockly.JavaScript.ORDER_ATOMIC) || 'null'
    let cooldown = Blockly.JavaScript.valueToCode(block, "H_COOLDOWN", Blockly.JavaScript.ORDER_ATOMIC) || 'null'
    let code = `fs.writeFileSync("./Commands/Commands/${fileName.replace(/'/g, '').replace(/[ .,"`/-=+!@#$%^&*(){}|~]/g, '_')}.js/", \`
    let URL = require('url')
    const ms = require("ms")
    const AntiLinkClient = require("anti-link-for-discord");
    let DIG = require("discord-image-generation")
    let Discord, { MessageEmbed, MessageActionRow, Permissions, Collection, MessageButton, MessageSelectMenu } = require("discord.js")
    let Database  = require("easy-json-database")
    let logs = require("discord-logs")
    let moment  = require("moment")
    let fs = require('fs')
    require('events').EventEmitter.defaultMaxListeners = 50;
    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const s4d = {
        Discord,
        database: new Database('../../db.json'),
        joiningMember:null,
        reply:null,
        tokenInvalid:false,
        tokenError: null,
        player:null,
        manager:null,
        Inviter:null,
        message:null,
        notifer:null,
        fire:null,
    };\n`
    code += `module.exports = {\n`
    if(name !== 'null') code += `name: ${name}, \n`
    if(aliases !== 'null') code += `aliases: ${aliases},\n`
    if(botperm !== 'null') code += `botPerms: ${botperm},\n`
    code += `userPerms: ${userperm},\n`
    if(owner !== 'null') code += `ownerOnly: ${owner},\n`
    if(guild !== 'null') code += `guildOnly: ${guild},\n`
    if(enabled !== 'null') code += `enabled: ${enabled},\n`
    if(nsfw !== 'null') code += `nsfw: ${nsfw},\n`
    if(cooldown !== 'null') code += `cooldown: ${cooldown},\n`
    code += `run: async (s4d, s4dmessage, args) => {\n${statement}\n} \n}\`)\n`
return code
};
/*module.exports = {
  name: "name",
  description: "description",
  aliases: [],
  botPerms: [],
  userPerms: [],
  expectedArgs: null,
  minArgs: 1,
  maxArgs: 2,
  ownerOnly: true,
  guildOnly: true,
  enabled: true,
  nsfw: false,
  userPermError: null,
  botPermError: null,
  cooldown: 10,
  run: async (client, message, args) => {
    //code
  },
};
*/