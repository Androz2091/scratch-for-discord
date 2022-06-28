<template>
    <b-nav-item-dropdown id="v-step-0" text="Examples" right>
        <b-dropdown-item @click="load('ping-pong')">Ping-Pong Command</b-dropdown-item>
        <b-dropdown-item @click="load('command-parsing')">Command Handler</b-dropdown-item>
        <b-dropdown-item @click="load('bettercmd')">Prefix Command Handler</b-dropdown-item>
        <b-dropdown-item @click="load('leveling')">Basic Leveling System</b-dropdown-item>
        <b-dropdown-item @click="load('music')">Music System</b-dropdown-item>
        <b-dropdown-item @click="load('image-gen')">Image Generation</b-dropdown-item>
        <b-dropdown-item @click="load('economy')">Economy System</b-dropdown-item>
        <b-dropdown-item @click="load('leaderboard')">Leaderboard from Database</b-dropdown-item>
        <b-dropdown-item @click="load('backup')">Backups</b-dropdown-item>
        <b-dropdown-item @click="load('random')">Random Responses</b-dropdown-item>
        <b-dropdown-item @click="load('ticket')">Tickets</b-dropdown-item>
        <b-dropdown-item @click="load('reddit')">Reddit</b-dropdown-item>
        <b-dropdown-item @click="load('button')">Buttons & Button rows</b-dropdown-item>
        <b-dropdown-item @click="load('slash')">Slash Commands</b-dropdown-item>
        <b-dropdown-item @click="load('advjsonreq')">Advanced JSON Request</b-dropdown-item>
        <b-dropdown-item @click="load('regex')">RegEx: Finding specific text</b-dropdown-item>
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
import cooldown from "../../examples/cooldown";
import slash from "../../examples/slash";
import advjsonreq from "../../examples/advjsonreq.js";
import regex from "../../examples/regex.js";
import leaderboard from "../../examples/leaderboard.js";

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
    "cooldown": cooldown,
    "slash": slash,
    "advjsonreq": advjsonreq,
    "regex": regex,
    "leaderboard": leaderboard
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
