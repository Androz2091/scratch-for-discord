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
        error: "The uploaded file is corrupted and cannot be loaded by Scratch For Discord..."
    },
    token:{
        title:"Token Database",
        load:"Load Token",
        save:"Save Token as...",
        text2:"name of token that you want to save to Database",
        save2:"next",
        error:"error there is alredy a token with that name",
        text3:"token that you want to save",
        save3:"save",
        success:"succesfully saved token as ",
        erros:"you dont have any token saved in database!",
        load2:"load token",
        text4:"choose a token name for loading!",
        cancels:"cancel",
        loadss:"load",
        successs:"succesfully loaded token!(the token is on your clipboard)",
        all:"amount of tokens: {blockCount}",
        delete:"Delete Token From Database",
        deletee:{
            title:"delete token",
            success:"succesfully deleted token from database",
            load:"delete",
            cancel:"cancel",
            text:"choose a token for deleting from database",
        }
    },
    file: {
        copy:"Copy Javascript code",
        title: "File",
        javascript: "Export to Javascript",
        open: "Open a file...",
        save: "Save"
    },
    toolbox:{
        title:"Toolbox",
        hide:"Hide",
        show:"Show"
    },
    edit: {
        title: "Edit",
        undo: "Undo",
        redo: "Redo",
        clear: "Clear {blockCount} blocks",
        cleanup: "Clean up blocks",
        cleardb: "Clear the database",
        clearGhost:"clear ghost blocks"
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
        leveling: "XP and levels system",
        button: "Button and Button row example",
        music: "Music Blocks example",
        image_gen: "Image Generator Example",
        economy: "Economy Example",
	reddit: "Reddit Example"
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
    },
    autosave:{
        cancell:"cancel",
        confirm:"confirm",
        title:"auto save",
        text:"your auto save has been loaded!",
        title2:"i found a auto save of a project! do you wanna load it?",
    },
    save:{
        title:"auto save"
    },
    prebuild:{
        title:"Pre Builds",
        load:"Load  Pre Build",
        save:"Save Pre Build as...",
        text2:"name of  Pre Build that you want to save to Database",
        save2:"save",
        error:"error there is alredy a  Pre Build with that name",
        text3:"Pre Build that you want to save",
        save3:"save",
        success:"succesfully saved Pre Build as ",
        erros:"you dont have any Pre Build saved in database!",
        load2:"load Pre Build",
        text4:"choose a Pre Build name for loading!",
        cancels:"cancel",
        loadss:"load",
        successs:"succesfully loaded Pre Build!",
        all:"amount of Pre Build: {blockCount}",
        delete:"Delete Pre Build From Database",
        deletee:{
            title:"delete Pre Build",
            success:"succesfully deleted Pre Build from database",
            load:"delete",
            cancel:"cancel",
            text:"choose a Pre Build for deleting from database",
        },
        downloadd:"Download Pre build",
        download:{
            load2:"donwload Pre Build",
            successs:"downloaded succesfully Pre Build!",
            loadss:"download",
            cancels:"cancel",
            text4:"choose a Pre Build for downloading",
        }
    }
};

export default {
	applyBlocklyLocale,
	websiteMessages
};
