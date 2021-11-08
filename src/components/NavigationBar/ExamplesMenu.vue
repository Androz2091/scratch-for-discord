<template>
    <b-nav-item-dropdown id="v-step-0" :text="$t('examples.title')" right>
        <b-dropdown-item @click="load('ping-pong')">{{ $t('examples.ping_pong') }}</b-dropdown-item>
        <b-dropdown-item @click="load('command-parsing')">{{ $t('examples.command_parsing') }}</b-dropdown-item>
        <b-dropdown-item @click="load('leveling')">{{ $t('examples.leveling') }}</b-dropdown-item>
        <b-dropdown-item @click="load('music')">{{ $t('examples.music') }}</b-dropdown-item>
        <b-dropdown-item @click="load('image-gen')">{{ $t('examples.image_gen') }}</b-dropdown-item>
        <b-dropdown-item @click="load('economy')">{{ $t('examples.economy') }}</b-dropdown-item>
</template>

<script>
import Blockly from "blockly";

import PingPongExample from "../../examples/ping-pong";
import CommandParsingExample from "../../examples/command-parsing";
import LevelingExample from "../../examples/leveling";
import MusicExample from "../../examples/music";
import ImageGen from "../../examples/image_gen";
import Economy from "../../examples/economy";

const examples = {
    "ping-pong": PingPongExample,
    "command-parsing": CommandParsingExample,
    "leveling": LevelingExample,
    "music":MusicExample,
    "image-gen": ImageGen,
    "economy": Economy
};

export default {
    name: "editmenu",
    computed: {
    },
    methods: {
        load(example){
            this.$swal({
                title: this.$t('examples.confirm.title'),
                text: this.$t('examples.confirm.text'),
                buttons: {
                    cancel: this.$t('examples.confirm.cancel'),
                    no: {
                        text: this.$t('examples.confirm.no'),
                        value: false,
                        className: "red-button"
                    },
                    yes: {
                        text: this.$t('examples.confirm.yes'),
                        value: true
                    }
                },
                closeOnClickOutside: false
            }).then(result => {
                if(typeof result === "object"){
                    return;
                } else if (result) {
                    this.$store.state.workspace.getAllBlocks().forEach((block) => block.dispose());
                }
                const exampleXml = examples[example];
                Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(exampleXml), this.$store.state.workspace);
                setTimeout(() => {
                    this.$toast.open({
                        message: this.$t('examples.loaded', {
                            example
                        }),
                        type: "success",
                        dismissible: true,
                        duration: 10000
                    });
                }, (200));
            });
        }
    }
}
</script>
