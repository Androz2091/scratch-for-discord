<template>
    <div class="modal fade" id="run-modal" tabindex="-1" ref="modal" aria-labelledby="run-modal-title" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="run-modal-title">{{ $t("run_modal.title") }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <template v-if="!electronApp">
                        <i18n-t keypath="run_modal.disabled" tag="h5" scope="global">
                            <template #here>
                                <a href="https://androz2091.github.io/scratch-for-discord/download/index.html" target="_blank">{{ $t("run_modal.here") }}</a>
                            </template>
                        </i18n-t>
                        <hr>
                    </template>
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="botinfos">
                            <img class="avatar" :src="botAvatar" alt="">
                            <span class="botname" :class="{ 'user-select-none': !electronApp }">Logged in as {{ botTag || "Unknown#0000" }}</span>
                        </div>
                        <button class="btn handlebutton" :class="botStarted ? 'btn-danger' : 'btn-success'" :disabled="botStarting" @click="handle" :title="botStarted ? $t('run_modal.stop') : $t('run_modal.start')">
                            <span v-if="botStarting" class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M7.5 1v7h1V1z"/><path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, useTemplateRef } from "vue";
import { useI18n } from "vue-i18n";
import { Modal } from "bootstrap";
import { toast } from "../../dialogs";
import { getWorkspaceCode } from "../../workspace";

const { t } = useI18n();
const modal = useTemplateRef("modal");

const botStarted = ref(false);
const botStarting = ref(false);
const botRawAvatar = ref(null);
const botTag = ref(null);

const botAvatar = computed(() => botRawAvatar.value || "https://cdn.discordapp.com/embed/avatars/0.png");
const electronApp = typeof navigator === "object" && typeof navigator.userAgent === "string" && navigator.userAgent.indexOf("Electron") >= 0;

function fail(message) {
    botStarting.value = false;
    botStarted.value = false;
    toast.fire({ icon: "error", title: message });
    Modal.getOrCreateInstance(modal.value).hide();
}

// The desktop app runs the generated code and reports back through ScratchNative
function start() {
    if (!("ScratchNative" in window)) return;
    botStarting.value = true;
    window.ScratchNative.onMessage("executeCode", (event, result) => {
        setTimeout(() => {
            if (result.s4d.tokenInvalid) {
                console.error(result.s4d.tokenError);
                fail(result.s4d.tokenError || t("run_modal.invalid_token"));
            } else if (result.s4d.client && !result.s4d.client.readyTimestamp) {
                fail(result.s4d.tokenError || t("run_modal.error"));
            }
        }, 5000);
    });
    window.ScratchNative.onMessage("clientReady", (event, client) => {
        botStarting.value = false;
        botStarted.value = true;
        botRawAvatar.value = client.displayAvatarURL;
        botTag.value = client.tag;
    });
    window.ScratchNative.onMessage("clientDebug", (event, message) => console.log(`[S4D_DEBUG] ${message}`));
    window.ScratchNative.onMessage("clientError", (event, message) => console.error(`[S4D_ERROR] ${message}`));
    window.ScratchNative.onMessage("clientWarn", (event, message) => console.warn(`[S4D_WARN] ${message}`));
    window.ScratchNative.onMessage("clientShardDisconnect", () => {
        botStarted.value = false;
    });
    window.ScratchNative.sendMessage("executeCode", getWorkspaceCode());
}

function stop() {
    window.ScratchNative?.sendMessage("destroyClient");
    window.ScratchNative?.unregisterEvents([
        "executeCode",
        "clientShardDisconnect",
        "clientWarn",
        "clientError",
        "clientDebug",
        "clientReady"
    ]);
    botStarted.value = false;
    botRawAvatar.value = null;
    botTag.value = null;
}

function handle() {
    if (botStarted.value) stop();
    else start();
}
</script>

<style scoped>
.botinfos {
    display: flex;
    align-items: center;
    min-width: 0;
}

.avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.botname {
    margin-left: 10px;
    font-weight: 600;
    font-size: 20px;
    color: grey;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.handlebutton {
    width: 100px;
}
</style>
