/* jshint indent: 2 */
/* jshint indent: 2 */
const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../core/db')

class yy_brand_shop_mode extends Model { }
yy_brand_shop_mode.init({
  bsmid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  bsid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  mids: {
    type: DataTypes.INTEGER(32),
    allowNull: false,
    defaultValue: '0'
  },
  receipt: {
    type: DataTypes.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
  account: {
    type: DataTypes.STRING(32),
    allowNull: false,
    defaultValue: ''
  }
}, {
  tableName: 'yy_brand_shop_mode',
  sequelize: sequelize,
  timestamps: false,
})
module.exports = yy_brand_shop_mode