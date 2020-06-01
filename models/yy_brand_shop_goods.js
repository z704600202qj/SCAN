/* jshint indent: 2 */
/* jshint indent: 2 */
const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../core/db')

class yy_brand_shop_goods extends Model {}
yy_brand_shop_goods.init({
  bsgid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  bid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  bsid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  gid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  sid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  is_del: {
    type: DataTypes.ENUM('0','1'),
    allowNull: false,
    defaultValue: '0'
  }
}, {
  tableName: 'yy_brand_shop_goods',
  sequelize: sequelize,
  timestamps: false,
})
module.exports = yy_brand_shop_goods
