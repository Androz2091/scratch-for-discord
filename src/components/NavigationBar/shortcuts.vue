<template>
        <b-nav-item @click="shortcuts">Shortcuts</b-nav-item>
</template>



<script>
import Swal from "sweetalert2";

/* eslint-disable */
function convertBlocklyHTMLElementToDisplayableContent(path, width, height) {
    let newPath = path
    //newPath = path.replace(/transform="translate\([0-9\.\-]*,[0-9\.\-]*\)">/, `transform="translate(0,0)">`)
    let returned = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" width="${width}px" height="${height}px" style="background-color:transparent;display: inline;position: inherit;fill: white;font: bold 16px Helvetica Neue, Segoe UI, Helvetica, sans-serif">` + newPath
    returned += "</svg>"
    return returned
}

function toShortcut(text) {
    let newtext = ""
    const matches = text.match(/[a-z\-_+]+/gmi)
    if (matches) {
        matches.forEach(match => {
            newtext += match == "+" ? " <i class=\"fa-solid fa-plus\"></i> " : "<img height=50 src=\"https://github.com/q2apro/keyboard-keys-speedflips/raw/master/single-keys-blank/400dpi/" + match + ".png\">"
        })
    }
    return newtext
}
const displayable = {}
export default {
    name: "shortcuts",
    methods: {
        shortcuts() {
            Swal.fire({
                position: 'center',
                width: "900px",
                html: `
                <h1>Shortcuts</h1>
                <div style="text-align: left">
                    <h3 style="text-align:center">Block shortcuts</h3>
                    <div style="height:18em;overflow:auto;background-color:#e3e3e3">
                        <p>${toShortcut("alt + t")} - ${displayable.text}</p>
                        <p>${toShortcut("alt + c")} - ${displayable.color}</p>
                        <p>${toShortcut("alt + i")}  - ${displayable.if}</p>
                        <p>${toShortcut("alt + w")} - ${displayable.msgrecieved}</p>
                        <p>${toShortcut("alt + e")} - ${displayable.error}</p>
                        <p>${toShortcut("alt + a")} - ${displayable.author}</p>
                        <p>${toShortcut("alt + b")} - ${displayable.bool}</p>
                        <p>${toShortcut("alt + n")} - ${displayable.number}</p>
                        <p>${toShortcut("alt + m")} - ${displayable.msgcontent}</p>
                        <p>${toShortcut("alt + equals-plus")} - ${displayable.check}</p>
                    </div>
                    <h3 style="text-align:center">Non-block shortcuts</h3>
                    <div style="height:18em;overflow:auto;background-color:#e3e3e3">
                        <p>${toShortcut("ctrl + s")} - Save</p>
                        <p>${toShortcut("ctrl + alt + s")} - Save as</p>
                        <p>${toShortcut("ctrl + shift + c")} - Open the Developer Console</p>
                        <p>${toShortcut("ctrl + shift + u")} - Open the S4D Developer Tools</p>
                    </div>
                </div>
                `,
                confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Great!',
                confirmButtonAriaLabel: 'Thumbs up, great!',
            })
        },
    }
}
displayable.text = convertBlocklyHTMLElementToDisplayableContent(`<g data-id="\`Ua%9dGl,H}jr+vYt%ot" class="blocklyDraggable"><path class="blocklyPath" stroke="#447c69" fill="#5ba58c" d=" m 21,0  h 42.46180534362793 a 21 21 0 0,1 21,21  v 0 a 21 21 0 0,1 -21,21  V 42  h -42.46180534362793 a 21 21 0 0,1 -21,-21  v 0 a 21 21 0 0,1 21,-21 z"></path><g transform="translate(12,14.5)"><image height="12px" width="12px" alt="&quot;" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC"></image></g><g class="blocklyEditableText" transform="translate(32,4)" style="cursor: text;"><rect rx="4" ry="4" x="0" y="0" height="34" width="20.46180534362793" class="blocklyFieldRect" stroke="#447c69"></rect><g class="blocklyEditableText"><text class="blocklyText blocklyMultilineText" x="8" y="6.5" dy="17">&nbsp;</text></g></g><g transform="translate(60.46180534362793,14.5)"><image height="12px" width="12px" alt="&quot;" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg=="></image></g></g>`,
    600, 50)
