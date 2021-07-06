import Sequelize from 'sequelize';
import databaseconfig from '../config/database';

import User from '../app/models/User';
import Task from '../app/models/task';
import Task from '../app/models/task';

const models = [User, Task];

class Database {
    constructor() {
        this.init();
    }

    init() {
        // conexão do banco com os models
        this.connection = new Sequelize(databaseconfig);

        models
            .map((model) => model.init(this.connection))
            .map(
                (model) =>
                    model.associate && model.associate(this.connection.models)
            );
    }
}

export default new Database();
