<template>
     <b-nav-item-dropdown :text="$t('toolbox.title')" right>
        <b-dropdown-item @click="hide">{{$t('toolbox.hide')}}</b-dropdown-item>
        <b-dropdown-item @click="show">{{$t('toolbox.show')}}</b-dropdown-item>
    </b-nav-item-dropdown>
</template>

<script>
import Blockly from "blockly";

export default {
    name: "filemenu",
    methods: {
        hide(){
        Blockly.getMainWorkspace().getToolbox().setVisible(false)
        },
        show(){
        Blockly.getMainWorkspace().getToolbox().setVisible(true)
        },
    }
}
</script>
