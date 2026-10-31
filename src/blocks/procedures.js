import { javascriptGenerator, Order } from "blockly/javascript";

// Discord blocks generate await calls, so user functions have to be async
for (const type of ["procedures_defreturn", "procedures_defnoreturn"]) {
    const generate = javascriptGenerator.forBlock[type];
    javascriptGenerator.forBlock[type] = function(block, generator) {
        const result = generate.call(this, block, generator);
        const name = generator.getProcedureName(block.getFieldValue("NAME"));
        const key = `%${name}`;
        generator.definitions_[key] = generator.definitions_[key].replace(`function ${name}(`, `async function ${name}(`);
        return result;
    };
}

const callReturn = javascriptGenerator.forBlock.procedures_callreturn;
javascriptGenerator.forBlock.procedures_callreturn = function(block, generator) {
    const [code] = callReturn.call(this, block, generator);
    return [`(await ${code})`, Order.ATOMIC];
};

const callNoReturn = javascriptGenerator.forBlock.procedures_callnoreturn;
javascriptGenerator.forBlock.procedures_callnoreturn = function(block, generator) {
    return `await ${callNoReturn.call(this, block, generator)}`;
};
