const {Sequelize, Model} = require('sequelize')
const {
    dbName,
    host,
    port,
    user,
    password, logging, timezone
} = require('../config').database
const sequelize = new Sequelize(dbName, user, password, {
    dialect: "mysql",
    host,
    port,
    logging,
    timestamps:false,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    timezone,
})
sequelize.sync({
    force: false
})
module.exports = {
    sequelize
}
