import * as Blockly from "blockly/core";
import Swal from "sweetalert2";

// Dialogs follow the system light or dark setting
export const dialog = Swal.mixin({ theme: "auto" });

export const toast = dialog.mixin({
    toast: true,
    position: "bottom",
    showConfirmButton: false,
    showCloseButton: true,
    timer: 10000,
    timerProgressBar: true
});

// Blockly asks for variable names with window.prompt by default
Blockly.dialog.setPrompt((message, defaultValue, callback) => {
    dialog.fire({
        title: message,
        input: "text",
        inputValue: defaultValue,
        inputAttributes: {
            autocapitalize: "off"
        },
        showCancelButton: true
    }).then((result) => callback(result.isConfirmed ? result.value : null));
});
