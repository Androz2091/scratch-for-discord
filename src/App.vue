<template>
    <div id="app">
        <NavBarComponent></NavBarComponent>
        <BlocklyComponent id="blocklySpace" :options="options" ref="foo"></BlocklyComponent>
    </div>
</template>

<script>

import Blockly from "blockly";
import NavBarComponent from "./components/NavigationBar.vue";
import BlocklyComponent from "./components/BlocklyComponent.vue";
import "./blocks/discord/base";
import "./blocks/discord/client";
import "./blocks/discord/events";
import "./blocks/discord/guilds";
import "./blocks/discord/members";
import "./blocks/discord/message";
import "./blocks/discord/roles";
import "./prompt";

import * as en from "blockly/msg/en";
import * as es from "blockly/msg/es";
import * as ru from "blockly/msg/ru";
import * as fr from "blockly/msg/fr";
import * as enCustom from "./locales/en";
import * as esCustom from "./locales/es";
import * as ruCustom from "./locales/ru";
import * as frCustom from "./locales/fr";

export default {
    name: "app",
    components: {
        BlocklyComponent,
        NavBarComponent
    },
    methods: {
        reloadWorkspace(){
            const workspace = this.$store.state.workspace;
            const dom = Blockly.Xml.workspaceToDom(workspace);
            workspace.dispose();
            const newWorkspace = Blockly.inject(document.getElementById("blocklyDiv"), this.options);
            Blockly.Xml.domToWorkspace(dom, newWorkspace);
            this.$store.commit("setWorkspace", {
                workspace: newWorkspace
            });
            return workspace;
        },
        changeLanguage(locale, reloadWorkspace = true){
            switch (locale) {
                case "en":
                    Blockly.setLocale(en);
                    enCustom(Blockly);
                    break;
                case "es":
                    Blockly.setLocale(es);
                    esCustom(Blockly);
                    break;
                case "ru":
                    Blockly.setLocale(ru);
                    ruCustom(Blockly);
                    break;
                case "fr":
                    Blockly.setLocale(fr);
                    frCustom(Blockly);
                    break;
                default:
                    break;
            }
            if(reloadWorkspace) this.reloadWorkspace();
        }
    },
    data() {
        return {
            options: {
                renderer: "zelos",
                grid: {
                    spacing: 25,
                    length: 3,
                    colour: "#ccc",
                    snap: true
                },
                toolbox: getXML()
            }
        }
    }
}

