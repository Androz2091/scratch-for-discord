<template>
        <b-nav-item @click="changelog">Changelog</b-nav-item>
</template>



<script>
import Swal from "sweetalert2";
export default {
    name: "Changelog",
    methods: {
        changelog() {
            Swal.fire({
                position: 'center',
                icon: 'info',
                width: "700px",
                title: 'Scheduled Events!',
                text: 'Added scheduled events! It will we updated soon!',
                imageUrl: 'https://cdn.discordapp.com/attachments/898783648491397191/979041343542267954/unknown.png?size=4096',
                imageWidth: 475,
                imageHeight: 519,
                imageAlt: 'Custom image',
                confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Great!',
                confirmButtonAriaLabel: 'Thumbs up, great!',
            })
        },
    }
}
</script>
