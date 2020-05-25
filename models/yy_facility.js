/* jshint indent: 2 */
const {DataTypes, Model} = require('sequelize')
const {sequelize} = require('../core/db')
class yy_facility extends Model {
  static async getData() {
    let data = await yy_facility.findAll()
    return data
  }
  static async createData(title, remark) {
    let data = await yy_facility.create({
      title,
      remark
    })
    return data
  }
  static async editData(id, query) {
    let data = await yy_facility.update(query, {
      where: {
        fid: id
      }
    });
    if (data[0] === 0) {
      throw new global.errs.NotFound('fid不存在')
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
  }
}, {
  tableName: 'yy_facility',
  sequelize: sequelize,
  timestamps: false,
})
module.exports = yy_facility