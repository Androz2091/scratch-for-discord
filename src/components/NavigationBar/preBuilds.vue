<template>
     <b-nav-item-dropdown :text="$t('prebuild.title')" right>
        <b-dropdown-item @click="loadToken">{{ $t('prebuild.load') }}</b-dropdown-item>
        <b-dropdown-item @click="saveToken">{{ $t('prebuild.save') }}</b-dropdown-item>
        <b-dropdown-item @click="deleteToken">{{ $t('prebuild.delete') }}</b-dropdown-item>
        <b-dropdown-item @click="downloadToken">{{ $t('prebuild.downloadd') }}</b-dropdown-item>
    </b-nav-item-dropdown>
</template>

<script>
import localforage from "localforage";
import Swal from "sweetalert2";
import Blockly from "blockly"
import JSZip from "jszip";
export default {
    name: "prebuildmodal",
    methods: {
        async downloadToken(){
            let keys = await localforage.getItem("prebuilds")
if(keys === null){
                        const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  Toast.fire({
                    icon: 'error',
                    title: this.$t("prebuild.erros")
                  })
return 
}
                Swal.fire({
      title: this.$t("prebuild.download.load2"),
      html: `
        ${this.$t("prebuild.download.text4")}<br><br>
        <select class="custom-select" id="restore-select">
            ${keys.map((key) =>`<option><b>${key.replace("prebuild-","")}</b></option>`)}
        </select>
      `,
      showCancelButton: true,
      cancelButtonText: this.$t("prebuild.download.cancels"),
      confirmButtonText: this.$t("prebuild.download.loadss"),
      preConfirm: async () => {
        const select = document.getElementById("restore-select");
        const token = await localforage.getItem(`prebuild-${select.value}`);
                            const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  let a = this.$t("prebuild.download.successs")
                  Toast.fire({
                    icon: 'success',
                    title: `${a}`
                  })
                   const zip = new JSZip();
            const fileName = `${select.value}.s4d`;
            zip.file("blocks.xml", token);
            zip.generateAsync({
                type: "blob"
            })
            .then((blob) => {
                const a = document.createElement("a");
                a.style = "display: none";
                document.body.appendChild(a);
                const url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = fileName;
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            });
      },
    })
           
        },
        async deleteToken(){
            
let keys = await localforage.getItem("prebuilds")
if(keys === null){
                        const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  Toast.fire({
                    icon: 'error',
                    title: this.$t("prebuild.erros")
                  })
return 
}
                Swal.fire({
      title: this.$t("prebuild.deletee.title"),
      html: `
        ${this.$t("prebuild.deletee.text")}<br><br>
        <select class="custom-select" id="restore-select">
            ${keys.map((key) =>`<option><b>${key.replace("prebuild-","")}</b></option>`)}
        </select>
      `,
      showCancelButton: true,
      cancelButtonText: this.$t("prebuild.deletee.cancel"),
      confirmButtonText: this.$t("prebuild.deletee.load"),
      preConfirm: async () => {
        const select = document.getElementById("restore-select");
        await localforage.removeItem(`prebuild-${select.value}`);
        let tokens = await localforage.getItem("prebuilds")
         function arrayRemove(arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }
    if(arrayRemove(tokens,`prebuild-${select.value}`).length === 0){
        await localforage.setItem("prebuilds",null)
    }else{
        await localforage.setItem("prebuilds",arrayRemove(tokens,`prebuild-${select.value}`))
    }
                            const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  let a = this.$t("prebuild.deletee.success")
                  Toast.fire({
                    icon: 'success',
                    title: `${a}`
                  })
      },
    })
        },
        async loadToken() {    
let keys = await localforage.getItem("prebuilds")
if(keys === null){
                        const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  Toast.fire({
                    icon: 'error',
                    title: this.$t("prebuild.erros")
                  })
return 
}
                Swal.fire({
      title: this.$t("prebuild.load2"),
      html: `
        ${this.$t("prebuild.text4")}<br><br>
        <select class="custom-select" id="restore-select">
            ${keys.map((key) =>`<option><b>${key.replace("prebuild-","")}</b></option>`)}
        </select>
      `,
      showCancelButton: true,
      cancelButtonText: this.$t("prebuild.cancels"),
      confirmButtonText: this.$t("prebuild.loadss"),
      preConfirm: async () => {
        const select = document.getElementById("restore-select");
        const token = await localforage.getItem(`prebuild-${select.value}`);
                            const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  let a = this.$t("prebuild.successs")
                  Toast.fire({
                    icon: 'success',
                    title: `${a}`
                  })
        Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(token), this.$store.state.workspace);
      },
    })
           
        },
        saveToken(){
            Swal.fire({
                title: this.$t("prebuild.text2"),
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: this.$t("prebuild.save2"),
                showLoaderOnConfirm: true,
                preConfirm: async (file) => {
                    let maybe = await localforage.getItem("prebuild-"+file)
                    if(maybe === null){
                        return file
                    }else{ 
                        Swal.showValidationMessage(this.$t("prebuild.error"))
                    }
                },
                allowOutsideClick: () => !Swal.isLoading()
                }).then(async (result2) => {
                if (result2.isConfirmed) {
                let name = result2.value
                     const xmlContent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(this.$store.state.workspace));
                    await localforage.setItem(`prebuild-${name}`,xmlContent)
                    let tokens = await localforage.getItem("prebuilds")
                    if(tokens === null){
                         await localforage.setItem("prebuilds",[`prebuild-${name}`])
                    }else{
                        tokens.push(`prebuild-${name}`)
                        await localforage.setItem("prebuilds",tokens)
                    }
                    const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  let a = this.$t("prebuild.success")
                  Toast.fire({
                    icon: 'success',
                    title: `${a}${name}`
                  })
                }
                })
        }
    }
}
</script>
