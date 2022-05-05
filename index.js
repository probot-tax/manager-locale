const languages = {};

languages.en = require('./en/bot.json');
languages.ar = require('./ar-SA/bot.json');

module.exports.ex = require('./examples.json');
module.exports = languages;