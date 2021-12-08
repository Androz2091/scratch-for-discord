import * as Blockly from "blockly/core";

const blockName = "tts-test";

const blockData = {
  "message0": "Play TTS %1 in channel %2 then %3 %4",
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
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "THEN"
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
    const channel = `s4dmessage.member.voice.channelId`;
const code = `let voiceConnection;
            let audioPlayer = new AudioPlayer();
const stream=discordTTS.getVoiceStream(${playtts});
        const audioResource=createAudioResource(stream, {inputType: StreamType.Arbitrary, inlineVolume:true});
        if(!voiceConnection || voiceConnection.status===VoiceConnectionStatus.Disconnected){
            voiceConnection = joinVoiceChannel({
                channelId: ${channel},
                guildId: s4dmessage.guildId,
                adapterCreator: s4dmessage.guild.voiceAdapterCreator,
            });
            voiceConnection=await entersState(voiceConnection, VoiceConnectionStatus.Connecting, 5_000);
        }
        
        if(voiceConnection.status===VoiceConnectionStatus.Connected){
            voiceConnection.subscribe(audioPlayer);
            audioPlayer.play(audioResource);
        }`;
 return code;
};
