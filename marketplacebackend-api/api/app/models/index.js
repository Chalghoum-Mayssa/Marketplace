'use strict';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const databases = Object.keys(config.databases);
const timezone = 'Africa/Tunis';
process.env.TZ = timezone;
let sequelize = {};
let sequalize_extra_config = config;

for (let i = 0; i < databases.length; ++i) {
    let database = databases[i];
    let dbPath = config.databases[database];
    sequelize[database] = new Sequelize(dbPath.database, dbPath.username, dbPath.password, dbPath);
}
sequalize_extra_config.pool = {
    max: 30,
    min: 0,
    idle: 10000,
    acquire: 10000,
    handleDisconnects: true,
    evict: 60000,
    connectRetries: 30,
    operatorsAliases: false,
    logging: config.logging,
    freezeTableName: true
};

sequalize_extra_config.timezone = timezone;
sequalize_extra_config.dialectOptions = {
    useUTC: false,
    timezone: timezone
};

fs.readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = sequelize['marketPlace-dev-db']['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
