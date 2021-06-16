const sequelize = require('sequelize');

module.exports = {
    up: async (queryInterface, Sequelize) =>
        queryInterface.createTable('tasks', {
            id: {
                type: sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            task: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            check: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            },
            user_id: {
                type: Sequelize.INTEGER,
                refereces: { model: 'users', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
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

    down: async (queryInterface) => queryInterface.dropTable('tasks'),
};
