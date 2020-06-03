/* jshint indent: 2 */
/* jshint indent: 2 */
const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../core/db')

class yy_order_bill extends Model {}
yy_order_bill.init( {
  obid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  oid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  userid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  bill_type: {
    type: DataTypes.ENUM('1','2'),
    allowNull: false,
    defaultValue: '1'
  },
  taxation: {
    type: DataTypes.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
  bill_mode: {
    type: DataTypes.ENUM('1','2'),
    allowNull: false,
    defaultValue: '1'
  },
  serial_num: {
    type: DataTypes.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
  realname: {
    type: DataTypes.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
  city: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: ''
  },
  county: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: ''
  },
  town: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: ''
  },
  address: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  email: {
    type: DataTypes.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
  mobile: {
    type: DataTypes.STRING(18),
    allowNull: false,
    defaultValue: ''
  },
  bar_type: {
    type: DataTypes.ENUM('1','2','3'),
    allowNull: false,
    defaultValue: '1'
  },
  bar_code: {
    type: DataTypes.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
  create_time: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
}, {
  tableName: 'yy_order_bill',
  sequelize: sequelize,
  timestamps: true,
  createdAt: 'create_time',
  updatedAt: false,
  deletedAt: false
})
module.exports = yy_order_bill