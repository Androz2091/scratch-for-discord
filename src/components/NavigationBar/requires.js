export default async function require(array,oldarray) {
oldarray.forEach(js=>{
    if(js.includes("discord-player")){
        array.push(`"@discordjs/opus": "^0.6.0",`)
        array.push(`"discord-player": "^5.1.0",`)
    }
    if(js.includes("youtube-notification-module")){
        array.push(`"youtube-notification-module": "^1.1.0",`)
    } 
    if(js.includes("discord-backup")){
        array.push(`"discord-backup": "^3.0.1",`)
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
    if(js.includes("got")){
        array.push(`"got":"^11.8.2",`)
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
})
}
