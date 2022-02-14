export default async function require(array,code,js) {
if(js.includes(".chat")) {
    array.push(`const smartestchatbot = require('smartestchatbot');
    const client = new smartestchatbot.Client();
    `)
}
if(js.includes("tempChannels.registerChannel")) {
    array.push(`const TempChannels = require("discord-temp-channels");`)
    array.push(`const db = require("quick.db")`)
    code.push(`const tempChannels = new TempChannels(s4d.client);`)
    code.push(`
    s4d.client.on("ready", () => {
        if (!db.get("temp-channels")) db.set("temp-channels", []);
        db.get("temp-channels").forEach((channelData) => {
            tempChannels.registerChannel(channelData.channelID, channelData.options);
        });
    });
    `)
}
if(js.includes("const stream = discordTTS")) {
    array.push(`const discordTTS = require("discord-tts");`)
    array.push(`const {AudioPlayer, createAudioResource, StreamType, entersState, VoiceConnectionStatus, joinVoiceChannel} = require("@discordjs/voice");`)
    code.push(`let voiceConnection;`)
    code.push(`let audioPlayer=new AudioPlayer();`)
}
if(js.includes("Snake") || (js.includes("Calculator")) || (js.includes("Fight"))) {
    array.push(`const { Calculator, Snake, Fight } = require('weky')`)
}
if(js.includes("censor")){
    array.push("const censor = require('discord-censor');")
}
if(js.includes("moment")){
    array.push(`let moment  = require("moment")`)
}
if(js.includes("queue.join")) { 
    array.push(`let { Player, RepeatMode } = require("discord-music-player");`)
    code.push(`let player = new Player(s4d.client, { leaveOnEmpty: false, deafenOnJoin: true, });`)
    code.push(`s4d.client.player = player;`)
}
if(js.includes("backup")){
    array.push(`const backup = require("discord-backup");`)
}
if(js.includes("akinator")){
    array.push(`const akinator = require("discord.js-akinator");`)
}

    array.push(`const os = require("os-utils");`)

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
  if(js.includes("firebase")){
    array.push(`let firebase = require("firebase")`)
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
if(js.includes("queue.connect")){
    array.push(`let { Player,QueueRepeatMode } = require("discord-player")`)//foi
    array.push(`let playdl = require("play-dl")`)
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
 if(js.includes("os.sysUptime()")){
    code.push(`function secondsToDhms(seconds) {
var days = Math.floor(seconds / (3600*24));
seconds  -= days*3600*24;
var hrs   = Math.floor(seconds / 3600);
seconds  -= hrs*3600;
var mnts = Math.floor(seconds / 60);
seconds  -= mnts*60;
return Math.floor(days)+" days, "+Math.floor(hrs)+" Hrs, "+Math.floor(mnts)+" Minutes, "+Math.floor(seconds)+" Seconds"
}`)
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
  if(js.includes("progressbar")){
    array.push(`let progressbar = require('string-progressbar')`)
}
if(js.includes("weirdToNormalChars")){
    array.push(`const { weirdToNormalChars } = require('weird-to-normal-chars')`)
}
if(js.includes("captcha")){
    array.push(`const Captcha = require("@haileybot/captcha-generator");`)
}
if(js.includes("paginationEmbed")){
    array.push(`const paginationEmbed = require('discord-pagination-fixed');`)
}
if(js.includes("jimp")){
    array.push(`let jimp = require('jimp')`)
}
if(js.includes("write")){
    array.push("const write = require('write');")
}
if(js.includes("AntiSpam")){
    array.push(`const AntiSpam = require("discord-anti-spam");`)
}
  if(js.includes("translate")){
    array.push(`const translate = require('translate-google');`)
}
}
