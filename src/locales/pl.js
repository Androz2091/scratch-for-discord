import Blockly from "blockly";

import blocklyMessages from "./pl-PL.json";

export const applyBlocklyLocale = () => {
    for(let key in blocklyMessages){
        Blockly.Msg[key] = blocklyMessages[key];
    }
};

export const websiteMessages = {
    untitled: "Nienazwany dokument",
    help: "Pomoc",
    load: {
        error: "Wgrany plik jest uszkodzony i nie może zostać załadowany..."
    },
    file: {
        title: "Plik",
        javascript: "Eksportuj do Javascript",
        open: "Otwórz plik...",
        save: "Zapisz"
    },
    edit: {
        title: "Edytuj",
        undo: "Cofnij",
        redo: "Powtórz",
        clear: "Usuń {blockCount} bloków",
        cleanup: "Wyczyść bloki",
        cleardb: "Wyczyść bazę danych"
    },
    lang: {
        title: "Język"
    },
    examples: {
        title: "Przykłady",
        confirm: {
            title: "Usunać aktualne bloki?",
            text: "Czy chesz usunąć aktualne bloki przed importowaniem przykładu?",
            cancel: "Anuluj",
            yes: "Tak",
            no: "Nie"
        },
        loaded: "Przykład {example} został zaimportowany!",
        ping_pong: "Komenda ping-pong",
        command_parsing: "Traser Komend",
        leveling: "System XP i leveli"
    },
    download: {
        title: "Pobierz swojego bota",
        content: {
            title: "Jak uruchomić bota po pobraniu?",
            unzipFile: "Wypakuj skopresowany plik.",
            node: "Zainstaluj Node.js oraz NPM (poradniki znajdziesz w wyszukiwarce Google)",
            start: "uruchom komendę 'npm install' a następnie 'npm start' w terminalu",
            done: "Twój bot jest uruchomiony!"
        },
        cancel: "Anuluj",
        confirm: "Pobierz"
    },
    tour: {
        skip: "Pomiń oprowadzanie",
        previous: "Poprzedni",
        next: "Następny",
        finish: "Koniec",
        steps: {
            load_examples: "Zaimportuj przykłady by odkryć Scratch4Discord!",
            run_test: "Sprawdź funkcje swojego bota tutaj!",
            export_code: "Exportuj swój kod tutaj!"
        }
    },
    warnings: {
        login_block: "Blok \"Połącz z Discord\" w \"Baza\" jest wymagany."
    },
    run_modal: {
        title: "Wciśnij by wystartować bota!",
        start: "Wystartuj bota",
        stop: "Zatrzymaj bota",
        invalid_token: "Nie udało sie nawiązać połączenia z Discordem... Upewnij się że token bota jest prawidłowy!",
        error: "Nie udało sie nawiązać połączenia z Discordem... Spróbuj ponownie później!",
        disabled: "⚠️ Ta funkcja jest dostępna tylko w aplikacji Scratch For Discord App (Pobierz {here})",
        here: "tutaj"
    },
    code_modal: {
        title: "Kod JavaScript twojego bota"
    }
};

export default {
	applyBlocklyLocale,
	websiteMessages
};
