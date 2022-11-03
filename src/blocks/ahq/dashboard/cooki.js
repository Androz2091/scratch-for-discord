import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "make_cookie";
//block working now working
const blockData = {
    "type": "block_type",
    "message0": "make cookie %1 Mongo URL %2 ",
    "args0": [{
        "type": "input_dummy"
    },
    {
        "type": "input_value",
        "name": "api",
        "check": "String"
    }],
    "colour": '#0EB22B',
    "tooltip": "Add cookies to dash using mongodb",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function (block) {
    const code = `var cookieParser = require('cookie-parser');
    var session = require('express-session');
    var MongoStore = require('connect-mongo');
    var mongoose = require('mongoose');
    
    const cookies_config = {
        secret: 'nuke-protector',
        resave: true,
        saveUninitialized: true,
        cookie: { maxAge: 24 * 60 * 60 * 1000 },
        store: MongoStore.create({
          mongooseConnection: mongoose,
          collections: 'sessions', 
          mongoUrl: ${Blockly.JavaScript.valueToCode(block, "api", Blockly.JavaScript.ORDER_ATOMIC)},
          autoRemove: 'interval',
          autoRemoveInterval: 60
        })
    };`
    return code;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_AHQ_CONTENT",
        types: [
            "api"
        ]
    }
]);