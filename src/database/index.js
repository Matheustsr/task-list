import Sequelize from 'sequelize';
import databaseconfig from '../config/database';

import User from '../app/models/User';

const models = [User];

class Database {
    constructor() {
        this.init();
    }

    init() {
        // conexão do banco com os models
        this.connection = new Sequelize(databaseconfig);

        models.map((model) => model.init(this.connection));
    }
}

export default new Database();
