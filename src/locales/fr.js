import Blockly from "blockly";

const blocklyMessages = {
    BASE_BLOCKS: "Blocks de base",
    MESSAGE_RELATED_BLOCKS: "Blocks relatifs aux messages",
    REPLY: "répondre %1",
    INIT_TOOLTIP: "Vous permet d'utiliser les blocks Discord!",
    LOGIN: "Connexion à Discord avec le token %1",
    LOGIN_TOOLTIP: "Connecte votre bot à Discord. Pour trouver le token de votre bot, rendez-vous sur https://discordapp.com/developers/.",
    ON_MESSAGE: "Quand un message est reçu",
    ON_CONNECTED: "Quand le bot est connecté",
    ON_CONNECTED_TOOLTIP: "Évènement émis lorsque votre bot est connecté à Discord.",
    MESSAGE_CONTENT: "contenu du message",
    MESSAGE_AUTHOR: "auteur du message",
    MESSAGE_AUTHOR_RAW: "%1 de l'auteur du message",
    USERNAME: "nom d'utilisateur",
    NICKNAME: "pseudo",
    GET_GUILD: "trouver le serveur %1 via %2",
    NAME: "nom",
    GET_ROLE: "trouver le rôle %1 du serveur %2 via %3",
    GET_MEMBER: "trouver le membre %1 du serveur %2 via %3",
    ADD_ROLE: "ajouter le rôle %1 au membre %2",
    REMOVE_ROLE: "enlever le rôle %1 au membre %2",
    BAN_MEMBER: "bannir le membre %1",
    KICK_MEMBER: "expulser le membre %1",
    MESSAGE_GUILD: "%1 du serveur du message",
    MESSAGE_CHANNEL: "%1 du salon du message",
    BASIC_BLOCKS: "Blocks basics",
    ADVANCED_BLOCKS: "Blocks avancés",
    MENTIONED_MEMBER: "membre mentionné",
    ADMINISTRATOR: "Administrateur",
    DETECT_MESSAGES: "Détecter les messages",
    MESSAGE_ACTIONS: "Actions sur le message",
    MESSAGE_INFORMATIONS: "Informations sur le message",
    RELATED_TO_MESSAGE_STRINGS: "Chaînes relatives au message",
    DELETE_MESSAGE: "supprimer le message",
    MESSAGE_EMBED: "Message Embed",
    COLOR: "couleur",
    TITLE: "titre",
    MESSAGE: "message",
    IMAGE: "image",
    TOOLS: "Outils",
    CHECK_PERMISSIONS: "Vérifier les permissions d'un membre",
    MEMBER_HAS_PERMISSION: "le membre %1 a la permission %2",
    PERM_CREATE_INSTANT_INVITE: "créer une invitation instantanée",
    PERM_KICK_MEMBERS: "expulser des membres",
    PERM_BAN_MEMBERS: "bannir des membres",
    PERM_ADMINISTRATOR: "administrateur",
    PERM_MANAGE_CHANNELS: "gérer les salons",
    PERM_MANAGE_GUILD: "gérer le serveur",
    PERM_ADD_REACTIONS: "ajouter des réactions",
    PERM_VIEW_AUDIT_LOG: "voir les logs du serveur",
    PERM_PRIORITY_SPEAKER: "voix prioritaire",
    PERM_VIEW_CHANNEL: "voir le salon",
    PERM_READ_MESSAGES: "lire les messages",
    PERM_SEND_MESSAGES: "envoyer des messages",
    PERM_SEND_TTS_MESSAGES: "envoyer des messages TTS",
    PERM_MANAGE_MESSAGES: "gérer les messages",
    PERM_EMBED_LINKS: "intégrer des liens",
    PERM_ATTACH_FILES: "attacher des fichiers",
    PERM_READ_MESSAGE_HISTORY: "voir l'historique des messages",
    PERM_MENTION_EVERYONE: "mentionner @everyone",
    PERM_EXTERNAL_EMOJIS: "voir les émojis externes",
    PERM_USE_EXTERNAL_EMOJIS: "utiliser des émojis externes",
    PERM_CONNECT: "se connecter",
    PERM_SPEAK: "parler",
    PERM_MUTE_MEMBERS: "couper le micro des membres",
    PERM_DEAFEN_MEMBERS: "mettre en sourdine des membres",
    PERM_MOVE_MEMBERS: "déplacer des membres",
    PERM_USE_VAD: "utiliser la détection de la voix",
    PERM_CHANGE_NICKNAME: "changer de pseudo",
    PERM_MANAGE_NICKNAMES: "gérer les pseudos",
    PERM_MANAGE_ROLES: "gérer les rôles",
    PERM_MANAGE_WEBHOOKS: "gérer les webhooks",
    PERM_MANAGE_EMOJIS: "gérer les émojis",
    JOINS_RELATED_BLOCKS: "Blocks relatifs aux arrivées de membre",
    DETECT_JOINS: "Détecter les arrivées",
    ON_MEMBER_JOIN: "Quand un membre rejoint le serveur",
    JOINING_MEMBER_INFORMATIONS: "Informations sur l'arrivant",
    JOINING_MEMBER: "membre arrivant",
    RELATED_TO_JOIN_STRINGS: "Chaînes relatives à l'arrivée",
    JOINING_MEMBER_RAW: "%1 du membre arrivant",
    JOINING_GUILD: "%1 du serveur du membre arrivant",
    HOURS: "heures",
    REASON: "raison",
    DURING_HOURS: "durant",
    WITH_REASON: "pour la raison",
    RES_MUST_BE_IN_ON_MESSAGE: "Ce block ne peut être utilisé que dans un évènement \"Quand un message est reçu\"",
    RES_MISSING_CONTENT: "Vous devez préciser un contenu valide à répondre !",
    RES_MISSING_MEMBER_HAS_PERMISSION: "Vous devez préciser un membre valide à qui vérifier les permissions !",
    RES_MUST_BE_IN_ON_MEMBER_JOIN: "Ce block ne peut être utilisé que dans un évènement \"Quand un membre rejoint le serveur\"",
    RES_ADD_ROLE_MISSING_ROLE: "Vous devez préciser un nom ou un identifiant de rôle valide à ajouter !",
    RES_ADD_ROLE_MISSING_MEMBER: "Vous devez préciser un membre valide à qui ajouter le rôle !",
    RES_REMOVE_ROLE_MISSING_ROLE: "Vous devez préciser un nom ou un identifiant de rôle valide à enlever !",
    RES_REMOVE_ROLE_MISSING_MEMBER: "Vous devez préciser un membre valide à qui enlever le rôle !",
    RES_KICK_MEMBER_MISSING_MEMBER: "Vous devez préciser un membre valide à expulser !",
    MANDATORY_BLOCKS: "Blocks obligatoires"
};

