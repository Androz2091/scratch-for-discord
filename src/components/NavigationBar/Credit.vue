<template>
        <b-nav-item @click="credit">{{ $t('Credit') }}</b-nav-item>
</template>

<script>
// import localforage from 'localforage';
import Swal from "sweetalert2";
export default {
    name: "credit",
    methods: {
        credit() {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Androz, snowflake107 - original s4d\n7coil - Discord blocks\nJose and mrredo - Preview 454',
                text: 'frostzzone, RetroBTW, XL83, AHQ, henpokpok, AlexCdDg, Eruption - Preview 469',
                showConfirmButton: true
            })
        },
    }
}
</script>