export default (Blockly) => {
	
	const keys = {
		BASE_BLOCKS: "Blocks de base",
		MESSAGE_RELATED_BLOCKS: "Blocks relatifs aux messages",
		REPLY: "répondre %1",
		IMPORT: "Importer Discord",
		INIT_TOOLTIP: "Vous permet d'utiliser les blocks Discord!",
		LOGIN: "Connexion avec le token %1",
		ON_MESSAGE: "Quand un message est reçu",
		ON_CONNECTED: "Quand le bot est connecté",
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
		COLOUR: "couleur",
		TITLE: "titre",
		MESSAGE: "message",
		IMAGE: "image",
		TOOLS: "Outils"
	};

	if(Blockly){
		for(let key in keys){
			Blockly.Msg[key] = keys[key];
		}
	}

	const messages = {
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
		}
	};

	return messages;
	
};

/**

Base:

Importer Discord.js
connecter avec le token {}
Quand le bot est connecté

Messages:

Quand un message est reçu

contenu du message
auteur du message
premier membre mentionné dans le message

serveur du message
salon du message

Actions

Ajouter le rôle {}
au membre {}

Enlever le rôle {}
au membre {}

Bannir le membre {}

Expulser le membre {}

Muter le membre {}
Démuter le membre {}

Arrivées

Quand un membre arrive sur le serveur

membre arrivant
serveur du membre
envoyer {} dans le salon {}

Départs

Quand un membre part du serveur

membre partant
serveur du membre
envoyer {} dans le salon {}

Recherche avancée

Trouver le serveur {} via {}
Trouver le rôle {} du serveur {} via {}
Trouver le membre {} du serveur {} via {}
Trouver le salon {} du serveur {} via {}

 */