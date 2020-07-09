'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('fans', 
      {
        id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          primaryKey: true
        },
        member_id: {
          type: Sequelize.INTEGER(11),
          allowNull: false
        },
        cmember_id: {
          type: Sequelize.INTEGER(11),
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
      }
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable('fans');
  }
};
