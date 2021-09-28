<template>
    <b-nav-item-dropdown id="v-step-0" :text="$t('examples.title')" right>
        <b-dropdown-item @click="load('ping-pong')">{{ $t('examples.ping_pong') }}</b-dropdown-item>
        <b-dropdown-item @click="load('command-parsing')">{{ $t('examples.command_parsing') }}</b-dropdown-item>
        <b-dropdown-item @click="load('leveling')">{{ $t('examples.leveling') }}</b-dropdown-item>
        <b-dropdown-item @click="load('music')">{{ $t('examples.music') }}</b-dropdown-item>
    </b-nav-item-dropdown>
</template>

<script>
import Blockly from "blockly";

import PingPongExample from "../../examples/ping-pong";
import CommandParsingExample from "../../examples/command-parsing";
import LevelingExample from "../../examples/leveling";
import MusicExample from "../../examples/music";

const examples = {
    "ping-pong": PingPongExample,
    "command-parsing": CommandParsingExample,
    "leveling": LevelingExample,
    "music":MusicExample
};
import Swal from "sweetalert2";

export default {
    name: "editmenu",
    computed: {
    },
    methods: {
        load(example){
            Swal.fire({
                title: this.$t('examples.confirm.title'),
                text: this.$t('examples.confirm.text'),
                showCloseButton: true,
                showCancelButton: true,
                showDenyButton:true,
                cancelButtonText:this.$t('examples.confirm.cancel'),
                denyButtonText:this.$t('examples.confirm.no'),
                confirmButtonText:this.$t('examples.confirm.yes'),
            }).then(result => {
                if (result.isConfirmed) {
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
