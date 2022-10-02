import Blockly from "blockly/core";

function hexToRgb(hex) {
    let arrBuff = new ArrayBuffer(4);
    let vw = new DataView(arrBuff);
    vw.setUint32(0, parseInt(hex, 16), false);
    let arrByte = new Uint8Array(arrBuff);
    return [arrByte[1], arrByte[2], arrByte[3]];
}
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

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
        const elements = document.getElementsByClassName("navbar-nav ml-auto").item(0).getElementsByTagName("button")
        for (let i = 0; i < elements.length; i++) {
            let current = elements.item(i)
            if (current.getAttribute("style") == null) continue
            current.setAttribute("style", String(current.getAttribute("style")).replace(/border-right-color: rgb\([0-9]{1,3}, [0-9]{1,3}, [0-9]{1,3}\)/mi, `border-right-color: ${color}`))
        }
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
Blockly.Blocks["jg_s4d_themes_set_navigation_bar_button_color_to"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "set navigation bar button color to %1 %2 set extra buttons to grayscale color %3",
                "args0": [
                    {
                        "type": "field_input",
                        "name": "COLOR",
                        "text": "#6c757d"
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "field_input",
                        "name": "COLOR2",
                        "text": "60"
                    }
                ],
                "inputsInline": false,
                "previousStatement": null,
                "nextStatement": null,
                "colour": "#b25ef2",
                "tooltip": "Set the Navigation Bar Button color at the top of the page to a hex color. This also includes the block counter."
            }
        );
    },
    onchange: function () {
        if (!this.isEnabled()) return
        const color = String(this.getFieldValue("COLOR")).toUpperCase().substring(0, 7)
        const grayColor = Number(this.getFieldValue("COLOR2"))
        let navbarColor = document.getElementById("navSpace").style["background-color"].replace("rgb(", "").replace(")", "")
        if (navbarColor.startsWith("#")) {
            navbarColor = hexToRgb(navbarColor.substring(1))
        } else {
            const navbarArray = []
            const check = navbarColor.match(/[0-9]{1,3}/mig)
            if (check != null) {
                check.forEach(item => {
                    navbarArray.push(Number(item))
                })
                navbarColor = navbarArray
            } else {
                navbarColor = [0, 0, 0]
            }
        }
        const navbarE = document.getElementsByClassName("navbar-nav ml-auto").item(0)
        let elements = navbarE.getElementsByClassName("btn btn-secondary")
        for (let i = 0; i < elements.length; i++) {
            let current = elements.item(i)
            if (current.getAttribute("style") == null) continue
            if (current.getAttribute("style").includes(`background-color: ${color}`)) continue
            current.setAttribute("style", current.getAttribute("style") + `background-color: ${color} !important;border-color: ${color} !important;`)
        }
        elements = navbarE.getElementsByClassName("btn btn-secondary disabled")
        for (let i = 0; i < elements.length; i++) {
            let current = elements.item(i)
            if (current.getAttribute("style") == null) continue
            if (current.getAttribute("style").includes(`background-color: ${color}`)) continue
            const rgb = hexToRgb(color.substring(1))
            const newColor = rgbToHex(((rgb[0] + navbarColor[0]) / 2), ((rgb[1] + navbarColor[1]) / 2), ((rgb[2] + navbarColor[2]) / 2))
            current.setAttribute("style", current.getAttribute("style") + `background-color: ${newColor} !important;border-color: ${newColor} !important;`)
        }
        document.getElementById("themeSwitchingLD").style.filter = `invert(${grayColor / 100})`
        const col = (grayColor / 100) * 255
        const textpar = document.getElementById("block-counter")
        if (textpar != null && textpar.style != null) textpar.style.color = `rgb(${col}, ${col}, ${col})`
    }
}
Blockly.Blocks["jg_s4d_themes_with_background_style_set_back_color_to_set_style_color_to"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "with background style %1 %2 set back color to %3 %4 set style color to %5",
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "STYLE",
                        "options": [
                            [
                                "dotted",
                                'dot'
                            ],
                            [
                                "grid",
                                'grid'
                            ],
                            [
                                "N/A",
                                'none'
                            ]
                        ],
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "field_input",
                        "name": "COLOR1",
                        "text": "#1e1e1e"
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "field_input",
                        "name": "COLOR2",
                        "text": "#cccccc"
                    }
                ],
                "inputsInline": false,
                "previousStatement": null,
                "nextStatement": null,
                "colour": "#b25ef2",
                "tooltip": "Set the background of the workspace to a certain style, then set the background's color and the background element's color."
            }
        );
    },
    onchange: function () {
        if (!this.isEnabled()) return
        const STYLE = this.getFieldValue("STYLE")
        const BGCOLOR = this.getFieldValue("COLOR1").substring(0, 7)
        const bg = document.getElementsByClassName("blocklyMainBackground").item(0)
        if (bg == null) return
        if (STYLE == "none") {
            bg.setAttribute("style", `fill: ${BGCOLOR};`)
        } else if (STYLE == "dot") {
            bg.setAttribute("style", `fill: url(#defaultBlocklyGridPattern);`)
        }
    }
}
Blockly.JavaScript["jg_s4d_themes_top_name_block"] = function () { return '' };
Blockly.JavaScript["jg_s4d_themes_set_navigation_bar_color_to"] = function () { return '' };
Blockly.JavaScript["jg_s4d_themes_set_connect_to_discord_warning_color_to"] = function () { return '' };
Blockly.JavaScript["jg_s4d_themes_set_navigation_bar_button_color_to"] = function () { return '' };
Blockly.JavaScript["jg_s4d_themes_with_background_style_set_back_color_to_set_style_color_to"] = function () { return '' };