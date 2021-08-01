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
import "./blocks/discord/join-event/";
import "./blocks/discord/leave-event/";
import "./blocks/discord/reaction-event/";
import "./blocks/discord/wmise/";


import "./blocks/discord/channels/";
import "./blocks/discord/servers/";
import "./blocks/discord/roles/";
import "./blocks/discord/members/";

import "./blocks/database/";
import "./blocks/text/";
import "./blocks/loops/";
import "./blocks/other/";
import "./prompt";

import Theme from '@blockly/theme-modern';

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
    font-family: "Avenir", Helvetica, Arial, sans-serif;
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
