import * as Blockly from "blockly";
const blockName = "convert_api_task";
const ahqcolor = ['#0EB22B', '#0EB22B', '#0EB22B', '#0EB22B'];
import { registerRestrictions } from "../../../../restrictions";

function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockData = {
    "message0": "Make a convert task %1 File URL %2 %3 Name (with .gif, .pdf etc) %4 %5 Convert To %6 %7 then %8",
    "args0": [{
        "type": "input_dummy"
    },
    {
        "type": "input_value",
        "name": "link",
        "check": "String"
    },
    {
        "type": "input_dummy"
    },
    {
        "type": "input_value",
        "name": "name",
        "check": "String"
    },
    {
        "type": "input_dummy"
    },
    {
        "type": "field_grid_dropdown",
        "name": "to",
        "options": [
            [
                "GIF",
                "gif"
            ],
            [
                "PDF",
                "pdf"
            ],
            [
                "JPG",
                "jpg"
            ],
            [
                "PNG",
                "png"
            ],
            [
                "RAR",
                "rar"
            ],
            [
                "TAR",
                "tar"
            ], 
            [
                "7z",
                "7z"
            ],
            [
                "M4A",
                "m4a"
            ],
            [
                "MP4",
                "mp4"
            ],
            [
                "MP3",
                "mp3"
            ],
            [
                "WAV",
                "wav"
            ],
            [
                "WMA",
                "wma"
            ],
            [
                "ICO",
                "ico"
            ],
            [
                "PPTX",
                "pptx"
            ],
            [
                "XLSX",
                "xlsx"
            ]
        ]
    },
    {
        "type": "input_dummy"
    },
    {
        "type": "input_statement",
        "name": "statement"
    }],
    "colour":  (listsGetRandomItem(ahqcolor, false)),
    "previousStatement": null,
    "nextStatement": null,
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(block) {
    const code = `let job = await cloudConvert.jobs.create({
        "tasks": {
            "import-1": {
                "operation": "import/url",
                "url": ${Blockly.JavaScript.valueToCode(block, "link", Blockly.JavaScript.ORDER_ATOMIC)}
            },
            "task-1": {
                "operation": "convert",
                "input": [
                    "import-1"
                ],
                "output_format": "${block.getFieldValue("to")}",
                "filename": "${Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC).replace("'", "").replace("'", "").toLowerCase}"
            },
            "export-1": {
                "operation": "export/url",
                "input": [
                    "task-1"
                ],
                "inline": false,
                "archive_multiple_files": false
            }
        },
        "tag": "jobbuilder"
    });
    
    ${Blockly.JavaScript.statementToCode(block, "statement", Blockly.JavaScript.ORDER_NONE)}`;
    return code;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_AHQ_CONTENT",
        types: [
            "link",
            "to",
            "statement",
            "name"
        ]
    }
]);