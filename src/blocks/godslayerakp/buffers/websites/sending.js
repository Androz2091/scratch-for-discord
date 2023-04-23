import Blockly from "blockly/core";
import { registerRestrictions } from "../../../../restrictions";

Blockly.Blocks["gsa_express_website_respond_with_buffer"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "respond with buffer %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "buffer",
                        "check": "buffer"
                    }
                ],
                "colour": "#4c8eff",
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Sends back file to the page.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["gsa_express_website_respond_with_buffer"] = function (block) {
    const text = Blockly.JavaScript.valueToCode(block, "buffer", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `res.send(${text})
`;
    return code;
};

registerRestrictions("gsa_express_website_respond_with_buffer", [
    {
        type: "hasparent",
        message: ("$" + 'This block must be in a "on page on request type do" block!'),
        types: ["jg_express_website_on_page_on_request_type_do", "jg_express_website_on_invalid_request_do"]
    }
]);