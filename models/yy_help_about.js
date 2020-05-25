/* jshint indent: 2 */
const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../core/db')
class yy_help_about extends Model {
  static async getData() {
    let data = await yy_help_about.findAll()
    return data
  }
  static async editData(haid,content){
    let data = await yy_help_about.update(content, {
      where: {
        haid: haid
      }
    });
    if (data[0] === 0) {
      throw new global.errs.NotFound('haid不存在')
    }
  }
  static async createData(content){
    let data = await yy_help_about.create({
      ...content
    })
    return data
  }
}
yy_help_about.init({
  haid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.STRING(666),
    allowNull: false,
    defaultValue: ''
  }
}, {
  tableName: 'yy_help_about',
  sequelize: sequelize,
  timestamps: false,
})
module.exports = yy_help_about