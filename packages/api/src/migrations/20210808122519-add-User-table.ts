import Sequelize, { QueryInterface } from 'sequelize';

module.exports = {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        allowNull: false,
        type: 'text',
      },
      passwordHash: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      resetToken: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('Users');
  },
};

