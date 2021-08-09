import { QueryInterface } from 'sequelize';

module.exports = {
  up(queryInterface: QueryInterface) {
    return queryInterface.sequelize.query(
      'CREATE EXTENSION IF NOT EXISTS citext;',
    );
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.sequelize.query('DROP EXTENSION IF EXISTS citext;');
  }
};

