const Blockly = require("blockly")
const registered = {}
function handle(block) {
    const returning = { value: '' }
    eval(registered[block.type].code)
    return returning.value
}
module.exports.bypassStrictModeRegister = (name, code) => {
    registered[name] = { code: code }
    Blockly.JavaScript[name] = handle
}