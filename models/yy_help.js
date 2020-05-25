/* jshint indent: 2 */
const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../core/db')

class yy_help extends Model {
  static async getData() {
    let data = await yy_help.findAll()
    return data
  }
  static async editData(hid,arg){
    let data = await yy_help.update(arg, {
      where: {
        hid: hid
      }
    });
    if (data[0] === 0) {
      throw new global.errs.NotFound('hid不存在')
    }
  }
  static async createData(title,arg){
    let data = await yy_help.create({
      title,
      ...arg
    })
    return data
  }
  static async delData(id) {
    let data = await yy_help.destroy({
      where: {
        hid: id
      }
    });
    if (data[0] === 0) {
      throw new global.errs.NotFound('hid不存在')
    }
  }
}
yy_help.init( {
  hid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: ''
  },
  result: {
    type: DataTypes.STRING(666),
    allowNull: false,
    defaultValue: ''
  },
  is_show: {
    type: DataTypes.ENUM('1','2'),
    allowNull: false,
    defaultValue: '1'
  }
}, {
  tableName: 'yy_help',
  sequelize: sequelize,
  timestamps: false,
})
module.exports = yy_help
