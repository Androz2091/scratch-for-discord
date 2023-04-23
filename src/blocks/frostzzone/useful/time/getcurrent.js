import Blockly from "blockly/core";
import '@blockly/field-grid-dropdown';

const blockName = "frost_current";

const blockData = {
  "message0": "Current %1",
  "args0": [
    {
      "type": "field_grid_dropdown",
      "name": "DATA_TYPE",
      "options": [
        [
          "Millisecond",
          "MILLISECOND"
        ],
        [
          "Second",
          "SECOND"
        ],
        [
          "Minute",
          "MINUTE"
        ],
        [
          "Hour",
          "HOUR"
        ],
        [
          "Day",
          "DATE"
        ],
        [
          "Day of the week",
          "DAY_OF_WEEK"
        ],
        [
          "Month (0-11)",
          "MONTH"
        ],
        [
          "Year",
          "YEAR"
        ],
        [
          "Date",
          "COOLDOWN"
        ],
        [
          "UNIX",
          "UNIX"
        ],
        [
          "UNIX (ms)",
          "UNIX_ms"
        ],
        [
          "UTC millisecond",
          "UTC_MILLISECOND"
        ],
        [
          "UTC second",
          "UTC_SECOND"
        ],
        [
          "UTC minute",
          "UTC_MINUTE"
        ],
        [
          "UTC hour",
          "UTC_HOUR"
        ],
        [
          "UTC Day of the week",
          "UTC_DAY_OF_WEEK"
        ],
        [
          "UTC Day",
          "UTC_DAY"
        ],
        [
          "UTC month (0-11)",
          "UTC_MONTH"
        ],
        [
          "UTC year",
          "UTC_YEAR"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": "#D14081",
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const dataType = block.getFieldValue("DATA_TYPE");
  if (dataType === "MILLISECOND") {
    return ["(new Date().getMilliseconds())", Blockly.JavaScript.ORDER_NONE];
  } else if (dataType === "SECOND") {
    return ["(new Date().getSeconds())", Blockly.JavaScript.ORDER_NONE];
  } else if (dataType === "MINUTE") {
    return ["(new Date().getMinutes())", Blockly.JavaScript.ORDER_NONE];
  } else if (dataType === "HOUR") {
    return ["(new Date().getHours())", Blockly.JavaScript.ORDER_NONE];
  } else if (dataType === "DATE") {
    return ["(new Date().getDate())", Blockly.JavaScript.ORDER_NONE];
  } else if (dataType === "DAY_OF_WEEK") {
    return ["(new Date().getDay())", Blockly.JavaScript.ORDER_NONE];
  } else if (dataType === "MONTH") {
    return ["(new Date().getMonth())", Blockly.JavaScript.ORDER_NONE];
  } else if (dataType === "YEAR") {
    return ["(new Date().getFullYear())", Blockly.JavaScript.ORDER_NONE];
  } else if (dataType === "COOLDOWN") {
    return ["new Date()", Blockly.JavaScript.ORDER_NONE];
  } else if (dataType === "UNIX") {
    return ["Math.floor(new Date().getTime()/1000)", Blockly.JavaScript.ORDER_NONE];
  } else if (dataType === "UNIX_ms") {
    return ["new Date().getTime()", Blockly.JavaScript.ORDER_NONE];
  } else if (dataType === "UTC_MILLISECOND") {
    return ["(new Date().getUTCMilliseconds())", Blockly.JavaScript.ORDER_NONE];
  } else if (dataType === "UTC_SECOND") {
    return ["(new Date().getUTCSeconds())", Blockly.JavaScript.ORDER_NONE];
  } else if (dataType === "UTC_MINUTE") {
    return ["(new Date().getUTCMinutes())", Blockly.JavaScript.ORDER_NONE];
  } else if (dataType === "UTC_HOUR") {
    return ["(new Date().getUTCHours())", Blockly.JavaScript.ORDER_NONE];
  } else if (dataType === "UTC_DAY_OF_WEEK") {
    return ["(new Date().getUTCDay())", Blockly.JavaScript.ORDER_NONE];
  } else if (dataType === "UTC_DAY") {
    return ["(new Date().getUTCDate())", Blockly.JavaScript.ORDER_NONE];
  } else if (dataType === "UTC_MONTH") {
    return ["(new Date().getUTCMonth())", Blockly.JavaScript.ORDER_NONE];
  } else if (dataType === "UTC_YEAR") {
    return ["(new Date().getUTCFullYear())", Blockly.JavaScript.ORDER_NONE];
  }
};
