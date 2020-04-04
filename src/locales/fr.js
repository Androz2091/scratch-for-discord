export default (Blockly) => {
	
	if(Blockly){
		Blockly.Msg["BASE_BLOCKS"] = "Blocks de base";
		Blockly.Msg["MESSAGE_RELATED_BLOCKS"] = "Blocks relatifs aux messages";
		Blockly.Msg["REPLY"] = "répondre %1";
	
		Blockly.Msg["IMPORT"] = "Importer Discord";
		Blockly.Msg["INIT_TOOLTIP"] = "Vous permet d'utiliser les blocks Discord!";
		Blockly.Msg["LOGIN"] = "Connexion avec le token %1";
		Blockly.Msg["ON_MESSAGE"] = "Quand un message est reçu";
		Blockly.Msg["ON_CONNECTED"] = "Quand le bot est connecté";
		Blockly.Msg["MESSAGE_CONTENT"] = "contenu du message";
		Blockly.Msg["MESSAGE_AUTHOR"] = "auteur du message";
		Blockly.Msg["MESSAGE_AUTHOR_RAW"] = "%1 de l'auteur du message";
		Blockly.Msg["USERNAME"] = "nom d'utilisateur";
		Blockly.Msg["NICKNAME"] = "pseudo";
		Blockly.Msg["GET_GUILD"] = "trouver le serveur %1 via %2";
		Blockly.Msg["NAME"] = "nom";
		Blockly.Msg["GET_ROLE"] = "trouver le rôle %1 du serveur %2 via %3";
		Blockly.Msg["GET_MEMBER"] = "trouver le membre %1 du serveur %2 via %3";
		Blockly.Msg["ADD_ROLE"] = "ajouter le rôle %1 au membre %2";
		Blockly.Msg["MESSAGE_GUILD"] = "%1 du serveur du message";
		Blockly.Msg["MESSAGE_CHANNEL"] = "%1 du salon du message";
		Blockly.Msg["BASIC_BLOCKS"] = "Blocks basics";
		Blockly.Msg["ADVANCED_BLOCKS"] = "Blocks avancés";
		Blockly.Msg["MENTIONED_MEMBER"] = "membre mentionné";
		Blockly.Msg["ADMINISTRATOR"] = "Administrateur";
		Blockly.Msg["DETECT_MESSAGES"] = "Détecter les messages";
		Blockly.Msg["MESSAGE_ACTIONS"] = "Actions sur le message";
		Blockly.Msg["MESSAGE_INFORMATIONS"] = "Informations sur le message";
		Blockly.Msg["RELATED_TO_MESSAGE_STRINGS"] = "Chaînes relatives au message";
		Blockly.Msg["DELETE_MESSAGE"] = "supprimer le message";
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
			clear: "Nettoyer {blockCount} blocks"
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