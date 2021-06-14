const sequelize = require('sequelize');

module.exports = {
    up: async (queryInterface, Sequelize) =>
        queryInterface.createTable('users', {
            id: {
                type: sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            password_hash: {
                // criptografia para a senha
                type: Sequelize.STRING,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        }),

    down: async (queryInterface) => queryInterface.dropTable('users'),
};
