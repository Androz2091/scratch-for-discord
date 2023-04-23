import * as Blockly from "blockly/core";


const blockName = "github_what_stat";

const blockData = {
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "INFO",
      "options": [
        [
          "Username",
          "login"
        ],
        [
          "Name",
          "name"
        ],
        [
          "Avatar",
          "avatar_url"
        ],
        [
          "Gravatar",
          "gravatar_id"
        ],
        [
          "Id",
          "id"
        ],
        [
          "Node ID",
          "node_id"
        ],
        [
          "User type",
          "type"
        ],
        [
          "Site Admin?",
          "site_admin"
        ],
        [
          "Company",
          "company"
        ],
        [
          "Website",
          "blog"
        ],
        [
          "Location",
          "location"
        ],
        [
          "Email",
          "email"
        ],
        [
          "Hireable?",
          "hireable"
        ],
        [
          "Bio",
          "bio"
        ],
        [
          "Twitter Username",
          "twitter_username"
        ],
        [
          "Amount of public Repos",
          "public_repos"
        ],
        [
          "Amount of public Gists",
          "public_gists"
        ],
        [
          "Amount of followers",
          "followers"
        ],
        [
          "Amount of following",
          "following"
        ],
        [
          "Created at (weird)",
          "created_at"
        ],
        [
          "Updated at (weird)",
          "created_at"
        ]

      ],
    },

  ],
  "colour": "#5ba58b",
  "output": "String",
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const stats = block.getFieldValue("INFO");
  const code = [`(data.${stats})`, Blockly.JavaScript.ORDER_NONE]

  return code;

};
