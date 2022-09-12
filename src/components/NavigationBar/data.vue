<template>
    <b-nav-item-dropdown text="data" right>
        <b-dropdown-item @click="askForFile">Load data</b-dropdown-item>
        <input hidden @change="load" id="load-code" type="file" accept=".s4dData"/>
        <b-dropdown-item @click="dld">Download data</b-dropdown-item>
    </b-nav-item-dropdown>
</template>

<script>
    import JSZip from "jszip";
    import localforage from "localforage";
    export default {
        name: "userDataExport",
        computed: {
            blockCount: function() {
                return this.$store.state.workspace ? this.$store.state.workspace.getAllBlocks().length : 0;
            }
        },
        methods: {
            askForFile(){
                document.querySelector("#load-code").click();
            },
            dld() {
                this.$swal({
                    title: this.$t('WARNING!'),
                    text: this.$t('this contains all your data including sensitive data like your forum password'),
                    buttons: {
                        cancel: this.$t('cancel'),
                        continue: {
                            text: this.$t('continue'),
                            value: true
                        }
                    },
                    closeOnClickOutside: false
                }).then(result => {
                    if(typeof result == "object"){
                        return;
                    }
                    const zip = new JSZip();
                    console.log(zip)
                    localforage.keys().then((data) => {
                        let out = {}
                        for (let i = 0; i < data.length; i++) {
                            localforage.getItem(data[i]).then((key) => {
                                out[data[i]] = key
                            })
                        }
                        console.log(JSON.stringify(out), out)
                    })
                });
            },
            load() {
                this.$swal({
                    title: this.$t('file.confirm.title'),
                    text: this.$t('file.confirm.text'),
                    buttons: {
                        cancel: this.$t('file.confirm.cancel'),
                        no: {
                            text: this.$t('file.confirm.no'),
                            value: false,
                            className: "red-button"
                        },
                        yes: {
                            text: this.$t('file.confirm.yes'),
                            value: true
                        }
                    },
                    closeOnClickOutside: false
                }).then(result => {
                    if(typeof result == "object"){
                        return;
                    } else if (result) {
                    this.$store.state.workspace.getAllBlocks().forEach((block) => block.dispose());
                    }
                    const file = document.getElementById("load-code").files[0];
                    const documentName = file.name.split(".").slice(0, file.name.split(".").length-1);
                    document.querySelector("#docName").textContent = documentName;
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        JSZip.loadAsync(e.target.result).then((data) => {
                            if (data.file("blocks.xml")) {
                                return data.file("blocks.xml").async("string")
                            }
                        }).then((text) => {
                            console.log(text)
                        }).catch((err) => {
                            this.$toast.open({
                                message: this.$t('load.error'),
                                type: "error",
                                dismissible: true,
                                duration: 10000
                           });
                            console.warn("An error occurred when loading a file!", String(err).substring(0, 250))
                        });
                    };
                    if (file) {
                        reader.readAsArrayBuffer(file);
                        document.getElementById("load-code").setAttribute("value", "");
                    }
                });
            }
        }
    }
</script>