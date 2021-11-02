import Blockly from "blockly/core";

export default (data) => {
    if (!data || typeof data !== "object" || !Array.isArray(data)) return;

    try {
        for (const block of data) {
            if (!block.name || !block.data) continue;

            try {
                const blockName = block.name;
                const blockData = block.data;

                Blockly.Blocks[blockName] = {
                    init: function () {
                        this.jsonInit(blockData);
                    }
                };

                const JS = eval(`function(block){${String(block.JavaScript) || 'return "";'}}`);

                Blockly.JavaScript[blockName] = JS;
            } catch {
                continue;
            }
        }
        // eslint-disable-next-line no-empty
    } catch {}
};
