function handlerMenuCheckBlocks() {
    //const localforage = require('localforage')
    const handler = localStorage.getItem('handler') 
    console.log(handler)
        const result = {
            true: `<category name="Handler" colour="#65700c">
            <category name="Variables" colour="#65700c">
            <label text="Sorry variable creation is not available yet, its quite complicated process." web-class="boldtext"></label>
            </category>
            <block type="h_createFile"></block>
            <block type="h_settings"></block>
            <block type="h_args"></block>
            <block type="h_command"></block>
            <block type="h_permission"></block>
            </category>`,
            false: `
            <category name="Handler" colour="#65700c">
            <label text="Handler is disabled, to enable it click 'Handler' then click 'Enable' to enable command handler " web-class="boldtext"></label>
            </category>
            `
        }
        if(!handler) {
            localStorage.setItem('handler', true)    
            return result[true] 
        }
        return result[handler]

    

}
function functionsAndStuff() {
    const handler = localStorage.getItem('handler')
    const result = {
        true: `
        const { loadEvents } = require('./handler/LoadEvents')
        const { loadCommands } = require('./handler/LoadCommands')
        s4d.client.commands = new Collection();
        s4d.client.slash = new Collection();
        s4d.client.aliases = new Collection();
        s4d.client.categories = fs.readdirSync("./Commands/");
        s4d.client.setMaxListeners(0);
        loadEvents(s4d)
        loadCommands(s4d)
        `
    }
    return result[handler] || ''
}


module.exports = {
    handlerMenuCheckBlocks,
    functionsAndStuff
}