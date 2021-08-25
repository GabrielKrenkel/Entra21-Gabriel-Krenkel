'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('refreshtokens', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      token: {
        type: Sequelize.STRING,
        allowNull: false
      },
      expireses_in: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      user_email: {
        type: Sequelize.STRING,
        allowNull: false,
          references: {
            model: "users",
            key: "email"
          },
          onDelete: "CASCADE",
          onUpdate: "CASCADE"
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('refreshtokens');
  }
};