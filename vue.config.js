module.exports = {
    devServer: {
        port: 3000,
        proxy: {
            '^/api': {
                target: 'https://discord.com',
                ws: true,
                changeOrigin: true,
                headers: {
                    'User-Agent': 'DiscordBot (https://github.com/discordjs/discord.js, 12) Node.js/v12.16.1',
                }
            }
        }
    }
}