displayable.color = convertBlocklyHTMLElementToDisplayableContent(`<g data-id="M6C;*(7yDsR)Z.pt{@{z" class="blocklyDraggable"><path class="blocklyPath" stroke="#fff" fill="#ff0000" d=" m 20,0  h 8 a 20 20 0 0,1 20,20  v 0 a 20 20 0 0,1 -20,20  V 40  h -8 a 20 20 0 0,1 -20,-20  v 0 a 20 20 0 0,1 20,-20 z"></path><g class="blocklyEditableText" transform="translate(20,12)" style="cursor: default;"></g></g>`,
    600, 50)
displayable.if = convertBlocklyHTMLElementToDisplayableContent(`<g data-id="[OMXVt#_oN5EeQQ4?|z8" class="blocklyDraggable"><path class="blocklyPath" stroke="#44607c" fill="#5b80a5" d=" m 0,0  m 0,4 a 4 4 0 0,1 4,-4  h 8  c 2,0  3,1  4,2  l 4,4  c 1,1  2,2  4,2  h 12  c 2,0  3,-1  4,-2  l 4,-4  c 1,-1  2,-2  4,-2  h 108 a 4 4 0 0,1 4,4  v 8  V 40  V 44 a 4 4 0 0,1 -4,4  H 83.6875  c -2,0  -3,1  -4,2  l -4,4  c -1,1  -2,2  -4,2  h -12  c -2,0  -3,-1  -4,-2  l -4,-4  c -1,-1  -2,-2  -4,-2  h -8 a 4 4 0 0,0 -4,4  v 16 a 4 4 0 0,0 4,4  h 8  c 2,0  3,1  4,2  l 4,4  c 1,1  2,2  4,2  h 12  c 2,0  3,-1  4,-2  l 4,-4  c 1,-1  2,-2  4,-2  H 156 a 4 4 0 0,1 4,4  V 80  V 100 a 4 4 0 0,1 -4,4  h -108  c -2,0  -3,1  -4,2  l -4,4  c -1,1  -2,2  -4,2  h -12  c -2,0  -3,-1  -4,-2  l -4,-4  c -1,-1  -2,-2  -4,-2  h -8 a 4 4 0 0,1 -4,-4 z"></path><g class="blocklyIconGroup" display="block" transform="translate(8,16.5)"><rect class="blocklyIconShape" rx="4" ry="4" height="16" width="16"></rect><path class="blocklyIconSymbol" d="m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z"></path><circle class="blocklyIconShape" r="2.7" cx="8" cy="8"></circle></g><g transform="translate(33,13.5)"><text class="blocklyText" dominant-baseline="central" x="0" y="10.5">if</text></g><g transform="translate(8,49.5)"><text class="blocklyText" dominant-baseline="central" x="0" y="10.5">do</text></g><path class="blocklyOutlinePath" d=" M 67.6796875,8  h 16  l 16,16  l -16,16  h -16  l -16,-16  l 16,-16 z" fill="#44607c"></path></g>`,
    600, 50)
displayable.msgrecieved = convertBlocklyHTMLElementToDisplayableContent(`<g data-id="#zZ-qQHzHxoofyVEo7H)" class="blocklyDraggable"><path class="blocklyPath" stroke="#b96f00" fill="#f79400" d=" m 0,0  m 0,4 a 4 4 0 0,1 4,-4  h 217.3828125 a 4 4 0 0,1 4,4  v 4  V 8  V 40  V 44 a 4 4 0 0,1 -4,4  H 64  c -2,0  -3,1  -4,2  l -4,4  c -1,1  -2,2  -4,2  h -12  c -2,0  -3,-1  -4,-2  l -4,-4  c -1,-1  -2,-2  -4,-2  h -8 a 4 4 0 0,0 -4,4  v 16 a 4 4 0 0,0 4,4  h 8  c 2,0  3,1  4,2  l 4,4  c 1,1  2,2  4,2  h 12  c 2,0  3,-1  4,-2  l 4,-4  c 1,-1  2,-2  4,-2  H 221.3828125 a 4 4 0 0,1 4,4  V 80  V 100 a 4 4 0 0,1 -4,4  h -217.3828125 a 4 4 0 0,1 -4,-4 z"></path><g transform="translate(8,13.5)"><text class="blocklyText" dominant-baseline="central" x="0" y="10.5">When&nbsp;a&nbsp;message&nbsp;is&nbsp;received</text></g></g>`,
    600, 50)
