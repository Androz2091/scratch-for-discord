// Source of this block comes from https://www.kidscoding8.com/5633.html
// The Blockly github uses a module named "goog" so I used this source instead, since it had everything in the format we use.
// Note that you might see random numbers in code comments, thats because the site made me have to copy everything including the line index.
// If this website is down or shutdown, you can find an archive I made here:
// https://drive.google.com/drive/folders/1G2Lg11s8ds3Ug_LmL_2OIieTAg5Fu1QC?usp=sharing

import Blockly from "blockly/core";

Blockly.Blocks['string_length'] = {
    init: function () {
        this.appendValueInput('VALUE')
            .setCheck('String')
            .appendField('length of');
        this.setOutput(true, 'Number');
        this.setColour(160);
        this.setTooltip('Returns number of letters in the provided text.');
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
        // console.log(this)
    },
    customContextMenu: function (options) {
        var option = {
            enabled: true,
            text: "Custom option",
            callback: function () {

            }.bind(this)
        };
        options.push(option);
    }
};