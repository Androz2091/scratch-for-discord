<template>
    <b-modal id="code-modal" :title="$t('code_modal.title')" ok-only>
        <textarea disabled :value="content" id="code">
        </textarea>
  </b-modal>
</template>

<script>

export default {
    name: "editmenu",
    computed: {
        content: function(){
            return this.getWorkspaceCode();
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
