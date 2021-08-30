const { LOCALE } = require("../util/EvobotUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "spreadlove",
  aliases: ["sl"],
  description: i18n.__("spreadlove.description"),
  execute(message, args) {
    if (!args.length)
      return message
        .reply(i18n.__mf("spreadlove.usageReply", { prefix: message.client.prefix }))
        .catch(console.error);
       return message.reply("sends lot of ❤️❤️❤️❤️❤️ to " + args);
  }
};
