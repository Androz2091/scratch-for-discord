<template>
    <div id="app">
        <NavBarComponent></NavBarComponent>
        <BlocklyComponent id="blocklySpace" :options="options" ref="foo"></BlocklyComponent>
    </div>
</template>

<script>

import NavBarComponent from "./components/NavigationBar.vue";
import BlocklyComponent from "./components/BlocklyComponent.vue";
import "./blocks/discord";
import "./prompt";

export default {
    name: "app",
    components: {
        BlocklyComponent,
        NavBarComponent
    },
    data() {
        return {
            options: {
                grid: {
                    spacing: 25,
                    length: 3,
                    colour: '#ccc',
                    snap: true
                },
                toolbox:
                `<xml>
                    <category name="Logic" colour="%{BKY_LOGIC_HUE}">
                    <block type="controls_if"></block>
                    <block type="logic_compare"></block>
                    <block type="logic_operation"></block>
                    <block type="logic_negate"></block>
                    <block type="logic_boolean"></block>
                    </category>
                    <category name="Loops" colour="%{BKY_LOOPS_HUE}">
                    <block type="controls_repeat_ext">
                        <value name="TIMES">
                        <block type="math_number">
                            <field name="NUM">10</field>
                        </block>
                        </value>
                    </block>
                    <block type="controls_whileUntil"></block>
                    </category>
                    <category name="Math" colour="%{BKY_MATH_HUE}">
                    <block type="math_number">
                        <field name="NUM">123</field>
                    </block>
                    <block type="math_arithmetic"></block>
                    <block type="math_single"></block>
                    </category>
                    <category name="Text" colour="%{BKY_TEXTS_HUE}">
                    <block type="text"></block>
                    <block type="text_length"></block>
                    <block type="text_print"></block>
                    </category>
                    <category name="Variables" custom="VARIABLE" >
                    </category>
                    <category name="Discord">
                        <block type="discord4stratch_init"></block>
                        <category name="Discord" colour="#7289DA">
                        <block type="discord4stratch_init"></block>
                        <block type="discord4stratch_client_login"></block>
                        <block type="discord4stratch_on_message"></block>
                    </category>
                    </category>
                </xml>`
            }
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
