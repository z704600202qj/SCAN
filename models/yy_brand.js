/* jshint indent: 2 */
const { Model, DataTypes } = require('sequelize')
const {
  sequelize
} = require('../core/db')
class Brand extends Model {
}
Brand.init({
  bid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  brand_name: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: ''
  },
  thumb_path: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  remark: {
    type: DataTypes.STRING(666),
    allowNull: false,
    defaultValue: ''
  },
  is_bold: {
    type: DataTypes.ENUM('0', '1'),
    allowNull: false,
    defaultValue: '0'
  },
  create_time: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  }
}, {
  sequelize: sequelize,
  tableName: 'yy_brand',
  timestamps: true,
  createdAt: 'create_time',
  updatedAt: false,
  deletedAt: false
})
module.exports = {
  Brand
}
