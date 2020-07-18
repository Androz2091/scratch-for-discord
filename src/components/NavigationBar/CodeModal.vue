<template>
    <b-modal id="code-modal" :title="$t('code_modal.title')" ok-only>
        <textarea disabled :value="content" id="code">
        </textarea>
  </b-modal>
</template>

<script>
import beautify from "js-beautify";

export default {
    name: "editmenu",
    computed: {
        content: function(){
            return beautify.js(this.getWorkspaceCode(), {
                indent_size: 4,
                space_in_empty_paren: true
            });
        }
    }
}
</script>

<style>

#code {
    min-width: 100%;
    min-height: 100%;
}

#code-modal .modal-dialog {
    max-width: 100%;
    margin: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    display: flex;
    position: fixed;
    z-index: 100000;
}

</style>
