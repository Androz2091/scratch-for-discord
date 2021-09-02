import Blockly from "blockly";

import blocklyMessages from "./fr-FR.json";

export const applyBlocklyLocale = () => {
    for(let key in blocklyMessages){
        Blockly.Msg[key] = blocklyMessages[key];
    }
};

export const websiteMessages = {
    untitled: "Document sans titre",
    help: "Aide",
    load: {
        error: "Le fichier téléversé est corrompu et ne peut pas être chargé par Scratch For Discord..."
    },
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
        cleanup: "Réorganiser les blocks",
        cleardb: "Effacer la base de données"
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
        ping_pong: "Commande ping-pong",
        command_parsing: "Traitement des commandes",
        leveling: "Système d'XP et niveaux"
    },
    download: {
        title: "Télécharger votre bot",
        content: {
            title: "Comment lancer votre bot une fois le bot téléchargé ?",
            unzipFile: "Dézippez le fichier obtenu.",
            node: "Installez NPM et Node.js (cherchez des tutos sur google)",
            start: "Tapez 'npm install' et 'npm start' dans votre terminal",
            done: "Votre bot est lancé!"
        },
        cancel: "Annuler",
        confirm: "Télécharger"
    },
    tour: {
        skip: "Sauter la visite",
        previous: "Précédent",
        next: "Suivant",
        finish: "Finir",
        steps: {
            load_examples: "Importer des exemples pour découvrir Scratch4Discord!",
            run_test: "Testez le fonctionnement de votre bot ici!",
            export_code: "Exportez votre code ici!"
        }
    },
    warnings: {
        login_block: "Le block \"Connexion à Discord\" de la catégorie \"Base\" est obligatoire !"
    },
    run_modal: {
        title: "Appuyez sur démarrer pour tester votre bot!",
        start: "Démarrer le bot",
        stop: "Arrêter le bot",
        invalid_token: "Impossible de se connecter à Discord... Peut-être que le token du bot n'est pas valide !",
        error: "Impossible de se connecter à Discord... Réessayez plus tard!",
        disabled: "⚠️ Cette fonction n'est disponible qu'avec l'application Scratch For Discord (obtenez la {here})",
        here: "ici"
    },
    code_modal: {
        title: "Code JavaScript de votre bot"
    },
    autosave: {
        title: "Restorer un projet",
        text: "Vous n'avez pas sauvegardé votre projet avant de quitter Scratch For Discord ?<br>Pas de problème, vous pouvez choisir le projet que vous voulez restaurer depuis le menu ci-dessous !",
        restore: "Restorer",
        cancel: "Annuler"
    }
};

export default {
	applyBlocklyLocale,
	websiteMessages
};
