<template>
        <b-nav-item @click="shortcuts">Shortcuts</b-nav-item>
</template>



<script>
import Swal from "sweetalert2";

/* eslint-disable */
function convertBlocklyHTMLElementToDisplayableContent(path, width, height) {
    let newPath = path
    newPath = path.replace(/transform="translate\([0-9\.\-]*,[0-9\.\-]*\)">/mi, `transform="translate(0,0)">`)
    let returned = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" width="${width}px" height="${height}px" style="display: inline;position: inherit;fill: white;font: bold 11px Helvetica Neue, Segoe UI, Helvetica, sans-serif">` + newPath
    returned += "</svg>"
    return returned
}

export default {
    name: "shortcuts",
    methods: {
        shortcuts() {
            Swal.fire({
                position: 'center',
                width: "900px",
                html: `
                <style>
                h2{
                    font-size: 25px;
                }
                </style>
                <h1>Shortcuts</h1>
                <h2>
                alt + t - make a text block <br>
                alt + c - make a color block<br>
                alt + i  - if block<br>
                alt + w - "when message is received" event<br>
                alt + e - error block<br>
                alt + a - message author block<br>
                alt + b - true/false block<br>
                alt + n - number block<br>
                alt + m - message content<br>
                alt + = - ()==()<br><br>
                ctrl + shift + c - open the console
                </h2>
                `,
                confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Great!',
                confirmButtonAriaLabel: 'Thumbs up, great!',
            })
        },
    }
}
</script>
