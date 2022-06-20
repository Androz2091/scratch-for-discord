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
                width: "900px",
                html:`
                <h3>Hopefully you like Minecraft, because we have some <b>Minecraft Blocks</b> now!</h3>
                <img src='https://media.discordapp.net/attachments/914411539887456296/980028856176111626/unknown.png?width=797&height=676' width='797' height='676'>

                <h5 style = "border-bottom: 6px solid red">New content</h5> 
                <br>

                <h5>Bedrock blocks are limited until Minecraft allows more server features.</h5>
                <h2>Advanced JSON Request is here!</h2>
                <img src='https://media.discordapp.net/attachments/914411539887456296/979818169176829972/unknown.png?width=569&height=676' width='569' height='676'>
                <br>
                <h5>Blocks in the member categories will also be moved out soon, obviously starting with the JSON request blocks.</h5>
                <br>
                <h2>A couple more Alt shortcuts have been added, mainly Alt + Ctrl to duplicate.</h2>
                <br>
                <h3>Hmm, I wonder what this button does...</h3>
                <img src='https://media.discordapp.net/attachments/898783648491397191/979460678907731968/unknown.png'>
                <h4><i>(Credit to frostzzone & RllyNotFox!)</i></h4>
                <br>
                <h2>You can now use Alt + T and Alt + N to spawn a text or number block!</h2>
                <br>
                <h2><b>Scheduled Events!</b></h2>
                <br>
                <img src='https://cdn.discordapp.com/attachments/898783648491397191/979041343542267954/unknown.png?size=4096' width='475' height='519'>
                <br>
                <h3><b>Added scheduled events! It will be updated soon!</b></h3>`,
                confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Great!',
                confirmButtonAriaLabel: 'Thumbs up, great!',
            })
        },
    }
}
</script>
