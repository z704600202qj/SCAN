/* jshint indent: 2 */
const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../core/db')
const yy_server_type = require('./yy_server_type')
const yy_server = require('./yy_server')
const yy_facility = require('./yy_facility')
const yy_goods_facility = require('./yy_goods_facility')
const yy_brand_shop_goods = require('./yy_brand_shop_goods')


class yy_goods extends Model {
  static async getData(size, page = 1, arg) {
    let data = await yy_goods.findAndCountAll({
      where: { ...arg },
      include: [{
        model: yy_server_type,
        as: 'server_type',
      },
      {
        model: yy_server,
        as: 'server',
      },
      {
        model: yy_facility,
        as: 'goods_facility',
      }],
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
  static async createData(stid, arg) {
    let res = await yy_goods.create({
      stid,
      ...arg
    })
    
    return res
  }
}
yy_goods.init({
  gid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  stid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  sid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
}, {
  tableName: 'yy_goods',
  sequelize: sequelize,
  timestamps: true,
  createdAt: 'create_time',
  updatedAt: false,
  deletedAt: false
})

yy_goods.belongsTo(yy_server_type, { foreignKey: 'stid', targetKey: 'stid', as: 'server_type' });
yy_goods.belongsTo(yy_server, { foreignKey: 'sid', targetKey: 'sid', as: 'server' });
yy_goods.belongsToMany(yy_facility, { through: yy_goods_facility, as: 'goods_facility', foreignKey: 'gid', otherKey: 'fid' });

module.exports = yy_goods
