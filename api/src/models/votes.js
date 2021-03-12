'use strict';
module.exports = (sequelize, DataTypes) => {
  const votes = sequelize.define('votes', {
    user_id:    DataTypes.INTEGER,
    card_id:    DataTypes.INTEGER,
    history_id: DataTypes.INTEGER,
  }, {});
  votes.associate = function(models) {
    models.votes.belongsTo(models.users,     { as: 'users', foreignKey: 'user_id' })
    models.votes.belongsTo(models.cards,     { as: 'cards', foreignKey: 'card_id' })
    models.votes.belongsTo(models.histories, { as: 'histories', foreignKey: 'history_id' })
  };
  return votes;
};