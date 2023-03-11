export default async function require(array, code, js) {
    if (js.includes(".chat")) {
        array.push(`const smartestchatbot = require('smartestchatbot');
    const client = new smartestchatbot.Client();
    `)
    }
    if (js.includes("new Modal()")) {
        code.push(`const discordModals = require('discord-modals');
    discordModals(s4d.client);
    const { Modal, TextInputComponent, showModal } = require('discord-modals');`)
    }
    if (js.includes('QRCode.toString')) {
        array.push(`const QRCode = require('qrcode')`)
    }
    if (js.includes('s4d.client.dashboard = new Dashboard')) {
        array.push(`const Dashboard = require('discord-easy-dashboard');`)
    }
    if (js.includes("tempChannels.registerChannel")) {
        array.push(`const TempChannels = require("discord-temp-channels");`)
        array.push(`const tcdbpkcgRequirementlolol = require("quick.db")`)
        array.push(`const db = new tcdbpkcgRequirementlolol.QuickDB({ filePath: "tempChannelsS4D.sqlite" });`)
        code.push(`const tempChannels = new TempChannels(s4d.client);`)
        code.push(`
    s4d.client.on("ready", async () => {
        let thingie = await db.get("temp-channels")
        if (!thingie) await db.set("temp-channels", []);
        let arrayofstuff = await db.get("temp-channels")
        arrayofstuff.forEach((channelData) => {
            tempChannels.registerChannel(channelData.channelID, channelData.options);
        });
    });
    `)
    }
    if (js.includes(`qdb.set`)) {
        array.push(`const { QuickDB } = require('quick.db')`)
        code.push(`const qdb = new QuickDB()`)
    }
    if (js.includes("const stream = discordTTS")) {
        array.push(`const discordTTS = require("discord-tts");`)
        array.push(`const {AudioPlayer, createAudioResource, StreamType, entersState, VoiceConnectionStatus, joinVoiceChannel} = require("@discordjs/voice");`)
        code.push(`let voiceConnection;`)
        code.push(`let audioPlayer=new AudioPlayer();`)
    }
    if (js.includes("Snake") || (js.includes("Calculator")) || (js.includes("Fight"))) {
        array.push(`const { Calculator, Snake, Fight } = require('weky')`)
    }
    if (js.includes("censor")) {
        array.push("const censor = require('discord-censor');")
    }
    if (js.includes("moment")) {
        array.push(`let moment  = require("moment")`)
    }
    if (js.includes("queue.join")) {
        array.push(`let { Player, RepeatMode } = require("discord-music-player");`)
        code.push(`let player = new Player(s4d.client, { leaveOnEmpty: false, deafenOnJoin: true, });`)
        code.push(`s4d.client.player = player;`)
    }
    if (js.includes("backup")) {
        array.push(`const backup = require("discord-backup");`)
    }
    if (js.includes("akinator")) {
        array.push(`const akinator = require("discord.js-akinator");`)
    }
    if (js.includes("os")) {
        array.push(`const os = require("os-utils");`)
    }
    if (js.includes("lyricsFinder")) {
        array.push(`const lyricsFinder = require('lyrics-finder');`)
    }
    if (js.includes("s4d.Inviter")) {
        array.push(`let Invite = require("discord-inviter-tracker")`)
        code.push("s4d.Inviter = new Invite(s4d.client)")
        code.push(`s4d.Inviter.on("WARN",function(e){
        console.log('WARN: '+e)
    })`)
    }
    if (js.includes("URL")) {
        array.push(`let URL = require('url')`)
    }
    if (js.includes("ticket.start")) {
        array.push(`const ticket = require('tickets-discord');`)
        array.push(`const { start, login } = require('tickets-discord');`)
    }
    if (js.includes(`ms`)) {
        array.push(`const ms = require("ms")`)
    }
    if (js.includes("antilink")) {
        array.push(`const AntiLinkClient = require("anti-link-for-discord");`)
        code.push(`const antilink = new AntiLinkClient({
        warnMessage: (message) => '<@'+message.author.id+'>, No links.',
        muteCount: 5,
        kickCount: 10,
        banCount: 15,
        deleteMessage: true,
      });`)
    }
    if (js.includes("DIG")) {
        array.push(`let DIG = require("discord-image-generation")`)
    }
    if (js.includes("firebase")) {
        array.push(`let firebase = require("firebase")`)
    }
    if (js.includes("DB")) {
        array.push(`let { DB } = require("mongquick");`)
    }
    /*if (js.includes("tictactoe")) {
        array.push(`const TicTacToe = require('discord-tictactoe');`)
        array.push(`const game = new TicTacToe({ language: 'en' })`)
    } */
    if (js.includes("canvas")) {
        array.push(`let canvas = require("discord-canvas") `)
    }
    if (js.includes("https")) {
        array.push(`let https = require("https")`)
    }
    if (js.includes("s4d.manager")) {
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
    if (js.includes("s4d.notifer")) {
        array.push(`let ytnotifier = require("youtube-notification-module")`)
        code.push(`s4d.notifer = new ytnotifier({channels: [],checkInterval: 50});`)
    }
    if (js.includes("queue.connect")) {
        array.push(`let { Player,QueueRepeatMode } = require("discord-player")`)//foi
        array.push(`let playdl = require("play-dl")`)
        code.push(`s4d.player = new Player(s4d.client)`)
    }
    if (js.includes("getBadges")) {
        array.push(`const badges = require("discord-badges");   `)
        code.push(`function getBadges(user){
        return badges.badges(user).then((response) => {
            return response
        }).catch((e) => {
            console.log(e);
        });
    }  `)
    }
    if (js.includes("s4d.client.discordTogether")) {
        array.push(`const { DiscordTogether } = require('discord-together');`)
        code.push(`s4d.client.discordTogether = new DiscordTogether(s4d.client);`)
    }
    if (js.includes("SnakeGame")) {
        array.push(`const SnakeGame = require('snakecord')`)
    }
    if (js.includes("os.sysUptime()")) {
        array.push(`const miliConverter = require("millisecond-converter")`)
    }
    if (js.includes("Cooldown")) {
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
    if (js.includes("progressbar")) {
        array.push(`let progressbar = require('string-progressbar')`)
    }
    if (js.includes("weirdToNormalChars")) {
        array.push(`const { weirdToNormalChars } = require('weird-to-normal-chars')`)
    }
    if (js.includes("captcha")) {
        array.push(`const Captcha = require("@haileybot/captcha-generator");`)
    }
    if (js.includes("paginationEmbed")) {
        array.push(`const paginationEmbed = require('discord-pagination-fixed');`)
    }
    if (js.includes("jimp")) {
        array.push(`const jimp = require('jimp')`)
    }
    if (js.includes("S4D_APP_write")) {
        array.push("const S4D_APP_write = require('write');")
    }
    if (js.includes("AntiSpam")) {
        array.push(`const AntiSpam = require("discord-anti-spam");`)
    }
    if (js.includes("eventEmitter")) {
        array.push(`var eventEmitter = new events.EventEmitter();`);
    }
    if (js.includes("ChartJSImage")) {
        array.push(`const ChartJSImage = require('chart.js-image');`);
    }
    if (js.includes("bcrypt.")) {
        array.push(`const bcrypt = require("bcrypt");`)
    }
    if (js.includes("new TicTacToe")) {
        array.push(`const { TicTacToe } = require("discord-gamecord");`)
    }
    if (js.includes("xml2json({")) {
        array.push(`const xml2json = require('xml-to-json')`)
    }
    if (js.includes("S4D_APP_PKG_axios")||js.includes("_S4D_inventionFSHapiAnimal")||js.includes("_S4D_inventionFSHapiCraiyon")) {
        array.push(`const S4D_APP_PKG_axios = require('axios')`)
    }
    if (js.includes("S4D_APP_MC_GET")) {
        array.push(`const S4D_APP_MC_GET = require('minecraft-server-util');`)
    }
    if (js.includes("S4D_APP_MC_BEDROCK_GET")) {
        array.push(`const S4D_APP_MC_BEDROCK_GET = require('minecraft-server-status-simple');`)
    }
    if (js.includes("S4D_APP_NOBLOX")) {
        array.push(`const S4D_APP_NOBLOX = require("noblox.js");`)
    }
    if (js.includes("S4D_APP_CRYPTOJS")) {
        array.push(`const S4D_APP_CRYPTOJS = require("crypto-js");`)
    }
    if (js.includes("S4D_APP_DJS_VOICE")) {
        array.push(`const S4D_APP_DJS_VOICE = require('@discordjs/voice');
const S4D_APP_VOICE_FS = require('fs');`)
    }
    if (js.includes("dootabase")) {
        array.push(`const dootabase = require("easy-db-json");
dootabase.setFile("./database.json");`)
    }
    if (js.includes("synchronizeSlashCommands")) {
        array.push(`const synchronizeSlashCommands = require('@frostzzone/discord-sync-commands');`)
    }
    if (js.includes("ytdl")) {
        array.push(`const ytdl = require('ytdl-core');`)
    }
    if (js.includes("S4D_APP_FFMPEG")) {
        array.push(`const S4D_APP_FFMPEG = require('ffmpeg');`)
    }
    if (js.includes("S4D_APP_Replit_DB")) {
        array.push(`const S4D_APP_PKG_Replit_DB = require("@replit/database")
        const S4D_APP_Replit_DB = new S4D_APP_PKG_Replit_DB()`)
    }
    if (js.includes("S4D_APP_REDDIT_musakui")) {
        array.push(`const S4D_APP_REDDIT_musakui = require('musakui');`)
    }
    if (js.includes("S4D_APP_RUN_BUTTON")) {
        array.push(`const S4D_APP_RUN_BUTTON = false`)
    }
    if (js.includes("/* IMPORTED - S4D Website Hosting Dependencies */")) {
        array.push(`const S4D_WEBSITECREATION_EXPRESS = require('express')
const S4D_WEBSITECREATION_bodyParser = require('body-parser');
const S4D_WEBSITECREATION_cors = require('cors');
var S4D_WEBSITECREATION_path = require('path');
const S4D_WEBSITECREATION_EXPRESS_app = S4D_WEBSITECREATION_EXPRESS();`)
    }
    if (js.includes("ShsHSjJSjSJSJSGHkkhdjdmns")) {
        array.push(`const ShsHSjJSjSJSJSGHkkhdjdmns = ['CREATE_INSTANT_INVITE','MANAGE_CHANNELS','ADD_REACTIONS','STREAM','VIEW_CHANNEL','SEND_MESSAGES','SEND_TTS_MESSAGES','MANAGE_MESSAGES','EMBED_LINKS','ATTACH_FILES','READ_MESSAGE_HISTORY','MENTION_EVERYONE','USE_EXTERNAL_EMOJIS','CONNECT','SPEAK','USE_VAD','CHANGE_NICKNAME','MANAGE_ROLES','MANAGE_WEBHOOKS','USE_APPLICATION_COMMANDS','REQUEST_TO_SPEAK','MANAGE_THREADS','USE_PUBLIC_THREADS','CREATE_PUBLIC_THREADS','USE_PRIVATE_THREADS','CREATE_PRIVATE_THREADS','USE_EXTERNAL_STICKERS','SEND_MESSAGES_IN_THREADS','START_EMBEDDED_ACTIVITIES']`)
    }
    if (js.includes("S4D_makeid")) {
        code.push(`function S4D_makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < Number(length); i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}`)
    }
    if (js.includes("Database")) {
        array.push('const Database  = require("easy-json-database")')
    }
    if (js.includes("s4d.database")) {
        array.push('const Database  = require("easy-json-database")')
        code.push('s4d.database = new Database(\'./database.json\')')
    }
    if (js.includes("OpenAIApi")) {
        array.push('const { Configuration, OpenAIApi } = require("openai");')
    }
    if(js.includes("_S4D_inventionFSHapiAnimal")) {
        code.push(`async function _S4D_inventionFSHapiAnimal(_S4D_image_anfsh) {
            let _S4D_inventionFSHapiAnimal;
            try {
                const response = await S4D_APP_PKG_axios.get('https://fsh-bot.frostzzone.repl.co/api/animal?animal=' + _S4D_image_anfsh)
                _S4D_inventionFSHapiAnimal = response.data.image;
            } catch (error) {
                //return discord image failed loading if there was and error
                _S4D_inventionFSHapiAnimal = "https://i.ibb.co/N1xhDTD/image.png"
                //also log
                console.error('An error occured when fetching animal')
            }
            return _S4D_inventionFSHapiAnimal;
        }`)
    }
    if(js.includes("_S4D_inventionFSHapiCraiyon")) {
        code.push(`async function _S4D_inventionFSHapiCraiyon(_S4D_image_crfsh) {
            let _S4D_inventionFSHapiCraiyon;
            try {
                const response = await S4D_APP_PKG_axios.get('https://fsh-bot.frostzzone.repl.co/api/imagine?text=' + _S4D_image_crfsh)
                _S4D_inventionFSHapiCraiyon = response.data.image;
            } catch (error) {
                //return discord image failed loading if there was and error
                _S4D_inventionFSHapiCraiyon = "https://i.ibb.co/N1xhDTD/image.png"
                //also log
                console.error('An error occured when fetching craiyon')
            }
            return _S4D_inventionFSHapiCraiyon;
        }`)
    }
}