export const applyBlocklyLocale = () => {
    for(let key in blocklyMessages){
        Blockly.Msg[key] = blocklyMessages[key];
    }
};

export const websiteMessages = {
    untitled: "Document sans titre",
    file: {
        title: "Fichier",
        javascript: "Exporter vers Javascript",
        open: "Ouvrir un fichier...",
        save: "Sauvegarder"
    },
    edit: {
        title: "Modifier",
        undo: "Annuler",
        redo: "Rétablir",
        clear: "Nettoyer {blockCount} blocks",
        cleanup: "Réorganiser les blocks"
    },
    lang: {
        title: "Langue"
    },
    examples: {
        title: "Exemples",
        confirm: {
            title: "Supprimer les blocks",
            text: "Souhaitez-vous supprimer les blocks du projet actuel avant d'importer l'exemple ?",
            cancel: "Annuler",
            yes: "Oui",
            no: "Non"
        },
        loaded: "Exemple {example} importé avec succès !",
        ping_pong: "Commande ping-pong"
    },
    download: {
        title: "Télécharger votre bot",
        content: {
            title: "Comment lancer votre bot une fois le bot téléchargé ?",
            unzipFile: "Dézippez le fichier obtenu.",
            start: "Cliquez sur start.bat (ou start.sh si vous utilisez MacOS ou Linux)",
            done: "Votre bot est lancé!"
        },
        cancel: "Annuler",
        confirm: "Télécharger"
    },
    steps: {
        load_examples: "Importer des exemples pour découvrir Scratch4Discord!",
        run_test: "Testez le fonctionnement de votre bot ici!",
        export_code: "Exportez votre code ici!"
    }
};

export default {
	applyBlocklyLocale,
	websiteMessages
};
