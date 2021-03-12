'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    models.users.hasMany(models.votes, { as: 'votes', foreignKey: 'user_id' })
  };
  return users;
};