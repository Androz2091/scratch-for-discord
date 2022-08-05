<template>
    <b-modal id="code-modal" title="JavaScript code of your bot" cancel-title="Close" ok-title="Copy to Clipboard" @ok="copy">
        <code class="language-js">
            <textarea disabled :value="content" id="code_TextArea_element_exporting_code">
            </textarea>
        </code>
    </b-modal>
</template>

<script>
import beautify from "js-beautify";
// https://filehost.jeremygamer13.repl.co/s4d/prism/js
// https://filehost.jeremygamer13.repl.co/s4d/prism/css
export default {
    name: "editmenu",
    computed: {
        content: function(){
            return beautify.js(this.getWorkspaceCode(), {
                indent_size: 4,
                space_in_empty_paren: true
            });
        }
    },
    methods: {
        copy() {
            var url = beautify.js(this.getWorkspaceCode(), {
                indent_size: 4,
                space_in_empty_paren: true
            });
           navigator.clipboard.writeText(url)
        }
    }
}
/*
i did the hard work of adding prism, now someone else needs to get it working because i have no clue how lol
heres some code i made but it doesnt work on text areas
works fine otherwise

window.addEventListener("click", () => {
    const Prism = window.Prism
    if (!Prism) return
    const codearea = document.getElementById("code_TextArea_element_exporting_code")
    if (!codearea) return
    const highlight = Prism.highlight(codearea.value, Prism.languages.javascript, 'javascript');
    document.getElementById("temporary thing wow").innerHTML = highlight
})
*/
</script>

<style>


#code_TextArea_element_exporting_code {
    min-width: 100%;
    min-height: 100%;
    resize: none;
}
#code_TextArea_element_exporting_code::-webkit-scrollbar {
    width: 12px;
    background: #f1f1f1;
}

#code-modal .modal-dialog {
    max-width: 100%;
    margin: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    display: flex;
    position: fixed;
    z-index: 100000;
}

</style>
