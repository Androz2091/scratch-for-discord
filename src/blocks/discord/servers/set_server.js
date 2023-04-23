import * as Blockly from "blockly/core";
import '@blockly/field-grid-dropdown';

const blockName = "set_server_something"

const blockData = {
    "type": "set_server_something",
    "message0": "Set server %1 %2 to %3 with reason %4 on server %5",
    "args0": [
    {
        "type": "field_grid_dropdown",
        "name": "parameter",
        "options": [
        [
                "AFK channel",
                "AFK_CHANNEL"
        ],
        [
                "AFK channel timeout",
                "AFK_CHANNEL_TIMEOUT"
        ],
        [
            "banner",
            "SET_BANNER"
        ],
        [
            "default notifications",
            "DEFAULT_NOTIFICATIONS"
        ],
        [
            "discovery spash",
            "DISCOVERY_SPLASH"
        ],
        [
            "explicit content filter",
            "EXPL_CONT_FILTER"
        ],
        [
            "icon",
            "ICON"
        ],
        [
            "name",
            "NAME"
        ],
        [
            "owner",
            "OWNER"
        ],
        [
            "public update channel",
            "PUB_UPD_CHANNEL"
        ],
        [
            "rules channel",
            "RULES_CHANNEL"
        ],
        [
            "invite image",
            "SPLASH"
        ],
        [
            "system channel",
            "SYS_CHANNEL"
        ],
        [
            "verification level",
            "VERIF_LVL"
        ]
        ]
    },
    {
        "type": "input_dummy"
    },
    {
        "type": "input_value",
        "name": "value"
    },
    {
        "type": "input_value",
        "name": "reason",
        "check": "String"
    },
    {
        "type": "input_value",
        "name": "server"
    }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#43BBF3",
    "tooltip": "",
    "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['set_server_something'] = function(block) {
    var parameters = block.getFieldValue('parameter');
    var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    var reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
    var server = Blockly.JavaScript.valueToCode(block, 'server', Blockly.JavaScript.ORDER_ATOMIC);
    
    var code = ``;
    switch(parameters) {

        case 'AFK_CHANNEL_TIMEOUT':
            code = `${server}.setAFKTimeout(${value},${reason})\n`
            break;
        
        case 'AFK_CHANNEL':
            code = `${server}.setAFKChannel(${value},${reason})\n`
            break;

        case 'SET_BANNER':
            code = `${server}.setBanner(${value},${reason})\n`
            break;
        case 'DEFAULT_NOTIFICATIONS':
            code = `${server}.setDefaultMessageNotifications(${value},${reason})\n`
            break;
        case 'DISCOVERY_SPLASH':
            code = `${server}.setDiscoverySplash(${value},${reason})\n`
            break;
        case 'EXPL_CONT_FILTER':
            code = `${server}.setExplicitContentFilter(${value},${reason})\n`
            break;
        case 'ICON':
            code = `${server}.setIcon(${value},${reason})\n`
            break;
        case 'NAME':
            code = `${server}.setName(${value},${reason})\n`
            break;
        case 'OWNER':
            code = `${server}.setOwner(${value},${reason})\n`
            break;
        case 'PUB_UPD_CHANNEL':
            code = `${server}.setPublicUpdatesChannel(${value},${reason}) \n`
            break;
        case 'RULES_CHANNEL':
            code = `${server}.setRulesChannel(${value},${reason})\n`
            break;
        case 'SPLASH':
            code = `${server}.setSplash(${value},${reason})\n`
            break;
        case 'SYS_CHANNEL':
            code = `${server}.setSystemChannel(${value},${reason})\n`
            break;
        case 'VERIF_LVL':
            code = `${server}.setVerificationLevel(${value},${reason})\n`
            break;

    }
    code += "\n"
    return code;
};