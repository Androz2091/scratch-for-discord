<template>
    <b-modal id="run-modal" hide-footer :title="$t('run_modal.title')">
        <div class="d-block">
            <b-container>
                <b-row v-if="!electronApp">
                    <i18n path="run_modal.disabled" tag="h5">
                        <template v-slot:here>
                            <a href="https://androz2091.github.io/scratch-for-discord/download/index.html" target="_blank">{{ $t('run_modal.here') }}</a>
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
        start(){
            if (!("ScratchNative" in window)) return;
            this.botStarting = true;
            const finalCode = this.getWorkspaceCode();
            window.ScratchNative?.onMessage("executeCode", (event, result) => {
                setTimeout(() => {
                    try {
                        if(result.s4d.tokenInvalid) {
                            console.error(result.s4d.tokenError);
                            this.botStarting = false;
                            this.botStarted = false;
                            this.$toast.open({
                                message: result.s4d.tokenError || this.$t('run_modal.invalid_token'),
                                type: "error",
                                dismissible: true,
                                duration: 10000,
                                position: "top-right"
                            });
                            this.$bvModal.hide("run-modal");
                        } else if(result.s4d.client && !result.s4d.client.readyTimestamp){
                            this.botStarting = false;
                            this.botStarted = false;
                            this.$toast.open({
                                message: result.s4d.tokenError || this.$t('run_modal.error'),
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
            });

            window.ScratchNative?.onMessage('clientReady', (event, client) => {
                this.botStarting = false;
                this.botStarted = true;
                this.botRawAvatar = client.displayAvatarURL;
                this.botTag = client.tag;
            });

            window.ScratchNative?.onMessage("clientDebug", (event, message) => {
                console.log(`[S4D_DEBUG] ${message}`);
            });

            window.ScratchNative?.onMessage("clientError", (event, message) => {
                console.error(`[S4D_ERROR] ${message}`);
            });

            window.ScratchNative?.onMessage("clientWarn", (event, message) => {
                console.warn(`[S4D_WARN] ${message}`);
            });

            window.ScratchNative?.onMessage('clientShardDisconnect', () => {
                this.botStarted = false;
                this.s4d = null;
            });

            window.ScratchNative?.sendMessage("executeCode", finalCode);
        },
        stop(){
            window.ScratchNative?.sendMessage("destroyClient");
            window.ScratchNative?.unregisterEvents([
                "executeCode",
                "clientShardDisconnect",
                "clientWarn",
                "clientError",
                "clientDebug",
                "clientReady"
            ]);
            this.botRawAvatar = null;
            this.botTag = null;
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
