/* jshint indent: 2 */
const {DataTypes, Model} = require('sequelize')
const {sequelize} = require('../core/db')
class yy_server_type extends Model{
  static async getData() {
    let data = await yy_server_type.findAll()
    return data
  }
  static async createData(type, arg) {
    let data = await yy_server_type.create({
      type,
      ...arg
    })
    return data
  }
  static async editData(id, query) {
    let data = await yy_server_type.update(query, {
      where: {
        stid: id
      }
    });
    if (data[0] === 0) {
      throw new global.errs.NotFound('修改不成功')
    }
  }
  static async delData(id) {
    let data = await yy_server_type.destroy({
      where: {
        stid: id
      }
    });
    if (data[0] === 0) {
      throw new global.errs.NotFound('删除失败')
    }
  }
}
yy_server_type.init({
  stid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  type_name: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: ''
  },
  type: {
    type: DataTypes.ENUM('1','2','3'),
    allowNull: false,
    defaultValue: '1'
  },
  remark: {
    type: DataTypes.STRING(666),
    allowNull: false,
    defaultValue: ''
  }
}, {
  tableName: 'yy_server_type',
  sequelize: sequelize,
  timestamps: false,
})
module.exports = yy_server_type