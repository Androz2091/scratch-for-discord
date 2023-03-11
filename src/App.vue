<template>
    <div id="app">
        <NavBarComponent id="navSpace"></NavBarComponent>
        <BlocklyComponent id="blocklySpace" :options="options"></BlocklyComponent>
    </div>
</template>

<script>

import Blockly from "blockly";
import NavBarComponent from "./components/NavigationBar/NavigationBar.vue";
import BlocklyComponent from "./components/BlocklyComponent.vue";

console.log("User is currently on platform", navigator.userAgent)


Blockly.Tooltip.HOVER_MS = 100;

import "./components/S4DDebugTool"

// Load blocks
// load the entire folder mf
import "./blocks/"

// anyways heres some other manual loading because im not gonna add all of these to blocks's index.js file

import "./blocks/discord/base/";
import "./blocks/discord/message-event/";
import "./blocks/discord/reaction-event/";
import "./blocks/discord/bot-event";

import "./blocks/discord/channels/";
import "./blocks/discord/servers/";
import "./blocks/discord/roles/";
import "./blocks/discord/members/";
import "./blocks/discord/deleted/";
import "./blocks/discord/discord-button/";
import "./blocks/discord/webhook/";
import "./blocks/discord/embed/";
import "./blocks/discord/discord-menu/";
import "./blocks/discord/music/";
import "./blocks/discord/discord-canvas/welcome/";
import "./blocks/discord/discord-canvas/goodbye/";
import "./blocks/discord/discord-canvas/rankcard/";
import "./blocks/discord/discord-backup/";
import "./blocks/discord/discord-giveaway/";
import "./blocks/youtube-notifier/";
import "./blocks/image-generation/";
import "./blocks/discord-image/";
import "./blocks/invite-tracker/";
import "./blocks/cooldown/";
import "./blocks/together/";
import "./blocks/discord/attachment/";
import "./blocks/discord/bot-event-2/";
import "./blocks/date/";
import "./blocks/regex/";
import "./blocks/list/";
import "./blocks/firebase/";
import "./blocks/discord/voice-channel/";
import "./blocks/progess-bar/";
import "./blocks/captcha/";
import "./blocks/pagination/";
import "./blocks/discord/thread-event"
import "./blocks/godslayerakp"

//my events
//channel
import "./blocks/logs-events/channel/channel-permissions-update/";
import "./blocks/logs-events/channel/channel-topic-update/";
//member
import "./blocks/logs-events/member/member_boosted/";
import "./blocks/logs-events/member/member_unboosted/";
import "./blocks/logs-events/member/role_add/";
import "./blocks/logs-events/member/role_remove/";
//server
import "./blocks/logs-events/guild/boost_level_up/";
import "./blocks/logs-events/guild/boost_level_down/";
import "./blocks/logs-events/guild/guild_banner_add/";
import "./blocks/logs-events/guild/vanity_url_add/";
import "./blocks/logs-events/guild/vanity_url_remove/";
import "./blocks/logs-events/guild/vanity_url_update/";
//finish of my events

import "./blocks/discord/mmenu/";
import "./blocks/discord/mbuttons/";
import "./blocks/discord/membed/";
import "./blocks/discord/m-register-menus/";
import "./blocks/discord/mslash/";
import "./blocks/discord/wmise/";
import "./blocks/mongodb/";

// orang
import "./blocks/LaserCat/switch";

import "./blocks/jsonrequest";
import "./blocks/database/";
import "./blocks/text/";
import "./blocks/loops/";
import "./blocks/other/";
import "./prompt";
//events
//channel
import "./blocks/events/channel/channelCreate/";
import "./blocks/events/channel/channelUpdate/";
import "./blocks/events/channel/channelDelete/";
//emoji
import "./blocks/events/emoji/emojiCreate/";
import "./blocks/events/emoji/emojiUpdate/";
import "./blocks/events/emoji/emojiDelete/";
//member
import "./blocks/events/member/join-event/";
import "./blocks/events/member/leave-event/";
import "./blocks/events/member/guildBanAdd/";
import "./blocks/events/member/guildBanRemove/";
import "./blocks/events/server/serverUpdate/";
//role
import "./blocks/events/role/roleCreate/";
import "./blocks/events/role/roleUpdate/";
import "./blocks/events/role/roleDelete/";
//sticker
import "./blocks/events/sticker/stickerCreate/";
import "./blocks/events/sticker/stickerUpdate/";
import "./blocks/events/sticker/stickerDelete/";
//469 stuff
import "./blocks/games/"
import "./blocks/reddit/"
import "./blocks/p-s_stats/"
import "./blocks/ticket_system/"
import "./blocks/Alex/"
import "./blocks/Lyric_finder/"
import "./blocks/frostzzone/useless/"
import "./blocks/frostzzone/useful/"
import "./blocks/frostzzone/scratch/"
import "./blocks/frostzzone/github/"

