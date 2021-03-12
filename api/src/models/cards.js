'use strict';
module.exports = (sequelize, DataTypes) => {
  const cards = sequelize.define('cards', {
    value: DataTypes.STRING
  }, {});
  cards.associate = function(models) {
    models.cards.hasMany(models.votes, { as: 'votes', foreignKey: 'card_id' })
  };
  return cards;
};