import Blockly from "blockly";

import blocklyMessages from "./LV.json";

export const applyBlocklyLocale = () => {
    for(let key in blocklyMessages){
        Blockly.Msg[key] = blocklyMessages[key];
    }
};

export const websiteMessages = {
    untitled: "Untitled documentsss",
    help: "Help",
    load: {
        error: "The uploaded file is corrupted and cannot be loaded by Scratch For Discord..."
    },
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
        cleanup: "Clean up blocks",
        cleardb: "Clear the database"
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
        ping_pong: "ping-pong command",
        command_parsing: "commands handler",
        leveling: "XP and levels system"
    },
    download: {
        title: "Download your bot",
        content: {
            title: "How to start your bot once downloaded?",
            unzipFile: "Unzip the downloaded file.",
            node: "Install NPM and Node.js (search for tutorials on Google)",
            start: "Run 'npm install' and 'npm start' in a terminal",
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
        error: "Unable to connect to Discord... Try again later!",
        disabled: "⚠️ This feature is only available using the Scratch For Discord App (get it {here})",
        here: "here"
    },
    code_modal: {
        title: "JavaScript code of your bot"
    }
};

export default {
	applyBlocklyLocale,
	websiteMessages
};
