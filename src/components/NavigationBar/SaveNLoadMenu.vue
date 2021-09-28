<template>
    <b-nav-item-dropdown :text="$t('save.title')" right>

    </b-nav-item-dropdown>
</template>

<script>
import localforage from "localforage";
export default {
    name: "SaveAndLoad",
    methods: {
        load(checked){
            localforage.setItem('ssaavvee', checked)
        },
        save(checked2){
            localforage.setItem('llooaadd', checked2)
        },
    },
    data() {
        return{checked:true,checked2:true}
    }
}
</script>
