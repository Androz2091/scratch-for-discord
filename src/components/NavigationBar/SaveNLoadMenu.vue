<template>
    <b-nav-item-dropdown :text="$t('save.title')" right>
        <input type="checkbox" id="checked" v-model="checked" @change="save(checked)">
        <label for='i1'>Auto Save</label>
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
