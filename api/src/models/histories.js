'use strict';
module.exports = (sequelize, DataTypes) => {
  const histories = sequelize.define('histories', {
    description: DataTypes.TEXT
  }, {});
  histories.associate = function(models) {
    models.histories.hasMany(models.votes, { as: 'votes', foreignKey: 'history_id' })
  };
  return histories;
};