displayable.error = convertBlocklyHTMLElementToDisplayableContent(`<g data-id="ea(unw4l0-H-cKo7I[B+" class="blocklyDraggable"><path class="blocklyPath" stroke="#9d3061" fill="#d14081" d=" m 20,0  h 37.4765625  l 20,20  l -20,20  V 40  h -37.4765625  l -20,-20  l 20,-20 z"></path><g transform="translate(20,9.5)"><text class="blocklyText" dominant-baseline="central" x="0" y="10.5">error</text></g></g>`,
    600, 50)
displayable.author = convertBlocklyHTMLElementToDisplayableContent(`<g data-id="A|]9o:V/)#0|Gd\`M$*Hw" class="blocklyDraggable"><path class="blocklyPath" stroke="#125970" fill="#187795" d=" m 20,0  h 103.2734375 a 20 20 0 0,1 20,20  v 0 a 20 20 0 0,1 -20,20  V 40  h -103.2734375 a 20 20 0 0,1 -20,-20  v 0 a 20 20 0 0,1 20,-20 z"></path><g transform="translate(12,9.5)"><text class="blocklyText" dominant-baseline="central" x="0" y="10.5">message&nbsp;author</text></g></g>`,
    600, 50)
displayable.bool = convertBlocklyHTMLElementToDisplayableContent(`<g data-id="6NK(|C0kq4uiwL#iIb?b" class="blocklyDraggable"><path class="blocklyPath" stroke="#44607c" fill="#5b80a5" d=" m 21,0  h 64.9765625  l 21,21  l -21,21  V 42  h -64.9765625  l -21,-21  l 21,-21 z"></path><g class="blocklyEditableText" transform="translate(20,4)" style="cursor: default;"><rect rx="4" ry="4" x="0" y="0" height="34" width="66.9765625" class="blocklyFieldRect blocklyDropdownRect" stroke="#44607c" fill="transparent"></rect><text class="blocklyText blocklyDropdownText" dominant-baseline="central" text-anchor="start" x="8" y="17">true</text><image style="display: none;"></image><image height="12px" width="12px" xlink:href="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi43MSIgaGVpZ2h0PSI4Ljc5IiB2aWV3Qm94PSIwIDAgMTIuNzEgOC43OSI+PHRpdGxlPmRyb3Bkb3duLWFycm93PC90aXRsZT48ZyBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0xMi43MSwyLjQ0QTIuNDEsMi40MSwwLDAsMSwxMiw0LjE2TDguMDgsOC4wOGEyLjQ1LDIuNDUsMCwwLDEtMy40NSwwTDAuNzIsNC4xNkEyLjQyLDIuNDIsMCwwLDEsMCwyLjQ0LDIuNDgsMi40OCwwLDAsMSwuNzEuNzFDMSwwLjQ3LDEuNDMsMCw2LjM2LDBTMTEuNzUsMC40NiwxMiwuNzFBMi40NCwyLjQ0LDAsMCwxLDEyLjcxLDIuNDRaIiBmaWxsPSIjMjMxZjIwIi8+PC9nPjxwYXRoIGQ9Ik02LjM2LDcuNzlhMS40MywxLjQzLDAsMCwxLTEtLjQyTDEuNDIsMy40NWExLjQ0LDEuNDQsMCwwLDEsMC0yYzAuNTYtLjU2LDkuMzEtMC41Niw5Ljg3LDBhMS40NCwxLjQ0LDAsMCwxLDAsMkw3LjM3LDcuMzdBMS40MywxLjQzLDAsMCwxLDYuMzYsNy43OVoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=" transform="translate(46.9765625,11)"></image></g></g>`,
    600, 50)
