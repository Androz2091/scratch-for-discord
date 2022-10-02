import * as Blockly from "blockly";
const blockName = "ahq-mod";
const ahqcolor = ['#ff0000', '#ff0000', '#ff0000', '#ff0000'];
function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockData = {
    "type": "block_type",
    "message0": "Create an all in one mod bot %1 Anti-nsfw %2 anti-nsfw (deepai) api token %3",
    "args0": [
    {
        "type": "input_dummy"
    },
    {
        "type": "input_value",
        "name": "anti-nsfw",
        "check": "Boolean"
    },
    {
        "type": "input_value",
        "name": "deepai",
        "check": "String"
    }],
    "colour": listsGetRandomItem(ahqcolor, false),
    "tooltip": "If you want to get anti-nsfw (deepai) api key go to https://deepai.org/ and register an account for api key",
    "helpUrl": "https://deepai.org/"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(block) {
    const f = Blockly.JavaScript.valueToCode(block, "anti-nsfw", Blockly.JavaScript.ORDER_NONE);
    const e = Blockly.JavaScript.valueToCode(block, "deepai", Blockly.JavaScript.ORDER_NONE);
    let token = "";
    let extra = "";
    if ((f || "false") == "false") {
        token = ""
    } else {
        token = e
    }
    if (token !== "") {
        extra = `
        const deepai = require('deepai');
        deepai.setApiKey(${token});
        async function nsfw(test, reply) {
    if (test) {
        var gifFrames = require('gif-frames');
        gifFrames({ url: test.url, frames: "0-10" }).then(async function (frameData) {
    frameData.forEach(async frame => {
       await deepai.callStandardApi("nsfw-detector", {
            image: frame.getImage(),
    }).then((resp) => {
        console.log(resp.output.nsfw_score)
    if (resp.output.nsfw_score > 0.2) {
        reply.reply(\`No bad image\nTimeout for 1 hr\`).then((m) => {
            reply.delete()
           reply.member.timeout(60 * 60 * 1000, "NSFW image").catch(e => m.edit("Error in muting!"))
        });
    }
    }); 
    });
}).catch(async () => {
            await deepai.callStandardApi("nsfw-detector", {
            image: test.url,
    }).then((resp) => {
        console.log(resp.output.nsfw_score)
    if (resp.output.nsfw_score > 0.2) {
        reply.reply(\`No bad image\nTimeout for 1 hr\`).then((m) => {
            reply.delete()
           reply.member.timeout(60 * 60 * 1000, "NSFW image").catch(e => m.edit("Error in muting!"))
        });
    }
    });
});
    }
}
    s4d.client.on("messageCreate", async(m) => m.attachments.forEach(a => nsfw(a, m)));
    `
    }
    let code =  `//ahq mod api
    ${extra}
    const {AntiRaid} = require('discord-antiraid');
    const antiraid = new AntiRaid(s4d.client, {
        rateLimit: 3,
        time: 10000,
        ban: true,
        kick: false,
        unrank: true,
        exemptMembers: [],
        exemptRoles: [],
        exemptEvent: [],
        reason: "antiraid"
    });
    const antiSpam = new AntiSpam({
        warnThreshold: 3,
        muteThreshold: 4,
        kickThreshold: 10,
        banThreshold: 20,
        maxInterval: 5000,
        warnMessage: "{@user}, Please stop spamming.",
        kickMessage: "**{user_tag}** has been kicked for spamming.",
        muteMessage: "**{user_tag}** has been muted for spamming.",
        banMessage: "**{user_tag}** has been banned for spamming.",
        maxDuplicatesWarning: 3,
        maxDuplicatesKick: 8,
        maxDuplicatesBan: 9,
        maxDuplicatesMute: 5,
        ignoredPermissions: [],
        ignoreBots: false,
        verbose: true,
        ignoredMembers: ["849690256945184828", "478868428728434694", "691111067807514685", "706536914408177726"],
        muteRoleName: "Muted",
        unMuteTime: 0,
        removeMessages: true,
        modLogsEnabled: true,
        modLogsChannelName: "mod-logs-auto",
        modLogsMode: "embed",
    });
    s4d.client.on("messageCreate", async(s4dm, m) => {
        m = s4dm;
        antiSpam.message(s4dm)
        if ((m.mentions.members.size || 0) + (m.mentions.roles.size || 0) > 3) {
            m.reply(\`Timeout for 10mins\nReason: Mass Mention\`).then(() => {
               m.member.timeout(10 * 60 * 1000, "Mass Role Mention").catch(e => console.log(e))
                m.guild.channels.cache.find(c => c.name == "mod-logs-auto").send({
                   embeds: [new MessageEmbed()
                           .setTitle("Mute Log")
                           .setDescription(\`\${m.member.user} was muted for mass mention\`)
                           .setColor("RED")] 
                });
                m.member.send({
                   embeds: [new MessageEmbed()
                           .setTitle("Mute Log")
                           .setDescription(\`You were muted in \${m.guild.name} for mass mention\`)
                           .setColor("RED")] 
                });
            });
        }
    });
    `;
    return code;
};
