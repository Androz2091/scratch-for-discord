module.exports = {
    LoadEvents: "const guildEvent = (event) => require(`../events/guild/${event}`);\nconst Discord = require('discord.js');\nfunction loadEvents(s4d) {\n  const cooldowns = new Discord.Collection();\ns4d.client.on('messageCreate', (m) => guildEvent('messageCreate')(m, cooldowns));\n}module.exports = {\n  loadEvents, \n};",
    LoadCommands: `function loadCommands(s4d) {
          const fs = require("fs");
            const array = []       
            const commandFolders = fs.readdirSync("./Commands");    
            for (const folder of commandFolders) {      
              const commandFiles = fs        
              .readdirSync(\`./Commands/$\{folder}\`)        
              .filter((file) => file.endsWith(".js"));     
              for (const file of commandFiles) {        
                const command = require(\`../Commands/$\{folder}/$\{file}\`);        
                if (command.name) {          
                  s4d.client.commands.set(command.name, command);
                    array.push(\`$\{file} did load properly\`)        
                  } else {          
                    array.push(\`$\{file} did not load properly\`)          
                    continue;        
                  }        
                  if (command.aliases && Array.isArray(command))          
                  command.aliases.forEach((alias) =>            
                  s4d.client.aliases.set(alias, command.name)          
                  );      
                }      
                console.log(array.join(\`\n\`));    
              }  
            }    
            module.exports = {    
              loadCommands  
            };`,
    messageCreate: `
    const smessage = require('../../settingMessages.js')
    const escapeRegex = (str) => str.replace(/[.*+?$^{}()|[]\\]/g, "\\$&");
    const { Collection, Discord } = require("discord.js")
    module.exports = async (message, cooldowns) => {
      function msg(x) {
        return x
        .replace('timeleft', timeLeft.toFixed(1))
        .replace('command.nsfw', command.nsfwOnly)
        .replace('command.guild', command.guildOnly)
        .replace('command.botPerms', command.botPerms.join(', '))
        .replace('command.userPerms', command.userPerms.join(', '))
        .replace('command.owner', command.ownerOnly)
        .replace('command.enabled', command.enabled)
        .replace('command.name', command.name)
        .replace('prefix', smessage.DEFAULT_PREFIX)
      }
      let s4d = {}
    
      s4d.client = message.client;
      
      s4d.client.prefix = smessage.DEFAULT_PREFIX;
    
      if (message.author.bot) return;
    
    
      if (!message.guild.me.permissionsIn(message.channel).has("SEND_MESSAGES"))
        return;
    
      const prefixRegex = new RegExp(
       \`^(<@!?$\{s4d.client.user.id}>|$\{escapeRegex(smessage.DEFAULT_PREFIX)})\\s*\`
      );
      if (!prefixRegex.test(message.content)) return;
    
      const [, matchedPrefix] = message.content.match(prefixRegex);
    
      const p = matchedPrefix.length;
      const args = message.content.slice(p).trim().split(/ +/);
      const commandName = args.shift().toLowerCase();
    
      const command =
        s4d.client.commands.get(commandName) ||
        s4d.client.commands.find(
          (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
        );
    
      if (!command) return;
        //command enaled thing
        if(command.enabled === false) {
          return message.reply(msg(smessage.DISABLED_MSG))
        }
        // ownerOnly thing
        if(command.ownerOnly === true) {
          if(message.author.id !== smessage.OWNER_ID) {
            return message.reply(msg(smessage.OWNER_MSG))
          }
        }
        
        // user permissions handler
      if (!message.member.permissions.has(command.userPerms || [])) {
        const perm = command.userPerms.join(', ')
        if(command.userPermError === null || command.userPermError === undefined || command.userPermError === '') {
          return message.reply(msg(smessage.USERPERM_MSG));
        } else {
          return message.reply(command.userPermError)
        }
      }
    
    
    
      // bot permissions handler
      if (!message.guild.me.permissions.has(command.botPerms || [])) {
        const botperm = command.botPerms.join(', ')
      if(command.botPermError === null || command.botPermError === undefined || command.botPermError === '') {
        return message.reply(msg(smessage.BOTPERM_MSG));
     } else {
        return message.reply(command.botPermError)
      }
      }
          //guildOnly thing
      if(command.guildOnly === true) {
        if(message.channel.type === 'DM' || message.channel.type === 'GROUP_DM') {
          return message.reply(msg(smessage.GUILD_MSG))
        }
      }
        //nsfw thingy
        if(command.nsfw) {
          if(message.channel.nsfw === false) {
            return message.reply(msg(smessage.NSFW_MSG))
          }
        }
      //min args and max args thing
      const arguments = message.content.split(/[ ]+/)
    
            arguments.shift()
            if (arguments.length < command.minArgs || command.maxArgs !== null && arguments.length > command.maxArgs) {
              return message.reply(command.expectedArgs)
              
            }
    
    
    
    
      
    
      // cooldowns
      if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Collection());
      }
    
      const now = Date.now();
      const timestamps = cooldowns.get(command.name);
      const cooldownAmount = (command.cooldown || 1) * 1000;
    
      if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    
        if (now < expirationTime) {
          const timeLeft = (expirationTime - now) / 1000;
          return message.reply(msg(smessage.COOLDOWN));
          
        }
      }
    
      timestamps.set(message.author.id, now);
      setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    
      try {
        command.run(s4d, message, args, p, cooldowns, command);
      } catch (error) {
        console.error(error);
        message.channel.send({ content: msg("There was an error executing that command.") }).catch(console.error);
      }
    };`,
    settings: `
    module.exports = {
      OWNER_ID: '000000000000000',
      DEFAULT_PREFIX: '!',
      ERROR_MSG: 'Error has occured!',
      DISABLED_MSG: 'This command has been disabled!',
      OWNER_MSG: 'This command is owner only!',
      USERPERM_MSG: 'U dont have required permissions to run this command!',
      BOTPERM_MSG: 'I dont have required permissions for this command to work!',
      GUILD_MSG: 'This command is Server only!',
      NSFW_MSG: 'Mark the channel as NSFW, for this command to work!',
      COOLDOWN: 'You are on a cooldown, please wait!'
  }
    `
}