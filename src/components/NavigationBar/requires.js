export default async function require(array, oldarray) {
    oldarray.forEach(js => {
        if (js.includes("//ahq mod api")) {
            array.push(`"discord-anti-spam": "git+https://github.com/ahqsoftwares/discord-anti-spam.git",
        "discord-antiraid": "^2",
        "gif-frames": "^1.0.1",`)
        }
        if (js.includes("const deepai = require('deepai')")) {
            array.push(`"deepai": "^1.0.21",`)
        }
        if (js.includes("const qdb = new QuickDB()")) {
            array.push(`"quick.db": "9.0.2",`)
        }
        if (js.includes("const QRCode = require('qrcode')")) {
            array.push(`"qrcode": "^1.5.0",`)
        }
        if (js.includes(`const discordModals = require('discord-modals');`)) {
            array.push(`"discord-modals": "^1.2.1",`)
        }
        if (js.includes("const ticket = require('tickets-discord');")) {
            array.push(`"tickets-discord": "^3.0.0",`)
        }
        if (js.includes("s4d.client.dashboard =")) {
            array.push(`"discord-easy-dashboard": "git+https://github.com/ahqsoftwares/discord-easy-dashboard-2.git",`)
        }
        if (js.includes(".chat")) {
            array.push(`"smartestchatbot": "^2.0.1",`)
        }
        if (js.includes("const stream = discordTTS")) {
            array.push(`"discord-tts": "^1.2.1",
        "@discord.js/voice": "^0.7.5",`)
        }
        if (js.includes(`const TempChannels = require("discord-temp-channels");`)) {
            array.push(`"discord-temp-channels": "^3.0.1",`)
            array.push(`"quick.db": "^7.1.3",`)
        }
        if (js.includes(`const { Calculator, Snake, Fight } = require('weky')`)) {
            array.push(`"weky": "git+https://github.com/ahqsoftwares/weky-npm.git",`)
        }
        if (js.includes("censor")) {
            array.push(`"discord-censor": "^1.0.9",`)
        }
        if (js.includes("discord-player")) {
            array.push(`"avconv": "^3.1.0",`)
            array.push(`"discord-player": "^5.2.0",`)
            array.push(`"play-dl": "^1.4.4",`)
            array.push(`"ffmpeg-static": "^4.4.0",`)
            array.push(`"@discordjs/opus": "^0.7.0",`)
        }
        if (js.includes("discord-music-player")) {
            array.push(`"discord-music-player": "^8.3.1",`)
            array.push(`"ytdl-core": "^4.9.1",`)
            array.push(`"ffmpeg-static": "^4.4.0",`)
            array.push(`"@discordjs/opus": "^0.7.0",`)
        }
        if (js.includes("youtube-notification-module")) {
            array.push(`"youtube-notification-module": "^1.1.0",`)
        }
        if (js.includes("discord-backup")) {
            array.push(`"discord-backup": "^3.0.1",`)
        }
        if (js.includes("node-os-utils")) {
            array.push(`"node-os-utils": "^1.3.5",`)
        }
        if (js.includes("discord-giveaways")) {
            array.push(`"discord-giveaways": "^5.0.1",`)
        }
        if (js.includes("ms")) {
            array.push(`"ms":"^2.1.3",`)
        }
        if (js.includes("discord-logs")) {
            array.push(`"discord-logs": "^2.0.1",`)
        }
        if (js.includes("discord-badges")) {
            array.push(`"discord-badges": "0.0.0",`)
        }
        if (js.includes("discord-together")) {
            array.push(`"discord-together":"^1.3.3",`)
        }
        if (js.includes("anti-link-for-discord")) {
            array.push(`"anti-link-for-discord":"^5.0.0",`)
        }
        if (js.includes("discord-inviter-tracker")) {
            array.push(`"discord-inviter-tracker":"^1.0.3",`)
        }
        if (js.includes("moment")) {
            array.push(`"moment": "^2.29.1",`)
        }
        if (js.includes("mongquick")) {
            array.push(`"mongquick": "git+https://github.com/ahqsoftwares/quickmongo.git",`)
        }
        if (js.includes("discord-image-generation")) {
            array.push(`"discord-image-generation":"^1.4.9",`)
        }
        if (js.includes("regex")) {
            array.push(`"regex":"^0.1.1",`)
        }
        if (js.includes("firebase")) {
            array.push(`"firebase":"^9.5.0",`)
        }
        if (js.includes("string-progressbar")) {
            array.push(`"string-progressbar":"^1.0.4",`)
        }
        if (js.includes("weirdToNormalChars")) {
            array.push(`"weird-to-normal-chars":"^1.8.1",`)
        }
        if (js.includes("captcha")) {
            array.push(`"@haileybot/captcha-generator":"^1.7.0",`)
        }
        if (js.includes("paginationEmbed")) {
            array.push(`"discord-pagination-fixed":"^1.0.0",`)
        }
        if (js.includes("AntiSpam")) {
            array.push(`"discord-anti-spam":"^2.6.1",`)
        }
        if (js.includes("easy-db-json")) {
            array.push(`"easy-db-json": "^1.1.1",`)
        }
        if (js.includes("lyricsFinder")) {
            array.push(`"lyrics-finder": "^21.7.0",`)
        }
        if (js.includes("os")) {
            array.push(`"os-utils": "0.0.14",`)
        }
        if (js.includes("synchronizeSlashCommands")) {
            array.push(`"@frostzzone/discord-sync-commands": "^0.3.0",`)
        }
        if (js.includes("S4D_APP_NOBLOX")) {
            array.push(`"noblox.js": "^4.13.1",`)
        }
        if (js.includes("S4D_APP_write")) {
            array.push(`"write": "^2.0.0",`)
        }
        if (js.includes("S4D_APP_DJS_VOICE")) {
            array.push(`"@discordjs/voice": "^0.10.0",
"ffmpeg-static": "^5.0.0",
"node-opus": "^0.3.3",
"tweetnacl": "^1.0.3",`)
        }
    })
    // array.reverse()
    // array[0] = array[0].replace(",","")
    // array.reverse()
}
