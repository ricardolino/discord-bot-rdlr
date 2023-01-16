const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('rdlr')
	.setDescription('Create a riddle')
	.addStringOption(option =>
		option.setName('riddle')
			.setDescription('riddle')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('answer')
            .setDescription('answer')
            .setRequired(true)),
    async execute(interaction) {
        const input = interaction.options.getString('riddle');
        await interaction.reply(input);
    },
};
