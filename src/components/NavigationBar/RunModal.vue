<template>
    <b-modal id="run-modal" hide-footer :title="$t('run_modal.title')">
        <div class="d-block text-center">
            <b-container>
                <b-row>
                    <b-col>
                        <b-overlay :show="botStarting" class="d-inline-block" rounded="circle">
                            <b-img thumbnail  width="125" height="125" rounded="circle" fluid :src="botAvatar"></b-img>
                        </b-overlay>
                    </b-col>
                    <b-col>
                        <b-overlay :show="botStarting" rounded opacity="0.6" spinner-small spinner-variant="primary" class="d-inline-block" @hidden="onHidden">
                            <b-button ref="button" class="btn btn-success btn-block" :disabled="botStarted" @click="start">{{ $t('run_modal.start') }}</b-button>
                        </b-overlay>
                        <b-overlay :show="botStarting" rounded opacity="0.6" spinner-small spinner-variant="primary" class="d-inline-block" @hidden="onHidden">
                            <b-button class="btn btn-danger btn-block" :disabled="!botStarted" @click="stop">{{ $t('run_modal.stop') }}</b-button>
                        </b-overlay>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <hr>
    </b-modal>
</template>

<script>

import DiscordJs from "discord.js";

export default {
    name: "editmenu",
    data: function () {
        return {
            botStarted: false,
            botStarting: false,
            botRawAvatar: null,
            s4d: null
        };
    },
    computed: {
        botAvatar: function(){
            return this.botRawAvatar || "https://cdn.discordapp.com/embed/avatars/2.png";
        }
    },
    methods: {
        start(){
            /* eslint-disable no-unused-vars */
            /* eslint-disable no-undef */
            const DiscordJS = DiscordJs;
            this.botStarting = true;
            const result = new Promise(resolve => resolve(eval(this.getWorkspaceCode())));
            result.then((s4d) => {
                setTimeout(() => {
                    if(s4d.tokenInvalid){
                        this.botStarting = false;
                        this.botStarted = false;
                        this.$toast.open({
                            message: this.$t('run_modal.invalid_token'),
                            type: "error",
                            dismissible: true,
                            duration: 10000,
                            position: "top-right"
                        });
                        this.$bvModal.hide("run-modal");
                    } else if(!s4d.client.readyTimestamp){
                        this.botStarting = false;
                        this.botStarted = false;
                        this.$toast.open({
                            message: this.$t('run_modal.error'),
                            type: "error",
                            dismissible: true,
                            duration: 10000,
                            position: "top-right"
                        });
                        this.$bvModal.hide("run-modal");
                    }
                    return;
                }, (5000));
                s4d.client.on('ready', () => {
                    this.botStarting = false;
                    this.botStarted = true;
                    this.botRawAvatar = s4d.client.user.displayAvatarURL();
                });
                s4d.client.on('shardDisconnect', () => {
                    this.botStarted = false;
                    this.s4d = null;
                });
                this.s4d = s4d;
            });
        },
        stop(){
            this.s4d.client.destroy();
        },
        onHidden() {
            this.$refs.button.focus()
        }
    }
}
</script>

<style scoped>

.btn-space {
    margin-right: 5px;
}

.test {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

</style>
