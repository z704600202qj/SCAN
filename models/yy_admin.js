const { Sequelize, Model, DataTypes } = require('sequelize')
const { sequelize } = require('../core/db')
const { generateToken } = require('../core/util');

class Admin extends Model {
  static async createAccount(username, password) {
    let user = await Admin.findOne({
      where: {
        username
      }
    })
    if (user) {
      throw new global.errs.NotFound('账号已存在')
    }
    let d = await Admin.create({ username, password })
    return d
  }
  static async editAccount(aid, password, newpassword) {
    let user = await Admin.findOne({
      where: {
        aid
      }
    })
    if (user.password !== password) {
      throw new global.errs.NotFound('旧密码不正确')
    }
    let d = await Admin.update({ password: newpassword }, {
      where: {
        aid
      }
    })
    return 
  }
  static async getData() {
    let data = await Admin.findAll()
    return data
  }
  // 邮箱密码登录
  static async verifyPasswords(username, password) {
    let user = await Admin.findOne({
      where: {
        username
      }
    })
    if (!user) {
      throw new global.errs.NotFound('账号不存在')
    }
    if (user.password !== password) {
      throw new global.errs.ParameterException('密码不正确')
    }
    const token = await generateToken(user.username, user.aid);
    return { token, username: user.username }
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
  salt: {
    type: DataTypes.STRING(12),
    allowNull: false,
    defaultValue: ''
  },
  state: {
    type: DataTypes.INTEGER(3).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
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
