/* jshint indent: 2 */
const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../core/db')
class yy_coupon_log extends Model {
  static async getData(size, page = 1, cid) {
    let data = await yy_coupon_log.findAndCountAll({
      where: {cid },
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
}
yy_coupon_log.init({
  clid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  cid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  content: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  create_time: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  }
}, {
  tableName: 'yy_coupon_log',
  sequelize: sequelize,
  timestamps: true,
  createdAt: 'create_time',
  updatedAt: false,
  deletedAt: false
})
module.exports = yy_coupon_log
