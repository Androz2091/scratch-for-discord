
import Blockly from "blockly/core";

const blockName = "timezone";


const blockData = {
    "message0": "%{BKY_CURRENT}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "DATA_TYPE",
            "options": [
                [
                    "%{UTCp1}",
                    "UTC+1"
                ],
                [
                    "%{UTCp2}",
                    "UTC+2"
                ],
                [
                    "%{UTCp3}",
                    "UTC+3"
                ],
                [
                    "%{UTCp4}",
                    "UTC+4"
                ],
                [
                    "%{UTCp5}",
                    "UTC+5"
                ],
                [
                    "%{UTCp6}",
                    "UTC+6"
                ],
              [
                    "%{UTCp7}",
                    "UTC+7"
                ],
              [
                    "%{UTCp8}",
                    "UTC+8"
                ],
              [
                    "%{UTCp9}",
                    "UTC+9"
                ],
              [
                    "%{UTCp10}",
                    "UTC+10"
                ],
              [
                    "%{UTCp11}",
                    "UTC+11"
                ],
              [
                    "%{UTCp12}",
                    "UTC+12"
                ],
               [
                    "%{UTC}",
                    "UTC"
                ],
               [
                    "%{UTCm}",
                    "UTC-"
                ],
              [
                    "%{UTCm1}",
                    "UTC-1"
                ],
              [
                    "%{UTCm2}",
                    "UTC-2"
                ],
              [
                    "%{UTCm3}",
                    "UTC-3"
                ],
              [
                    "%{UTCm4}",
                    "UTC-4"
                ],
              [
                    "%{UTCm5}",
                    "UTC-5"
                ],
              [
                    "%{UTCm6}",
                    "UTC-6"
                ],
              [
                    "%{UTCm7}",
                    "UTC-7"
                ],
              [
                    "%{UTCm8}",
                    "UTC-8"
                ],
              [
                    "%{UTCm9}",
                    "UTC-9"
                ],
              [
                    "%{UTCm}",
                    "UTC-10"
                ],
              [
                    "%{UTCm11}",
                    "UTC-11"
                ],
              [
                    "%{UTCm12}",
                    "UTC-12"
                ],
            ]
        }
    ],
    "output": "Number",
    "colour": "#5ba58b",
    "tooltip": "",
    "helpUrl": ""
};
