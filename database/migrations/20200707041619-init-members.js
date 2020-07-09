'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('members', 
      {
        id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        user_name: {
          type: Sequelize.STRING(30),
          allowNull: false
        },
        password: {
          type: Sequelize.STRING(30),
          allowNull: false
        },
        nick_name: {
          type: Sequelize.STRING(30),
          allowNull: true
        },
        fans_num: {
          type: Sequelize.INTEGER(11).UNSIGNED,
          allowNull: true,
          defaultValue: '0'
        },
        follow_num: {
          type: Sequelize.INTEGER(11).UNSIGNED,
          allowNull: true,
          defaultValue: '0'
        },
        praise_num: {
          type: Sequelize.INTEGER(11).UNSIGNED,
          allowNull: true,
          defaultValue: '0'
        },
        collection_num: {
          type: Sequelize.INTEGER(11).UNSIGNED,
          allowNull: true,
          defaultValue: '0'
        },
        avatar: {
          type: Sequelize.STRING(255),
          allowNull: true
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
        },
      }
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable('members');
  }
};
