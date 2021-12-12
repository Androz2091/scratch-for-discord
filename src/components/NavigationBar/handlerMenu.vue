<template>
     <b-nav-item-dropdown :text="$t('handler.title')" right>
        <b-dropdown-item @click="disable">{{$t('handler.disable')}}</b-dropdown-item>
        <b-dropdown-item @click="enable">{{$t('handler.enable')}}</b-dropdown-item>
    </b-nav-item-dropdown>
</template>

<script>
// import localforage from 'localforage';
import Swal from "sweetalert2";

export default {
    name: "filemenu",
    methods: {
        disable() {
            // localforage.setItem('handler', false)
            localStorage.setItem('handler', false)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Succesfully disabled handler, refresh the website for changes to work',
                showConfirmButton: false,
                timer: 3500
            })
        },
        enable() {
            // localforage.setItem('handler', true)
            localStorage.setItem('handler', true)
                        Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Succesfully enabled handler, refresh the website for changes to work',
                showConfirmButton: false,
                timer: 3500
            })
        },
    }
}
</script>
