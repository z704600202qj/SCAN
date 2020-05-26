/* jshint indent: 2 */
const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../core/db')

class yy_brand_file extends Model {}
yy_brand_file.init( {
  bfid: {
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
  file_path: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  describe: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: ''
  }
}, {
  tableName: 'yy_brand_file',
  sequelize: sequelize,
  timestamps: false,
})
module.exports = yy_brand_file