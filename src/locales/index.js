import * as blocklyCS from "blockly/msg/cs";
import * as blocklyEN from "blockly/msg/en";
import * as blocklyES from "blockly/msg/es";
import * as blocklyFR from "blockly/msg/fr";
import * as blocklyIT from "blockly/msg/it";
import * as blocklyPL from "blockly/msg/pl";
import * as blocklyPT from "blockly/msg/pt";
import * as blocklyRU from "blockly/msg/ru";
import * as blocklyVI from "blockly/msg/vi";
import * as blocklyZH from "blockly/msg/zh-hant";

import blocksCS from "./cs-CZ.json";
import blocksEN from "./en-US.json";
import blocksES from "./es-ES.json";
import blocksFR from "./fr-FR.json";
import blocksIT from "./it-IT.json";
import blocksPL from "./pl-PL.json";
import blocksPT from "./pt-BR.json";
import blocksRU from "./ru-RU.json";
import blocksVI from "./vi-VN.json";
import blocksZH from "./zh-TW.json";

import { websiteMessages as websiteCS } from "./cs";
import { websiteMessages as websiteEN } from "./en";
import { websiteMessages as websiteES } from "./es";
import { websiteMessages as websiteFR } from "./fr";
import { websiteMessages as websiteIT } from "./it";
import { websiteMessages as websitePL } from "./pl";
import { websiteMessages as websitePT } from "./pt";
import { websiteMessages as websiteRU } from "./ru";
import { websiteMessages as websiteVI } from "./vi";
import { websiteMessages as websiteZH } from "./zh-TW";

// To add a language: translate en.js and en-US.json, then register them here
export default {
    cs: { name: "Čeština (CS)", blockly: blocklyCS, blocks: blocksCS, website: websiteCS },
    en: { name: "English (EN)", blockly: blocklyEN, blocks: blocksEN, website: websiteEN },
    es: { name: "Español (ES)", blockly: blocklyES, blocks: blocksES, website: websiteES },
    fr: { name: "Français (FR)", blockly: blocklyFR, blocks: blocksFR, website: websiteFR },
    it: { name: "Italiano (IT)", blockly: blocklyIT, blocks: blocksIT, website: websiteIT },
    pl: { name: "Polski (PL)", blockly: blocklyPL, blocks: blocksPL, website: websitePL },
    pt: { name: "Português (PT)", blockly: blocklyPT, blocks: blocksPT, website: websitePT },
    ru: { name: "Русский (RU)", blockly: blocklyRU, blocks: blocksRU, website: websiteRU },
    vi: { name: "Tiếng Việt (VI)", blockly: blocklyVI, blocks: blocksVI, website: websiteVI },
    "zh-TW": { name: "繁體中文 (TW)", blockly: blocklyZH, blocks: blocksZH, website: websiteZH }
};