import "./blocks/invention"

import "./blocks/better_music/"
import "./blocks/weky/"
import "./blocks/temp_channels"
import "./blocks/qr-generator"
//jeremy gaming coolness
import "./blocks/JeremyGamer13/"
import "./blocks/JeremyGamer13/jimpBlocks"
import "./blocks/JeremyGamer13/fileEdit"

// Farf things

import "./blocks/charts/";
import "./blocks/tictactoe/";
import "./blocks/dashboard";



// afgrh4t5h5453j
import "./blocks/example-t/"

import "./blocks/discord/scheduled-events/scheduled-events"
import "./blocks/Lime/Embed"
import "./blocks/Lime/Events"
// p
import "./blocks/unlocked_blockly"

import Theme from '@blockly/theme-modern';

//ahq stuff
import "./blocks/ahq/";
import "./blocks/henpokpok/"; // wait a minute

//Eruption
import "./blocks/Eruption/message_embed/"

// Parham
import "./blocks/Parham"

// Monaco
import "./blocks/Monaco"
// OpenAI 
import "./blocks/emidblol/openai/index.js"

import "./blocks/quickdb"

export default {
    name: "app",
    components: {
        BlocklyComponent,
        NavBarComponent
    },
    beforeCreate() {
        this.$root.$i18n.locale = this.$store.state.blocklyLocale;
    },
    mounted() {
        if (String(window.location.pathname).replace(/\//gmi, "") == "v2") {
            window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0"
        }
        if (String(window.location.pathname).replace(/\//gmi, "") == "broken") {
            window.location.href = "https://scratch-for-discord-broken.jeremygamer13.repl.co/"
        }
        console.log("...wait a second... a user?")
        console.log("i gotta tell them!")
        console.log(
            "%cCAREFUL WHAT YOU TYPE IN CONSOLE! %cbarry and johnathan are watching all of your moves...",
            "color:red;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold",
            "color:DarkRed;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold"
        )
        console.log("...")
        for (let i = 0; i < 3; i++) {
            console.log("")
            console.log(
                "%cWARNING! %cIf you use S4D forums, be careful what you paste into here! You are most likely going to get your account hacked.",
                "color:red;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold",
                "color:white;font-family:system-ui;font-size:1.75rem;-webkit-text-stroke: 1px black;font-weight:bold"
            )
        }
        if (!("ScratchNative" in window) && window.parent?.ScratchNative) window.ScratchNative = window.parent.ScratchNative;
        const tourDone = localStorage.getItem('tourDone');
        if (tourDone !== null) this.$store.commit('setTour', {
            status: tourDone
        });
        const blocklyLocale = localStorage.getItem('blocklyLocale');
        if (blocklyLocale !== null) {
            this.$store.commit('setLocale', {
                newLocale: blocklyLocale
            });
            this.setLanguage(blocklyLocale);
        }
    },
    data() {
        //month starts at 0 day starts at 1
        if ((new Date().getMonth()) == 3 && ((new Date().getDate())) == 1) {
            return {
                options: {
                    renderer: "zelos",
                    theme: Theme,
                    collapse: true,
                    comments: true,
                    disable: true,
                    maxBlocks: Infinity,
                    trashcan: true,
                    horizontalLayout: false,
                    rtl: true,
                    zoom: {
                        controls: true,
                        startScale: 0.9,
                        maxScale: 3,
                        minScale: 0.3,
                        scaleSpeed: 1.2
                    }
                },
                move: {
                    scrollbars: {
                        horizontal: true,
                        vertical: true
                    },
                    drag: true,
                    wheel: true
                }
            }
        } else {
            return {
                options: {
                    renderer: "zelos",
                    theme: Theme,
                    zoom: {
                        controls: true,
                        startScale: 0.9,
                        maxScale: 3,
                        minScale: 0.3,
                        scaleSpeed: 1.2
                    }
                },
                move: {
                    scrollbars: {
                        horizontal: true,
                        vertical: true
                    },
                    drag: true,
                    wheel: true
                }
            }
        }
    }
}

</script>

<style>
#app {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

#blocklySpace {
    position: absolute;
    width: 100%;
    height: calc(100% - 66px);
}

.boldtext {
    font-weight: bolder;
}

.testopa {
    opacity: 0.1;
}
</style>
