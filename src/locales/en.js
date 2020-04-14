import Blockly from "blockly";

const blocklyMessages = {
    BASE_BLOCKS: "Base blocks",
    MESSAGE_RELATED_BLOCKS: "Blocks related to messages",
    REPLY: "reply %1",
    LOGIN: "Connect to Discord with the token %1",
    LOGIN_TOOLTIP: "Connect your bot to Discord. To get your bot token, go to https://discordapp.com/developers/.",
    ON_MESSAGE: "When a message is received",
    ON_CONNECTED: "When the bot is connected",
    ON_CONNECTED_TOOLTIP: "Event emitted when your bot is connected to Discord.",
    MESSAGE_CONTENT: "message content",
    MESSAGE_AUTHOR: "message author",
    MESSAGE_AUTHOR_RAW: "%1 of the message author",
    USERNAME: "username",
    NICKNAME: "nickname",
    GET_GUILD: "find server %1 using %2",
    NAME: "name",
    GET_ROLE: "find role %1 from server %2 using %3",
    GET_MEMBER: "find member %1 from server %2 using %3",
    ADD_ROLE: "add role %1 to member %2",
    REMOVE_ROLE: "remove role %1 from member %2",
    BAN_MEMBER: "ban member %1",
    KICK_MEMBER: "kick member %1",
    MESSAGE_GUILD: "%1 of the message server",
    MESSAGE_CHANNEL: "%1 of the message channel",
    BASIC_BLOCKS: "Basic blocks",
    ADVANCED_BLOCKS: "Advanced blocks",
    MENTIONED_MEMBER: "mentioned member",
    ADMINISTRATOR: "Administrator",
    DETECT_MESSAGES: "Detect messages",
    MESSAGE_ACTIONS: "Actions on the message",
    MESSAGE_INFORMATIONS: "Informations about the message",
    RELATED_TO_MESSAGE_STRINGS: "Strings related to the message",
    DELETE_MESSAGE: "delete the message",
    MESSAGE_EMBED: "Message Embed",
    COLOR: "color",
    TITLE: "title",
    MESSAGE: "message",
    IMAGE: "image",
    TOOLS: "Tools",
    CHECK_PERMISSIONS: "Check member permissions",
    MEMBER_HAS_PERMISSION: "the member %1 has permission %2",
    PERM_CREATE_INSTANT_INVITE: "create instant invites",
    PERM_KICK_MEMBERS: "kick members",
    PERM_BAN_MEMBERS: "ban members",
    PERM_ADMINISTRATOR: "administrator",
    PERM_MANAGE_CHANNELS: "manage channels",
    PERM_MANAGE_GUILD: "manage server",
    PERM_ADD_REACTIONS: "add reactions",
    PERM_VIEW_AUDIT_LOG: "view audit logs",
    PERM_PRIORITY_SPEAKER: "priority-speaker",
    PERM_VIEW_CHANNEL: "view channel",
    PERM_READ_MESSAGES: "read messages",
    PERM_SEND_MESSAGES: "send messages",
    PERM_SEND_TTS_MESSAGES: "send TTS messages",
    PERM_MANAGE_MESSAGES: "manage messages",
    PERM_EMBED_LINKS: "embed links",
    PERM_ATTACH_FILES: "attach files",
    PERM_READ_MESSAGE_HISTORY: "read message history",
    PERM_MENTION_EVERYONE: "mention @everyone",
    PERM_EXTERNAL_EMOJIS: "view external emojis",
    PERM_USE_EXTERNAL_EMOJIS: "use external emojis",
    PERM_CONNECT: "connect",
    PERM_SPEAK: "speak",
    PERM_MUTE_MEMBERS: "mute members",
    PERM_DEAFEN_MEMBERS: "deafen members",
    PERM_MOVE_MEMBERS: "move members",
    PERM_USE_VAD: "use voice activity",
    PERM_CHANGE_NICKNAME: "change nickname",
    PERM_MANAGE_NICKNAMES: "manage nicknames",
    PERM_MANAGE_ROLES: "manage roles",
    PERM_MANAGE_WEBHOOKS: "manage webhooks",
    PERM_MANAGE_EMOJIS: "manage emojis",
    JOINS_RELATED_BLOCKS: "Blocks related to member joins",
    DETECT_JOINS: "Detect joins",
    ON_MEMBER_JOIN: "When a member joins a server",
    JOINING_MEMBER_INFORMATIONS: "Informations about the member",
    JOINING_MEMBER: "joining member",
    RELATED_TO_JOIN_STRINGS: "Strings related to join",
    JOINING_MEMBER_RAW: "%1 of the joining member",
    JOINING_GUILD: "%1 of the joining member server",
    TEMPORARILY: "Temporarily",
    HOURS: "hours",
    REASON: "reason",
    DURING_HOURS: "during",
    WITH_REASON: "for the reason",
    RES_MUST_BE_IN_ON_MESSAGE: "This block may only be used in a \"When a message is received\" event",
    RES_MISSING_CONTENT: "You must specify a valid content to reply!",
    RES_MISSING_MEMBER_HAS_PERMISSION: "You must specify a valid member to check permissions!",
    RES_MUST_BE_IN_ON_MEMBER_JOIN: "This block may only be used in a \"When a member joins a server\" event",
    RES_ADD_ROLE_MISSING_ROLE: "You must specify a valid name or role ID to add!",
    RES_ADD_ROLE_MISSING_MEMBER: "You must specify a valid member to add the role to!",
    RES_REMOVE_ROLE_MISSING_ROLE: "You must specify a valid name or role ID to remove!",
    RES_REMOVE_ROLE_MISSING_MEMBER: "You must specify a valid member to remove the role!",
    RES_KICK_MEMBER_MISSING_MEMBER: "You must specify a valid member to be kicked!",
    RES_BAN_MEMBER_MISSING_MEMBER: "You must specify a valid member to be banned!",
    MANDATORY_BLOCKS: "Mandatory blocks",
    STARTS_WITH: "%1 starts with %2",
    NEWLINE: "new line",
    FIND_CHANNEL: "Find a channel",
    SEND_CHANNEL_LABEL: "Send a message in the found channel",
    GET_CHANNEL: "get the salon with %2 equal to %1",
    RES_MISSING_CHANNEL_VALUE: "You must specify a valid channel name or ID!",
    RES_SEND_CHANNEL_CONTENT: "You must specify a content to send!",
    RES_SEND_CHANNEL_CHANNEL: "You must specify a channel in which to send the content!",
    SEND_CHANNEL: "send %1 in the channel %2",
    TOOLBOX_CHANNELS: "Channels",
    TOOLBOX_JOINS: "Joins",
    TOOLBOX_ACTIONS: "Actions",
    TOOLBOX_MESSAGES: "Messages",
    TOOLBOX_BASE: "Base"
};

