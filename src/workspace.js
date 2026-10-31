import * as Blockly from "blockly/core";
import "blockly/blocks";
import { javascriptGenerator } from "blockly/javascript";
import { installAllBlocks as installColourBlocks } from "@blockly/field-colour";
import Theme from "@blockly/theme-modern";
import toolbox from "./toolbox.xml?raw";
import locales from "./locales";
import store from "./store";
import { autosave } from "./autosave";
import { disableUnapplicable } from "./restrictions";
import "./blocks";

installColourBlocks({ javascript: javascriptGenerator });

// Follows the system light or dark setting, like the rest of the page
const darkMode = matchMedia("(prefers-color-scheme: dark)");
const DarkTheme = Blockly.Theme.defineTheme("s4d-dark", {
    name: "s4d-dark",
    base: Theme,
    componentStyles: {
        workspaceBackgroundColour: "#1e1e1e",
        toolboxBackgroundColour: "#333",
        toolboxForegroundColour: "#fff",
        flyoutBackgroundColour: "#252526",
        flyoutForegroundColour: "#ccc",
        flyoutOpacity: 1,
        scrollbarColour: "#797979",
        scrollbarOpacity: 0.4,
        insertionMarkerColour: "#fff",
        insertionMarkerOpacity: 0.3,
        cursorColour: "#d0d0d0"
    }
});
const currentTheme = () => (darkMode.matches ? DarkTheme : Theme);
darkMode.addEventListener("change", () => store.workspace?.setTheme(currentTheme()));

const options = {
    renderer: "zelos",
    zoom: {
        controls: true,
        startScale: 0.9,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2
    }
};

const escapeXml = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Blockly translates category names and labels itself, but not the example texts of blocks
const translatedToolbox = () => toolbox.replace(/%\{BKY_(\w+)\}/g, (reference, key) => (key in Blockly.Msg ? escapeXml(Blockly.Msg[key]) : reference));

let container = null;

function onChange(event) {
    if (event.isUiEvent) return;
    const workspace = store.workspace;
    disableUnapplicable(workspace);
    const blocks = workspace.getAllBlocks(false);
    store.blockCount = blocks.length;
    store.hasLogin = blocks.some((block) => block.type === "s4d_login");
    store.valid = store.hasLogin && blocks.every((block) => block.isEnabled() && !block.getIcon(Blockly.icons.IconType.WARNING));
    autosave(workspace);
}

export function createWorkspace(element, state) {
    container = element;
    const workspace = Blockly.inject(element, { ...options, theme: currentTheme(), toolbox: translatedToolbox() });
    if (state) Blockly.Xml.domToWorkspace(state, workspace);
    workspace.addChangeListener(Blockly.Events.disableOrphans);
    workspace.addChangeListener(onChange);
    store.workspace = workspace;
    return workspace;
}

// Blocks are translated when they are created, so a language change needs a new workspace
export function reloadWorkspace() {
    const state = Blockly.Xml.workspaceToDom(store.workspace);
    store.workspace.dispose();
    return createWorkspace(container, state);
}

export function loadXml(xml, { clear = false } = {}) {
    if (clear) store.workspace.clear();
    Blockly.Xml.domToWorkspace(Blockly.utils.xml.textToDom(xml), store.workspace);
}

export function getWorkspaceXml() {
    return Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(store.workspace));
}

export function setLanguage(locale, i18nLocale) {
    Blockly.setLocale(locales.en.blockly);
    Blockly.setLocale(locales.en.blocks);
    // Untranslated strings fall back to English
    Blockly.setLocale(locales[locale].blockly);
    Blockly.setLocale(locales[locale].blocks);
    i18nLocale.value = locale;
    document.documentElement.lang = locale;
    store.locale = locale;
    localStorage.setItem("blocklyLocale", locale);
}

export function getWorkspaceCode() {
    if (!store.workspace) return "";
    const code = javascriptGenerator.workspaceToCode(store.workspace);
    return `(async () => {
    const Discord = require("discord.js");
    const Database = require("easy-json-database");
    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const s4d = {
        Discord,
        client: new Discord.Client({
            intents: [
                Discord.GatewayIntentBits.Guilds,
                Discord.GatewayIntentBits.GuildMembers,
                Discord.GatewayIntentBits.GuildMessages,
                Discord.GatewayIntentBits.GuildMessageReactions,
                Discord.GatewayIntentBits.GuildVoiceStates,
                Discord.GatewayIntentBits.DirectMessages,
                Discord.GatewayIntentBits.MessageContent
            ],
            partials: [Discord.Partials.Channel, Discord.Partials.Message, Discord.Partials.Reaction]
        }),
        database: new Database(\`\${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json\`),
        joiningMember: null,
        lastMessage: null,
        leavingMember: null,
        reply: null,
        slashCommands: [],
        tokenInvalid: false,
        tokenError: null
    };

${javascriptGenerator.prefixLines(code, "    ")}
    return s4d;
})();
`;
}
