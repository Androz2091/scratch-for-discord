import * as Blockly from "blockly/core";
import Swal from "sweetalert2";

export const toast = Swal.mixin({
    toast: true,
    position: "bottom",
    showConfirmButton: false,
    showCloseButton: true,
    timer: 10000,
    timerProgressBar: true
});

// Blockly asks for variable names with window.prompt by default
Blockly.dialog.setPrompt((message, defaultValue, callback) => {
    Swal.fire({
        title: message,
        input: "text",
        inputValue: defaultValue,
        inputAttributes: {
            autocapitalize: "off"
        },
        showCancelButton: true
    }).then((result) => callback(result.isConfirmed ? result.value : null));
});
