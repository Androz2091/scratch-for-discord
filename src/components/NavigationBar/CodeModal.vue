<template>
    <div class="modal fade" id="code-modal" tabindex="-1" ref="modal" aria-labelledby="code-modal-title" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="code-modal-title">{{ $t("code_modal.title") }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <textarea readonly :value="code" class="form-control font-monospace h-100"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, useTemplateRef } from "vue";
import { getWorkspaceCode } from "../../workspace";

const modal = useTemplateRef("modal");
const code = ref("");

onMounted(() => {
    modal.value.addEventListener("show.bs.modal", () => {
        code.value = getWorkspaceCode();
    });
});
</script>
