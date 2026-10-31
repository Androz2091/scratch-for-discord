<template>
    <div>
        <div class="blocklyDiv" ref="blocklyDiv"></div>
        <div v-if="!store.hasLogin" class="alert alert-warning login-warning" role="alert">
            {{ $t("warnings.login_block") }}
        </div>
    </div>
</template>

<script setup>
import { onMounted, useTemplateRef } from "vue";
import { useI18n } from "vue-i18n";
import store from "../store";
import { createWorkspace } from "../workspace";
import { restoreAutosave } from "../autosave";

const blocklyDiv = useTemplateRef("blocklyDiv");
const { t } = useI18n();

onMounted(() => {
    createWorkspace(blocklyDiv.value);
    restoreAutosave(t);
});
</script>

<style scoped>
.blocklyDiv {
    position: absolute;
    inset: 0;
    text-align: left;
}

.login-warning {
    position: absolute;
    right: 70px;
    bottom: 20px;
    max-width: 400px;
    margin: 0;
}
</style>