function getXML() {
    return `
    <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
    <category name="Logic" colour="#5b80a5">
        <block type="controls_if" />
        <block type="logic_compare">
            <field name="OP">EQ</field>
        </block>
        <block type="logic_operation">
            <field name="OP">AND</field>
        </block>
        <block type="logic_negate" />
        <block type="logic_boolean">
            <field name="BOOL">TRUE</field>
        </block>
        <block type="logic_null" />
        <block type="logic_ternary" />
    </category>
    <category name="Loops" colour="#5ba55b">
        <block type="controls_repeat_ext">
            <value name="TIMES">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="controls_whileUntil">
            <field name="MODE">WHILE</field>
        </block>
        <block type="controls_for">
            <field name="VAR" id="0D\`BNNIb2nl,{_^LQ.ro">i</field>
            <value name="FROM">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="TO">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
            <value name="BY">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
        <block type="controls_forEach">
            <field name="VAR" id="_U%=Z#c;|yP-K;;aC%(K">j</field>
        </block>
        <block type="controls_flow_statements">
            <field name="FLOW">BREAK</field>
        </block>
    </category>
    <category name="Math" colour="#5b67a5">
        <block type="math_number">
            <field name="NUM">0</field>
        </block>
        <block type="math_arithmetic">
            <field name="OP">ADD</field>
            <value name="A">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="B">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
        <block type="math_single">
            <field name="OP">ROOT</field>
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM">9</field>
                </shadow>
            </value>
        </block>
        <block type="math_trig">
            <field name="OP">SIN</field>
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM">45</field>
                </shadow>
            </value>
        </block>
        <block type="math_constant">
            <field name="CONSTANT">PI</field>
        </block>
        <block type="math_number_property">
            <mutation divisor_input="false" />
            <field name="PROPERTY">EVEN</field>
            <value name="NUMBER_TO_CHECK">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="math_round">
            <field name="OP">ROUND</field>
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM">3.1</field>
                </shadow>
            </value>
        </block>
        <block type="math_on_list">
            <mutation op="SUM" />
            <field name="OP">SUM</field>
        </block>
        <block type="math_modulo">
            <value name="DIVIDEND">
                <shadow type="math_number">
                    <field name="NUM">64</field>
                </shadow>
            </value>
            <value name="DIVISOR">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="math_constrain">
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">50</field>
                </shadow>
            </value>
            <value name="LOW">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="HIGH">
                <shadow type="math_number">
                    <field name="NUM">100</field>
                </shadow>
            </value>
        </block>
        <block type="math_random_int">
            <value name="FROM">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="TO">
                <shadow type="math_number">
                    <field name="NUM">100</field>
                </shadow>
            </value>
        </block>
        <block type="math_random_float" />
    </category>
    <category name="Text" colour="#5ba58c">
        <block type="text">
            <field name="TEXT" />
        </block>
        <block type="text_join">
            <mutation items="2" />
        </block>
        <block type="text_append">
            <field name="VAR" id="X4zy!98/2$-ur;|L{NlX">item</field>
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT" />
                </shadow>
            </value>
        </block>
        <block type="text_length">
            <value name="VALUE">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
        </block>
        <block type="text_isEmpty">
            <value name="VALUE">
                <shadow type="text">
                    <field name="TEXT" />
                </shadow>
            </value>
        </block>
        <block type="text_indexOf">
            <field name="END">FIRST</field>
            <value name="VALUE">
                <block type="variables_get">
                    <field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>
                </block>
            </value>
            <value name="FIND">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
        </block>
        <block type="text_charAt">
            <mutation at="true" />
            <field name="WHERE">FROM_START</field>
            <value name="VALUE">
                <block type="variables_get">
                    <field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>
                </block>
            </value>
        </block>
        <block type="text_getSubstring">
            <mutation at1="true" at2="true" />
            <field name="WHERE1">FROM_START</field>
            <field name="WHERE2">FROM_START</field>
            <value name="STRING">
                <block type="variables_get">
                    <field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>
                </block>
            </value>
        </block>
        <block type="text_changeCase">
            <field name="CASE">UPPERCASE</field>
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
        </block>
        <block type="text_trim">
            <field name="MODE">BOTH</field>
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
        </block>
        <block type="text_print">
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
        </block>
        <block type="text_prompt_ext">
            <mutation type="TEXT" />
            <field name="TYPE">TEXT</field>
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
        </block>
    </category>
    <category name="Lists" colour="#745ba5">
        <block type="lists_create_with">
            <mutation items="0" />
        </block>
        <block type="lists_create_with">
            <mutation items="3" />
        </block>
        <block type="lists_repeat">
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM">5</field>
                </shadow>
            </value>
        </block>
        <block type="lists_length" />
        <block type="lists_isEmpty" />
        <block type="lists_indexOf">
            <field name="END">FIRST</field>
            <value name="VALUE">
                <block type="variables_get">
                    <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                </block>
            </value>
        </block>
        <block type="lists_getIndex">
            <mutation statement="false" at="true" />
            <field name="MODE">GET</field>
            <field name="WHERE">FROM_START</field>
            <value name="VALUE">
                <block type="variables_get">
                    <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                </block>
            </value>
        </block>
        <block type="lists_setIndex">
            <mutation at="true" />
            <field name="MODE">SET</field>
            <field name="WHERE">FROM_START</field>
            <value name="LIST">
                <block type="variables_get">
                    <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                </block>
            </value>
        </block>
        <block type="lists_getSublist">
            <mutation at1="true" at2="true" />
            <field name="WHERE1">FROM_START</field>
            <field name="WHERE2">FROM_START</field>
            <value name="LIST">
                <block type="variables_get">
                    <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                </block>
            </value>
        </block>
        <block type="lists_split">
            <mutation mode="SPLIT" />
            <field name="MODE">SPLIT</field>
            <value name="DELIM">
                <shadow type="text">
                    <field name="TEXT">,</field>
                </shadow>
            </value>
        </block>
        <block type="lists_sort">
            <field name="TYPE">NUMERIC</field>
            <field name="DIRECTION">1</field>
        </block>
    </category>
    <category name="Colour" colour="#a5745b">
        <block type="colour_picker">
            <field name="COLOUR">#ff0000</field>
        </block>
        <block type="colour_random" />
        <block type="colour_rgb">
            <value name="RED">
                <shadow type="math_number">
                    <field name="NUM">100</field>
                </shadow>
            </value>
            <value name="GREEN">
                <shadow type="math_number">
                    <field name="NUM">50</field>
                </shadow>
            </value>
            <value name="BLUE">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="colour_blend">
            <value name="COLOUR1">
                <shadow type="colour_picker">
                    <field name="COLOUR">#ff0000</field>
                </shadow>
            </value>
            <value name="COLOUR2">
                <shadow type="colour_picker">
                    <field name="COLOUR">#3333ff</field>
                </shadow>
            </value>
            <value name="RATIO">
                <shadow type="math_number">
                    <field name="NUM">0.5</field>
                </shadow>
            </value>
        </block>
    </category>
    <sep />
    <category name="Variables" colour="#a55b80" custom="VARIABLE" />
    <category name="Functions" colour="#995ba5" custom="PROCEDURE" />
    <sep />
    <category name="Discord" colour="#7289DA">
        <block type="discord4stratch_init"></block>
        <block type="discord4stratch_client_login"></block>
        <label text="Events"></label>
        <block type="discord4stratch_on_message"></block>
        <block type="discord4stratch_on_connected"></block>
        <label text="Messages"></label>
        <block type="discord4stratch_message_content"></block>
        <block type="discord4stratch_message_author"></block>
        <block type="discord4stratch_message_guild"></block>
        <block type="discord4stratch_message_channel"></block>
        <label text="Bot"></label>
        <block type="discord4stratch_client_set_game"></block>
        <label text="Servers"></label>
        <block type="discord4stratch_get_guild"></block>
        <label text="Roles"></label>
        <block type="discord4stratch_get_role"></block>
        <block type="discord4stratch_add_role"></block>
        <label text="Members"></label>
        <block type="discord4stratch_get_member"></block>
    </category>
    </xml>`;
}
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

#blocklySpace {
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>
