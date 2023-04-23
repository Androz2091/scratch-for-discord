// S4D_APP_PKG_axios is the axios package!
/* eslint-disable */
import Blockly from "blockly/core";

const blockName = "jg_web_request_advanced_new2_send_request_to_url_using_method_with_result_giving_request_headers_with_data_sections_then_if_error";

const blockData = {
    "message0": "send request to URL %1 using method %2 with result %11 giving request headers %7 %3 with data sections %8 %4 then %9 %5 if error %10 %6",
    "inputsInline": false,
    "args0": [
        {
            "type": "input_value",
            "name": "URL",
            "check": ["String", "var", "Env"]
        },
        {
            "type": "field_dropdown",
            "name": "METHOD",
            "options": [
                [
                    "GET",
                    '"get"'
                ],
                [
                    "POST",
                    '"post"'
                ],
                [
                    "PUT",
                    '"put"'
                ],
                [
                    "PATCH",
                    '"patch"'
                ],
                [
                    "DELETE",
                    '"delete"'
                ],
                [
                    "HEAD",
                    '"head"'
                ],
                [
                    "OPTIONS",
                    '"options"'
                ]
            ],
        },
        {
            "type": "input_statement",
            "name": "HEADERS"
        },
        {
            "type": "input_statement",
            "name": "BODY"
        },
        {
            "type": "input_statement",
            "name": "THEN"
        },
        {
            "type": "input_statement",
            "name": "IF_ERROR"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "IMAGEORNOT",
            "options": [
                [
                    "not being downloadable",
                    ''
                ],
                [
                    "being downloadable",
                    "responseType: 'stream',"
                ]
            ],
        }
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Send an advanced request to a URL for an API, server or site that requires extra information.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const URL = Blockly.JavaScript.valueToCode(block, "URL", Blockly.JavaScript.ORDER_ATOMIC);
    const METHOD = block.getFieldValue("METHOD");
    const IMAGEORNOT = block.getFieldValue("IMAGEORNOT");
    const HEADERS = Blockly.JavaScript.statementToCode(block, "HEADERS");
    const BODY = Blockly.JavaScript.statementToCode(block, "BODY");
    const THEN = Blockly.JavaScript.statementToCode(block, "THEN");
    const IF_ERROR = Blockly.JavaScript.statementToCode(block, "IF_ERROR");
    const code = `S4D_APP_PKG_axios({
        method: ${METHOD},
        url: ${URL},
        ${IMAGEORNOT}
        headers: {
           ${HEADERS}
        },
        ${BODY}
      })
      .then(async (response) => {
        ${THEN}
      })
      .catch(async (err) => {
        ${IF_ERROR}
      });
    `;
    return code;
};
