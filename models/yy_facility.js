/* jshint indent: 2 */
const {DataTypes, Model} = require('sequelize')
const {sequelize} = require('../core/db')
const random = require('string-random');

class yy_facility extends Model {
  static async getData() {
    let data = await yy_facility.findAll()
    return data
  }
  static async createData(title, remark) {
    let key_str=random(16, {letters: 'ABCDEFG'})
    let secret_key=random(16, {letters: 'HIGKLMN'})
    let data = await yy_facility.create({
      title,
      remark,
      key_str,
      secret_key
    })
    return data
  }
  static async delData(fid){
    let data = await yy_facility.destroy({
      where: {
        fid
      }
    });
    if (data[0] === 0) {
      throw new global.errs.NotFound('删除不成功')
    }
  }
  static async editData(id, query) {
    let data = await yy_facility.update(query, {
      where: {
        fid: id
      }
    });
    if (data[0] === 0) {
      throw new global.errs.NotFound('编辑不成功')
    }
  }
}
yy_facility.init({
  fid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
  remark: {
    type: DataTypes.STRING(666),
    allowNull: false,
    defaultValue: ''
  },
  key_str: {
    type: DataTypes.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
  secret_key: {
    type: DataTypes.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
}, {
  tableName: 'yy_facility',
  sequelize: sequelize,
  timestamps: false,
})
module.exports = yy_facility