import Sequelize, { QueryInterface } from 'sequelize';
const { User } = require('../models');
const { toString } = require('lodash');

module.exports = {
  up(queryInterface: QueryInterface) {
    return User.create({
      email: toString('admin@gmail.com'),
      password: toString('Test@123'),
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('Users', {
      email: toString('admin@gmail.com'),
    });
  },
};
