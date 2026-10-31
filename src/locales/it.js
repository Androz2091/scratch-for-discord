import Blockly from "blockly";

import blocklyMessages from "./en-US.json";

export const applyBlocklyLocale = () => {
    for (let key in blocklyMessages) {
        Blockly.Msg[key] = blocklyMessages[key];
    }
};

export const websiteMessages = {
    untitled: "Documento senza titolo",
    help: "Aiuto",
    load: {
        error: "Il file caricato è danneggiato e non può essere caricato da Scratch For Discord..."
    },
    file: {
        title: "File",
        javascript: "Esporta in JavaScript",
        open: "Apri un file...",
        save: "Salva"
    },
    edit: {
        title: "Modifica",
        undo: "Annulla",
        redo: "Ripeti",
        clear: "Cancella {blockCount} blocchi",
        cleanup: "Riordina i blocchi",
        cleardb: "Svuota il database"
    },
    lang: {
        title: "Lingua"
    },
    examples: {
        title: "Esempi",
        confirm: {
            title: "Eliminare i blocchi correnti?",
            text: "Vuoi rimuovere i blocchi dal progetto corrente prima di importare l'esempio?",
            cancel: "Annulla",
            yes: "Sì",
            no: "No"
        },
        loaded: "Esempio {example} importato con successo!",
        ping_pong: "comando ping-pong",
        command_parsing: "gestione dei comandi",
        leveling: "sistema XP e livelli"
    },
    download: {
        title: "Scarica il tuo bot",
        content: {
            title: "Come avviare il bot dopo il download?",
            unzipFile: "Estrai il file scaricato.",
            node: "Installa NPM e Node.js (cerca tutorial su Google)",
            start: "Esegui 'npm install' e 'npm start' in un terminale",
            done: "Il tuo bot è avviato!"
        },
        cancel: "Annulla",
        confirm: "Scarica"
    },
    tour: {
        skip: "Salta il tour",
        previous: "Precedente",
        next: "Avanti",
        finish: "Fine",
        steps: {
            load_examples: "Importa esempi per scoprire Scratch4Discord!",
            run_test: "Testa qui le funzionalità del tuo bot!",
            export_code: "Esporta qui il tuo codice!"
        }
    },
    warnings: {
        login_block: "Il blocco \"Connetti a Discord\" nella categoria \"Base\" è obbligatorio."
    },
    run_modal: {
        title: "Clicca su Avvia per testare il tuo bot!",
        start: "Avvia il bot",
        stop: "Ferma il bot",
        invalid_token: "Impossibile connettersi a Discord... Forse il token del bot non è valido!",
        error: "Impossibile connettersi a Discord... Riprova più tardi!",
        disabled: "⚠️ Questa funzione è disponibile solo utilizzando l'app Scratch For Discord (ottienila {here})",
        here: "qui"
    },
    code_modal: {
        title: "Codice JavaScript del tuo bot"
    },
    autosave: {
        title: "Ripristina un progetto",
        text: "Non hai salvato il progetto prima di chiudere Scratch For Discord? Nessun problema, puoi scegliere il progetto da ripristinare dal menu qui sotto!",
        restore: "Ripristina",
        cancel: "Annulla"
    }
};

export default {
    applyBlocklyLocale,
    websiteMessages
};
