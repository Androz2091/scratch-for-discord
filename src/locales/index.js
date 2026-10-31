import * as blocklyCS from "blockly/msg/cs";
import * as blocklyEN from "blockly/msg/en";
import * as blocklyFR from "blockly/msg/fr";
import * as blocklyIT from "blockly/msg/it";
import * as blocklyPL from "blockly/msg/pl";
import * as blocklyPT from "blockly/msg/pt";
import * as blocklyVI from "blockly/msg/vi";

import blocksCS from "./cs-CZ.json";
import blocksEN from "./en-US.json";
import blocksFR from "./fr-FR.json";
import blocksIT from "./it-IT.json";
import blocksPL from "./pl-PL.json";
import blocksPT from "./pt-BR.json";
import blocksVI from "./vi-VN.json";

import { websiteMessages as websiteCS } from "./cs";
import { websiteMessages as websiteEN } from "./en";
import { websiteMessages as websiteFR } from "./fr";
import { websiteMessages as websiteIT } from "./it";
import { websiteMessages as websitePL } from "./pl";
import { websiteMessages as websitePT } from "./pt";
import { websiteMessages as websiteVI } from "./vi";

// To add a language: translate en.js and en-US.json, then register them here
export default {
    cs: { name: "Čeština (CS)", blockly: blocklyCS, blocks: blocksCS, website: websiteCS },
    en: { name: "English (EN)", blockly: blocklyEN, blocks: blocksEN, website: websiteEN },
    fr: { name: "Français (FR)", blockly: blocklyFR, blocks: blocksFR, website: websiteFR },
    it: { name: "Italiano (IT)", blockly: blocklyIT, blocks: blocksIT, website: websiteIT },
    pl: { name: "Polski (PL)", blockly: blocklyPL, blocks: blocksPL, website: websitePL },
    pt: { name: "Português (PT)", blockly: blocklyPT, blocks: blocksPT, website: websitePT },
    vi: { name: "Tiếng Việt (VI)", blockly: blocklyVI, blocks: blocksVI, website: websiteVI }
};
