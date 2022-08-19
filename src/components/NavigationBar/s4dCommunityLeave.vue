<template>
        <b-nav-item @click="credit">LEAVE S4D COMMUNITY</b-nav-item>
</template>

<script>
// import localforage from 'localforage';
import Swal from "sweetalert2";
export default {
    name: "s4dCommunityLeave",
    methods: {
        credit() {
            Swal.fire({
                position: 'center',
                icon: 'info',
                html: `
                  <h2 style="font-weight: bold;">PLEASE READ</h2>
                  <p>The owner of the server (Jolly Bean) is using people towards his own good. Therefore, he is becoming a threat to the wellbeing of the scratch-for-discord project, its staff, and its users. If you are in the Scratch For Discord Community server, please leave it as fast as possible.<br><br>Spread the words to help us save the Scratch For Discord project <span style="color: blue">#saveS4D #leaveS4DCommunity</span></p>
                `,
                showConfirmButton: true
            })
        },
    }
}
</script>
