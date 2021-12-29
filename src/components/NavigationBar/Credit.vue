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
                icon: 'info',
                title: 'Androz, snowflake107 - original s4d\n\n7coil - Discord blocks\n\nJose and mrredo - Preview 454',
                text: 'frostzzone, RetroBTW, XL83, ahq, henpokpok, AlexCdDg, Eruption - Preview 469',
                showConfirmButton: true
            })
        },
    }
}
</script>