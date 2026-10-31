<template>
    <nav class="navbar navbar-expand-lg navbar-dark px-3" style="background-color:#161719;user-select:none;">
        <a class="navbar-brand d-flex align-items-center gap-2">
            <img src="/scratch.png" width="40" draggable="false" alt="">
            Scratch For Discord
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-collapse" aria-controls="nav-collapse" aria-expanded="false">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="nav-collapse">
            <ul class="navbar-nav">
                <FileMenu></FileMenu>
                <EditMenu></EditMenu>
                <LanguageMenu></LanguageMenu>
                <ExamplesMenu></ExamplesMenu>
                <li class="nav-item">
                    <a class="nav-link" href="https://androz2091.gitbook.io/scratch-for-discord/" target="_blank">{{ $t("help") }}</a>
                </li>
            </ul>
            <div class="btn-group ms-auto">
                <span class="btn btn-secondary" contenteditable="true" spellcheck="false" id="docName" ref="docNameElement" @input="rename">{{ docName }}</span>
                <button id="v-step-1" class="btn btn-secondary" :disabled="!store.valid" data-bs-toggle="modal" data-bs-target="#run-modal" :title="$t('run_modal.start')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/></svg>
                </button>
                <button id="v-step-2" class="btn btn-secondary" :disabled="!store.valid" @click="exportToCode" :title="$t('download.title')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/></svg>
                </button>
            </div>
        </div>
    </nav>
    <CodeModal></CodeModal>
    <RunModal></RunModal>
</template>

<script setup>
import { ref, useTemplateRef, watch } from "vue";
import { useI18n } from "vue-i18n";
import JSZip from "jszip";
import Swal from "sweetalert2";
import store from "../../store";
import { getWorkspaceCode, getWorkspaceXml } from "../../workspace";
import { downloadBlob } from "./download";
import FileMenu from "./FileMenu.vue";
import EditMenu from "./EditMenu.vue";
import LanguageMenu from "./LanguageMenu.vue";
import ExamplesMenu from "./ExamplesMenu.vue";
import CodeModal from "./CodeModal.vue";
import RunModal from "./RunModal.vue";

const { t } = useI18n();

// The name is only rendered when it changes from outside, so typing doesn't move the cursor
const docName = ref(store.docName);
const docNameElement = useTemplateRef("docNameElement");
watch(() => store.docName, (name) => {
    if (docNameElement.value?.textContent !== name) docName.value = name;
    document.title = `Scratch For Discord - ${name}`;
}, { immediate: true });

function rename(event) {
    store.docName = event.target.textContent;
}

async function exportToCode() {
    const steps = ["unzipFile", "node", "intents", "start", "done"].map((step) => `<li>${t(`download.content.${step}`)}</li>`).join("");
    const result = await Swal.fire({
        title: t("download.title"),
        html: `<h6>${t("download.content.title")}</h6><ul class="text-start">${steps}</ul>`,
        showCancelButton: true,
        cancelButtonText: t("download.cancel"),
        confirmButtonText: t("download.confirm")
    });
    if (!result.isConfirmed) return;
    const zip = new JSZip();
    zip.file("blocks.xml", getWorkspaceXml());
    zip.file("bot.js", getWorkspaceCode());
    zip.file(".replit", "run = \"npm start\"");
    zip.file("package.json", JSON.stringify({
        name: "scratch-for-discord-bot",
        version: "1.0.0",
        main: "bot.js",
        scripts: {
            start: "node ."
        },
        engines: {
            node: ">=18"
        },
        dependencies: {
            "discord.js": "^14.28.0",
            "easy-json-database": "^1.5.1"
        }
    }, null, 4));
    downloadBlob(await zip.generateAsync({ type: "blob" }), `${store.docName}.zip`);
}
</script>
