/* jshint indent: 2 */
const { DataTypes, Model } = require('sequelize')

const { sequelize } = require('../core/db')
const { generateToken } = require('../core/util');

class User extends Model {
  static async getData(size, page = 1, arg) {
    let data = await User.findAndCountAll({
      where: { ...arg },
      limit: size || 10,//返回个数
      offset: size * (page - 1) || 0,//起始位置,跳过数量
    })
    data.list = data.rows
    delete data.rows
    return {
      ...data,
      currentPage: page,
      pageSize: Math.ceil(data.count / size)
    }
  }
  static async _findOne(mobile) {
    let data = await User.findOne({
      where: {
        mobile
      }
    })
    return data
  }
  static async createAccount(nickname, mobile, password) {
    let user = await this._findOne(mobile)
    if (user) {
      throw new global.errs.NotFound('账号已存在')
    }
    let d = await User.create({
      nickname,
      mobile,
      password
    })
    return d
  }
  // 邮箱密码登录
  static async verifyPasswords(mobile, password) {
    // await 
    let user = await this._findOne(mobile)
    if (!user) {
      throw new global.errs.NotFound('账号不存在')
    }
    if (user.password !== password) {
      throw global.errs.ParameterException('密码不正确')
    }
    const token = await generateToken(user.mobile, user.userid);
    return {
      token: token,
      mobile: user.mobile
    }
  }
  static async getinfoById(id) {
    const user = await User.findOne({
      where: {
        userid:id
      }
    })
    return user
  }
}

User.init({
  userid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  nickname: {
    type: DataTypes.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
  mobile: {
    type: DataTypes.CHAR(11),
    allowNull: false,
    defaultValue: ''
  },
  email: {
    type: DataTypes.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
  remark: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  password: {
    type: DataTypes.CHAR(32),
    allowNull: false,
    defaultValue: ''
  },
  state: {
    type: DataTypes.ENUM('1', '2'),
    allowNull: false,
    defaultValue: '1'
  },
  address: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
}, {
  tableName: 'yy_user',
  sequelize: sequelize,
  timestamps: true,
  createdAt: 'create_time',
  updatedAt: 'update_time',
  deletedAt: false
})

module.exports = {
  User
}