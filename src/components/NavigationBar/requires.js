export default async function require(array,oldarray) {
oldarray.forEach(js=>{
    if(js.includes("const stream = discordTTS")) {
        array.push(`"discord-tts": "^1.2.1",
        "@discord.js/voice": "^0.7.5",`)
    }
    if(js.includes(`const { Calculator, Snake, Fight } = require('weky')`)) {
        array.push(`"weky": "^3.1.8"`)
    }
    if(js.includes("censor")){
        array.push(`"discord-censor": "^1.0.9"`)
    }
    if(js.includes("discord-player")){
        array.push(`"avconv": "^3.1.0",`)
        array.push(`"discord-player": "^5.2.0",`)
        array.push(`"play-dl": "^1.4.4",`)
        array.push(`"ffmpeg-static": "^4.4.0",`)
        array.push(`"@discordjs/opus": "^0.7.0",`)
    }
    if(js.includes("discord-music-player")){
        array.push(`"discord-music-player": "^8.3.1",`)
        array.push(`"ytdl-core": "^4.9.1",`)
        array.push(`"ffmpeg-static": "^4.4.0",`)
        array.push(`"@discordjs/opus": "^0.7.0",`)
    }
    if(js.includes("youtube-notification-module")){
        array.push(`"youtube-notification-module": "^1.1.0",`)
    } 
    if(js.includes("discord-backup")){
        array.push(`"discord-backup": "^3.0.1",`)
    }
    if(js.includes("node-os-utils")){
        array.push(`"node-os-utils": "^1.3.5",`)
    }
    if(js.includes("discord-giveaways")){
        array.push(`"discord-giveaways": "^5.0.1",`)
    }
    if(js.includes("ms")){
        array.push(`"ms":"^2.1.3",`)
    }
    if(js.includes("discord-logs")){
        array.push(`"discord-logs": "^2.0.1",`)
    }
    if(js.includes("discord-badges")){
        array.push(`"discord-badges": "0.0.0",`)
    }
    if(js.includes("discord-together")){
        array.push(`"discord-together":"^1.3.0",`)
    }
    if(js.includes("anti-link-for-discord")){
        array.push(`"anti-link-for-discord":"^5.0.0",`)
    }
    if(js.includes("discord-inviter-tracker")){
        array.push(`"discord-inviter-tracker":"^1.0.3",`)
    }
    if(js.includes("discord-images")){
        array.push(`"discord-images": "^0.1.6",`)
    }
    if(js.includes("moment")){
        array.push(`"moment": "^2.29.1",`)
    }
    if(js.includes("quickmongo")){
        array.push(`"quickmongo": "git+https://github.com/mrredo/quickmongo.git",`)
    }
    if(js.includes("discord-image-generation")){
        array.push(`"discord-image-generation":"^1.4.9",`)
    }
    if(js.includes("regex")){
        array.push(`"regex":"^0.1.1",`)
    }
    if(js.includes("firebase")){
        array.push(`"firebase":"^9.5.0",`)
    }
})
array.reverse()
array[0] = array[0].replace(",","")
array.reverse()
}
