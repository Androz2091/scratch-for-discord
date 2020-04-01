<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand>Scratch4Discord</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item-dropdown text="File" right>
                    <b-dropdown-item href="#">Open File...</b-dropdown-item>
                    <b-dropdown-item @click="viewCode">View javascript code</b-dropdown-item>
                    <b-dropdown-item href="#">Save</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown text="Edit" right>
                    <b-dropdown-item @click="undo">Undo</b-dropdown-item>
                    <b-dropdown-item @click="redo">Redo</b-dropdown-item>
                    <b-dropdown-item @click="clear">Clear {{blockCount}} blocks</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item @click="changeLanguage">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto"></b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import BlocklyJS from "blockly/javascript";

export default {
    name: "navbar",
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
        viewCode() {
			alert(BlocklyJS.workspaceToCode(this.$store.state.workspace))
            /*const textarea = document.createElement("textarea");
            textarea.value = BlocklyJS.workspaceToCode(this.$store.state.workspace);
            this.$swal({
                content: textarea
            });*/
        },
        changeLanguage(){
            this.$loadScript("msg/js/fr.js");
        }
    }
}
</script>
