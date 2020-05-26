/* jshint indent: 2 */
const {DataTypes, Model} = require('sequelize')
const {sequelize} = require('../core/db')
class yy_server_param extends Model{

}
yy_server_param.init( {
  spid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  sid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  param_name: {
    type: DataTypes.STRING(32),
    allowNull: false,
    defaultValue: 'A4'
  },
  tabula: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  colours: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  }
}, {
  tableName: 'yy_server_param',
  sequelize: sequelize,
  timestamps: false,
})
module.exports = yy_server_param