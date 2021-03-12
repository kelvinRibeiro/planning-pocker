'use strict'

const bcrypt = require('bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'administrador',
      email: 'admin@pocker.com.br',
      password: bcrypt.hashSync('#adminxyz', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
  
  }
}
