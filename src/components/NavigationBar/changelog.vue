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
                html:"<h2>You can now use alt+t and alt+n to spawn a text or number block!</h2> <br> <h2><b>Scheduled Events!</b></h2><br><img src='https://cdn.discordapp.com/attachments/898783648491397191/979041343542267954/unknown.png?size=4096' width='475' height='519'> <br>" +
                " <h3><b>Added scheduled events! It will we updated soon!</b></h3>",
                confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Great!',
                confirmButtonAriaLabel: 'Thumbs up, great!',
            })
        },
    }
}
</script>
