// Dropdown values are the old discord.js v12 names, kept for saved projects; generated code uses PermissionFlagsBits
export const permissionFlags = {
    CREATE_INSTANT_INVITE: "CreateInstantInvite",
    KICK_MEMBERS: "KickMembers",
    BAN_MEMBERS: "BanMembers",
    ADMINISTRATOR: "Administrator",
    MANAGE_CHANNELS: "ManageChannels",
    MANAGE_GUILD: "ManageGuild",
    ADD_REACTIONS: "AddReactions",
    VIEW_AUDIT_LOG: "ViewAuditLog",
    PRIORITY_SPEAKER: "PrioritySpeaker",
    VIEW_CHANNEL: "ViewChannel",
    READ_MESSAGES: "ViewChannel",
    SEND_MESSAGES: "SendMessages",
    SEND_TTS_MESSAGES: "SendTTSMessages",
    MANAGE_MESSAGES: "ManageMessages",
    EMBED_LINKS: "EmbedLinks",
    ATTACH_FILES: "AttachFiles",
    READ_MESSAGE_HISTORY: "ReadMessageHistory",
    MENTION_EVERYONE: "MentionEveryone",
    EXTERNAL_EMOJIS: "UseExternalEmojis",
    USE_EXTERNAL_EMOJIS: "UseExternalEmojis",
    CONNECT: "Connect",
    SPEAK: "Speak",
    MUTE_MEMBERS: "MuteMembers",
    DEAFEN_MEMBERS: "DeafenMembers",
    MOVE_MEMBERS: "MoveMembers",
    USE_VAD: "UseVAD",
    CHANGE_NICKNAME: "ChangeNickname",
    MANAGE_NICKNAMES: "ManageNicknames",
    MANAGE_ROLES: "ManageRoles",
    MANAGE_WEBHOOKS: "ManageWebhooks",
    MANAGE_EMOJIS: "ManageGuildExpressions"
};

export const PERMISSION_OPTIONS = Object.keys(permissionFlags).map((value) => [ `%{BKY_PERM_${value}}`, value ]);

// Server-wide permissions (and the duplicate names) can't be set on a channel
const SERVER_ONLY = [ "KICK_MEMBERS", "BAN_MEMBERS", "ADMINISTRATOR", "MANAGE_GUILD", "VIEW_AUDIT_LOG", "READ_MESSAGES", "EXTERNAL_EMOJIS", "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_EMOJIS" ];

export const CHANNEL_PERMISSION_OPTIONS = PERMISSION_OPTIONS.filter(([, value]) => !SERVER_ONLY.includes(value));
