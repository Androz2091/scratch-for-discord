<template>
        <b-nav-item @click="credit">Credit</b-nav-item>
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
                width: "700px",
                title: 'Androz, snowflake107 - Original S4D\n7coil - Discord Blocks\nJose and mrredo - Preview 454',
                text: 'frostzzone, RetroBTW, XL83, AHQ, JeremyGamer13, LimeNade, henpokpok, AlexCdDg, Eruption - Preview 469',
                showConfirmButton: true
            })
        },
    }
}
</script>