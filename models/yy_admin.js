const { Sequelize, Model, DataTypes } = require('sequelize')
const { sequelize } = require('../core/db')
const { generateToken } = require('../core/util');

class Admin extends Model {
  static async createAccount(username, password) {
    let d = await Admin.create({ username, password })
    return d
  }
  // 邮箱密码登录
  static async verifyPasswords(username, password) {
    let user = await Admin.findOne({
      where: {
        username
      }
    })
    if (!user) {
      return new global.errs.NotFound('账号不存在')
    }
    if (user.password !== password) {
      return global.errs.ParameterException('密码不正确')
    }
    const token = await generateToken(user.username, user.password);
    return {token}
  }

}
Admin.init({
  aid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
  password: {
    type: DataTypes.CHAR(32),
    allowNull: false,
    defaultValue: ''
  }
}, {
  sequelize: sequelize,
  tableName: 'yy_admin',
  timestamps: false,
})

module.exports = Admin
