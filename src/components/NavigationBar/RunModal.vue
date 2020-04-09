<template>
    <b-modal id="run-modal" hide-footer title="Appuyez sur démarrer pour tester votre bot!">
        <div class="d-block text-center">
            <b-container class="bv-example-row">
            <b-row>
                <b-col>
                    <b-overlay :show="botStarting" class="d-inline-block" rounded="circle">
                        <b-img thumbnail rounded="circle" fluid :src="botAvatar" alt="Image 1"></b-img>
                    </b-overlay>
                </b-col>
                <b-col cols="8">
                    <span><strong></strong></span>
                    <hr>
                    <span><strong>Découvrez comment héberger votre bot H24 7/7j sur un serveur!</strong></span>
                </b-col>
            </b-row>
            </b-container>
            
            <br>
        </div>
        <hr>
        <div class="btn-toolbar">
            <div class="btn-space">
                <b-overlay
                    :show="botStarting"
                    rounded
                    opacity="0.6"
                    spinner-small
                    spinner-variant="primary"
                    class="d-inline-block"
                    @hidden="onHidden"
                >
                    <b-button ref="button" class="btn btn-success btn-block" :disabled="botStarted" @click="start">Démarrer le bot</b-button>
                </b-overlay>
            </div>
            <div class="btn-space">
                <b-overlay
                    :show="botStarting"
                    rounded
                    opacity="0.6"
                    spinner-small
                    spinner-variant="primary"
                    class="d-inline-block"
                    @hidden="onHidden"
                >
                <b-button class="btn btn-danger btn-space btn-block" :disabled="!botStarted" @click="stop">Arrêter le bot</b-button>
                </b-overlay>
            </div>
        </div>
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
                            message: "Impossible de se connecter à Discord... Peut-être que le token du bot n'est pas valide !",
                            type: "error",
                            dismissible: true,
                            duration: 10000,
                            position: "top-right"
                        });
                        this.$bvModal.hide("run-modal");
                    } else {
                        this.botStarting = false;
                        this.botStarted = false;
                        this.$toast.open({
                            message: "Impossible de se connecter à Discord... Réessayez plus tard!",
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
            // Return focus to the button once hidden
            this.$refs.button.focus()
        }
    }
}
</script>

<style scoped>

.btn-space {
    margin-right: 5px;
}

</style>
