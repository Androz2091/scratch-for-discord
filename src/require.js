export default async function require(array,code,js) {
if(js.includes("moment")){
    array.push(`let moment  = require("moment")`)
}
if(js.includes("backup")){
    array.push(`const backup = require("discord-backup");`)
}
if(js.includes("akinator")){
    array.push(`const akinator = require("discord.js-akinator");`)
}
if(js.includes("os-utils")){
    array.push(`const os = require("os-utils");`)
}
array.push(`const lyricsFinder = require('lyrics-finder');`)
if(js.includes("s4d.Inviter")){
    array.push(`let Invite = require("discord-inviter-tracker")`)
    code.push("s4d.Inviter = new Invite(s4d.client)")
    code.push(`s4d.Inviter.on("WARN",function(e){
        console.log('WARN: '+e)
    })`)
}
if(js.includes("URL")){
    array.push(`let URL = require('url')`)
}
if(js.includes("ticket")){
    array.push(`const ticket = require('tickets-discord');`)
    array.push(`const { start, login } = require('tickets-discord');`)
}
if(js.includes(`ms`)){
    array.push(`const ms = require("ms")`)
}
if(js.includes("antilink")){
    array.push(`const AntiLinkClient = require("anti-link-for-discord");`)
    code.push(`const antilink = new AntiLinkClient({
        warnMessage: (message) => '<@'+message.author.id+'>, No links.',
        muteCount: 5,
        kickCount: 10,
        banCount: 15,
        deleteMessage: true,
      });`)
}
if(js.includes("DIG")){
    array.push(`let DIG = require("discord-image-generation")`)
}
if(js.includes("DB")){
    array.push(`let { DB } = require("quickmongo");`)
}
 if(js.includes("tictactoe")){
    array.push(`const TicTacToe = require('discord-tictactoe');`)
    array.push(`const game = new TicTacToe({ language: 'en' })`)
}
if(js.includes("canvas")){
    array.push(`let canvas = require("discord-canvas") `)
}
if(js.includes("images")){
    array.push(`const Images = require("discord-images")`)
    code.push(`const images = new Images.Client()`)
}
if(js.includes("https")){
    array.push(`let https = require("https")`)
}
if(js.includes("s4d.manager")){
    array.push(`let { GiveawaysManager }= require("discord-giveaways")`)
    code.push(`s4d.manager = new GiveawaysManager(s4d.client, {
        storage: './giveaways.json',
        default: {
            botsCanWin: false,
            embedColor: '#FF0000',
            embedColorEnd: '#000000',
            reaction: '🎉'
        }
    });`)                                      
}
if(js.includes("s4d.notifer")){
    array.push(`let ytnotifier = require("youtube-notification-module")`)
    code.push(`s4d.notifer = new ytnotifier({channels: [],checkInterval: 50});`)
}
if(js.includes("s4d.player")){
    array.push(`let { Player,QueueRepeatMode } = require("discord-player")`)//foi
    code.push(`s4d.player = new Player(s4d.client)`)
}
if(js.includes("getBadges")){
    array.push(`const badges = require("discord-badges");   `)
    code.push(`function getBadges(user){
        return badges.badges(user).then((response) => {
            return response
        }).catch((e) => {
            console.log(e);
        });
    }  `)
}
if(js.includes("s4d.client.discordTogether")){
    array.push(`const { DiscordTogether } = require('discord-together');`)
    code.push(`s4d.client.discordTogether = new DiscordTogether(s4d.client);`)
}
 if(js.includes("SnakeGame")){
    array.push(`const SnakeGame = require('snakecord')`)
}
if(js.includes("Cooldown")){
    code.push(`let Cooldown = ""
    if(s4d.database.has('cooldown')){
        Cooldown = s4d.database.get('cooldown')
        setInterval(()=>{
            s4d.database.set('cooldown',Cooldown)
        },1000)
    }else{
        Cooldown = new Set();
        setInterval(()=>{
            s4d.database.set('cooldown',Cooldown)
        },1000)
    }`)
}
if(js.includes("Regex")){
    array.push(`var Regex = require("regex");`)
}
}
