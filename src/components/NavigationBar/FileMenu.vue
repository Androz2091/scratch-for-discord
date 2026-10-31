<template>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{{ $t("file.title") }}</a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" @click.prevent="fileInput.click()">{{ $t("file.open") }}</a></li>
            <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#code-modal">{{ $t("file.javascript") }}</a></li>
            <li><a class="dropdown-item" href="#" @click.prevent="save">{{ $t("file.save") }}</a></li>
        </ul>
        <input hidden ref="fileInput" @change="load" type="file" accept=".s4d">
    </li>
</template>

<script setup>
import { useTemplateRef } from "vue";
import { useI18n } from "vue-i18n";
import JSZip from "jszip";
import store from "../../store";
import { toast } from "../../dialogs";
import { getWorkspaceXml, loadXml } from "../../workspace";
import { removeAutosave } from "../../autosave";
import { downloadBlob } from "./download";

const { t } = useI18n();
const fileInput = useTemplateRef("fileInput");

async function load() {
    const file = fileInput.value.files[0];
    if (!file) return;
    fileInput.value.value = "";
    store.docName = file.name.replace(/\.s4d$/, "");
    try {
        const zip = await JSZip.loadAsync(file);
        loadXml(await zip.file("blocks.xml").async("string"));
    } catch {
        toast.fire({ icon: "error", title: t("load.error") });
    }
}

async function save() {
    const zip = new JSZip();
    zip.file("blocks.xml", getWorkspaceXml());
    downloadBlob(await zip.generateAsync({ type: "blob" }), `${store.docName}.s4d`);
    await removeAutosave(store.docName);
}
</script>