export const applyBlocklyLocale = () => {
    for(let key in blocklyMessages){
        Blockly.Msg[key] = blocklyMessages[key];
    }
};

export const websiteMessages = {
    untitled: "Untitled document",
    file: {
        title: "File",
        javascript: "Export to Javascript",
        open: "Open a file...",
        save: "Save"
    },
    edit: {
        title: "Edit",
        undo: "Undo",
        redo: "Redo",
        clear: "Clear {blockCount} blocks",
        cleanup: "Clean up blocks"
    },
    lang: {
        title: "Language"
    },
    examples: {
        title: "Examples",
        confirm: {
            title: "Delete current blocks?",
            text: "Would you like to remove the blocks from the current project before importing the example?",
            cancel: "Cancel",
            yes: "Yes",
            no: "No"
        },
        loaded: "Example {example} successfully imported!",
        ping_pong: "ping-pong command"
    },
    download: {
        title: "Download your bot",
        content: {
            title: "How to start your bot once downloaded?",
            unzipFile: "Unzip the downloaded file.",
            start: "Click start.bat (or start.sh if you're using MacOS or Linux)",
            done: "Your bot is started!"
        },
        cancel: "Cancel",
        confirm: "Download"
    },
    tour: {
        skip: "Skip tour",
        previous: "Previous",
        next: "Next",
        finish: "Finish",
        steps: {
            load_examples: "Import examples to discover Scratch4Discord!",
            run_test: "Test the functionalities of your bot here!",
            export_code: "Export your code here!"
        }
    },
    warnings: {
        login_block: "The \"Connect to Discord\" block in the \"Base\" category is mandatory."
    },
    run_modal: {
        title: "Click Start to test your bot!",
        start: "Start the bot",
        stop: "Stop the bot",
        invalid_token: "Unable to connect to Discord... Maybe the bot's token isn't valid!",
        error: "Unable to connect to Discord... Try again later!"
    },
    code_modal: {
        title: "JavaScript code of your bot"
    }
};

export default {
	applyBlocklyLocale,
	websiteMessages
};
