import Blockly from "blockly/core";


const blockName = "jg_imghttps";

const blockData = {
    "message0": "Fetch data from link %1 and save it as %2",
    "args0": [
        {
        "type": "input_value", 
        "name": "url",
        "check": ["String","var", "Env"]
        },
        {
        "type": "input_value", 
        "name": "file",
        "check": ["String","var", "Env"]
        }
    ],
    "colour": 230,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Grabs a file from a link. The link should end in an actual file extension, like .txt or .png. If this does not happen, then it will most likely send the HTML of the webpage.",
    "helpUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  const urlimg = Blockly.JavaScript.valueToCode(block, "url", Blockly.JavaScript.ORDER_ATOMIC);
  const filename = Blockly.JavaScript.valueToCode(block, "file", Blockly.JavaScript.ORDER_ATOMIC);
  const code = `await https.get(${urlimg}, async (res) => {
  res.pipe(fs.createWriteStream(${filename}));
});\n`;
return code
}
