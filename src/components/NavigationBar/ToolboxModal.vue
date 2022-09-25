<template>
     <b-nav-item-dropdown :text="$t('toolbox.title')" right>
        <b-dropdown-item @click="hide">{{$t('toolbox.hide')}}</b-dropdown-item>
        <b-dropdown-item @click="show">{{$t('toolbox.show')}}</b-dropdown-item>
    </b-nav-item-dropdown>
</template>

<script>

export default {
    name: "filemenu",
    methods: {
        hide(){
            window.blocklyWorkspaceThatIneedtoUseForThingsLaigwef9o8wifnwp4e.getToolbox().setVisible(false)
        },
        show(){
            window.blocklyWorkspaceThatIneedtoUseForThingsLaigwef9o8wifnwp4e.getToolbox().setVisible(true)
        },
    }
}
</script>
