import Blockly from "blockly/core";
Blockly.Blocks["jg_s4d_themes_top_name_block"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "%1",
                "args0": [
                    {
                        "type": "field_input",
                        "text": "My Theme"
                    }
                ],
                "nextStatement": null,
                "colour": "#b25ef2",
                "tooltip": "The theme's name if it was added."
            }
        );
    }
}
Blockly.Blocks["jg_s4d_themes_set_navigation_bar_color_to"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "set navigation bar color to %1",
                "args0": [
                    {
                        "type": "field_input",
                        "name": "COLOR",
                        "text": "#161719"
                    }
                ],
                "inputsInline": true,
                "previousStatement": null,
                "nextStatement": null,
                "colour": "#b25ef2",
                "tooltip": "Set the Navigation Bar's color at the top of the page to a hex color."
            }
        );
    },
    onchange: function () {
        if (!this.isEnabled()) return
        const color = String(this.getFieldValue("COLOR")).toUpperCase().substring(0, 7)
        document.getElementById("navSpace").style = `background-color: ${color} !important;`
    }
}
Blockly.Blocks["jg_s4d_themes_set_connect_to_discord_warning_color_to"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "set Connect to Discord warning color to %1",
                "args0": [
                    {
                        "type": "field_input",
                        "name": "COLOR",
                        "text": "#ffc107"
                    }
                ],
                "inputsInline": true,
                "previousStatement": null,
                "nextStatement": null,
                "colour": "#b25ef2",
                "tooltip": "Set the warning color of the \"Connect to Discord\" modal at the bottom of the page to a hex color."
            }
        );
    },
    onchange: function () {
        if (!this.isEnabled()) return
        const color = String(this.getFieldValue("COLOR")).toUpperCase().substring(0, 7)
        const modal = document.getElementsByClassName("v-toast__item v-toast__item--warning v-toast__item--bottom-right").item(0)
        if (modal == null) return
        modal.style = `background-color: ${color} !important;`
    }
}
Blockly.JavaScript["jg_s4d_themes_top_name_block"] = function () { return '' };
Blockly.JavaScript["jg_s4d_themes_set_navigation_bar_color_to"] = function () { return '' };
Blockly.JavaScript["jg_s4d_themes_set_connect_to_discord_warning_color_to"] = function () { return '' };