const guilmodal = require('../../me-mongomodals/CopyPasters/Guild')
const discord = require("discord.js");
const me = require('../../mecodes-congig.json');
const devs = me.divs
module.exports = {
  name: "removeserver",
  category: "copypaster",
  description: "لازالة سيرفر من القائمة",
  run: async (client, kmsg, args, PREFIX) => {
    if(!args[0]) return kmsg.reply(`**Please Insert ServerID**`);
    let data = await guilmodal.findOneAndDelete({guildID: args[0]})
    if(!data) return kmsg.reply(`**This is not CopyPaster Server**`);
    kmsg.channel.send(`**Deleted Server From OurDatabase **`)
   
} 
}