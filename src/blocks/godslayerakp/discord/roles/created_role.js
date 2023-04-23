import Blockly from "blockly/core";
import { registerRestrictions } from "../../../../restrictions";
Blockly.Blocks["gsa_jg_create_role_with_name_in_server_with_color_then_do_created_role"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "created role",
                "colour": "#2EB66B",
                "output": "Role",
                "tooltip": "The role that was created."
            }
        );
    }
}
Blockly.JavaScript["gsa_jg_create_role_with_name_in_server_with_color_then_do_created_role"] = function () {
    const code = [`s4d_create_role_then_role`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
registerRestrictions("gsa_jg_create_role_with_name_in_server_with_color_then_do_created_role", [
    {
        type: "hasparent",
        message: "$This block needs to be in a \"create role with name () in server () with color () then do\" block!",
        types: ["gsa_jg_create_role_with_name_in_server_with_color_then_do"]
    }
]);