<template>
     <b-nav-item-dropdown :text="$t('token.title')" right>
        <b-dropdown-item @click="loadToken">{{ $t('token.load') }}</b-dropdown-item>
        <b-dropdown-item @click="saveToken">{{ $t('token.save') }}</b-dropdown-item>
        <b-dropdown-item @click="deleteToken">{{ $t('token.delete') }}</b-dropdown-item>
    </b-nav-item-dropdown>
</template>

<script>
import localforage from "localforage";
import Swal from "sweetalert2";

export default {
    name: "tokenmodal",
    methods: {
        async deleteToken(){
            
let keys = await localforage.getItem("tokens")
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
                    title: this.$t("token.erros")
                  })
return 
}
                Swal.fire({
      title: this.$t("token.deletee.title"),
      html: `
        ${this.$t("token.deletee.text")}<br><br>
        <select class="custom-select" id="restore-select">
            ${keys.map((key) =>`<option><b>${key.replace("token-","")}</b></option>`)}
        </select>
      `,
      showCancelButton: true,
      cancelButtonText: this.$t("token.deletee.cancel"),
      confirmButtonText: this.$t("token.deletee.load"),
      preConfirm: async () => {
        const select = document.getElementById("restore-select");
        await localforage.removeItem(`token-${select.value}`);
        let tokens = await localforage.getItem("tokens")
         function arrayRemove(arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }
    if(arrayRemove(tokens,`token-${select.value}`).length === 0){
        await localforage.setItem("tokens",null)
    }else{
        await localforage.setItem("tokens",arrayRemove(tokens,`token-${select.value}`))
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
                  let a = this.$t("token.deletee.success")
                  Toast.fire({
                    icon: 'success',
                    title: `${a}`
                  })
      },
    })
        },
        async loadToken() {    
let keys = await localforage.getItem("tokens")
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
                    title: this.$t("token.erros")
                  })
return 
}
                Swal.fire({
      title: this.$t("token.load2"),
      html: `
        ${this.$t("token.text4")}<br><br>
        <select class="custom-select" id="restore-select">
            ${keys.map((key) =>`<option><b>${key.replace("token-","")}</b></option>`)}
        </select>
      `,
      showCancelButton: true,
      cancelButtonText: this.$t("token.cancels"),
      confirmButtonText: this.$t("token.loadss"),
      preConfirm: async () => {
        const select = document.getElementById("restore-select");
        const token = await localforage.getItem(`token-${select.value}`);
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
                  let a = this.$t("token.successs")
                  Toast.fire({
                    icon: 'success',
                    title: `${a}`
                  })
        navigator.clipboard.writeText(token)
      },
    })
           
        },
        saveToken(){
            Swal.fire({
                title: this.$t("token.text2"),
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: this.$t("token.save2"),
                showLoaderOnConfirm: true,
                preConfirm: async (file) => {
                    let maybe = await localforage.getItem("token-"+file)
                    if(maybe === null){
                        return file
                    }else{ 
                        Swal.showValidationMessage(this.$t("token.error"))
                    }
                },
                allowOutsideClick: () => !Swal.isLoading()
                }).then((result2) => {
                if (result2.isConfirmed) {
                let name = result2.value
                //name
                Swal.fire({
                title: this.$t("token.text3"),
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: this.$t("token.save3"),
                showLoaderOnConfirm: true,
                preConfirm: (file2) => {
                        return file2
                },
                allowOutsideClick: () => !Swal.isLoading()
                }).then(async (result) => {
                if (result.isConfirmed) {
                    let token = result.value
                    //token
                    await localforage.setItem(`token-${name}`,token)
                    let tokens = await localforage.getItem("tokens")
                    if(tokens === null){
                         await localforage.setItem("tokens",[`token-${name}`])
                    }else{
                        tokens.push(`token-${name}`)
                        await localforage.setItem("tokens",tokens)
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
                  let a = this.$t("token.success")
                  Toast.fire({
                    icon: 'success',
                    title: `${a}${name}`
                  })
                }
                })
                }
                })
        }
    }
}
</script>
