module.exports = function (member) {
  member.guild.channels.cache
    .get("731870049173897288")
    .send(`Hey ${member}, welcome to **GGBN's Server**! `);

  member.roles.add(global.gConfig.default_role);
};
