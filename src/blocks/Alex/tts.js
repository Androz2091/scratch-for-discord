import * as Blockly from "blockly/core";

const blockName = "tts-test";

const blockData = {
  "message0": "Play TTS %1 in channel %2 in server %3",
  "args0": [
    {
      "type": "input_value",
      "name": "tts",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "channel",
      "check": "VoiceChannel"
    },
    {
      "type": "input_value",
      "name": "server",
      "check": "Server"
    },
  ],
  "colour": "#5153c2",
  "previousStatement": null,
  "nextStatement": null,
  "inputsInline": true,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const playtts = Blockly.JavaScript.valueToCode(block, "tts", Blockly.JavaScript.ORDER_ATOMIC);
    const channel = Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_ATOMIC);
    const server = Blockly.JavaScript.valueToCode(block, "server", Blockly.JavaScript.ORDER_ATOMIC);
const code = `const stream=discordTTS.getVoiceStream(${playtts});
        const audioResource=createAudioResource(stream, {inputType: StreamType.Arbitrary, inlineVolume:true});
        if(!voiceConnection || voiceConnection.status===VoiceConnectionStatus.Disconnected){
            voiceConnection = joinVoiceChannel({
                channelId: ${channel}.id,
                guildId: ${server}.id,
                adapterCreator: ${server}.voiceAdapterCreator,
            });
            voiceConnection=await entersState(voiceConnection, VoiceConnectionStatus.Connecting, 5000);
        }
        
        if(voiceConnection.status===VoiceConnectionStatus.Connected){
            voiceConnection.subscribe(audioPlayer);
            audioPlayer.play(audioResource);
        }`;
 return code;
};
