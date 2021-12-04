import Blockly from "blockly";

import blocklyMessages from "./cs.json";

export const applyBlocklyLocale = () => {
    for(let key in blocklyMessages){
        Blockly.Msg[key] = blocklyMessages[key];
    }
};

export const websiteMessages = {
    untitled: "Dokument bez názvu",
    help: "Pomoc",
    load: {
        error: "Nahraný soubor je poškozený a nemůže být nahraný pomocí Scratch for Discord"
    },
    file: {
        title: "Soubor",
        javascript: "Exportovat do JavaScriptu",
        open: "Otevřít soubor...",
        save: "Uložit"
    },
    edit: {
        title: "Upravit",
        undo: "Vrátit zpět",
        redo: "Předělat",
        clear: "Odstranit {blockCount} bloků",
        cleanup: "Upravit bloky",
        cleardb: "Vymazat databázi"
    },
    lang: {
        title: "Jazyk"
    },
    examples: {
        title: "Ukázky",
        confirm: {
            title: "Smazat aktuální bloky?",
            text: "Chcete odstranit bloky z aktuálního projektu před importováním ukázky?",
            cancel: "Zrušit",
            yes: "Ano",
            no: "Ne"
        },
        loaded: "Ukázka {example} úspěšně importována!",
        ping_pong: "ping-pong příkaz",
        command_parsing: "Manipulátor příkazů",
        leveling: "systém pro XP a úrovně"
    },
    download: {
        title: "Stáhnout vašeho bota",
        content: {
            title: "Jak po stažení spustit svého bota?",
            unzipFile: "Odzipovat stažený soubor.",
            node: "Instalujte NPM a Node.js (návody hledejte na Googlu)",
            start: "Spusťte 'npm install' a 'npm start' v terminálu",
            done: "Váš bot je zapnutý!"
        },
        cancel: "Zrušit",
        confirm: "Stáhnout"
    },
    tour: {
        skip: "Přeskočit prohlídku",
        previous: "Předchozí",
        next: "Další",
        finish: "Dokončit",
        steps: {
            load_examples: "Importujte ukázky pro objevení Scratch4Discord!",
            run_test: "Zde testujte funkčnost vašeho bota!",
            export_code: "Zde exportujte váš kód!"
        }
    },
    warnings: {
        login_block: "Blok \"Připojit se k Discordu\" v kategorii \"Základy\" je povinný!"
    },
    run_modal: {
        title: "Klikněte Zapnout pro otestování vašeho bota!",
        start: "Zapnout bota",
        stop: "Vypnout bota",
        invalid_token: "Nebylo možné se připojit k Discordu... Možná je botův token neplatný!",
        error: "Nebylo možné se připojit k Discordu... Zkuste později!",
        disabled: "⚠️ Tato funkce je pouze dostupná v Scratch For Discord aplikaci (získejte ji {here})",
        here: "zde"
    },
    code_modal: {
        title: "JavaScript kód vašeho bota"
    }
};

export default {
	applyBlocklyLocale,
	websiteMessages
};