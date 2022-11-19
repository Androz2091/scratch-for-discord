// create block for generate_image
import blockly from "blockly";
import { registerRestrictions } from "../../../restrictions";

const blockName = "generate_image_openai";

const blockData = {
    "message0": "Generate image with prompt %1 with key %2",
    "args0": [
        {
            "type": "input_value",
            "name": "PROMPT",
            "check": ["String", "Env"]
        },
        //dropdown with all the sizes
        {
            "type": "field_dropdown",
            "name": "SIZE",
            "options": [
                ["256x256","256x256"],
                ["512x512","512x512"],
                ["1024x1024","1024x1024"]
            ]
        }
    ],
    "output": "Image",
    "colour": "#FF8C1A",
    "tooltip": "Use OpenAI's GPT-3 to generate an image based on a prompt.",
    "helpUrl": ""
};
//if the openai_login block is not present, the user will not be able to use this block
registerRestrictions(blockName, [
    {
        type: "block",
        message: "Login block missing.",
        types: [
            "openai_login"
        ]
    },
    {
        type: "notempty",
        message: "Prompt cannot be empty.",
        types: [
            "PROMPT"
        ]
    }
]);


blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

blockly.JavaScript[blockName] = function(block) {
    const prompt = blockly.JavaScript.valueToCode(block, "PROMPT", blockly.JavaScript.ORDER_ATOMIC);
    const size = blockly.JavaScript.valueToCode(block, "SIZE", blockly.JavaScript.ORDER_ATOMIC);
    const code = `await openai.createImage({
        prompt: "${prompt}",
        n: 1,
        size: "${size}",
      })`;
    return [code, blockly.JavaScript.ORDER_NONE];
}