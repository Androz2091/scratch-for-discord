<template>
    <b-nav-item-dropdown :text="$t('lang.title')" right>
        <b-dropdown-item @click="changeLanguage('en')">English (EN)</b-dropdown-item>
        <b-dropdown-item @click="changeLanguage('es')">Español (ES)</b-dropdown-item>
        <b-dropdown-item @click="changeLanguage('ru')">Русь (RU)</b-dropdown-item>
        <b-dropdown-item @click="changeLanguage('fr')">Français (FR)</b-dropdown-item>
    </b-nav-item-dropdown>
</template>

<script>
export default {
    name: "languagemenu",
    methods: {
        changeLanguage(locale){
            this.$store.commit("setLocale", {
                newLocale: locale
            });
            this.setLanguage(locale);
            this.reloadWorkspace();
        }
    }
}
</script>
