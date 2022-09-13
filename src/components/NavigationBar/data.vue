<template>
    <b-nav-item-dropdown text="data" right>
        <b-dropdown-item @click="askForFile">Load data</b-dropdown-item>
        <input hidden @change="load" id="load-s4dData-code" type="file" accept=".zip,.data"/>
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
                document.querySelector("#load-s4dData-code").click();
            },
            dld() {
                this.$swal({
                    title: 'WARNING!',
                    text: 'this contains all your data including sensitive data like your forum password',
                    buttons: {
                        cancel: 'cancel',
                        continue: {
                            text: 'continue',
                            value: true
                        }
                    },
                    closeOnClickOutside: false
                }).then(result => {
                    if(typeof result == "object"){
                        return;
                    }
                    const zip = new JSZip();
                    localforage.keys().then(async(data) => {
                        let out = {}
                        for (let i = 0; i < data.length; i++) {
                            out[data[i]] = await localforage.getItem(data[i])
                        }
                        zip.file("localForage.json", JSON.stringify(out));
                        zip.generateAsync({
                            type: "blob"
                        })
                        .then((blob) => {
                            const a = document.createElement("a");
                            a.style = "display: none";
                            document.body.appendChild(a);
                            const url = window.URL.createObjectURL(blob);
                            a.href = url;
                            a.download = 's4d.data';
                            a.click();
                            window.URL.revokeObjectURL(url);
                            document.body.removeChild(a);
                        });
                    })
                });
            },
            load() {
                const file = document.getElementById("load-s4dData-code").files[0];
                const reader = new FileReader();
                reader.onload = (e) => {
                    JSZip.loadAsync(e.target.result).then((data) => {
                        data.file("localForage.json").async("string").then((content) => {
                            content = JSON.parse(content)
                            const conl = Object.getOwnPropertyNames(content);
                            for (let i = 0; i < conl.length; i++) {
                                localforage.setItem(conl[i], content[conl[i]], function (err) {
                                    if (err) {
                                        console.warn(err)
                                    }
                                })
                            }
                        })
                    })
                };
                if (file) {
                    reader.readAsArrayBuffer(file);
                    document.getElementById("load-s4dData-code").setAttribute("value", "");
                }
            }
        }
    }
</script>