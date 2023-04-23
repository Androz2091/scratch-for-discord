<template>
    <b-modal id="run-modal" hide-footer :title="$t('run_modal.title')">
        <div class="d-block">
            <b-container>
                <b-row v-if="!electronApp">
                    <i18n path="run_modal.disabled" tag="h5">
                        <template v-slot:here>
                            <a href="https://ahqsoftwares.github.io/scratch-for-discord-app/" target="_blank">{{ $t('run_modal.here') }}</a>
                        </template>
                    </i18n>
                </b-row>
                <hr>
                <b-row>
                    <b-col sm="12" lg="8">
                        <div class="botinfos">
                            <b-overlay :show="botStarting" class="d-inline-block" rounded="circle">
                                <div :style="getBotImageStyle()"></div>
                            </b-overlay>
                            <span :class="getUsernameSpanClass()">Logged in as {{ botTag || "Unknown#0000" }}</span>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="handlebuttondiv">
                            <b-overlay :show="botStarting" rounded opacity="0.6" spinner-small spinner-variant="primary" class="d-inline-block" ref="button" @hidden="onHidden">
                                <b-button :class="getHandleButtonClass()" @click="handle()" v-b-tooltip.hover :title="getTooltipContent()" ><font-awesome-icon icon="power-off" /></b-button>
                            </b-overlay>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </b-modal>
</template>

<script>
                                import DIG from "discord-image-generation"
                    import Discord from "discord.js"
                    import Database  from "easy-json-database"
                    import logs from 'discord-logs'
                    import moment  from 'moment'
                    import { DB } from "quickmongo"
                    import smartestchatbot from "smartestchatbot"
                    import TempChannels from "TempChannels"
                    import db from "quick.db"
                    import discordTTS from "discord-tts"
                    import Blockly from "blockly";
                    import {AudioPlayer, createAudioResource, StreamType, entersState, VoiceConnectionStatus, joinVoiceChannel} from ("@discordjs/voice")
					import { Calculator, Snake, Fight } from "weky";
                    import censor from "discord-censor";
                                        import canvas from "discord-canvas"
                    import { MessageEmbed, MessageButton, MessageActionRow, Intents, Permissions, MessageSelectMenu }from 'discord.js'
										import https from "https"
                    import { GiveawaysManager }from 'discord-giveaways'
                    import ytnotifier  from 'youtube-notification-module'
                    import { Player,QueueRepeatMode } from "discord-player"
                    import {NodeVM} from 'vm2'
                    import beautify from "js-beautify";
                    
export default {
    name: "editmenu",
    data: function () {
        return {
            botStarted: false,
            botStarting: false,
            botRawAvatar: null,
            botTag: null,
            s4d: null
        };
    },
    computed: {
        botAvatar: function(){
            return this.botRawAvatar || "https://cdn.discordapp.com/embed/avatars/0.png";
        },
        electronApp: function(){
            return typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0;
        }
    },
    methods: {
        getBotImageStyle(){
            return {
                'background-size': '50px',
                'background-image': `url(${this.botAvatar})`,
                width: '50px',
                height: '50px',
                'min-height': '50px',
                'min-width': '50px',
                'border-radius': '50%'
            }
        },
        getUsernameSpanClass(){
            return `botname ${!this.electronApp ? 'unselectable' : ''}`
        },
        getTooltipContent(){
            return this.botStarted ? this.$t('run_modal.stop') : this.$t('run_modal.start');
        },
        getHandleButtonClass(){
            return {
                'btn': true,
                'btn-block': true,
                'handlebutton': true,
                'btn-danger': this.botStarted,
                'btn-success': !this.botStarted
            }
        },
        async start(){
            this.botStarting = true;
            const finalCode = beautify.js(Blockly.JavaScript.workspaceToCode(this.$store.state.workspace)(), {
                indent_size: 4,
                space_in_empty_paren: true
            });
                const vm = new NodeVM({
    console: 'inherit',
    sandbox: {censor, Calculator, Snake, Fight, discordTTS, AudioPlayer, createAudioResource, StreamType, entersState, VoiceConnectionStatus, joinVoiceChanneldiscordTTS, db, smartestchatbot, TempChannels, https,GiveawaysManager,canvas,ytnotifier,logs,DIG,DB,moment,Database,Discord,MessageEmbed, MessageButton, MessageActionRow, Intents, Permissions, MessageSelectMenu,Player,QueueRepeatMode},
});
                let s4d = await vm.run(finalCode,'vm.js');
                let result = await s4d()
                setTimeout(() => {
                    try {
                        if(result.tokenInvalid) {
                            console.error(result.tokenError);
                            this.botStarting = false;
                            this.botStarted = false;
                            this.$toast.open({
                                message: result.tokenError || this.$t('run_modal.invalid_token'),
                                type: "error",
                                dismissible: true,
                                duration: 10000,
                                position: "top-right"
                            });
                            this.$bvModal.hide("run-modal");
                        } else if(!result.client.user){
                            this.botStarting = false;
                            this.botStarted = false;
                            this.$toast.open({
                                message: result.tokenError || this.$t('run_modal.error'),
                                type: "error",
                                dismissible: true,
                                duration: 10000,
                                position: "top-right"
                            });
                            this.$bvModal.hide("run-modal");
                        }
                    } catch {
                        void 0;
                    }
                }, 5000);
        },
        stop(){
            
        },
        handle(){
            if(this.botStarted){
                this.stop();
            } else {
                this.start();
            }
        },
        onHidden() {
            this.$refs.button.focus()
        }
    }
}
</script>
<style>
.btn-space {
    margin-right: 5px;
}
.botinfos {
    border-width: 10px;
    border-color: grey;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.botname {
    margin-left: 10px;
    font-weight: 600;
    font-size: 20px;
    color: grey;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.handlebuttondiv {
    margin-right: 0%;
    margin-left: 40%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center
}
.handlebutton {
    width:100px;
}
#run-container:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    z-index: 5; /* Make sure this value is higher than the .form class  */
    top: 0;
    left: 0;
    background-color: rgb(169, 169, 169, 0.5)
}
.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>