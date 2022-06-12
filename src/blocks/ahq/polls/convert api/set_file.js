import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../../restrictions";


const blockName = "save_api_code";
//block working now working
const blockData = {
    "type": "block_type",
    "message0": "Save Converted File",
    "args0": [],
    "colour": '#0EB22B',
    "tooltip": "Save the converted file onto your bot.",
    "helpUrl": "",
    "previousStatement": null,
    "nextStatement": null,
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function () {
    const code = `job = await cloudConvert.jobs.wait(job.id); // Wait for job completion

const exportTask = job.tasks.filter(
    task => task.operation === 'export/url' && task.status === 'finished'
)[0];
console.log(exportTask)
const file = exportTask.result.files[0];
ahqfs.writeFile(\`\${file.filename}\`, "[]", function (err) {
  if (err) {
    console.log(err)
    return
  }
});
const writeStream = ahqfs.createWriteStream(\`\${file.filename}\`);

https.get(file.url, function (response) {
    response.pipe(writeStream);
});

await new Promise((resolve, reject) => {
    writeStream.on('finish', resolve);
    writeStream.on('error', reject);
});`
    return code;
};

registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "RES_MISSING_AHQ_SUPER_CONTENT",
        types: [
            "convert_api_task"
        ]
    }
]);