if [ "$(npm list -g | grep yarn)" ]
then
    yarn list | grep discord.js || yarn add discord.js --no-lockfile
    node bot.js
else
    npm list | grep discord.js || npm install discord.js --no-shrinkwrap
    node bot.js
fi