displayable.number = convertBlocklyHTMLElementToDisplayableContent(`<g data-id="RG);#N/G9AoUqwdbO;Ur" class="blocklyDraggable"><path class="blocklyPath" stroke="#444d7c" fill="#fff" d=" m 20,0  h 8 a 20 20 0 0,1 20,20  v 0 a 20 20 0 0,1 -20,20  V 40  h -8 a 20 20 0 0,1 -20,-20  v 0 a 20 20 0 0,1 20,-20 z"></path><g class="blocklyEditableText" transform="translate(19.3984375,9.5)" style="cursor: text;"><text class="blocklyText" dominant-baseline="central" x="0" y="10.5">0</text></g></g>`,
    600, 50)
displayable.msgcontent = convertBlocklyHTMLElementToDisplayableContent(`<g data-id="nIMH~_~AKl/)x5pPH?:B" class="blocklyDraggable"><path class="blocklyPath" stroke="#447c69" fill="#5ba58c" d=" m 20,0  h 110.84375 a 20 20 0 0,1 20,20  v 0 a 20 20 0 0,1 -20,20  V 40  h -110.84375 a 20 20 0 0,1 -20,-20  v 0 a 20 20 0 0,1 20,-20 z"></path><g transform="translate(12,9.5)"><text class="blocklyText" dominant-baseline="central" x="0" y="10.5">message&nbsp;content</text></g></g>`,
    600, 50)
displayable.check = convertBlocklyHTMLElementToDisplayableContent(`<g data-id="R=XfDY|1qRdxz):Q3Ya1" class="blocklyDraggable"><path class="blocklyPath" stroke="#44607c" fill="#5b80a5" d=" m 21,0  h 159.3125  l 21,21  l -21,21  V 42  h -159.3125  l -21,-21  l 21,-21 z"></path><g class="blocklyEditableText" transform="translate(77,4)" style="cursor: default;"><rect rx="4" ry="4" x="0" y="0" height="34" width="47.3125" class="blocklyFieldRect blocklyDropdownRect" stroke="#44607c" fill="transparent"></rect><text class="blocklyText blocklyDropdownText" dominant-baseline="central" text-anchor="start" x="8" y="17">=</text><image style="display: none;"></image><image height="12px" width="12px" xlink:href="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi43MSIgaGVpZ2h0PSI4Ljc5IiB2aWV3Qm94PSIwIDAgMTIuNzEgOC43OSI+PHRpdGxlPmRyb3Bkb3duLWFycm93PC90aXRsZT48ZyBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0xMi43MSwyLjQ0QTIuNDEsMi40MSwwLDAsMSwxMiw0LjE2TDguMDgsOC4wOGEyLjQ1LDIuNDUsMCwwLDEtMy40NSwwTDAuNzIsNC4xNkEyLjQyLDIuNDIsMCwwLDEsMCwyLjQ0LDIuNDgsMi40OCwwLDAsMSwuNzEuNzFDMSwwLjQ3LDEuNDMsMCw2LjM2LDBTMTEuNzUsMC40NiwxMiwuNzFBMi40NCwyLjQ0LDAsMCwxLDEyLjcxLDIuNDRaIiBmaWxsPSIjMjMxZjIwIi8+PC9nPjxwYXRoIGQ9Ik02LjM2LDcuNzlhMS40MywxLjQzLDAsMCwxLTEtLjQyTDEuNDIsMy40NWExLjQ0LDEuNDQsMCwwLDEsMC0yYzAuNTYtLjU2LDkuMzEtMC41Niw5Ljg3LDBhMS40NCwxLjQ0LDAsMCwxLDAsMkw3LjM3LDcuMzdBMS40MywxLjQzLDAsMCwxLDYuMzYsNy43OVoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=" transform="translate(27.3125,11)"></image></g><path class="blocklyOutlinePath" d=" M 37,5  h 16 a 16 16 0 0,1 16,16  v 0 a 16 16 0 0,1 -16,16  h -16 a 16 16 0 0,1 -16,-16  v 0 a 16 16 0 0,1 16,-16 z" fill="#44607c"></path><path class="blocklyOutlinePath" d=" M 148.3125,5  h 16 a 16 16 0 0,1 16,16  v 0 a 16 16 0 0,1 -16,16  h -16 a 16 16 0 0,1 -16,-16  v 0 a 16 16 0 0,1 16,-16 z" fill="#44607c"></path></g>`,
    600, 50)
</script>
