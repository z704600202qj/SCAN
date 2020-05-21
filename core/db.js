const {Sequelize, Model} = require('sequelize')
const {unset, clone, isArray} = require('lodash')
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
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    timezone,
    // scopes:{
    //     bh:{
    //         attributes:{
    //             exclude:['updated_at','deleted_at','created_at']
    //         }
    //     }
    // }
})
sequelize.sync({
    force: false
})
Model.prototype.toJSON = function () {
    let data = clone(this.dataValues)
    unset(data, 'updatedAt')
    unset(data, 'createdAt')
    unset(data, 'deletedAt')
    if (isArray(this.exclude)) {
        this.exclude.forEach(value => {
            unset(data, value)
        });
    }
    return data
}
module.exports = {
    sequelize
}
