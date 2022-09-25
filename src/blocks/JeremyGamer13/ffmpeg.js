import Blockly from "blockly/core";
Blockly.Blocks["jg_files_ffmpeg_video_get_video_with_file_name_then"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "get video with file name %1 then %2 %3",
                "colour": "#fa7000",
                "tooltip": "Get a video file with the file name, then run the blocks inside.",
                "previousStatement": null,
                "nextStatement": null,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "FILE",
                        "check": "String"
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_statement",
                        "name": "STATEMENTS"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_files_ffmpeg_video_get_video_with_file_name_then"] = function (block) {
    const file = Blockly.JavaScript.valueToCode(block, "FILE", Blockly.JavaScript.ORDER_ATOMIC);
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `let S4D_GEN_FFMPEG_VIDEO_1092 = new S4D_APP_FFMPEG(String(${file}));
S4D_GEN_FFMPEG_VIDEO_1092.then(function (ffmpeg_video) {
	${statements}
}
`;
    return code;
};