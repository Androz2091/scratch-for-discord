import Blockly from "blockly";

import blocklyMessages from "./en-US.json";

export const applyBlocklyLocale = () => {
    for(let key in blocklyMessages){
        Blockly.Msg[key] = blocklyMessages[key];
    }
};

export const websiteMessages = {
    untitled: "Untitled document",
    help: "Help",
    load: {
        error: "The uploaded file was corrupted and cannot be loaded by Scratch For Discord...",
    },
    token:{
        title:"Token Database",
        load:"Load Token",
        save:"Save Token",
        text2:"Choose a Name:",
        save2:"Next",
        error:"There is alredy a token with that name!",
        text3:"Token:",
        save3:"Save",
        success:"Succesfully saved token as ",
        erros:"There is no token saved!",
        load2:"Load Token:",
        text4:"Choose the token that you want to load!",
        cancels:"Cancel",
        loadss:"Load",
        successs:"The token is saved to your clipboard!",
        all:"Amount of tokens: {blockCount}",
        delete:"Delete token from Database",
        deletee:{
            title:"Delete token",
            success:"Succesfully deleted the token from the Database!",
            load:"Delete",
            cancel:"Cancel",
            text:"Choose a token that you want to delete from the Database!",
        }
    },
    file: {
        copy:"Copy Javascript Code",
        title: "File",
        javascript: "Export to Javascript",
        open: "Open a file...",
      confirm: {
            title: "Delete current blocks?",
            text: "Would you like to remove the current blocks before importing the file?",
            cancel: "Cancel",
            yes: "Yes",
            no: "No",
        },
        save: "Save",
    },
    toolbox:{
        title:"Toolbox",
        hide:"Hide",
        show:"Show",
    },
    edit: {
        title: "Edit",
        undo: "Reverse Action",
        redo: "Redo Action",
        clear: "Delete All Blocks",
        cleanup: "Clean Up Blocks",
        cleardb: "Clear the Database",
        clearGhost:"Clear Ghost Blocks",
    },
    lang: {
        title: "Language",
    },
    examples: {
        title: "Examples",
        confirm: {
            title: "Delete current blocks?",
            text: "Would you like to remove the current blocks before importing the example?",
            cancel: "Cancel",
            yes: "Yes",
            no: "No",
        },
        loaded: "Successfully imported the {example} example!",
        ping_pong: "Ping-Pong Command",
	random:"Random Response",
        command_parsing: "Commands Handler",
      bettercmd: "Better Command Handler", 
        leveling: "Leveling System",
        button: "Button and Button Row",
	image_gen: "Image Generation",
        imgedit: "(JIMP) Image Editing Example",
	economy: "Economy",
	aki:"Akinator",
        music: "Music System",
	backup:"Backup",
      reddit:"Reddit",
      ticket:"Ticket",
      cooldown: "Cooldown",
    },
    download: {
        title: "Download your bot?",
        content: {
            title: "How to start your bot once downloaded?",
            unzipFile: "Unzip the Downloaded File.",
            node: "Install NPM and Node.js (Hint: Google Search).",
            start: "Run 'npm install' and 'npm start' in a terminal",
            done: "Your bot is started!",
        },
        cancel: "Cancel",
        confirm: "Download",
    },
    tour: {
        skip: "Skip tour",
        previous: "Previous",
        next: "Next",
        finish: "Finish",
        steps: {
            load_examples: "Import examples to discover Scratch4Discord!",
            run_test: "Test the functionalities of your bot here!",
            export_code: "Export your code here!",
        }
    },
    warnings: {
        login_block: "The \"Connect to Discord\" block in the \"Base\" category is required."
    },
    run_modal: {
        title: "Click Start to test your bot!",
        start: "Start the bot",
        stop: "Stop the bot",
        invalid_token: "Unable to connect to Discord... Maybe your bot's token isn't valid!",
        error: "Unable to connect to Discord... Try again later!",
        disabled: "This feature is only available using the Scratch For Discord App (get it {here})",
        here: "here",
    },
    code_modal: {
        title: "JavaScript code of your bot",
    },
    autosave:{
        cancell:"Cancel",
        confirm:"Load",
        title:"Auto Save",
        text:"Your auto save has been loaded!",
        title2:"An auto save of a project has been found! Do you want to load it?",
    },
    save:{
        title:"Auto Save",
    },
    prebuild:{
        title:"Pre Builds",
        load:"Load  Pre Build",
        save:"Save Pre Build as...",
        text2:"Choose a Name:",
        save2:"Save",
        error:"There is alredy a Pre-Build with that name",
        text3:"Pre-Build:",
        save3:"Save",
        success:"Succesfully saved Pre-Build as ",
        erros:"You don/'t have any Pre-Build saved in the Database!",
        load2:"Loaded Pre-Build!",
        text4:"Choose a Pre-Build that you want to load!",
        cancels:"Cancel",
        loadss:"Load",
        successs:"Succesfully loaded Pre-Build!",
        all:"Amount of Pre-Build: {blockCount}",
        delete:"Delete Pre-Build from the Database",
        deletee:{
            title:"Delete Pre-Build:",
            success:"Succesfully deleted Pre Build from the database!",
            load:"Delete",
            cancel:"Cancel",
            text:"Choose a Pre-Build that you want to delete:",
        },
        downloadd:"Download Pre-Build",
        download:{
            load2:"Donwload Pre-Build",
            successs:"Succesfully downloaded the Pre-Build!",
            loadss:"Download",
            cancels:"Cancel",
            text4:"Choose a Pre Build that you want to download:",
        }
    }
};

export default {
	applyBlocklyLocale,
	websiteMessages
}; 
