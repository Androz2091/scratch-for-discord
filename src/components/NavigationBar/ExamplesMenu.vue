<template>
    <li class="nav-item dropdown" id="v-step-0">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{{ $t("examples.title") }}</a>
        <ul class="dropdown-menu">
            <li v-for="example in Object.keys(examples)" :key="example">
                <a class="dropdown-item" href="#" @click.prevent="load(example)">{{ $t(`examples.${example.replace("-", "_")}`) }}</a>
            </li>
        </ul>
    </li>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { dialog, toast } from "../../dialogs";
import { loadXml } from "../../workspace";
import pingPong from "../../examples/ping-pong.xml?raw";
import commandParsing from "../../examples/command-parsing.xml?raw";
import leveling from "../../examples/leveling.xml?raw";

const examples = {
    "ping-pong": pingPong,
    "command-parsing": commandParsing,
    "leveling": leveling
};

const { t } = useI18n();

async function load(example) {
    const result = await dialog.fire({
        title: t("examples.confirm.title"),
        text: t("examples.confirm.text"),
        showCancelButton: true,
        showDenyButton: true,
        cancelButtonText: t("examples.confirm.cancel"),
        denyButtonText: t("examples.confirm.no"),
        confirmButtonText: t("examples.confirm.yes"),
        allowOutsideClick: false
    });
    if (result.isDismissed) return;
    loadXml(examples[example], { clear: result.isConfirmed });
    toast.fire({ icon: "success", title: t("examples.loaded", { example }) });
}
</script>
