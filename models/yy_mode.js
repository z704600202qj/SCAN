/* jshint indent: 2 */
const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../core/db')

class yy_mode extends Model {

}
yy_mode.init( {
  mid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  pay_name: {
    type: DataTypes.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
  channelid: {
    type: DataTypes.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
  channelserct: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: ''
  },
  is_use: {
    type: DataTypes.ENUM('1','2'),
    allowNull: false,
    defaultValue: '1'
  }
}, {
  tableName: 'yy_mode',
  sequelize: sequelize,
  timestamps: false,
})
module.exports = yy_mode