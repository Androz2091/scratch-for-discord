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
                width: "1000px",
                html: `
                <h1><span>Developers of </span><span style="color:#15a9e8">Scratch For Discord!</span></h1>
                    <h2><b>Preview 469:</b></h2>
                    <b><p>
                    <h2><b>Developers:</b></h2>
                    <span style="color:#2aa9bd">frostzzone</span>,
                    <span style="color:#ad6f39">RetroBTW</span>,
                    <span style="color:#73ad39">cat soup</span>,
                    <span style="color:#e83131">AHQ</span>,
                    <span style="color:#ff7b00">JeremyGamer13</span>,
                    <span style="color:#e3aa24">AlexCdDg</span>,
                    <span style="color:#e88f68">Eruption</span>,
                    <span style="color:#429139">jose_trindade</span>,
                    <span style="color:#9c2525">MrRedo</span> <br><br> 
                    <h2><b>Contributors:</b></h2>
                    <span style="color:#26a39d">henpokpok</span>,
                    <span style="color:#D276F7">LimeNade</span>,
                    <span style="color:#8B48A3">LaserCat</span>,
                    <span style="color:#ff7b00">Parham</span>,
                    <span style="color:#69b0d6">Monaco</span>,
                    <span style="color:#eb4634">RedMan13</span>,
                    <span style="color:#9419FF">TropicGalxy</span>
                    </p></b>
                    <h3><b>Original S4D:</b></h3>
                    <b><p>
                    <span style="color:#36915a">Androz</span>,
                    <span style="color:#568896">snowflake107</span>,
                    <span style="color:#8f815b">7coil</span>,
                    <span style="color:#6EB7BB">Andromeda</span>
                    </p></b>
                    <h3><b>Preview 454:</b></h3>
                    <b><p>
                    <span style="color:#429139">jose_trindade</span>,
                    <span style="color:#9c2525">MrRedo</span>
                    </p></b>
                    <h5>Extras:</h5>
                    <b><p>
                    
                    <span style="color:#568896">Noxy, changelog master</span>

                    </p></b>
                `,
                showConfirmButton: true
            })
        },
    }
}
/*
title: 'Androz, snowflake107 - Original S4D\n7coil - Discord Blocks\nJose and mrredo - Preview 454',
text: 'frostzzone, RetroBTW, cat soup, AHQ, JeremyGamer13, LimeNade, henpokpok, AlexCdDg, Eruption - Preview 469',
*/
</script>
