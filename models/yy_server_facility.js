/* jshint indent: 2 */
/* jshint indent: 2 */
const { Model, DataTypes } = require('sequelize')
const { User } = require('./yy_user')
const Brand = require('./yy_brand')

const { sequelize} = require('../core/db')

class yy_server_facility extends Model {

}
yy_server_facility.init({
  sfid: {
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
  fid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  }
},{
  tableName: 'yy_server_facility',
  sequelize: sequelize,
  timestamps: false,
})
module.exports = yy_server_facility