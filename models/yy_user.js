/* jshint indent: 2 */
const {
  Sequelize,
  Model
} = require('sequelize')

const {
  sequelize
} = require('../core/db')

class User extends Model {
  static async createAccount(nickname, mobile, password) {
    let d = await User.create({
      nickname,
      mobile,
      password
    })
    return d

  }
  // 邮箱密码登录
  static async verifyPasswords(mobile, password) {
    let user = await User.findOne({
      where: {
        mobile
      }
    })
    if (!user) {
      return new global.errs.NotFound('账号不存在')
    }
    if (user.password !== password) {
      return global.errs.ParameterException('密码不正确')
    }
    return user
  }
  static async getinfoById(id) {
    const user = await User.findOne({
      where: {
        id
      }
    })
    return user
  }
}

User.init({
  userid: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  nickname: {
    type: Sequelize.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
  mobile: {
    type: Sequelize.CHAR(11),
    allowNull: false,
    unique: true,
    defaultValue: ''
  },
  password: {
    type: Sequelize.CHAR(32),
    allowNull: false,
    defaultValue: ''
  },
  is_freeze: {
    type: Sequelize.ENUM('1', '2'),
    allowNull: false,
    defaultValue: '1'
  },

}, {
  sequelize: sequelize,
  tableName: 'yy_user',
  timestamps: true,
  createdAt: 'create_time',
  updatedAt: false,
  deletedAt: false
})

module.exports = {
  User
}