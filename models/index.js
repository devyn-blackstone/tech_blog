const User = require("./User");
const Post = require("./Post");

User.hasMany(Post, {});

Post.belongsTo(User, {
  foreignKey: "UserId",
});

module.exports = { User, Post };
