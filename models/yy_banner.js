/* jshint indent: 2 */
const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../core/db')
class yy_banner extends Model {
  static async getData(size, page = 1, arg) {
    let data = await yy_banner.findAndCountAll({
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
  static async createData(pic_path, is_linker,link) {
    let data = await yy_banner.create({
      pic_path,
      is_linker,
      link
    })
    return data
  }
  static async editData(id, query) {
    let data = await yy_banner.update(query, {
      where: {
        bid: id
      }
    });
    if (data[0] === 0) {
      throw new global.errs.NotFound('修改不成功')
    }
  }
  static async delData(id) {
    let data = await yy_banner.destroy({
      where: {
        bid: id
      }
    });
    if (data[0] === 0) {
      throw new global.errs.NotFound('bid不存在')
    }
  }
}
yy_banner.init({
  bid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  pic_path: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  is_linker: {
    type: DataTypes.ENUM('1', '2'),
    allowNull: false,
    defaultValue: '1'
  },
  link: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: ''
  }
}, {
  tableName: 'yy_banner',
  sequelize: sequelize,
  timestamps: false,
})
module.exports = yy_banner
