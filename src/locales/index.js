import * as blocklyEN from "blockly/msg/en";
import * as blocklyFR from "blockly/msg/fr";
import * as blocklyIT from "blockly/msg/it";
import * as blocklyPT from "blockly/msg/pt";

import blocksEN from "./en-US.json";
import blocksFR from "./fr-FR.json";
import blocksIT from "./it-IT.json";
import blocksPT from "./pt-BR.json";

import { websiteMessages as websiteEN } from "./en";
import { websiteMessages as websiteFR } from "./fr";
import { websiteMessages as websiteIT } from "./it";
import { websiteMessages as websitePT } from "./pt";

// To add a language: translate en.js and en-US.json, then register them here
export default {
    en: { name: "English (EN)", blockly: blocklyEN, blocks: blocksEN, website: websiteEN },
    fr: { name: "Français (FR)", blockly: blocklyFR, blocks: blocksFR, website: websiteFR },
    it: { name: "Italiano (IT)", blockly: blocklyIT, blocks: blocksIT, website: websiteIT },
    pt: { name: "Português (PT)", blockly: blocklyPT, blocks: blocksPT, website: websitePT }
};
