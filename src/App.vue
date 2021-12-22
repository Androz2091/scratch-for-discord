<template>
    <div id="app">
        <NavBarComponent id="navSpace"></NavBarComponent>
        <BlocklyComponent id="blocklySpace" :options="options"></BlocklyComponent>
        <v-tour name="start-tour" :steps="vueTourOptions.steps" :options="vueTourOptions"></v-tour>
    </div>
</template>

<script>

import Blockly from "blockly";
import NavBarComponent from "./components/NavigationBar/NavigationBar.vue";
import BlocklyComponent from "./components/BlocklyComponent.vue";




Blockly.Tooltip.HOVER_MS = 100;

// Load blocks

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
import  "./blocks/discord/voice-channel/";
  
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

import "./blocks/jsonrequest";
import "./blocks/database/";
import "./blocks/text/";
import "./blocks/loops/";
import "./blocks/other/";
import "./blocks/weky/";
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
import "./blocks/better_music/"

import Theme from '@blockly/theme-modern';




//ahq stuff
import "./blocks/ahq/";
import "./blocks/henpokpok/";
export default {
    name: "app",
    components: {
        BlocklyComponent,
        NavBarComponent
    },
    beforeCreate(){
        this.$root.$i18n.locale = this.$store.state.blocklyLocale;
    },
    mounted(){
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

        if(!this.$store.state.tourDone){
            this.$tours["start-tour"].start();
            this.$store.commit('setTour', {
                status: true
            });
        }
    },
    data() {
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
            move:{
        scrollbars: {
          horizontal: true,
          vertical: true
        },
        drag: true,
        wheel: true},
            vueTourOptions: {
                labels: {
                    buttonSkip: this.$t('tour.skip'),
                    buttonPrevious: this.$t('tour.previous'),
                    buttonNext: this.$t('tour.next'),
                    buttonStop: this.$t('tour.finish')
                },
                steps: [
                    {
                        target: '#v-step-0',
                        content: this.$t('tour.steps.load_examples'),
                        params: {
                            enableScrolling: false
                        }
                    },
                    {
                        target: '#v-step-1',
                        content: this.$t('tour.steps.run_test'),
                        params: {
                            enableScrolling: false
                        }
                    },
                    {
                        target: '#v-step-2',
                        content: this.$t('tour.steps.export_code'),
                        params: {
                            enableScrolling: false
                        }
                    }
                ]
            }
        }
    }
}

</script>

<style>
#app {
        font-family: "Oswald", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
 
#blocklySpace {
    position: absolute;
    width: 100%;
    height: 94%;
}

.boldtext {
    font-weight: bolder;
}

.testopa {
    opacity: 0.1;
}
</style>
