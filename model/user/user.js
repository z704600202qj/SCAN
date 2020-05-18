const sequelize = require('sequelize')
const db = require('../../config/db')

const { INTEGER,STRING } = sequelize
// 定义一个 user model
const User = db.define(
  'user',   // 表名
  {
    id: {
      type: INTEGER,
      autoIncrement: true,    //是否自增 ；true or false
      primaryKey: true       //指定是否为主键 ；true or false
    },
    user_name: {
      type: STRING(128),
    },
    password: {
      type: STRING(128),
    }
  },
  {
    freezeTableName: true     // 设置为true时，sequelize不会改变表名，否则可能会按其规则有所调整
  }
)

module.exports = User