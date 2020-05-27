/* jshint indent: 2 */
const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../core/db')
class yy_notice extends Model {

  static async getData(size, page = 1, arg) {
    let data = await yy_notice.findAndCountAll({
      where: { ...arg },
      limit: size || 10,//返回个数
      offset: size * (page - 1) || 0,//起始位置,跳过数量
    })
    data.list = data.rows
    delete data.rows
    return {
      ...data,
      currentPage: page,
      pageSize: Math.ceil(data.count / size)
    }
  }
  static async createData(title, content) {
    let data = await yy_notice.create({
      title,
      content
    })
    return data
  }
  static async detailData(nid) {
    let data = await yy_notice.findOne({
      where: {
        nid
      }
    })
    return data
  }

  static async editData(id, query) {
    let data = await yy_notice.update(query, {
      where: {
        nid: id
      }
    });
    if (data[0] === 0) {
      throw new global.errs.NotFound('修改不成功')
    }
  }
  static async delData(id) {
    let data = await yy_notice.destroy({
      where: {
        nid: id
      }
    });
    if (data[0] === 0) {
      throw new global.errs.NotFound('nid不存在')
    }
  }
}
yy_notice.init({
  nid: {
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
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
}, {
  tableName: 'yy_notice',
  sequelize: sequelize,
  timestamps: true,
  createdAt: 'create_time',
  updatedAt: false,
  deletedAt: false
})
module.exports = yy_notice