import Blockly from "blockly/core";

const blockName = "initialize_dashboard";

const blockData = {
  "type": "initialize_dashboard",
  "message0": "Create a new dashboard with %1 Name %2 Description %3 Support server URL %4 Bot Invite URL %5 Dashboard URL %6 Port %7 No Port In CallBack URL %8 Client Secret %9 Log Requests %10 Inject CSS %11 Icon Path %12 Theme %13 %14 %15 Permissions required to access the dashboard %16 Add fields %17 Add commands to the commands list page %18",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "description",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "support_server_url",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "bot_invite_url",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "base_url",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "port",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "noPortIncallbackUrl",
      "check": "Boolean"
    },
    {
      "type": "input_value",
      "name": "secret",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "logRequests",
      "check": "Boolean"
    },
    {
      "type": "input_value",
      "name": "injectCSS"
    },
    {
      "type": "input_value",
      "name": "favicon_path",
      "check": "String"
    },
    {
      "type": "field_dropdown",
      "name": "theme",
      "options": [
        [
          "Light",
          "light"
        ],
        [
          "Dark",
          "dark"
        ],
        [
          "Custom...",
          "custom"
        ]
      ]
    },
    {
      "type": "field_input",
      "name": "requiree",
      "text": "Theme package name"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "permissions",
      "check": "Array"
    },
    {
      "type": "input_statement",
      "name": "FIELDS"
    },
    {
      "type": "input_statement",
      "name": "REGISTER_COMMANDS"
    }
  ],
  "inputsInline": false,
  "colour": 0,
  "tooltip": "Create a new dashboard",
  "helpUrl": "https://github.com/SimonLeclere/discord-easy-dashboard/blob/HEAD/docs/gettingStarted.md"
}


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};


Blockly.JavaScript['initialize_dashboard'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_description = Blockly.JavaScript.valueToCode(block, 'description', Blockly.JavaScript.ORDER_ATOMIC);
    var value_support_server_url = Blockly.JavaScript.valueToCode(block, 'support_server_url', Blockly.JavaScript.ORDER_ATOMIC);
    var value_bot_invite_url = Blockly.JavaScript.valueToCode(block, 'bot_invite_url', Blockly.JavaScript.ORDER_ATOMIC);
    var value_base_url = Blockly.JavaScript.valueToCode(block, 'base_url', Blockly.JavaScript.ORDER_ATOMIC);
    var value_port = Blockly.JavaScript.valueToCode(block, 'port', Blockly.JavaScript.ORDER_ATOMIC);
    var value_noportincallbackurl = Blockly.JavaScript.valueToCode(block, 'noPortIncallbackUrl', Blockly.JavaScript.ORDER_ATOMIC);
    var value_secret = Blockly.JavaScript.valueToCode(block, 'secret', Blockly.JavaScript.ORDER_ATOMIC);
    var value_logrequests = Blockly.JavaScript.valueToCode(block, 'logRequests', Blockly.JavaScript.ORDER_ATOMIC);
    var value_injectcss = Blockly.JavaScript.valueToCode(block, 'injectCSS', Blockly.JavaScript.ORDER_ATOMIC);
    var value_favicon_path = Blockly.JavaScript.valueToCode(block, 'favicon_path', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_theme = block.getFieldValue('theme');
    var text_requiree = block.getFieldValue('requiree');
    var value_permissions = Blockly.JavaScript.valueToCode(block, 'permissions', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_fields = Blockly.JavaScript.statementToCode(block, 'FIELDS');
    var statements_register_commands = Blockly.JavaScript.statementToCode(block, 'REGISTER_COMMANDS');
    // TODO: Assemble JavaScript into code variable.
    var code;

      if (dropdown_theme == 'custom') {

        code = `


    s4d.client.dashboard = new Dashboard(s4d.client, {
        name: ${value_name},
        description: ${value_description},
        serverUrl: ${value_support_server_url},
        inviteUrl: ${value_bot_invite_url},
        baseUrl: ${value_base_url},
        port: ${value_port},
        noPortIncallbackUrl: ${value_noportincallbackurl},
        secret: ${value_secret},
        logRequests: ${value_logrequests},
        injectCSS: ${value_injectcss},
        faviconPath: ${value_favicon_path},
        theme: require('${text_requiree}'),
        permissions: ${value_permissions},
    });

    ${statements_fields}\n
    ${statements_register_commands}\n

`;
    }
  else {
        code = `
    s4d.client.dashboard = new Dashboard(s4d.client, {
        name: ${value_name},
        description: ${value_description},
        serverUrl: ${value_support_server_url},
        inviteUrl: ${value_bot_invite_url},
        baseUrl: ${value_base_url},
        port: ${value_port},
        noPortIncallbackUrl: ${value_noportincallbackurl},
        secret: ${value_secret},
        logRequests: ${value_logrequests},
        injectCSS: ${value_injectcss},
        faviconPath: ${value_favicon_path},
        theme: '${dropdown_theme}',
        permissions: ${value_permissions},
    });

    ${statements_fields}\n
    ${statements_register_commands}\n
`;
}

    return code;
};