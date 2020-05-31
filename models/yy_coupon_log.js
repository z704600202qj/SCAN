/* jshint indent: 2 */
const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../core/db')
class yy_coupon_log extends Model {

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
