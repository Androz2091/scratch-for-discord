<template>
    <b-nav-item-dropdown :text="$t('edit.title')" right>
        <b-dropdown-item @click="undo">{{ $t('edit.undo') }}</b-dropdown-item>
        <b-dropdown-item @click="redo">{{ $t('edit.redo') }}</b-dropdown-item>
        <b-dropdown-item @click="clear">{{ $t('edit.clear', {
            blockCount
        }) }}</b-dropdown-item>
        <b-dropdown-item @click="cleanUp">{{ $t('edit.cleanup') }}</b-dropdown-item>
        <b-dropdown-item @click="clearDB">{{ $t('edit.cleardb') }}</b-dropdown-item>
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
