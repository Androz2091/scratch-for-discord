<template>
    <b-nav-item-dropdown :text="$t('edit.title')" right>
        <b-dropdown-item @click="undo">Undo</b-dropdown-item>
        <b-dropdown-item @click="redo">Redo</b-dropdown-item>
        <b-dropdown-item @click="clear">Delete {{ blockCount }} blocks</b-dropdown-item>
        <b-dropdown-item @click="clearGhost">Delete unused blocks</b-dropdown-item>
        <b-dropdown-item @click="cleanUp">Clean up blocks</b-dropdown-item>
    </b-nav-item-dropdown>
</template>

<script>

export default {
    name: "editmenu",
    computed: {
        blockCount: function() {
            return this.$store.state.workspace ? this.$store.state.workspace.getAllBlocks().length : 0;
        }
    },
    methods: {
        undo() {
            this.$store.state.workspace.undo(false);
        },
        redo() {
            this.$store.state.workspace.undo(true);
        },
        clearGhost(){
            var allBlocks = this.$store.state.workspace.getAllBlocks();
            var disabledBlocks = allBlocks.filter(function(block){return !block.isEnabled()})
            for(var i = 0;i < disabledBlocks.length; i++) disabledBlocks[i].dispose();
        },
        clear() {
            this.$store.state.workspace.getAllBlocks().forEach((block) => block.dispose());
        },
        cleanUp(){
            this.$store.state.workspace.cleanUp();
        },
        clearDB(){
            localStorage.setItem('easyjsondatabase', '{}');
        }
    }
}
</script>
