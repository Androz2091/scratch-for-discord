<template>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{{ $t("lang.title") }}</a>
        <ul class="dropdown-menu">
            <li v-for="(locale, code) in locales" :key="code">
                <a class="dropdown-item" :class="{ active: code === store.locale }" href="#" @click.prevent="changeLanguage(code)">{{ locale.name }}</a>
            </li>
        </ul>
    </li>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import locales from "../../locales";
import store from "../../store";
import { reloadWorkspace, setLanguage } from "../../workspace";

const { locale } = useI18n({ useScope: "global" });

function changeLanguage(code) {
    setLanguage(code, locale);
    reloadWorkspace();
}
</script>
