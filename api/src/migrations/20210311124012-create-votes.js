'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('votes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      },
      card_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cards',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      },
      history_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'histories',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    .then(() => queryInterface.addIndex('votes',  ['user_id']))
    .then(() => queryInterface.addIndex('votes',  ['card_id']))
    .then(() => queryInterface.addIndex('votes',  ['history_id']))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('votes');
  }
};