<template>
    <b-nav-item-dropdown id="v-step-0" :text="$t('examples.title')" right>
        <b-dropdown-item @click="load('ping-pong')">{{ $t('examples.ping_pong') }}</b-dropdown-item>
        <b-dropdown-item @click="load('command-parsing')">{{ $t('examples.command_parsing') }}</b-dropdown-item>
      <b-dropdown-item @click="load('bettercmd')">{{$t('examples.bettercmd')}}</b-dropdown-item>
      <b-dropdown-item @click="load('cooldown')">{{$t('examples.cooldown')}}</b-dropdown-item>
        <b-dropdown-item @click="load('leveling')">{{ $t('examples.leveling') }}</b-dropdown-item>
      <b-dropdown-item @click="load('aki')">{{ $t('examples.aki') }}</b-dropdown-item>
        <b-dropdown-item @click="load('music')">{{ $t('examples.music') }}</b-dropdown-item>
        <b-dropdown-item @click="load('image-gen')">{{ $t('examples.image_gen') }}</b-dropdown-item>
        <b-dropdown-item @click="load('economy')">{{ $t('examples.economy') }}</b-dropdown-item>
      <b-dropdown-item @click="load('backup')">{{ $t('examples.backup') }}</b-dropdown-item>
      <b-dropdown-item @click="load('random')">{{ $t('examples.random') }}</b-dropdown-item>
      <b-dropdown-item @click="load('ticket')">{{ $t('examples.ticket') }}</b-dropdown-item>
      <b-dropdown-item @click="load('reddit')">{{ $t('examples.reddit') }}</b-dropdown-item>
      <b-dropdown-item @click="load('button')">{{ $t('examples.button') }}</b-dropdown-item>
      
      </b-nav-item-dropdown>
</template>

<script>
import Blockly from "blockly";

import PingPongExample from "../../examples/ping-pong";
import CommandParsingExample from "../../examples/command-parsing";
import bettercmd from "../../examples/bettercmd";
import LevelingExample from "../../examples/leveling";
import MusicExample from "../../examples/music";
import ImageGen from "../../examples/image_gen";
import Economy from "../../examples/economy";
import backup from "../../examples/backup";
import random from "../../examples/random";
  import aki from "../../examples/aki";
  import reddit from "../../examples/reddit";
  import ticket from "../../examples/ticket";
  import button from "../../examples/button";
  import cooldown from "../../examples/cooldown"

const examples = {
    "ping-pong": PingPongExample,
    "command-parsing": CommandParsingExample,
  "bettercmd": bettercmd,
    "leveling": LevelingExample,
    "music":MusicExample,
    "image-gen": ImageGen,
    "economy": Economy,
  "backup": backup,
  "random": random,
  "aki": aki,
  "reddit": reddit,
  "ticket": ticket,
  "button": button,
  "cooldown": cooldown
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
                if(typeof result == "object"){
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
