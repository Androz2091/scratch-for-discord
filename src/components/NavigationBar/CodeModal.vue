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

<style scoped>

#code {
    width: 100%;
    max-width:100%;
}

</style>
