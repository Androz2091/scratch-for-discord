//create login to openai block
import blockly from "blockly";
import { registerRestrictions } from "../../../restrictions";

const blockName = "login_openai";

const blockData = {
    "type": "openai_login",
    "message0": "Login to openai with key:  %1",
    "args0": [
      {
        "type": "input_value",
        "name": "token",
        "check": [
          "String",
          "Env"
        ]
      }
    ],
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  };
//if this block is not present, the user will not be able to use the OpenAI blocks
registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "Please provide a valid OpenAI key or environment variable.",
        types: [
            "KEY"
        ]
    }
]);

blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

blockly.JavaScript[blockName] = function(block) {
    const key = blockly.JavaScript.valueToCode(block, "KEY", blockly.JavaScript.ORDER_ATOMIC);
    const code = `
const configuration = new Configuration({
    apiKey: ${key},
  });
  const openai = new OpenAIApi(configuration);
    `;
    return code;
};